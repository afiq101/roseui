export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/Dashboard.vue"),
    meta: {
      auth: true,
      role: ["admin", "user"],
    },
  },
];
