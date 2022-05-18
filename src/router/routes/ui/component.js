export default [
    {
      path: "/component/alert",
      name: "component-alert",
      component: () => import("@/views/ui/component/Alert.vue"),
      meta: {
        title: "Alert",
        breadcrumb: [
          {
            title: "Home",
            route: { name: "dashboard" },
          },
          {
            title: "Alert",
            route: { name: "component-alert" },
          },
        ],
      },
    },
    {
        path: "/component/badges",
        name: "component-badges",
        component: () => import("@/views/ui/component/Badges.vue"),
        meta: {
          title: "Badges",
          breadcrumb: [
            {
              title: "Home",
              route: { name: "dashboard" },
            },
            {
              title: "Badges",
              route: { name: "component-badges" },
            },
          ],
        },
      },
  ];
  