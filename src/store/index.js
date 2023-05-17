import { createStore } from "vuex";
import Auth from "./Auth";
import Post from "./Post";

export default createStore({
  state: {
    isAuth: true,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Post,
  },
});
