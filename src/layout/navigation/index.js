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
            title: "Error 404",
            route: {
              name: "error-404",
            },
          },
          {
            title: "Error 504",
            route: { name: "error-504" },
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
