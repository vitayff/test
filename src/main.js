import axios from "axios";
import { createApp } from "vue";
import App from "./App.vue";
import installElementPlus from "./plugins/element";
import router from "./router";
import store from "./store";

const app = createApp(App);
axios.defaults.withCredentials = true;
app.config.globalProperties.$axios = axios;
installElementPlus(app);
app
  .use(store)
  .use(router)
  .mount("#app");
