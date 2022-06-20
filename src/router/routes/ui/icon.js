//icon-feather
//icon-fontawesome

export default [
  {
    path: "/icon/feather",
    name: "icon-feather",
    component: () => import("@/views/ui/icon/Feather.vue"),
    meta: {
      title: "Icon Feather",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Feather",
          route: { name: "icon-feather" },
        },
      ],
    },
  },
  {
    path: "/icon/fontawesome",
    name: "icon-fontawesome",
    component: () => import("@/views/ui/icon/FontAwesome.vue"),
    meta: {
      title: "Font Awesome",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Font Awesome",
          route: { name: "icon-fontawesome" },
        },
      ],
    },
  },
];
