export default [
  {
    path: "/form/basic",
    name: "form-basic",
    component: () => import("@/views/ui/form/Basic.vue"),
    meta: {
      title: "Form Basic",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Form Basic",
          route: { name: "form-basic" },
        },
      ],
    },
  },
  {
    path: "/form/advance",
    name: "form-advance",
    component: () => import("@/views/ui/form/Advanced.vue"),
    meta: {
      title: "Form Advanced",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Form Advanced",
          route: { name: "form-advance" },
        },
      ],
    },
  },
];
