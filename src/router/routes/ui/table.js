export default [
  {
    path: "/table/basic",
    name: "table-basic",
    component: () => import("@/views/ui/table/Basic.vue"),
    meta: {
      title: "Table Basic",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Table Basic",
          route: { name: "table-basic" },
        },
      ],
    },
  },
  {
    path: "/table/advance",
    name: "table-advance",
    component: () => import("@/views/ui/table/Advance.vue"),
    meta: {
      title: "Table Advance",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Table Advance",
          route: { name: "table-advance" },
        },
      ],
    },
  },
];
