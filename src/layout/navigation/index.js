export default [
  {
    header: "Apps",
    description: "Wonderful apps",
    child: [
      {
        title: "Dashboard",
        route: { name: "dashboard" },
        ficon: "home",
        child: [],
      },
      {
        title: "Pages",
        route: "page",
        ficon: "book-open",
        child: [
          {
            title: "Authentication",
            route: {
              name: "authentication",
            },
            child: [
              {
                title: "Login V1",
                route: { name: "auth-loginv1" },
              },
              {
                title: "Login V2",
                route: { name: "auth-loginv2" },
              },
              {
                title: "Register V1",
                route: { name: "auth-registerv1" },
              },
              {
                title: "Register V2",
                route: { name: "auth-registerv2" },
              },
              {
                title: "Forgot Password V1",
                route: { name: "auth-forgotpasswordv1" },
              },
              {
                title: "Forgot Password V2",
                route: { name: "auth-forgotpasswordv2" },
              },
              {
                title: "Reset Password V1",
                route: { name: "auth-resetpasswordv1" },
              },
              {
                title: "Reset Password V2",
                route: { name: "auth-resetpasswordv2" },
              },
            ],
          },
          {
            title: "Error 404",
            route: {
              name: "error-404",
            },
          },
          {
            title: "Error 500",
            route: { name: "error-500" },
          },
        ],
      },
    ],
  },
  {
    header: "UI Elements",
    description: "Component for the ui",
    child: [
      {
        title: "Typography",
        route: { name: "typography" },
        ficon: "at-sign",
      },
      {
        title: "Colors",
        route: { name: "color" },
        ficon: "droplet",
      },
      {
        title: "Component",
        route: { name: "component" },
        ficon: "layers",
        child: [
          {
            title: "Alert",
            route: { name: "component-alert" },
          },
          {
            title: "Badges",
            route: { name: "component-badges" },
          },
          {
            title: "Dropdown",
            route: { name: "component-dropdown" },
          },
        ],
      },
      {
        title: "Form",
        route: { name: "form" },
        ficon: "book",
        child: [
          {
            title: "Element",
            route: { name: "form-element" },
            child: [
              {
                title: "Input",
                route: { name: "form-element-input" },
              },
              {
                title: "Input Group",
                route: { name: "form-element-input-group" },
              },
              // {
              //   title: "Input Mask",
              //   route: { name: "form-element-input-mask" },
              // },

              {
                title: "Textarea",
                route: { name: "form-element-input-textarea" },
              },
              {
                title: "Number",
                route: { name: "form-element-input-number" },
              },
              {
                title: "Password",
                route: { name: "form-element-input-password" },
              },
              {
                title: "Date & Time",
                route: { name: "form-element-input-datetime" },
              },
              {
                title: "Radio",
                route: { name: "form-element-input-radio" },
              },
              {
                title: "Checkbox",
                route: { name: "form-element-input-checkbox" },
              },
              {
                title: "Button",
                route: { name: "form-element-input-button" },
              },
              {
                title: "Select",
                route: { name: "form-element-input-select" },
              },
              {
                title: "Vue Select",
                route: { name: "form-element-input-vueselect" },
              },
              {
                title: "TinyMCE",
                route: { name: "form-element-input-tinymce" },
              },
            ],
          },
        ],
      },
      {
        title: "Chart",
        route: { name: "chart" },
        ficon: "pie-chart",
        child: [
          {
            title: "Apex Chart",
            route: { name: "chart-apex" },
          },
          {
            title: "Chartjs",
            route: { name: "chart-chartjs" },
          },
        ],
      },
    ],
  },
];
