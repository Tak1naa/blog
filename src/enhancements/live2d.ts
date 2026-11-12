import type { ExperienceConfig } from "./types";
import { loadCubismCore } from "./cubism-core";
import { attachHairLight } from "./live2d-light";
import { attachDollRig, DollJoints, type DollPose } from "./live2d-doll";

interface WidgetInstance {
  readonly l2d?: {
    on?: (event: string, handler: () => void) => void;
    getCanvas?: () => HTMLCanvasElement;
    setParams?: (parameters: Record<string, number>) => void;
    setExpression?: (name: string) => void;
  };
  destroy(): Promise<void> | void;
}

const POSITION_KEY = "takina-live2d-position-v1";

function clamp(value: number, max: number): number {
  return Math.min(Math.max(0, value), Math.max(0, max));
}

export class Live2DManager {
  private instance?: WidgetInstance;
  private loading = false;
  private loadTimer?: number;
  private dragCleanup?: () => void;
  private generation = 0;
  private light?: (position: number) => void;
  private doll?: ReturnType<typeof attachDollRig>;

  constructor(private readonly config: ExperienceConfig["live2d"]) {}

  async start(): Promise<void> {
    if (this.instance || this.loading || !this.config.enabled) return;
    this.loading = true;
    const generation = ++this.generation;
    try {
      await loadCubismCore();
      const module = await import("l2d-widget");
      if (generation !== this.generation) return;
      const models = this.config.modelPaths.map((path) => ({
        path,
        tips: {
          welcomeMessage: this.config.welcomeMessages,
          messages: this.config.idleMessages,
          interval: 12000,
          duration: 5000,
        },
      }));
      const instance = module.createWidget({
        model: models,
        position: "bottom-right",
        size: { width: 240, height: 300 },
        transitionType: "fade",
        transitionDuration: 900,
        primaryColor: "rgba(91, 111, 220, .86)",
      }) as WidgetInstance;
      this.instance = instance;
      this.enableDragging(instance);
      let loaded = false;
      instance.l2d?.on?.("loaded", () => {
        if (generation !== this.generation || this.instance !== instance) return;
        loaded = true;
        this.light = attachHairLight(instance.l2d);
        this.doll = attachDollRig(instance.l2d);
        this.light?.(0.35);
        const shell = instance.l2d?.getCanvas?.().parentElement;
        if (shell) shell.dataset.hairLight = this.light ? "masked" : "unavailable";
        if (shell) shell.dataset.dollRig = this.doll ? "soft-joints" : "unavailable";
        document.documentElement.classList.add("ff-live2d-ready");
        if (this.loadTimer !== undefined) window.clearTimeout(this.loadTimer);
        this.loadTimer = undefined;
      });
      this.loadTimer = window.setTimeout(() => {
        if (!loaded && this.instance === instance) this.stop();
      }, 15_000);
    } catch (error) {
      console.warn("Live2D 加载失败，已安全降级。", error);
    } finally {
      if (generation === this.generation) this.loading = false;
    }
  }

  stop(): void {
    this.generation += 1;
    this.loading = false;
    if (this.loadTimer !== undefined) window.clearTimeout(this.loadTimer);
    this.loadTimer = undefined;
    this.dragCleanup?.();
    this.dragCleanup = undefined;
    this.light = undefined;
    this.doll?.destroy();
    this.doll = undefined;
    void this.instance?.destroy();
    this.instance = undefined;
    document.documentElement.classList.remove("ff-live2d-ready");
  }

  private enableDragging(instance: WidgetInstance): void {
    const canvas = instance.l2d?.getCanvas?.();
    const root = canvas?.parentElement;
    if (!canvas || !root) return;
    root.classList.add("ff-live2d-shell");
    canvas.style.touchAction = "none";
    canvas.title = "拖动看板娘";
    canvas.tabIndex = 0;
    canvas.setAttribute("aria-label", "泷奈看板娘：拖动移动，悬停或聚焦切换表情");

    const setPosition = (x: number, y: number) => {
      root.style.left = `${clamp(x, window.innerWidth - root.offsetWidth)}px`;
      root.style.top = `${clamp(y, window.innerHeight - root.offsetHeight)}px`;
      root.style.right = "auto";
      root.style.bottom = "auto";
    };
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(POSITION_KEY) ?? "null");
      if (saved && typeof saved === "object" && "x" in saved && "y" in saved) {
        const { x, y } = saved as { x: unknown; y: unknown };
        if (typeof x === "number" && Number.isFinite(x) && typeof y === "number" && Number.isFinite(y)) {
          setPosition(x, y);
        }
      }
    } catch {
      // Private browsing may reject storage; dragging still works for this session.
    }

    let pointerId: number | undefined;
    let startX = 0;
    let startY = 0;
    let originX = 0;
    let originY = 0;
    let moved = false;
    let suppressClick = false;
    let lastX = 0;
    let lastY = 0;
    let impulse = 0;
    let mouthOpening = 0;
    let gazeX = 0, gazeY = 0;
    let headX = 0, headY = 0, headZ = 0;
    const joints = new DollJoints();
    let currentExpression = "neutral";
    let angle = 0;
    let velocity = 0;
    let target = 0;
    let frame = 0;
    let lastFrame = 0;
    let expressionIndex = 0;
    let expressionTimer: number | undefined;
    const expressions = ["smile", "wink", "curious", "sleepy", "laugh", "surprised", "pout", "speaking"];
    const expression = (name: string) => {
      instance.l2d?.setExpression?.(name);
      root.dataset.expression = name;
      currentExpression = name;
    };
    const clearExpressions = () => {
      if (expressionTimer !== undefined) window.clearInterval(expressionTimer);
      expressionTimer = undefined;
    };
    const onEnter = () => {
      if (pointerId !== undefined || expressionTimer !== undefined || document.hidden || !document.documentElement.classList.contains("ff-live2d-ready")) return;
      const next = () => expression(expressions[expressionIndex++ % expressions.length]!);
      next();
      expressionTimer = window.setInterval(next, 3500);
      wake();
    };
    const onLeave = () => {
      clearExpressions();
      if (pointerId === undefined) expression("neutral");
    };
    const settle = (time: number) => {
      const step = Math.min(2, (time - lastFrame) / 16.67 || 1);
      lastFrame = time;
      if (pointerId !== undefined && moved) target = -28 + (target + 28) * Math.pow(0.94, step);
      velocity += (target - angle) * 0.075 * step;
      velocity *= Math.pow(0.79, step);
      angle = Math.max(-42, Math.min(12, angle + velocity * step));
      impulse *= Math.pow(0.9, step);
      const held = pointerId !== undefined && moved;
      const wave = expressionTimer !== undefined ? Math.sin(time / 360) : 0;
      const targets: DollPose = held
        ? [10 + impulse, -10 + impulse, impulse * 0.5 + 5, impulse * 0.5 - 5]
        : currentExpression === "wink" || currentExpression === "speaking"
          ? [wave * 12, 0, wave * 2, -wave * 2]
          : currentExpression === "laugh" ? [wave * 8, -wave * 8, wave * 3, -wave * 3]
            : currentExpression === "surprised" ? [-16, 16, -5, 5]
              : currentExpression === "pout" ? [6, -6, 2, -2] : [0, 0, 0, 0];
      joints.step(targets, step);
      root.dataset.limbPose = joints.angles.map(value => value.toFixed(2)).join(",");
      const mouthTarget = currentExpression === "speaking" ? 0.2 + 0.6 * Math.abs(Math.sin(time / 130))
        : currentExpression === "laugh" ? 0.85 : currentExpression === "surprised" ? 1
          : currentExpression === "pout" ? 0.16 : 0;
      mouthOpening += (mouthTarget - mouthOpening) * (1 - Math.pow(0.7, step));
      this.doll?.pose(joints.angles, mouthOpening);
      const settled = pointerId === undefined && !joints.moving && Math.abs(angle) + Math.abs(velocity) < 0.05;
      canvas.style.transform = settled ? "" : `rotate(${angle.toFixed(3)}deg)`;
      const smoothing = 1 - Math.pow(0.88, step);
      headX += (gazeX * 6 - headX) * smoothing;
      headY += ((held ? -5 : gazeY * 4) - headY) * smoothing;
      headZ += ((held ? -angle * 0.2 : Math.sin(time / 6500) * 0.8) - headZ) * smoothing;
      root.dataset.headPose = [headX, headY, headZ].map(value => value.toFixed(3)).join(",");
      // Counter-rotate the head while the torso hangs from the collar pivot.
      // Hair stays physics-driven; never force ParamHairFront/Back here.
      instance.l2d?.setParams?.({ ParamAngleX: headX, ParamAngleZ: headZ, ParamAngleY: headY,
        ParamBodyAngleZ: angle * 0.35,
        // The widget's silent lip-sync runs after expressions. Force the
        // smoothed expression aperture last, rather than letting silence close it.
        ParamMouthOpenY: mouthOpening });
      this.light?.(0.35 + headX * 0.012 + angle * 0.008);
      if (settled && root.classList.contains("is-settling")) {
        root.classList.remove("is-settling");
        expression("neutral");
      }
      // One continuous angle owner prevents jumps back to SDK idle/look motion.
      // Paused by visibility and fully cancelled on disposal.
      frame = requestAnimationFrame(settle);
    };
    const wake = () => {
      if (!frame && !document.hidden) {
        lastFrame = performance.now();
        frame = requestAnimationFrame(settle);
      }
    };
    const onDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      pointerId = event.pointerId;
      moved = false;
      const rect = root.getBoundingClientRect();
      originX = rect.left;
      originY = rect.top;
      startX = event.clientX;
      startY = event.clientY;
      lastX = event.clientX;
      lastY = event.clientY;
      canvas.setPointerCapture(event.pointerId);
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      if (!moved && Math.hypot(event.clientX - startX, event.clientY - startY) < 6) return;
      if (!moved) {
        moved = true;
        root.style.transition = "none";
        root.classList.add("is-carried");
        clearExpressions();
        expression("carried");
        // Once picked up, the pointer holds the collar, not the original grab
        // point on a foot/face. The canvas pivots at the same collar position.
        originX = startX - root.offsetWidth * 0.62;
        originY = startY - root.offsetHeight * 0.44;
      }
      target = -28 + Math.max(-10, Math.min(10, (event.clientX - lastX) * -0.8));
      impulse = Math.max(-12, Math.min(12, impulse + (event.clientX - lastX) * 0.4 + (event.clientY - lastY) * 0.15));
      lastX = event.clientX;
      lastY = event.clientY;
      wake();
      setPosition(originX + event.clientX - startX, originY + event.clientY - startY);
    };
    const onUp = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      pointerId = undefined;
      if (!moved) return;
      target = 0;
      root.classList.remove("is-carried");
      root.classList.add("is-settling");
      wake();
      suppressClick = true;
      const rect = root.getBoundingClientRect();
      try {
        localStorage.setItem(POSITION_KEY, JSON.stringify({ x: rect.left, y: rect.top }));
      } catch {
        // The current drag position remains valid without persistence.
      }
    };
    const onClick = (event: MouseEvent) => {
      if (!suppressClick) return;
      suppressClick = false;
      event.preventDefault();
      event.stopImmediatePropagation();
    };
    const onResize = () => {
      if (root.style.left) setPosition(Number.parseFloat(root.style.left), Number.parseFloat(root.style.top));
    };
    const onLight = (event: PointerEvent) => {
      if (document.hidden) return;
      const rect = canvas.getBoundingClientRect();
      // Normalize each side by the space actually available around the model.
      // A right-corner model must still follow the entire left half of the page,
      // rather than clamping it all to -1 before the pointer reaches the middle.
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 3;
      gazeX = Math.max(-1, Math.min(1, (event.clientX - centerX) /
        Math.max(1, event.clientX < centerX ? centerX : window.innerWidth - centerX)));
      gazeY = Math.max(-1, Math.min(1, -(event.clientY - centerY) /
        Math.max(1, event.clientY < centerY ? centerY : window.innerHeight - centerY)));
      wake();
    };
    const onVisibility = () => {
      if (!document.hidden) { wake(); return; }
      cancelAnimationFrame(frame);
      clearExpressions();
      frame = 0;
      pointerId = undefined;
      target = angle = velocity = 0;
      mouthOpening = 0;
      headX = headY = headZ = 0;
      joints.reset();
      this.doll?.pose([0, 0, 0, 0]);
      canvas.style.transform = "";
      root.classList.remove("is-carried", "is-settling");
      instance.l2d?.setParams?.({});
      expression("neutral");
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("click", onClick, true);
    canvas.addEventListener("pointerenter", onEnter);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("focus", onEnter);
    canvas.addEventListener("blur", onLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("pointermove", onLight, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    wake();
    this.dragCleanup = () => {
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("click", onClick, true);
      canvas.removeEventListener("pointerenter", onEnter);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("focus", onEnter);
      canvas.removeEventListener("blur", onLeave);
      clearExpressions();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("pointermove", onLight);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(frame);
    };
  }
}
