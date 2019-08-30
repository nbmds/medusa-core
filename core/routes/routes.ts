import { RouteConfig } from "vue-router";

export default [
  {
    path: "/",
    meta: { admin: true },
    children: [
      {
        path: "",
        name: "Home",
        meta: {
          title: "概览",
          icon: "",
        },
        component: () => import("../views/Home.vue"),
      },
    ],
  },
] as RouteConfig[];
