import "./style.css";
import App from "./App.vue";
import { ViteSSG } from "vite-ssg/single-page";
import posthogPlugin from "./posthog.js";

// `export const createApp` is required
export const createApp = ViteSSG(App, ({ app }) => {
  app.use(posthogPlugin);
});
