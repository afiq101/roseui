export default [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/dashboard/Dashboard.vue"),
    meta: {
      auth: true,
      role: ["*"],
    },
  },
];
