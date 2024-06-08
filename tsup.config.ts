import { defineConfig } from "tsup";

export default defineConfig({
  target: "es2020",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true, // d.ts
  minify: false,
  treeshake: true,
});
