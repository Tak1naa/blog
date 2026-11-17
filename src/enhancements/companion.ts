import { copy, type CompanionLabel } from "./companion-copy";
import { loadCompanionState, saveCompanionState } from "./companion-data";
import { releaseVelocity, stepFlight, squishAt, type Flight, type Point, type TrailPoint } from "./companion-motion";
import { CompanionTools } from "./companion-tools";
import { CompanionVideo, type VideoClips } from "./companion-video";
import { DollJoints, type DollPose } from "./live2d-doll";
import { onLocaleChange } from "./i18n";
import { clearCompanionPosition, COMPANION_POSITION_KEY } from "./storage";

export const COMPANION_ACTIONS = ["stretch", "think", "look", "wink", "doze", "happy", "wave", "surprised", "pout", "speaking"] as const;
type Action = typeof COMPANION_ACTIONS[number];
interface Hooks {
  isPerched(): boolean;
  perch(value: boolean): void;
  dock(): DOMRect | null;
  expression(name: string): void;
  pose(params: Record<string, number>, joints: DollPose, mouth: number, light: number): void;
}
interface Drag { id: number; start: Point; origin: Point; moved: boolean; sling: boolean; trail: TrailPoint[] }
const bounded = (value: number, max: number) => Math.max(0, Math.min(Math.max(0, max), value));

/** All gestures and transforms have one owner. SDK canvas remains the focus and
 * pointer target even during a video; no duplicate WebGL model is created. */
export class CompanionInteractions {
  private readonly state = loadCompanionState();
  private readonly abort = new AbortController();
  private readonly video: CompanionVideo;
  private readonly tools: CompanionTools;
  private readonly bubble = document.createElement("output");
  private readonly joints = new DollJoints();
  private readonly unsubscribe: () => void;
  private menu?: HTMLElement;
  private drag?: Drag;
  private flight?: Flight;
  private frame = 0;
  private lastFrame = 0;
  private idleTimer?: number;
  private bubbleTimer?: number;
  private action?: Action;
  private actionStarted = 0;
  private actionUntil = 0;
  private lastAction?: Action;
  private generation = 0;
  private sleeping = false;
  private ready = false;
  private destroyed = false;
  private suppressClick = false;
  private squishStart = -10000;
  private squishDepth = 0.16;
  private angle = 0;
  private angularVelocity = 0;
  private targetAngle = 0;
  private impulse = 0;
  private head = { x: 0, y: 0, z: 0 };
  private gaze = { x: 0, y: 0 };
  private mouth = 0;
  private previousDown = -1000;

  constructor(private readonly root: HTMLElement, private readonly canvas: HTMLCanvasElement, private readonly hooks: Hooks, clips: VideoClips = {}) {
    this.video = new CompanionVideo(root, clips, () => this.finishAction());
    this.bubble.className = "ff-companion-bubble"; this.bubble.hidden = true;
    this.bubble.setAttribute("aria-live", "polite"); root.append(this.bubble);
    this.tools = new CompanionTools(this.state, {
      quiet: () => this.sleeping || !!this.drag || !!this.action || !!this.flight,
      say: text => this.say(text), completed: () => { this.say(copy("taskDone")); void this.playAction("happy"); },
      closed: () => this.scheduleIdle(), focusTarget: canvas,
    });
    canvas.style.touchAction = "none"; canvas.tabIndex = 0; this.translate();
    this.unsubscribe = onLocaleChange(() => { this.translate(); this.closeMenu(false); });
    let positioned = false;
    if (!this.state.autoReturn) {
      try {
        const position = JSON.parse(localStorage.getItem(COMPANION_POSITION_KEY) ?? "null");
        if (position && Number.isFinite(position.x) && Number.isFinite(position.y)) { this.position(position.x, position.y); positioned = true; }
      } catch { /* Storage is optional. */ }
    }
    hooks.perch(!positioned);
    const signal = this.abort.signal;
    canvas.addEventListener("pointerdown", this.onDown, { signal });
    canvas.addEventListener("pointermove", this.onMove, { signal });
    canvas.addEventListener("pointerup", this.onUp, { signal });
    canvas.addEventListener("pointercancel", this.onCancel, { signal });
    canvas.addEventListener("lostpointercapture", this.onCancel, { signal });
    canvas.addEventListener("click", event => {
      event.preventDefault(); event.stopImmediatePropagation();
      if (this.suppressClick) { this.suppressClick = false; return; }
      if (this.sleeping) { this.setSleeping(false); return; }
      this.cancelAction(); this.bounce(); void this.playAction("happy");
    }, { capture: true, signal });
    canvas.addEventListener("contextmenu", event => { event.preventDefault(); this.openMenu(event.clientX, event.clientY); }, { capture: true, signal });
    canvas.addEventListener("keydown", event => {
      if (event.key === "ContextMenu" || (event.shiftKey && event.key === "F10")) {
        event.preventDefault(); const box = root.getBoundingClientRect(); this.openMenu(box.right, box.top + 30);
      } else if (event.key === "Enter" || event.key === " ") { event.preventDefault(); canvas.click(); }
      else if (event.key === "Escape") { this.cancelAction(); this.closeMenu(); }
    }, { signal });
    document.addEventListener("pointermove", this.onGaze, { passive: true, signal });
    document.addEventListener("visibilitychange", this.onVisibility, { signal });
    document.addEventListener("pointerdown", event => { if (this.menu && !this.menu.contains(event.target as Node)) this.closeMenu(false); }, { capture: true, signal });
    window.addEventListener("resize", () => { this.closeMenu(false); if (!this.hooks.isPerched()) this.position(root.offsetLeft, root.offsetTop); }, { signal });
  }

  start(): void { this.ready = true; this.say(copy("greeting")); this.scheduleIdle(); this.wake(); }
  private translate(): void { this.canvas.title = copy("dragHint"); this.canvas.setAttribute("aria-label", copy("dragHint")); }
  private get busy(): boolean { return !!this.drag || !!this.flight || !!this.action || !!this.menu || this.tools.isOpen; }
  private position(x: number, y: number): void {
    this.root.style.left = `${bounded(x, window.innerWidth - this.root.offsetWidth).toFixed(2)}px`;
    this.root.style.top = `${bounded(y, window.innerHeight - this.root.offsetHeight).toFixed(2)}px`;
    this.root.style.right = this.root.style.bottom = "auto";
    this.root.dataset.tipSide = this.root.offsetLeft + this.root.offsetWidth / 2 > window.innerWidth / 2 ? "start" : "end";
  }
  private savePosition(): void {
    if (this.state.autoReturn) { clearCompanionPosition(); return; }
    try { localStorage.setItem(COMPANION_POSITION_KEY, JSON.stringify({ x: this.root.offsetLeft, y: this.root.offsetTop })); } catch { /* Keep session position. */ }
  }
  private saveState(): void { if (!saveCompanionState(this.state)) this.say(copy("storageError")); }
  private scheduleIdle(): void {
    if (this.idleTimer !== undefined) window.clearTimeout(this.idleTimer); this.idleTimer = undefined;
    if (!this.ready || this.destroyed || document.hidden || this.sleeping || (!this.state.random && !this.state.roam)) return;
    this.idleTimer = window.setTimeout(() => {
      this.idleTimer = undefined;
      if (this.busy) { this.scheduleIdle(); return; }
      if (this.state.roam && Math.random() < 0.25) {
        this.hooks.perch(false); const direction = this.root.offsetLeft > window.innerWidth / 2 ? -1 : 1;
        this.flight = { x: this.root.offsetLeft, y: this.root.offsetTop, vx: direction * 120, vy: -20 }; this.wake();
      } else if (this.state.random) {
        const options: Action[] = ["stretch", "think", "look", "wink", "doze", "happy"].filter(value => value !== this.lastAction) as Action[];
        void this.playAction(options[Math.floor(Math.random() * options.length)]!);
      } else this.scheduleIdle();
    }, 16_000 + Math.random() * 10_000);
  }
  say(message: string): void {
    if (this.destroyed || this.sleeping || document.hidden) return;
    if (this.bubbleTimer !== undefined) window.clearTimeout(this.bubbleTimer);
    this.bubble.textContent = message; this.bubble.hidden = false;
    this.bubbleTimer = window.setTimeout(() => { this.bubble.hidden = true; }, 5000);
  }
  private cancelAction(): void {
    this.generation++; this.action = undefined; this.actionUntil = 0; this.video.cancel();
    this.root.dataset.action = this.sleeping ? "sleep" : "idle";
    this.hooks.expression(this.sleeping ? "sleepy" : "neutral");
  }
  private finishAction(): void { this.cancelAction(); this.wake(); this.tools.remind(); this.scheduleIdle(); }
  async playAction(action: Action): Promise<void> {
    if (!this.ready || this.destroyed || document.hidden || this.drag || this.flight) return;
    if (this.sleeping) this.setSleeping(false);
    this.cancelAction(); const generation = this.generation;
    this.action = this.lastAction = action; this.actionStarted = performance.now(); this.actionUntil = this.actionStarted + 4500;
    this.root.dataset.action = action;
    const expressions: Record<Action, string> = { stretch: "smile", think: "curious", look: "curious", wink: "wink", doze: "sleepy", happy: "laugh", wave: "smile", surprised: "surprised", pout: "pout", speaking: "speaking" };
    this.hooks.expression(expressions[action]);
    if (["stretch", "think", "look"].includes(action)) {
      this.actionUntil = this.actionStarted + 16_000;
      const started = await this.video.play(action as "stretch" | "think" | "look");
      if (generation !== this.generation || this.destroyed) return;
      if (!started) { this.actionUntil = performance.now() + 3500; this.say(copy("fallback")); }
    }
    if (action === "speaking") this.say(copy("hello"));
    this.wake();
  }
  private setSleeping(value: boolean): void {
    this.sleeping = value; this.cancelAction();
    this.root.classList.toggle("is-sleeping", value);
    if (value) { this.bubble.hidden = true; if (this.idleTimer !== undefined) window.clearTimeout(this.idleTimer); this.idleTimer = undefined; }
    else { this.say(copy("awake")); this.tools.remind(); this.scheduleIdle(); }
    this.wake();
  }
  private bounce(depth = 0.16): void { this.squishStart = performance.now(); this.squishDepth = depth; this.wake(); }

  private readonly onDown = (event: PointerEvent): void => {
    if (event.button !== 0 || !this.ready || this.drag) return;
    this.closeMenu(false); this.cancelAction(); this.flight = undefined;
    if (this.sleeping) this.setSleeping(false);
    const now = performance.now(), box = this.root.getBoundingClientRect();
    this.drag = { id: event.pointerId, start: { x: event.clientX, y: event.clientY }, origin: { x: box.left, y: box.top }, moved: false,
      sling: now - this.previousDown < 330, trail: [{ x: event.clientX, y: event.clientY, time: now }] };
    this.previousDown = now;
    try { this.canvas.setPointerCapture(event.pointerId); } catch { /* Synthetic events may lack an active pointer. */ }
  };
  private readonly onMove = (event: PointerEvent): void => {
    const drag = this.drag; if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.start.x, dy = event.clientY - drag.start.y;
    const previous = drag.trail.at(-1)!;
    drag.trail.push({ x: event.clientX, y: event.clientY, time: performance.now() }); drag.trail = drag.trail.slice(-20);
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;
    if (!drag.moved) {
      drag.moved = true; this.hooks.perch(false); this.root.classList.add("is-carried"); this.root.dataset.action = "carried";
      this.hooks.expression("carried"); this.bubble.hidden = true;
      // Collar grip matches the existing soft-joint rig.
      drag.origin = { x: drag.start.x - this.root.offsetWidth * 0.62, y: drag.start.y - this.root.offsetHeight * 0.44 };
    }
    this.targetAngle = -28 + Math.max(-10, Math.min(10, (event.clientX - previous.x) * -0.8));
    this.impulse = Math.max(-12, Math.min(12, this.impulse + (event.clientX - previous.x) * 0.4 + (event.clientY - previous.y) * 0.15));
    this.position(drag.origin.x + dx, drag.origin.y + dy); this.wake();
  };
  private readonly onUp = (event: PointerEvent): void => {
    const drag = this.drag; if (!drag || event.pointerId !== drag.id) return;
    this.drag = undefined;
    if (this.canvas.hasPointerCapture(event.pointerId)) this.canvas.releasePointerCapture(event.pointerId);
    if (!drag.moved) { this.scheduleIdle(); return; }
    this.suppressClick = true; this.targetAngle = 0; this.root.classList.remove("is-carried"); this.root.classList.add("is-settling");
    let velocity = releaseVelocity(drag.trail, performance.now());
    if (drag.sling) {
      const dx = event.clientX - drag.start.x, dy = event.clientY - drag.start.y;
      const scale = Math.min(4, 1400 / Math.max(1, Math.hypot(dx, dy)));
      velocity = { x: -dx * scale, y: -dy * scale };
    }
    this.flight = { x: this.root.offsetLeft, y: this.root.offsetTop, vx: velocity.x, vy: velocity.y }; this.wake();
  };
  private readonly onCancel = (event: PointerEvent): void => {
    if (this.drag?.id !== event.pointerId) return;
    this.drag = undefined; this.targetAngle = 0; this.flight = undefined;
    this.root.classList.remove("is-carried"); this.suppressClick = true;
    if (this.state.autoReturn) this.hooks.perch(true); else this.savePosition();
    this.finishAction();
  };
  private readonly onGaze = (event: PointerEvent): void => {
    if (document.hidden || !this.ready || this.sleeping) return;
    const rect = this.root.getBoundingClientRect(), x = rect.left + rect.width / 2, y = rect.top + rect.height / 3;
    this.gaze.x = Math.max(-1, Math.min(1, (event.clientX - x) / Math.max(1, event.clientX < x ? x : window.innerWidth - x)));
    this.gaze.y = Math.max(-1, Math.min(1, -(event.clientY - y) / Math.max(1, event.clientY < y ? y : window.innerHeight - y)));
    this.wake();
  };
  private readonly onVisibility = (): void => {
    if (!document.hidden) { this.lastFrame = performance.now(); this.tools.remind(); this.scheduleIdle(); this.wake(); return; }
    cancelAnimationFrame(this.frame); this.frame = 0;
    if (this.idleTimer !== undefined) window.clearTimeout(this.idleTimer); this.idleTimer = undefined;
    this.drag = undefined; this.flight = undefined; this.targetAngle = this.angle = this.angularVelocity = 0;
    this.joints.reset(); this.cancelAction(); this.closeMenu(false); this.bubble.hidden = true;
    this.root.classList.remove("is-carried", "is-settling"); this.canvas.style.transform = this.video.element.style.transform = "";
    if (this.state.autoReturn) this.hooks.perch(true); else this.savePosition();
  };

  private wake(): void { if (!this.frame && !document.hidden && !this.destroyed && this.ready) { this.lastFrame = performance.now(); this.frame = requestAnimationFrame(this.tick); } }
  private readonly tick = (now: number): void => {
    this.frame = 0; if (this.destroyed || document.hidden) return;
    const elapsedFrame = Math.min(0.2, Math.max(0.001, (now - this.lastFrame) / 1000));
    const dt = Math.min(0.035, elapsedFrame), step = dt * 60; this.lastFrame = now;
    const held = !!this.drag?.moved;
    if (this.flight) {
      let result = stepFlight(this.flight, 0, { width: this.root.offsetWidth, height: this.root.offsetHeight, viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
      const count = Math.ceil(elapsedFrame / 0.05);
      let hit = false;
      for (let i = 0; i < count; i++) {
        result = stepFlight(result.state, elapsedFrame / count, { width: this.root.offsetWidth, height: this.root.offsetHeight, viewportWidth: window.innerWidth, viewportHeight: window.innerHeight }, this.hooks.dock() ?? undefined);
        hit ||= result.hit;
      }
      this.flight = result.state; this.position(result.state.x, result.state.y);
      if (hit) this.bounce(0.11);
      if (result.resting) { this.flight = undefined; if (this.state.autoReturn) this.hooks.perch(true); else this.savePosition(); this.finishAction(); }
    }
    if (this.action && now > this.actionUntil) this.finishAction();
    const elapsed = (now - this.actionStarted) / 1000;
    const wave = Math.sin(elapsed * 5);
    // Stable substeps keep release/settling time consistent when rendering slows.
    const count = Math.ceil(elapsedFrame * 60), physicsStep = elapsedFrame * 60 / count;
    for (let i = 0; i < count; i++) {
      this.angularVelocity = (this.angularVelocity + (this.targetAngle - this.angle) * 0.075 * physicsStep) * Math.pow(0.79, physicsStep);
      this.angle = Math.max(-42, Math.min(12, this.angle + this.angularVelocity * physicsStep));
    }
    this.impulse *= Math.pow(0.9, elapsedFrame * 60);
    const pose: DollPose = held ? [10 + this.impulse, -10 + this.impulse, this.impulse * 0.5 + 5, this.impulse * 0.5 - 5]
      : this.action === "wave" ? [wave * 12 - 8, 0, 0, 0]
        : this.action === "happy" ? [wave * 8, -wave * 8, wave * 3, -wave * 3]
          : this.action === "surprised" ? [-16, 16, -5, 5] : this.action === "pout" ? [6, -6, 2, -2] : [0, 0, 0, 0];
    for (let i = 0; i < count; i++) this.joints.step(pose, physicsStep);
    const mouthTarget = this.action === "speaking" ? 0.2 + 0.6 * Math.abs(Math.sin(now / 130)) : this.action === "happy" ? 0.65 : this.action === "surprised" ? 1 : 0;
    this.mouth += (mouthTarget - this.mouth) * (1 - Math.pow(0.7, step));
    const dozing = this.action === "doze";
    const headTarget = { x: this.sleeping ? 0 : this.gaze.x * 6, y: this.sleeping ? -4 : held ? -5 : dozing ? -3 * (0.5 + 0.5 * Math.sin(elapsed * 3)) : this.gaze.y * 4,
      z: this.sleeping ? 7 : held ? -this.angle * 0.2 : this.action === "happy" ? wave * 3 : this.action === "think" ? 6 : 0 };
    const smooth = 1 - Math.pow(0.88, step);
    for (const axis of ["x", "y", "z"] as const) this.head[axis] += (headTarget[axis] - this.head[axis]) * smooth;
    const params: Record<string, number> = { ParamAngleX: this.head.x, ParamAngleY: this.head.y, ParamAngleZ: this.head.z, ParamBodyAngleZ: this.angle * 0.35, ParamMouthOpenY: this.mouth };
    if (this.sleeping || dozing) params.ParamEyeLOpen = params.ParamEyeROpen = this.sleeping ? 0 : Math.max(0.05, 0.3 + 0.25 * Math.cos(elapsed * 3));
    this.hooks.pose(params, this.joints.angles, this.mouth, 0.35 + this.head.x * 0.012 + this.angle * 0.008);
    this.root.dataset.headPose = Object.values(this.head).map(value => value.toFixed(3)).join(",");
    this.root.dataset.limbPose = this.joints.angles.map(value => value.toFixed(2)).join(",");
    const scale = squishAt((now - this.squishStart) / 1000, this.squishDepth);
    const swaying = this.action === "happy" ? wave * 2 : 0;
    const transform = Math.abs(this.angle) + Math.abs(swaying) > 0.05 || Math.abs(scale.y - 1) > 0.001 ? `rotate(${(this.angle + swaying).toFixed(3)}deg) scale(${scale.x.toFixed(4)},${scale.y.toFixed(4)})` : "";
    this.canvas.style.transformOrigin = this.video.element.style.transformOrigin = held || Math.abs(this.angle) > 1 ? "62% 44%" : "50% 94%";
    this.canvas.style.transform = this.video.element.style.transform = transform;
    if (!held && !this.flight && Math.abs(this.angle) + Math.abs(this.angularVelocity) < 0.05) this.root.classList.remove("is-settling");
    const moving = this.busy || this.joints.moving || Math.abs(this.angle) + Math.abs(this.angularVelocity) > 0.05 || Math.abs(this.mouth - mouthTarget) > 0.01 || (["x", "y", "z"] as const).some(axis => Math.abs(this.head[axis] - headTarget[axis]) > 0.01) || now - this.squishStart < 800;
    if (moving && !this.frame) this.frame = requestAnimationFrame(this.tick);
  };

  private closeMenu(focus = true): void { if (!this.menu) return; this.menu.remove(); this.menu = undefined; if (focus) this.canvas.focus({ preventScroll: true }); this.scheduleIdle(); }
  private openMenu(x: number, y: number): void {
    if (!this.ready) return;
    this.closeMenu(false); this.cancelAction(); const menu = document.createElement("section"); menu.className = "ff-companion-menu";
    menu.setAttribute("role", "menu"); menu.setAttribute("aria-label", copy("actions"));
    const add = (key: CompanionLabel, action: () => void, checked?: boolean) => {
      const button = document.createElement("button"); button.type = "button"; button.textContent = copy(key);
      button.setAttribute("role", checked === undefined ? "menuitem" : "menuitemcheckbox");
      if (checked !== undefined) button.setAttribute("aria-checked", String(checked));
      button.dataset.companionAction = key;
      button.addEventListener("click", () => { this.closeMenu(); action(); }); menu.append(button);
    };
    for (const action of COMPANION_ACTIONS) add(action, () => { void this.playAction(action); });
    const separator = document.createElement("hr"); separator.setAttribute("role", "separator"); menu.append(separator);
    add(this.sleeping ? "wake" : "sleep", () => this.setSleeping(!this.sleeping));
    add("home", () => { this.flight = undefined; this.hooks.perch(true); clearCompanionPosition(); });
    for (const key of ["autoReturn", "random", "roam"] as const) add(key, () => { this.state[key] = !this.state[key]; this.saveState(); if (key === "autoReturn" && this.state.autoReturn) { this.flight = undefined; this.hooks.perch(true); clearCompanionPosition(); } this.scheduleIdle(); }, this.state[key]);
    add("tools", () => this.tools.open());
    menu.addEventListener("keydown", event => {
      const buttons = [...menu.querySelectorAll<HTMLButtonElement>("button")]; const current = buttons.indexOf(document.activeElement as HTMLButtonElement);
      let index = current;
      if (event.key === "Escape" || event.key === "Tab") { if (event.key === "Escape") event.preventDefault(); this.closeMenu(); return; }
      if (event.key === "ArrowDown") index = (current + 1) % buttons.length;
      else if (event.key === "ArrowUp") index = (current - 1 + buttons.length) % buttons.length;
      else if (event.key === "Home") index = 0; else if (event.key === "End") index = buttons.length - 1; else return;
      event.preventDefault(); buttons[index]?.focus();
    });
    document.body.append(menu); this.menu = menu;
    menu.style.left = `${bounded(x, window.innerWidth - menu.offsetWidth - 12) + 6}px`;
    menu.style.top = `${bounded(y, window.innerHeight - menu.offsetHeight - 12) + 6}px`;
    menu.querySelector("button")?.focus();
  }
  destroy(): void {
    this.destroyed = true; this.ready = false; this.generation++; this.abort.abort(); this.unsubscribe();
    cancelAnimationFrame(this.frame); if (this.idleTimer !== undefined) window.clearTimeout(this.idleTimer); if (this.bubbleTimer !== undefined) window.clearTimeout(this.bubbleTimer);
    this.video.destroy(); this.tools.destroy(); this.menu?.remove(); this.bubble.remove();
    this.canvas.style.transform = "";
  }
}
