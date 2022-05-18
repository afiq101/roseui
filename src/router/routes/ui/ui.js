export default [
  {
    path: "/ui/text",
    name: "font",
    component: () => import("@/views/ui/Font.vue"),
    meta: {
      title: "Text",
      breadcrumb: [
        {
          title: "UI",
          route: { name: "ui" },
        },
        {
          title: "Text",
          route: { name: "font" },
        },
      ],
    },
  },
];
