import { onLocaleChange, t, translateDom } from "./i18n";
import type { MusicPlayer, MusicSnapshot } from "./music";

const MAX_POSTS = 3;
// Representative p50 latency samples (ms) for the featured project's preview.
const LATENCY_SAMPLES = [14, 12, 15, 11, 9, 10, 8, 9, 7, 8, 6, 7, 6, 5, 6];

interface RecentPost {
  title: string;
  href: string;
  date?: string;
  datetime?: string;
  tags: string[];
}

/** A smooth-enough polyline path for the latency sparkline, inverted so lower is higher. */
function sparkline(samples: number[], width: number, height: number): string {
  const max = Math.max(...samples);
  const min = Math.min(...samples);
  const step = width / (samples.length - 1);
  return samples
    .map((value, index) => {
      const y = height - ((max - value) / (max - min || 1)) * (height - 8) - 4;
      return `${index ? "L" : "M"}${(index * step).toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

/**
 * Editorial Bento Grid for the home top: featured project, bio, audio hub and
 * recent writing. It sits between the hero and the theme's banner inside
 * #home_top, which PJAX replaces on every navigation, so the grid is unmounted
 * before each swap and re-mounted afterwards when the new page is home.
 */
export class BentoGrid {
  private root?: HTMLElement;
  private unsubscribeMusic?: () => void;
  private unsubscribeLocale?: () => void;
  private snapshot?: MusicSnapshot;

  constructor(
    private readonly homePath: string,
    private readonly music?: MusicPlayer,
  ) {}

  /** Mount on home, unmount elsewhere. Safe to call repeatedly. */
  refresh(): void {
    if (!this.isHome()) {
      this.unmount();
      return;
    }
    const homeTop = document.querySelector<HTMLElement>("#home_top");
    if (!homeTop) return;
    if (this.root?.isConnected && homeTop.contains(this.root)) return;
    this.unmount();
    this.mount(homeTop);
  }

  unmount(): void {
    this.unsubscribeMusic?.();
    this.unsubscribeMusic = undefined;
    this.unsubscribeLocale?.();
    this.unsubscribeLocale = undefined;
    this.snapshot = undefined;
    this.root?.removeEventListener("click", this.onClick);
    this.root?.remove();
    this.root = undefined;
  }

  destroy(): void {
    this.unmount();
  }

  private isHome(): boolean {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    return path === (this.homePath.replace(/\/+$/, "") || "/");
  }

  private mount(homeTop: HTMLElement): void {
    const root = document.createElement("section");
    root.className = "ff-bento";
    root.setAttribute("aria-label", "Highlights");
    root.dataset.i18nAttr = "aria-label:bento.label";
    const latency = { from: LATENCY_SAMPLES[0], to: LATENCY_SAMPLES.at(-1) };
    root.innerHTML = `
      <article class="ff-bento-card ff-bento-featured">
        <header class="ff-bento-eyebrow"><span data-i18n="bento.featured.eyebrow"></span><span class="ff-bento-dot" aria-hidden="true"></span></header>
        <h2 class="ff-bento-title">
          <a href="/posts/speedtest-architecture/" data-i18n="bento.featured.title"></a>
        </h2>
        <p class="ff-bento-text" data-i18n="bento.featured.description"></p>
        <ul class="ff-bento-badges" data-i18n-attr="aria-label:bento.featured.technologies">
          <li>WebWorker</li><li>TLS</li><li>Redis</li>
        </ul>
        <figure class="ff-bento-graph">
          <svg viewBox="0 0 240 64" preserveAspectRatio="none" role="img"
            data-i18n-attr="aria-label:bento.featured.latencyChart" data-i18n-params='${JSON.stringify(latency)}'>
            <defs>
              <linearGradient id="ff-bento-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stop-color="currentColor" stop-opacity="0.32"/>
                <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <path class="ff-bento-graph-area" d="${sparkline(LATENCY_SAMPLES, 240, 64)} L240 64 L0 64 Z"/>
            <path class="ff-bento-graph-line" d="${sparkline(LATENCY_SAMPLES, 240, 64)}"/>
          </svg>
          <figcaption>
            <span><strong>${latency.to}</strong> <span data-i18n="bento.featured.latencyUnit"></span></span>
            <span><strong>940</strong> <span data-i18n="bento.featured.throughputUnit"></span></span>
          </figcaption>
        </figure>
        <a class="ff-bento-link" href="/posts/speedtest-architecture/"><span data-i18n="bento.featured.cta"></span> <span aria-hidden="true">→</span></a>
      </article>

      <article class="ff-bento-card ff-bento-bio">
        <header class="ff-bento-eyebrow"><span data-i18n="bento.bio.eyebrow"></span></header>
        <div class="ff-bento-profile">
          <img src="/media/takina/avatar.png" alt="" width="48" height="48" loading="lazy">
          <div><h2 class="ff-bento-title" data-i18n="bento.bio.name"></h2><p class="ff-bento-muted" data-i18n="bento.bio.tagline"></p></div>
        </div>
        <p class="ff-bento-text" data-i18n="bento.bio.description"></p>
        <ul class="ff-bento-focus" data-i18n-attr="aria-label:bento.bio.focusLabel">
          <li data-i18n="bento.bio.focus.distributedSystems"></li><li data-i18n="bento.bio.focus.frontendCraft"></li><li data-i18n="bento.bio.focus.webPerformance"></li>
        </ul>
      </article>

      <article class="ff-bento-card ff-bento-audio" data-state="idle">
        <header class="ff-bento-eyebrow"><span data-i18n="bento.audio.eyebrow"></span>
          <span class="ff-bento-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        </header>
        <div class="ff-bento-track">
          <strong data-bento="title"></strong>
          <span class="ff-bento-muted" data-bento="artists"></span>
        </div>
        <div class="ff-bento-audio-controls">
          <button type="button" data-bento="play">▶</button>
          <button type="button" data-bento="open" aria-controls="ff-music-player" aria-expanded="false" data-i18n="bento.audio.player"></button>
        </div>
      </article>

      <article class="ff-bento-card ff-bento-writing">
        <header class="ff-bento-eyebrow"><span data-i18n="bento.writing.eyebrow"></span><a href="/archives/" data-i18n="bento.writing.archive"></a></header>
        <blockquote class="ff-bento-epigraph"><span data-i18n="bento.writing.epigraph"></span><cite data-i18n="bento.writing.epigraphAuthor"></cite></blockquote>
        <ol class="ff-bento-posts"></ol>
      </article>`;

    this.renderPosts(root.querySelector<HTMLOListElement>(".ff-bento-posts")!);
    root.addEventListener("click", this.onClick);

    const audio = root.querySelector<HTMLElement>(".ff-bento-audio")!;
    const render = () => {
      translateDom(root);
      this.renderMusic(audio);
    };
    render();
    this.unsubscribeLocale = onLocaleChange(render);
    if (this.music) {
      this.unsubscribeMusic = this.music.subscribe((snapshot) => {
        this.snapshot = snapshot;
        this.renderMusic(audio);
      });
    } else {
      audio.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    }

    const hero = homeTop.querySelector(":scope > .ff-hero-copy");
    if (hero) hero.after(root);
    else homeTop.prepend(root);
    this.root = root;
  }

  /** Recent posts come from the rendered home list, so the grid never drifts from the content. */
  private renderPosts(list: HTMLOListElement): void {
    const posts = this.collectPosts();
    if (!posts.length) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = "/archives/";
      link.dataset.i18n = "bento.writing.browseAll";
      item.append(link);
      list.append(item);
      return;
    }
    for (const post of posts) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = post.href;
      link.textContent = post.title;
      const meta = document.createElement("span");
      meta.className = "ff-bento-meta";
      if (post.date) {
        const time = document.createElement("time");
        time.textContent = post.date;
        if (post.datetime) time.dateTime = post.datetime;
        meta.append(time);
      }
      for (const tag of post.tags.slice(0, 2)) {
        const chip = document.createElement("span");
        chip.textContent = `#${tag}`;
        meta.append(chip);
      }
      item.append(link, meta);
      list.append(item);
    }
  }

  private collectPosts(): RecentPost[] {
    const items = document.querySelectorAll<HTMLElement>("#recent-posts .recent-post-item");
    const posts: RecentPost[] = [];
    for (const item of items) {
      const title = item.querySelector<HTMLAnchorElement>("a.article-title");
      if (!title?.href) continue;
      const time = item.querySelector<HTMLTimeElement>(".post-meta-date time");
      posts.push({
        title: title.title || title.textContent?.trim() || t("bento.writing.untitled"),
        href: title.getAttribute("href") ?? title.href,
        date: time?.textContent?.trim() || undefined,
        datetime: time?.getAttribute("datetime") ?? undefined,
        tags: [...item.querySelectorAll(".article-meta__tags")]
          .map((tag) => tag.textContent?.replace(/^#/, "").trim() ?? "")
          .filter(Boolean),
      });
      if (posts.length === MAX_POSTS) break;
    }
    return posts;
  }

  /** Before the player reports (or without one), the card shows its idle copy. */
  private renderMusic(audio: HTMLElement): void {
    const snapshot = this.snapshot;
    const title = audio.querySelector<HTMLElement>("[data-bento=title]")!;
    const artists = audio.querySelector<HTMLElement>("[data-bento=artists]")!;
    const play = audio.querySelector<HTMLButtonElement>("[data-bento=play]")!;
    const open = audio.querySelector<HTMLButtonElement>("[data-bento=open]")!;
    if (!snapshot) {
      audio.dataset.state = this.music ? "idle" : "offline";
      title.textContent = t("bento.audio.idleTitle");
      artists.textContent = t(this.music ? "bento.audio.paused" : "bento.audio.unavailable");
      play.setAttribute("aria-label", t("media.play"));
      open.setAttribute("aria-label", t("media.openPlayer"));
      return;
    }
    audio.dataset.state = snapshot.playing ? "playing" : "idle";
    title.textContent = snapshot.title;
    artists.textContent = snapshot.artists || t(snapshot.playing ? "bento.audio.playing" : "bento.audio.paused");
    play.textContent = snapshot.playing ? "⏸" : "▶";
    play.setAttribute("aria-label", t(snapshot.playing ? "media.pause" : "media.play"));
    open.setAttribute("aria-expanded", String(snapshot.open));
    open.setAttribute("aria-label", t(snapshot.open ? "media.closePlayer" : "media.openPlayer"));
  }

  private readonly onClick = (event: MouseEvent): void => {
    const target = (event.target as HTMLElement).closest<HTMLButtonElement>("button[data-bento]");
    if (!target || target.disabled || !this.music) return;
    if (target.dataset.bento === "play") this.music.toggle();
    if (target.dataset.bento === "open") this.music.setOpen(!this.music.isOpen());
  };
}
