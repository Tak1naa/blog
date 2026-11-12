export interface CacheEntry<T> {
  value: T;
  freshUntil: number;
  staleUntil: number;
}

export class StaleCache<T> {
  private readonly entries = new Map<string, CacheEntry<T>>();

  set(key: string, value: T, freshMs: number, staleMs: number, now = Date.now()): void {
    this.entries.set(key, {
      value,
      freshUntil: now + freshMs,
      staleUntil: now + Math.max(freshMs, staleMs),
    });
  }

  getFresh(key: string, now = Date.now()): T | undefined {
    const entry = this.entries.get(key);
    return entry && entry.freshUntil > now ? entry.value : undefined;
  }

  getStale(key: string, now = Date.now()): T | undefined {
    const entry = this.entries.get(key);
    if (!entry || entry.staleUntil <= now) {
      this.entries.delete(key);
      return undefined;
    }
    return entry.value;
  }
}
