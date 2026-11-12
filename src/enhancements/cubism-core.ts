let pending: Promise<void> | undefined;

/** Keep Emscripten's runtime out of bundler transforms and load it only on desktop. */
export function loadCubismCore(): Promise<void> {
  if (pending) return pending;
  pending = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/vendor/cubism/live2dcubismcore.js";
    script.async = true;
    const timer = window.setTimeout(() => fail(), 10_000);
    const fail = () => {
      window.clearTimeout(timer);
      script.remove();
      reject(new Error("Cubism Core failed to load"));
    };
    script.onerror = fail;
    script.onload = () => { window.clearTimeout(timer); resolve(); };
    document.head.append(script);
  }).catch((error: unknown) => { pending = undefined; throw error; });
  return pending;
}
