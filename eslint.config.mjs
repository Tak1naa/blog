import tseslint from "typescript-eslint";

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    ignores: ["public/**", "source/custom/**", "services/music-bridge/dist/**", "node_modules/**"],
  },
  {
    files: ["src/**/*.ts", "services/music-bridge/src/**/*.ts", "tests/**/*.ts", "vite.config.ts"],
    languageOptions: {
      globals: {
        AbortSignal: "readonly",
        console: "readonly",
        document: "readonly",
        Headers: "readonly",
        window: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        process: "readonly",
        Response: "readonly",
        fetch: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        HTMLCanvasElement: "readonly",
        OffscreenCanvas: "readonly",
        Worker: "readonly",
        CustomEvent: "readonly",
        MediaMetadata: "readonly",
        performance: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly"
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        hexo: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off"
    }
  },
);
