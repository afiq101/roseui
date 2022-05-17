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
            title: "eCommerce",
            route: {
              name: "dashboard-ecommerce",
              params: { type: "ecommerce" },
            },
          },
          {
            title: "Analytics",
            route: { name: "dashboard-analytics" },
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
        title: "Text",
        route: { name: "ui-text" },
        ficon: "",
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
        ],
      },
      {
        title: "Form",
        route: { name: "form" },
        ficon: "book",
        child: [
          {
            title: "Basic",
            route: { name: "form-basic" },
          },
          {
            title: "Advance",
            route: { name: "form-advance" },
          },
        ],
      },
    ],
  },
];
