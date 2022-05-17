export default [
  {
    path: "/ui/text",
    name: "ui-text",
    component: () => import("@/views/ui/Text.vue"),
    meta: {
      title: "Text",
      breadcrumb: [
        {
          title: "UI",
          route: { name: "ui" },
        },
        {
          title: "Text",
          route: { name: "ui-text" },
        },
      ],
    },
  },
];
