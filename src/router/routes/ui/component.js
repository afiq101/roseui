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
  {
    path: "/component/button",
    name: "component-button",
    component: () => import("@/views/ui/component/Button.vue"),
    meta: {
      title: "Button",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Button",
          route: { name: "component-button" },
        },
      ],
    },
  },
  {
    path: "/component/calendar",
    name: "component-calendar",
    component: () => import("@/views/ui/component/Calendar.vue"),
    meta: {
      title: "Calendar",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Calendar",
          route: { name: "component-calendar" },
        },
      ],
    },
  },
  {
    path: "/component/carousel",
    name: "component-carousel",
    component: () => import("@/views/ui/component/Carousel.vue"),
    meta: {
      title: "Carousel",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Carousel",
          route: { name: "component-carousel" },
        },
      ],
    },
  },
  {
    path: "/component/collapse",
    name: "component-collapse",
    component: () => import("@/views/ui/component/Collapse.vue"),
    meta: {
      title: "Collapse",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Collapse",
          route: { name: "component-collapse" },
        },
      ],
    },
  },
  {
    path: "/component/dropdown",
    name: "component-dropdown",
    component: () => import("@/views/ui/component/Dropdown.vue"),
    meta: {
      title: "Dropdown",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Dropdown",
          route: { name: "component-dropdown" },
        },
      ],
    },
  },
  {
    path: "/component/modal",
    name: "component-modal",
    component: () => import("@/views/ui/component/Modal.vue"),
    meta: {
      title: "Modal",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Modal",
          route: { name: "component-modal" },
        },
      ],
    },
  },
  {
    path: "/component/tab",
    name: "component-tab",
    component: () => import("@/views/ui/component/Tab.vue"),
    meta: {
      title: "Tab",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Tab",
          route: { name: "component-tab" },
        },
      ],
    },
  },
  {
    path: "/component/progress",
    name: "component-progress-bar",
    component: () => import("@/views/ui/component/ProgressBar.vue"),
    meta: {
      title: "Progress",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Progress",
          route: { name: "progress-bar" },
        },
      ],
    },
  },
];
