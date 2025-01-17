import { createApp } from "vue";
import "primeicons/primeicons.css";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router).mount("#app");
