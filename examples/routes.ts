import { RouteConfig } from "vue-router";

export default [
  {
    path: "/test",
    name: "TestPage",
    meta: {
      title: "概览",
      icon: "",
    },
    component: () => import("./TestPage.vue"),
  },
] as RouteConfig[];