import "./style.css";
import App from "./App.vue";
import { ViteSSG } from "vite-ssg/single-page";

// `export const createApp` is required
export const createApp = ViteSSG(App, ({}) => {});
