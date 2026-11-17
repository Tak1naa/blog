export type VideoAction = "stretch" | "think" | "look";
export type VideoClips = Partial<Record<VideoAction, string>>;

/** One decoder, loaded only on demand. A transparent pixel is checked before
 * hiding Live2D, so browsers without VP9 Alpha keep the working model. */
export class CompanionVideo {
  readonly element = document.createElement("video");
  private generation = 0;
  private timer?: number;
  private pending?: AbortController;
  private resolve?: (started: boolean) => void;
  private active = false;
  private destroyed = false;

  constructor(private readonly root: HTMLElement, private readonly clips: VideoClips, private readonly finished: () => void) {
    const video = this.element;
    video.className = "ff-companion-video";
    video.muted = true; video.defaultMuted = true; video.playsInline = true; video.preload = "none";
    video.setAttribute("aria-hidden", "true"); video.tabIndex = -1;
    root.append(video);
  }

  async play(action: VideoAction): Promise<boolean> {
    this.cancel();
    if (this.destroyed || !this.clips[action] || !this.element.canPlayType('video/webm; codecs="vp9"')) return false;
    const generation = this.generation;
    const controller = new AbortController(); this.pending = controller;
    const signal = controller.signal, video = this.element;
    return new Promise(resolve => {
      this.resolve = resolve;
      const fail = () => {
        if (generation !== this.generation) return;
        const wasActive = this.active;
        this.cancel();
        if (wasActive) this.finished();
      };
      video.addEventListener("error", fail, { signal });
      video.addEventListener("ended", () => { if (generation === this.generation) { this.cancel(); this.finished(); } }, { signal });
      video.addEventListener("loadeddata", () => {
        if (generation !== this.generation || document.hidden) { fail(); return; }
        try {
          const test = document.createElement("canvas"); test.width = test.height = 1;
          const context = test.getContext("2d");
          if (!context) { fail(); return; }
          context.drawImage(video, 0, 0, 1, 1, 0, 0, 1, 1);
          if (context.getImageData(0, 0, 1, 1).data[3]! > 16) { fail(); return; }
        } catch { fail(); return; }
        void video.play().then(() => {
          if (generation !== this.generation) return;
          this.active = true; this.root.classList.add("is-video-playing");
          this.root.dataset.videoAction = action;
          if (this.timer !== undefined) window.clearTimeout(this.timer);
          // Never leave the model invisible if an ended event is missed.
          this.timer = window.setTimeout(fail, Math.min(15_000, video.duration * 1000 + 1500));
          this.resolve?.(true); this.resolve = undefined;
        }).catch(fail);
      }, { once: true, signal });
      this.timer = window.setTimeout(fail, 7000);
      video.src = this.clips[action]!; video.load();
    });
  }
  cancel(): void {
    this.generation++;
    this.pending?.abort(); this.pending = undefined;
    if (this.timer !== undefined) window.clearTimeout(this.timer); this.timer = undefined;
    this.resolve?.(false); this.resolve = undefined;
    this.active = false; this.root.classList.remove("is-video-playing"); delete this.root.dataset.videoAction;
    this.element.pause();
    if (this.element.hasAttribute("src")) { this.element.removeAttribute("src"); this.element.load(); }
  }
  destroy(): void { this.destroyed = true; this.cancel(); this.element.remove(); }
}
