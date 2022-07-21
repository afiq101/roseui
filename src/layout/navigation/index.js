export default [
  {
    child: [
      {
        title: "Dashboard",
        route: { name: "dashboard" },
        icon: "home",
        child: [],
      },
    ],
  },
  {
    header: "Apps & Pages",
    description: "Wonderful apps",
    child: [
      {
        title: "Pages",
        route: "page",
        icon: "book-open",
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
      {
        title: "E-commerce",
        route: { name: "ecommerce" },
        icon: "shopping-bag",
        child: [
          {
            title: "Products",
            route: { name: "ecommerce-products" },
          },
          {
            title: "Product Detail",
            route: {
              name: "ecommerce-product-detail",
              params: { sku: "P-1001" },
            },
          },
          // {
          //   title: "Wishlist",
          //   route: { name: "ecommerce-wishlist" },
          // },
          {
            title: "Checkout",
            route: { name: "ecommerce-checkout" },
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
        icon: "at-sign",
      },
      {
        title: "Colors",
        route: { name: "color" },
        icon: "droplet",
      },
      {
        title: "Icon",
        route: { name: "icon" },
        icon: "alert-circle",
        child: [
          {
            title: "Feather",
            route: { name: "icon-feather" },
          },
          {
            title: "Font Awesome",
            route: { name: "icon-fontawesome" },
          },
        ],
      },
      {
        title: "Component",
        route: { name: "component" },
        icon: "layers",
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
            title: "Buttons",
            route: { name: "component-button" },
          },
          {
            title: "Calendar",
            route: { name: "component-calendar" },
          },
          {
            title: "Carousel",
            route: { name: "component-carousel" },
          },
          {
            title: "Collapse",
            route: { name: "component-collapse" },
          },
          {
            title: "Dropdown",
            route: { name: "component-dropdown" },
          },
          {
            title: "Modal",
            route: { name: "component-modal" },
          },
          {
            title: "Tab",
            route: { name: "component-tab" },
          },
          {
            title: "Progress",
            route: { name: "component-progress-bar" },
          },
        ],
      },
      {
        title: "Chart",
        route: { name: "chart" },
        icon: "pie-chart",
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
  {
    header: "Forms & Tables",
    description: "Form and table component",
    child: [
      {
        title: "Form",
        route: { name: "form" },
        icon: "book",
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
              {
                title: "Input Mask",
                route: { name: "form-element-input-mask" },
              },
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
                title: "Select",
                route: { name: "form-element-input-select" },
              },
              {
                title: "File",
                route: { name: "form-element-input-file" },
              },
              {
                title: "Custom",
                route: { name: "form-element-input-custom" },
              },
              {
                title: "VCalendar",
                route: { name: "form-element-input-vcalendar" },
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
          {
            title: "Wizard",
            route: { name: "form-wizard" },
          },
        ],
      },
      {
        title: "Table",
        route: { name: "table" },
        icon: "grid",
        child: [
          {
            title: "Basic",
            route: { name: "table-basic" },
          },
          {
            title: "Advanced",
            route: { name: "table-advanced" },
          },
        ],
      },
    ],
  },
];
