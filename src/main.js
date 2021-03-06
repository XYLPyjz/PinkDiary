import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Vant from "vant";

import { Popup } from "vant";

Vue.use(Popup);

import "vant/lib/index.css";

import "./assets/stylus/reset.stylus";

import "amfe-flexible";

// Vue.use(Vant);

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
