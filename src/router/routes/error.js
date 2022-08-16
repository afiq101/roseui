export default [
  {
    path: "/:pathMatch(.*)*",
    name: "404-page",
    component: () => import("@/views/error/404.vue"),
  },
  {
    path: "/404",
    name: "error-404",
    component: () => import("@/views/error/404.vue"),
  },
  {
    path: "/500",
    name: "error-500",
    component: () => import("@/views/error/500.vue"),
  },
];
