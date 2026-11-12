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
  link.textContent = `《${quote.work}》 · ${quote.character}`;
  link.href = quote.originalSource ?? quote.source;
  link.title = "查看语录出处（中文译法可能因版本不同而异）";
}
