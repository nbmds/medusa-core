import { RouteConfig } from "vue-router";

export default [
  {
    path: "/",
    meta: { admin: true, title: "概览" },
    children: [
      {
        path: "",
        name: "Home",
        meta: {
          title: "子",
          icon: "",
        },
        component: () => import("../views/Home.vue"),
      },
      {
        path: "test1",
        name: "Test",
        meta: {
          title: "子",
          icon: "",
        },
        component: () => import("../views/Home.vue"),
      },
    ],
  },
] as RouteConfig[];
