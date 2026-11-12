declare module "@meting/core" {
  export default class Meting {
    constructor(site: string);
    format(enabled: boolean): void;
    cookie(cookie: string): void;
    playlist(id: string): Promise<string>;
    url(id: string, bitrate?: number): Promise<string>;
    lyric(id: string): Promise<string>;
    pic(id: string, size?: number): Promise<string>;
  }
}
