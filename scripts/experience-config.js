"use strict";

const { z } = require("zod");

const mediaPath = z.string().min(1).refine(
  (value) => value.startsWith("/") || /^https?:\/\//.test(value),
  "config HTTP(S) URL",
);

const experienceSchema = z.object({
  version: z.number().int().positive(),
  site: z.object({
    homePath: z.string().startsWith("/"),
    title: z.string().min(1),
    subtitle: z.array(z.object({
      text: z.string().min(3).max(60),
      ja: z.string().min(1).max(100).optional(),
      originalSource: z.url().startsWith("https://").optional(),
      work: z.string().min(1),
      character: z.string().min(1),
      source: z.url().startsWith("https://"),
    })).min(1).refine((items) => new Set(items.map((item) => item.text)).size === items.length,
      "config"),
  }),
  background: z.object({
    defaultMode: z.enum(["wallpaper", "video"]),
    intervalMs: z.number().int().min(3000),
    transitionMs: z.number().int().min(200),
    overlayOpacity: z.number().min(0).max(0.85),
    wallpapers: z.array(z.object({ src: mediaPath, alt: z.string() })).min(1),
    video: z.object({
      enabled: z.boolean(),
      sources: z.array(z.object({ src: mediaPath, type: z.string().min(1) })),
      poster: mediaPath,
      timeoutMs: z.number().int().min(1000).max(30000),
    }),
  }),
  music: z.object({
    enabled: z.boolean(),
    apiBase: z.string().startsWith("/"),
    initialVolume: z.number().min(0).max(1),
    order: z.enum(["list", "loop", "single", "random"]),
    localTracks: z.array(z.object({
      id: z.string().min(1),
      source: z.literal("local"),
      title: z.string().min(1),
      artists: z.array(z.string().min(1)).min(1),
      url: mediaPath,
      cover: mediaPath.optional(),
      lyric: mediaPath.optional(),
    })),
  }),
  live2d: z.object({
    enabled: z.boolean(),
    defaultEnabled: z.boolean().default(false),
    modelPaths: z.array(mediaPath).min(1),
    welcomeMessages: z.array(z.string()),
    idleMessages: z.array(z.string()),
    videos: z.object({ stretch: mediaPath.optional(), think: mediaPath.optional(), look: mediaPath.optional() }).optional(),
  }),
  effects: z.object({
    enabled: z.boolean(),
    typewriter: z.boolean(),
    sakura: z.boolean(),
    maxParticles: z.number().int().min(0).max(80),
  }),
  mobile: z.object({
    breakpoint: z.number().int().min(480).max(1200),
    live2d: z.boolean(),
    video: z.boolean(),
    carousel: z.boolean(),
  }),
});

hexo.extend.generator.register("experience-config", function generateExperienceConfig(locals) {
  const input = locals.data.experience;
  const parsed = experienceSchema.safeParse({
    ...input,
    site: { ...input.site, subtitle: locals.data.anime_quotes },
  });
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    throw new Error(`source/_data/experience.yml config:\n${issues}`);
  }

  const fs = require("fs");
  const path = require("path");
  const localesDir = path.join(hexo.source_dir, "_data", "locales");
  const localePacks = [];
  const routes = [];
  if (fs.existsSync(localesDir)) {
    for (const file of fs.readdirSync(localesDir).sort()) {
      if (!file.endsWith(".json")) continue;
      const code = file.slice(0, -5);
      try {
        const content = fs.readFileSync(path.join(localesDir, file), "utf8");
        const raw = JSON.parse(content);
        if (raw && typeof raw.label === "string") {
          const url = `/custom/locales/${file}`;
          localePacks.push({ code, label: raw.label, url });
          routes.push({ path: `custom/locales/${file}`, data: content });
        }
      } catch {
        // Ignore malformed locale pack
      }
    }
  }

  routes.push({
    path: "custom/config.json",
    data: JSON.stringify({
      ...parsed.data,
      i18n: {
        defaultLocale: "en",
        locales: localePacks,
      },
    }, null, 2),
  });

  return routes;
});
