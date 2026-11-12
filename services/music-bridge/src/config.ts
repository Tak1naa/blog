import { z } from "zod";

const schema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  NETEASE_PLAYLIST_ID: z.preprocess(value => value === "" ? undefined : value, z.string().regex(/^\d+$/).optional()),
  NETEASE_COOKIE: z.string().optional(),
  UPSTREAM_TIMEOUT_MS: z.coerce.number().int().min(1000).max(30000).default(8000),
  METADATA_TTL_SECONDS: z.coerce.number().int().min(60).default(21600),
  STALE_TTL_SECONDS: z.coerce.number().int().min(300).default(604800),
});

export type BridgeConfig = z.infer<typeof schema>;

export function loadConfig(environment: NodeJS.ProcessEnv = process.env): BridgeConfig {
  return schema.parse(environment);
}
