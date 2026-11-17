import type { ExperienceConfig } from "./types";
import { loadCubismCore } from "./cubism-core";
import { attachHairLight } from "./live2d-light";
import { attachDollRig } from "./live2d-doll";
import { CompanionInteractions } from "./companion";
import { t } from "./i18n";

interface WidgetInstance {
  readonly l2d?: {
    on?: (event: string, handler: () => void) => void;
    getCanvas?: () => HTMLCanvasElement;
    setParams?: (parameters: Record<string, number>) => void;
    setExpression?: (name: string) => void;
  };
  destroy(): Promise<void> | void;
}

const BASE_SIZE = { width: 240, height: 300 };
const PERCH_SCALE = 0.75;
// Spring for following the dock: slightly underdamped, so she lands with a small bob.
const PERCH_STIFFNESS = 140;
const PERCH_DAMPING = 2 * Math.sqrt(PERCH_STIFFNESS) * 0.62;
// Canvas rows below her feet are transparent; sink them behind the capsule rim.
const PERCH_SINK = 14;
const PERCH_SHOULDER = 34;

function clamp(value: number, max: number): number {
  return Math.min(Math.max(0, value), Math.max(0, max));
}

export interface Live2DOptions {
  /** The dock's live box; when present she perches on its right shoulder. */
  perch?: () => DOMRect | null;
}

export class Live2DManager {
  private instance?: WidgetInstance;
  private loading = false;
  private loadTimer?: number;
  private dragCleanup?: () => void;
  private interactions?: CompanionInteractions;
  private generation = 0;
  private light?: (position: number) => void;
  private doll?: ReturnType<typeof attachDollRig>;
  private root?: HTMLElement;
  private perched = false;
  private perchFrame = 0;
  private perchUntil = 0;
  private perchTime = 0;
  private readonly spring = { x: 0, y: 0, vx: 0, vy: 0, placed: false };

  constructor(
    private readonly config: ExperienceConfig["live2d"],
    private readonly options: Live2DOptions = {},
  ) {}

  /**
   * Re-target the perch after the dock moved (scroll hide/show, resize, layout).
   * The spring keeps sampling the live dock box for a short window so it also
   * follows the dock's own CSS transition instead of only its end state.
   */
  followPerch(): void {
    if (!this.perched || !this.root) return;
    this.perchUntil = performance.now() + 500;
    if (!this.perchFrame && !document.hidden) {
      this.perchTime = performance.now();
      this.perchFrame = requestAnimationFrame(this.stepPerch);
    }
  }

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
        tips: false as const,
      }));
      const instance = module.createWidget({
        model: models,
        menus: { items: [] },
        position: "bottom-right",
        size: this.options.perch
          ? { width: Math.round(BASE_SIZE.width * PERCH_SCALE), height: Math.round(BASE_SIZE.height * PERCH_SCALE) }
          : BASE_SIZE,
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
        this.interactions?.start();
        if (this.loadTimer !== undefined) window.clearTimeout(this.loadTimer);
        this.loadTimer = undefined;
      });
      this.loadTimer = window.setTimeout(() => {
        if (!loaded && this.instance === instance) this.stop();
      }, 15_000);
    } catch (error) {
      console.warn(t("live2d.loadFailed"), error);
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
    this.interactions = undefined;
    this.setPerched(false);
    this.root = undefined;
    this.light = undefined;
    this.doll?.destroy();
    this.doll = undefined;
    void this.instance?.destroy();
    this.instance = undefined;
    document.documentElement.classList.remove("ff-live2d-ready");
  }

  private setPerched(perched: boolean): void {
    this.perched = perched && !!this.options.perch && !!this.root;
    this.root?.classList.toggle("is-perched", this.perched);
    cancelAnimationFrame(this.perchFrame);
    this.perchFrame = 0;
    this.spring.placed = !!this.root?.style.left.endsWith("px");
    if (this.spring.placed && this.root) { this.spring.x = this.root.offsetLeft; this.spring.y = this.root.offsetTop; }
    this.spring.vx = this.spring.vy = 0;
    if (this.perched) this.followPerch();
  }

  private perchTarget(root: HTMLElement): { x: number; y: number } | undefined {
    const rect = this.options.perch?.();
    if (!rect?.width) return undefined;
    const x = rect.right - PERCH_SHOULDER - root.offsetWidth / 2;
    const y = rect.top - root.offsetHeight + PERCH_SINK;
    return {
      x: clamp(x, window.innerWidth - root.offsetWidth),
      y: clamp(y, window.innerHeight - root.offsetHeight),
    };
  }

  /** Semi-implicit Euler: integrate velocity first, then position with the new velocity. */
  private readonly stepPerch = (time: number): void => {
    this.perchFrame = 0;
    const root = this.root;
    if (!this.perched || !root) return;
    const target = this.perchTarget(root);
    if (!target) return;
    const spring = this.spring;
    const dt = Math.min(1 / 30, Math.max(0, (time - this.perchTime) / 1000));
    this.perchTime = time;
    if (!spring.placed) {
      Object.assign(spring, { x: target.x, y: target.y, vx: 0, vy: 0, placed: true });
    } else {
      spring.vx += (PERCH_STIFFNESS * (target.x - spring.x) - PERCH_DAMPING * spring.vx) * dt;
      spring.vy += (PERCH_STIFFNESS * (target.y - spring.y) - PERCH_DAMPING * spring.vy) * dt;
      spring.x += spring.vx * dt;
      spring.y += spring.vy * dt;
    }
    const resting = Math.abs(target.x - spring.x) + Math.abs(target.y - spring.y) < 0.3 &&
      Math.abs(spring.vx) + Math.abs(spring.vy) < 2;
    if (resting) Object.assign(spring, { x: target.x, y: target.y, vx: 0, vy: 0 });
    root.style.left = `${spring.x.toFixed(2)}px`;
    root.style.top = `${spring.y.toFixed(2)}px`;
    root.style.right = "auto";
    root.style.bottom = "auto";
    root.dataset.tipSide = spring.x + root.offsetWidth / 2 > window.innerWidth / 2 ? "start" : "end";
    if (!resting || time < this.perchUntil) this.perchFrame = requestAnimationFrame(this.stepPerch);
  };

  private enableDragging(instance: WidgetInstance): void {
    const canvas = instance.l2d?.getCanvas?.();
    const root = canvas?.parentElement;
    if (!canvas || !root) return;
    root.classList.add("ff-live2d-shell");
    this.root = root;
    this.interactions = new CompanionInteractions(root, canvas, {
      isPerched: () => this.perched,
      perch: value => this.setPerched(value),
      dock: () => this.options.perch?.() ?? null,
      expression: name => { instance.l2d?.setExpression?.(name); root.dataset.expression = name; },
      pose: (params, joints, mouth, light) => {
        instance.l2d?.setParams?.(params);
        this.doll?.pose(joints, mouth);
        this.light?.(light);
      },
    }, this.config.videos);
    this.dragCleanup = () => this.interactions?.destroy();
  }
}
