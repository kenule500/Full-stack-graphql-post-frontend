import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Swal from "sweetalert2/dist/sweetalert2.js";

import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./vue-apollo";
import "./assets/scss/main.css";
import "sweetalert2/src/sweetalert2.scss";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

window.Toast = Toast;
window.Swal = Swal;
createApp(App)
  .use(store)
  .use(router)
  .provide(DefaultApolloClient, apolloClient)
  .mount("#app");
