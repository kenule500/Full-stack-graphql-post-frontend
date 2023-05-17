import { createRouter, createWebHistory } from "vue-router";
import PublicRoutes from "./public";

import AuthRoutes from "./authRouter";
import DashboardRoutes from "./dashboard";
import store from "@/store";

const routes = [AuthRoutes, DashboardRoutes, ...PublicRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["Auth/isAuth"];
  if (to.matched.some((data) => data.meta.requiresAuth)) {
    if (!isLoggedIn) {
      store.dispatch("Auth/logoutUser");
      next({ path: "/auth/login", query: { redirect: to.fullPath } });
    } else next();
  } else if (to.matched.some((data) => data.meta.requiresGuest)) {
    if (isLoggedIn) {
      next({ path: "/dashboard", query: { redirect: to.fullPath } });
    } else next();
  } else next();
});

export default router;
