import { RouteConfig } from "vue-router";

export default [
  {
    path: "/test",
    name: "TestPage",
    meta: {
      title: "测试页面",
      icon: "",
    },
    component: () => import("./TestPage.vue"),
  },
] as RouteConfig[];
