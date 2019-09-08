import { RouteConfig } from "vue-router";

export default [
  {
    path: "/test",
    meta: {
      title: "测试",
      icon: "",
    },
    component: () => import("./views/TestLayout.vue"),
    children: [
      {
        path: "",
        name: "TestPage",
        meta: {
          title: "测试页面",
          icon: "",
        },
        component: () => import("./views/TestPage.vue"),
      },
    ],
  },
] as RouteConfig[];
