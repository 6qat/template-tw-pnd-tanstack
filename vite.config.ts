import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import stylex from "vite-plugin-stylex";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [stylex(), TanStackRouterVite(), react(), tsconfigPaths()],
});
