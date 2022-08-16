export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/Dashboard.vue"),
    meta: {
      title: "Dashboard",
      breadcrumb: [
        {
          title: "Dashboard",
          route: { name: "dashboard" },
        },
      ],
    },
  },
];
