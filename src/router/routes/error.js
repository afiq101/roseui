export default [
  {
    path: "/:pathMatch(.*)*",
    name: "error-404",
    component: () => import("@/views/error/404.vue"),
  },
  {
    path: "/500",
    name: "error-500",
    component: () => import("@/views/error/404.vue"),
  },
];
