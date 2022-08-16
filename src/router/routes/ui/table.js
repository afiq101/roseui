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
    name: "table-advanced",
    component: () => import("@/views/ui/table/Advanced.vue"),
    meta: {
      title: "Table Advanced",
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
