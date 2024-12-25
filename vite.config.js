import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/picture-of-the-day-nasa",
  plugins: [react()],
});
