import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/govind-portfolio/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
});
