export default [
  {
    path: "/form/wizard",
    name: "form-wizard",
    component: () => import("@/views/ui/form/Wizard.vue"),
    meta: {
      title: "Wizard",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Wizard",
          route: { name: "form-element-wizard" },
        },
      ],
    },
  },
  {
    path: "/form/element/input",
    name: "form-element-input",
    component: () => import("@/views/ui/form/element/Input.vue"),
    meta: {
      title: "Input",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input",
          route: { name: "form-element-input" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-group",
    name: "form-element-input-group",
    component: () => import("@/views/ui/form/element/Group.vue"),
    meta: {
      title: "Input Group",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Group",
          route: { name: "form-element-input-group" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-mask",
    name: "form-element-input-mask",
    component: () => import("@/views/ui/form/element/Mask.vue"),
    meta: {
      title: "Input Mask",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Mask",
          route: { name: "form-element-input-mask" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-button",
    name: "form-element-input-button",
    component: () => import("@/views/ui/form/element/Button.vue"),
    meta: {
      title: "Input Button",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Button",
          route: { name: "form-element-input-button" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-textarea",
    name: "form-element-input-textarea",
    component: () => import("@/views/ui/form/element/Textarea.vue"),
    meta: {
      title: "Input Textarea",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Textarea",
          route: { name: "form-element-input-textarea" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-number",
    name: "form-element-input-number",
    component: () => import("@/views/ui/form/element/Number.vue"),
    meta: {
      title: "Input Number",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Number",
          route: { name: "form-element-input-number" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-password",
    name: "form-element-input-password",
    component: () => import("@/views/ui/form/element/Password.vue"),
    meta: {
      title: "Input Password",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Password",
          route: { name: "form-element-input-password" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-datetime",
    name: "form-element-input-datetime",
    component: () => import("@/views/ui/form/element/Datetime.vue"),
    meta: {
      title: "Input Datetime",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Datetime",
          route: { name: "form-element-input-datetime" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-radio",
    name: "form-element-input-radio",
    component: () => import("@/views/ui/form/element/Radio.vue"),
    meta: {
      title: "Input Radio",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Radio",
          route: { name: "form-element-input-radio" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-checkbox",
    name: "form-element-input-checkbox",
    component: () => import("@/views/ui/form/element/Checkbox.vue"),
    meta: {
      title: "Input Checkbox",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Checkbox",
          route: { name: "form-element-input-checkbox" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-select",
    name: "form-element-input-select",
    component: () => import("@/views/ui/form/element/Select.vue"),
    meta: {
      title: "Input Select",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Select",
          route: { name: "form-element-input-select" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-file",
    name: "form-element-input-file",
    component: () => import("@/views/ui/form/element/File.vue"),
    meta: {
      title: "Input File",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input File",
          route: { name: "form-element-input-file" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-custom",
    name: "form-element-input-custom",
    component: () => import("@/views/ui/form/element/Custom.vue"),
    meta: {
      title: "Input Custom",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Custom",
          route: { name: "form-element-input-custom" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-vcalendar",
    name: "form-element-input-vcalendar",
    component: () => import("@/views/ui/form/element/VCalendar.vue"),
    meta: {
      title: "Vue Calendar",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Vue Calendar",
          route: { name: "form-element-input-vcalendar" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-vueselect",
    name: "form-element-input-vueselect",
    component: () => import("@/views/ui/form/element/VueSelect.vue"),
    meta: {
      title: "Vue Select",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Vue Select",
          route: { name: "form-element-input-vueselect" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-tinymce",
    name: "form-element-input-tinymce",
    component: () => import("@/views/ui/form/element/TinyMCE.vue"),
    meta: {
      title: "TinyMCE",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "TinyMCE",
          route: { name: "form-element-input-tinymce" },
        },
      ],
    },
  },
];
