import Home from "../views/Home.vue";
import CartList from "../views/CartList.vue";

export const routes = [
  {
    path: "",
    component: Home,
    name: "home",
  },
  {
    path: "/cart",
    component: CartList,
    name: "cart",
  },
];
