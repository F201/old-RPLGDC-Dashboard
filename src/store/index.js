import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import recruitment from "./recruitment";
Vue.prototype.$axios = axios;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    recruitment
  }
});
