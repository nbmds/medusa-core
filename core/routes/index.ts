import Vue from "vue";
import Router from "vue-router";
import baseRoutes from "./routes";
import config from "../config";

Vue.use(Router);

export default routeModule => {
  const router = new Router({
    mode: "history",
    routes: baseRoutes.concat(routeModule),
  });

  router.beforeEach((to, from, next) => {
    next();
  });

  router.afterEach((to, from) => {
    const title = to.meta.title || config.title;
    document.title = title;
  });

  return router;
};
