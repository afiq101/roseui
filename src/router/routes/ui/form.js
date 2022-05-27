export default [
  {
    path: "/form/element/input",
    name: "form-element-input",
    component: () => import("@/views/ui/form/element/Input.vue"),
    meta: {
      title: "Form Input",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Form Input",
          route: { name: "form-element-input" },
        },
      ],
    },
  },
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
