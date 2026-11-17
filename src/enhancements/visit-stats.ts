import { getLocale, onLocaleChange, t, translateDom } from "./i18n";

interface VisitCounts { today: number; total: number }
type Status = "loading" | "ready" | "local" | "unavailable";

/** Provider values may be numbers or decimal strings. Never turn a failed
 * request, malformed response or missing history into a fabricated zero. */
export function parseVisitCounts(value: unknown): VisitCounts | undefined {
  if (!value || typeof value !== "object") return;
  const data = value as Record<string, unknown>;
  const count = (raw: unknown): number | undefined => {
    if (typeof raw !== "number" && !(typeof raw === "string" && /^\d+$/.test(raw))) return;
    const number = Number(raw);
    return Number.isSafeInteger(number) && number >= 0 ? number : undefined;
  };
  const today = count(data.busuanzi_today_pv), total = count(data.busuanzi_site_pv);
  if (today === undefined || total === undefined || total < today) return;
  return { today, total };
}

/** One PV per page navigation, even when both theme and PJAX lifecycle events
 * fire. Locale changes only reformat the existing result. No local counters. */
export class VisitStats {
  private page?: string;
  private counts?: VisitCounts;
  private status: Status = "loading";
  private request?: AbortController;
  private readonly unsubscribe = onLocaleChange(() => this.render());

  refresh(): void {
    if (!document.querySelector("[data-visit-stats]")) return;
    const page = location.origin + location.pathname;
    if (this.page === page) { this.render(); return; }
    this.page = page;
    this.request?.abort(); this.counts = undefined;
    const host = location.hostname;
    if (host === "localhost" || host.endsWith(".localhost") || !host.includes(".") || host.includes(":") || /^(\d{1,3}\.){3}\d{1,3}$/.test(host)) {
      this.status = "local"; this.render(); return;
    }
    this.status = "loading"; this.render();
    const request = new AbortController(); this.request = request;
    const timeout = window.setTimeout(() => request.abort(), 6000);
    // Same POST contract as Busuanzi's 3.6.9 client, without loading remote JS.
    // Strip query strings/fragments and external referrer paths from telemetry.
    let referrer = "";
    try { if (document.referrer) referrer = new URL(document.referrer).origin; } catch { /* Optional. */ }
    void fetch("https://cdn.busuanzi.cc/api.php", {
      method: "POST", body: JSON.stringify({ url: page, referrer }),
      credentials: "omit", referrerPolicy: "no-referrer", cache: "no-store", signal: request.signal,
    }).then(async response => {
      if (!response.ok) throw new Error("Visit counts unavailable");
      const counts = parseVisitCounts(await response.json());
      if (!counts) throw new Error("Invalid visit counts");
      if (this.request !== request) return;
      this.counts = counts; this.status = "ready";
    }).catch(() => {
      if (this.request === request) { this.counts = undefined; this.status = "unavailable"; }
    }).finally(() => {
      window.clearTimeout(timeout);
      if (this.request === request) this.render();
    });
  }

  private render(): void {
    const root = document.querySelector<HTMLElement>("[data-visit-stats]");
    if (!root) return;
    translateDom(root); root.dataset.status = this.status; root.title = t(`visits.${this.status}`);
    root.setAttribute("aria-busy", String(this.status === "loading"));
    for (const field of ["today", "total"] as const) {
      const target = root.querySelector<HTMLElement>(`[data-visit-${field}]`);
      if (target) target.textContent = this.counts ? new Intl.NumberFormat(getLocale()).format(this.counts[field]) : "—";
    }
  }

  destroy(): void { this.unsubscribe(); this.request?.abort(); this.request = undefined; }
}
