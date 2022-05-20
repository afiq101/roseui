export default [
  {
    path: "/ui/typography",
    name: "typography",
    component: () => import("@/views/ui/Typography.vue"),
    meta: {
      title: "Typography",
      breadcrumb: [
        {
          title: "UI",
          route: { name: "ui" },
        },
        {
          title: "Typography",
          route: { name: "typography" },
        },
      ],
    },
  },
  {
    path: "/ui/color",
    name: "color",
    component: () => import("@/views/ui/Color.vue"),
    meta: {
      title: "Color",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Color",
          route: { name: "color" },
        },
      ],
    },
  },
];
