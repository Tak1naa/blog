import { t } from "./i18n";
import type { AnimeQuote, ExperienceConfig } from "./types";

export class QuoteSource {
  // Only the reviewed build-time catalog can enter the rotation.
  private index = 1;

  constructor(private readonly config: ExperienceConfig["site"]) {}

  async next(): Promise<AnimeQuote> {
    const quotes = this.config.subtitle;
    const value = quotes[this.index % quotes.length];
    if (!value) throw new Error("The reviewed quote catalog is empty");
    this.index += 1;
    return value;
  }
}

export function showQuoteSource(root: Element, quote: AnimeQuote): void {
  const link = root.querySelector<HTMLAnchorElement>(".ff-quote-source");
  if (!link) return;
  link.textContent = t("quotes.source", { work: quote.work, character: quote.character });
  link.href = quote.originalSource ?? quote.source;
  link.title = t("quotes.sourceTitle");
  link.dataset.work = quote.work;
  link.dataset.character = quote.character;
}

/** Re-label every rendered quote attribution after a locale switch. */
export function refreshQuoteSources(root: ParentNode = document): void {
  root.querySelectorAll<HTMLAnchorElement>(".ff-quote-source[data-work]").forEach((link) => {
    link.textContent = t("quotes.source", { work: link.dataset.work ?? "", character: link.dataset.character ?? "" });
    link.title = t("quotes.sourceTitle");
  });
}
