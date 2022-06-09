export default [
  {
    path: "/form/element/input-text",
    name: "form-element-input-text",
    component: () => import("@/views/ui/form/element/InputText.vue"),
    meta: {
      title: "Input Text",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Input Text",
          route: { name: "form-element-input-text" },
        },
      ],
    },
  },
  {
    path: "/form/element/input-group",
    name: "form-element-input-group",
    component: () => import("@/views/ui/form/element/InputGroup.vue"),
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
    component: () => import("@/views/ui/form/element/InputMask.vue"),
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
    component: () => import("@/views/ui/form/element/InputButton.vue"),
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
    component: () => import("@/views/ui/form/element/InputTextarea.vue"),
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
    component: () => import("@/views/ui/form/element/InputNumber.vue"),
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
    component: () => import("@/views/ui/form/element/InputPassword.vue"),
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
    component: () => import("@/views/ui/form/element/InputDatetime.vue"),
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
    component: () => import("@/views/ui/form/element/InputRadio.vue"),
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
    component: () => import("@/views/ui/form/element/InputCheckbox.vue"),
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
    component: () => import("@/views/ui/form/element/InputSelect.vue"),
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
    path: "/form/element/input-vueselect",
    name: "form-element-input-vueselect",
    component: () => import("@/views/ui/form/element/InputVueSelect.vue"),
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
    component: () => import("@/views/ui/form/element/InputTinyMCE.vue"),
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
