import axios from "axios";
import { createApp } from "vue";
import App from "./App.vue";
import installElementPlus from "./plugins/element";
import router from "./router";
import store from "./store";

const app = createApp(App);
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://121.43.232.82:8080/api";
// axios.defaults.baseURL = "http://localhost:8080/api";
app.config.globalProperties.$axios = axios;
installElementPlus(app);
app
  .use(store)
  .use(router)
  .mount("#app");
