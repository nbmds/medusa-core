import { RouteConfig } from "vue-router";

export default [
  {
    path: "/",
    meta: { admin: true, title: "概览" },
    component: () => import("../views/Home.vue"),
  },
] as RouteConfig[];
