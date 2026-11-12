export interface LyricLine {
  time: number;
  text: string;
}

const timestamp = /\[(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?\]/g;

export function parseLrc(source: string): LyricLine[] {
  const lines: LyricLine[] = [];
  for (const rawLine of source.split(/\r?\n/)) {
    const matches = [...rawLine.matchAll(timestamp)];
    const text = rawLine.replace(timestamp, "").trim();
    if (!text || matches.length === 0) continue;
    for (const match of matches) {
      const minutes = Number(match[1]);
      const seconds = Number(match[2]);
      const fractionText = match[3] ?? "0";
      const fraction = Number(fractionText) / 10 ** fractionText.length;
      lines.push({ time: minutes * 60 + seconds + fraction, text });
    }
  }
  return lines.sort((a, b) => a.time - b.time);
}

export function lyricAt(lines: LyricLine[], seconds: number): number {
  let active = -1;
  for (let index = 0; index < lines.length; index += 1) {
    if ((lines[index]?.time ?? Number.POSITIVE_INFINITY) > seconds) break;
    active = index;
  }
  return active;
}
