import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import { routes } from "./router/router";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
  mode:'history'
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
