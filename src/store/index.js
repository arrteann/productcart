import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saved: false,
    msg: "",
    products: [],
  },
  mutations: {
    pushProd: (state, payload) => {
      state.products.push(payload);
      state.saved = true;
    },
    removeProd : (state,payload) => {
      state.products.splice(payload,1);
    }
  },
  actions: {},
});

// TODO:: USE LOCALSTORAGE