import { defineConfig } from "vite";

export default defineConfig({
  plugins: [{
    name: "external-unmodified-cubism-core",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith("/l2d-widget/dist/index.js")) return;
      // l2d-widget 0.1.2's bundled asm.js Core corrupts indirect calls, even for Haru.
      // Load the identical original Core as a classic script before creating a widget.
      const start = code.indexOf("(/* @__PURE__ */ e(((e, t) => {");
      const end = code.indexOf("\nfunction r(e) {");
      if (start < 0 || end <= start || !code.slice(start, end).includes("window.Live2DCubismCore = i")) {
        throw new Error("l2d-widget changed: review the Cubism Core externalization patch");
      }
      let externalized = code.slice(0, start) + code.slice(end);
      // Only hair drawables opt in (screen-color alpha < .99). The light is
      // evaluated inside Cubism's shader, so mesh alpha and clipping remain exact.
      // RGB retains its normal screen-color semantics; alpha carries light position.
      const screen = "texColor.rgb = (texColor.rgb + u_screenColor.rgb * texColor.a) - (texColor.rgb * u_screenColor.rgb);";
      if (externalized.split(screen).length !== 4) throw new Error("Review Cubism hair-light shader compatibility");
      const light = "if (u_screenColor.a < 0.99) { float band = exp(-pow((v_texCoord.x - u_screenColor.a) / 0.075, 2.0)); texColor.rgb += vec3(0.028, 0.032, 0.050) * band * texColor.a; }";
      externalized = externalized.replaceAll(screen, `${screen}\\n  ${light}`);
      const straightScreen = "texColor.rgb = (texColor.rgb + u_screenColor.rgb) - (texColor.rgb * u_screenColor.rgb);";
      if (externalized.split(straightScreen).length !== 2) throw new Error("Review Cubism blend hair-light compatibility");
      externalized = externalized.replace(straightScreen, `${straightScreen}\\n  ${light}`);
      return { code: externalized, map: null };
    },
  }],
  base: "/custom/",
  publicDir: false,
  build: {
    outDir: "source/custom",
    emptyOutDir: true,
    sourcemap: false,
    lib: {
      entry: "src/enhancements/app.ts",
      formats: ["es"],
      fileName: () => "enhancements.js",
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith(".css") ? "enhancements.css" : "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
