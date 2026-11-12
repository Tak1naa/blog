import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

export function prefixPath(value, base) {
  while (value.startsWith(base + base.slice(1))) value = base + value.slice(base.length * 2 - 1);
  if (!value.startsWith("/") || value.startsWith("//") || value === base.slice(0, -1) || value.startsWith(base)) return value;
  return base + value.slice(1);
}

// Theme helpers respect Hexo root, but theme configuration, raw Markdown and
// prebuilt enhancement modules also contain root-absolute URLs. Only rewrite
// known site namespaces; never rewrite JS regexes, third-party URLs or /cycle.
export function prefixText(text, base) {
  // Solitude's fallback helper can apply root twice to already-resolved images.
  while (text.includes(base + base.slice(1))) text = text.replaceAll(base + base.slice(1), base);
  return text.replace(/(["'`(=])\/(custom|media|vendor|api|css|js|img|posts|archives|categories|tags|links|about|music|credits|search\.xml|404\.html|atom\.xml|sw\.js)(?=\/|["'`?#)\s]|$)/g,
    (_match, delimiter, namespace) => `${delimiter}${base}${namespace}`);
}

export function prepare(input, output, base) {
  if (!/^\/[a-z0-9-]+\/$/.test(base)) throw Error("Expected one absolute subpath with trailing slash");
  if (!existsSync(join(input, "index.html"))) throw Error("Generate Hexo output first");
  const destination = join(output, base);
  if (existsSync(destination)) throw Error("Use a new immutable release destination");
  mkdirSync(output, { recursive: true });
  cpSync(input, destination, { recursive: true, dereference: false });
  const transform = value => typeof value === "string" ? prefixPath(value, base)
    : Array.isArray(value) ? value.map(transform)
      : value && typeof value === "object" ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, transform(item)])) : value;
  let files = 0;
  function walk(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const filename = join(directory, entry.name);
      if (entry.isSymbolicLink()) throw Error("No symlinks in deployment assets");
      if (entry.isDirectory()) walk(filename);
      else if (/\.(html|css|js|mjs|json|xml|svg)$/.test(entry.name)) {
        const original = readFileSync(filename, "utf8");
        const text = entry.name.endsWith(".json") ? JSON.stringify(transform(JSON.parse(original)), null, 2) : prefixText(original, base);
        writeFileSync(filename, text);
        files++;
      }
    }
  }
  walk(destination);
  console.log(`Prepared ${files} text assets under ${base}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const [, , input, output, base = "/blog/"] = process.argv;
  if (!input || !output) throw Error("Usage: node tools/prepare-subpath.mjs INPUT OUTPUT /blog/");
  prepare(resolve(input), resolve(output), base);
}
