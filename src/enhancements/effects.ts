import type { ExperienceConfig } from "./types";
import { QuoteSource, showQuoteSource } from "./quotes";

export class EffectsManager {
  private canvas?: HTMLCanvasElement;
  private worker?: Worker;
  private typingTimer?: number;
  private readonly quotes: QuoteSource;
  private quoteGeneration = 0;
  private fallbackFrame?: number;
  private visibilityHandler = () => this.setPaused(document.hidden);

  constructor(private readonly config: ExperienceConfig) {
    this.quotes = new QuoteSource(config.site);
  }

  start(): void {
    if (!this.config.effects.enabled) return;
    if (this.config.effects.sakura) this.startSakura();
    document.addEventListener("visibilitychange", this.visibilityHandler);
    this.refreshPage();
  }

  refreshPage(): void {
    this.stopTypewriter();
    if (this.config.effects.typewriter && this.isHome()) this.startTypewriter();
  }

  stop(): void {
    document.removeEventListener("visibilitychange", this.visibilityHandler);
    this.stopTypewriter();
    this.worker?.terminate();
    this.worker = undefined;
    this.canvas?.remove();
    this.canvas = undefined;
    if (this.fallbackFrame !== undefined) cancelAnimationFrame(this.fallbackFrame);
    this.fallbackFrame = undefined;
  }

  private startSakura(): void {
    if (this.canvas) return;
    const canvas = document.createElement("canvas");
    canvas.className = "ff-sakura-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.append(canvas);
    this.canvas = canvas;
    if ("transferControlToOffscreen" in canvas) {
      const offscreen = canvas.transferControlToOffscreen();
      const worker = new Worker(new URL("./sakura.worker.ts", import.meta.url), { type: "module" });
      worker.postMessage(
        {
          type: "init",
          canvas: offscreen,
          width: window.innerWidth,
          height: window.innerHeight,
          dpr: Math.min(window.devicePixelRatio, 2),
          count: this.config.effects.maxParticles,
        },
        [offscreen],
      );
      this.worker = worker;
    } else this.startSakuraFallback(canvas);
  }

  private startTypewriter(): void {
    const target = document.querySelector<HTMLElement>(".ff-hero-copy .ff-quote-zh");
    const original = document.querySelector<HTMLElement>(".ff-hero-copy .ff-quote-ja");
    if (!target || !original) return;
    target.classList.add("ff-typing-subtitle");
    let cursor = 0;
    let deleting = false;
    const firstQuote = this.config.site.subtitle[0];
    if (!firstQuote) return;
    let phrase = firstQuote;
    showQuoteSource(target.parentElement!, phrase);
    const generation = ++this.quoteGeneration;
    const tick = () => {
      if (generation !== this.quoteGeneration || !target.isConnected) return;
      const text = Array.from(phrase.text);
      const japanese = Array.from(phrase.ja ?? "");
      cursor += deleting ? -1 : 1;
      target.textContent = text.slice(0, Math.max(0, cursor)).join("");
      original.textContent = japanese.slice(0, Math.max(0, cursor)).join("");
      let delay = deleting ? 50 : 90;
      if (!deleting && cursor >= Math.max(text.length, japanese.length)) {
        deleting = true;
        // Allow enough time to read both languages and follow the attribution.
        delay = 5000;
      } else if (deleting && cursor <= 0) {
        deleting = false;
        void this.quotes.next().then((quote) => {
          if (generation !== this.quoteGeneration) return;
          phrase = quote;
          showQuoteSource(target.parentElement!, phrase);
          this.typingTimer = window.setTimeout(tick, 350);
        });
        return;
      }
      this.typingTimer = window.setTimeout(tick, delay);
    };
    target.textContent = "";
    original.textContent = "";
    tick();
  }

  private stopTypewriter(): void {
    this.quoteGeneration += 1;
    if (this.typingTimer !== undefined) window.clearTimeout(this.typingTimer);
    this.typingTimer = undefined;
    document.querySelector(".ff-hero-copy .ff-quote-zh")?.classList.remove("ff-typing-subtitle");
  }

  private setPaused(paused: boolean): void {
    this.worker?.postMessage({ type: paused ? "pause" : "resume" });
  }

  private isHome(): boolean {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    return path === (this.config.site.homePath.replace(/\/+$/, "") || "/");
  }

  beforeNavigate(): void {
    this.stopTypewriter();
  }

  private startSakuraFallback(canvas: HTMLCanvasElement): void {
    const context = canvas.getContext("2d");
    if (!context) return;
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const particles = Array.from({ length: Math.min(this.config.effects.maxParticles, 24) }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 0.35 + Math.random() * 0.65,
      size: 3 + Math.random() * 4,
    }));
    let last = 0;
    const draw = (time: number) => {
      if (time - last >= 32 && !document.hidden) {
        last = time;
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "rgba(182,178,255,.68)";
        for (const particle of particles) {
          particle.y += particle.speed;
          particle.x += Math.sin((particle.y + particle.x) / 70) * 0.3;
          if (particle.y > window.innerHeight + 12) {
            particle.y = -12;
            particle.x = Math.random() * window.innerWidth;
          }
          context.beginPath();
          context.ellipse(particle.x, particle.y, particle.size, particle.size * 0.55, particle.y / 90, 0, Math.PI * 2);
          context.fill();
        }
      }
      this.fallbackFrame = requestAnimationFrame(draw);
    };
    this.fallbackFrame = requestAnimationFrame(draw);
  }
}
