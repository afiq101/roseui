export default [
  {
    path: "/chart/chartjs",
    name: "chart-chartjs",
    component: () => import("@/views/ui/chart/ChartJS.vue"),
    meta: {
      title: "ChartJS",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "ChartJS",
          route: { name: "chart-chartjs" },
        },
      ],
    },
  },
  {
    path: "/chart/apexchart",
    name: "chart-apex",
    component: () => import("@/views/ui/chart/ApexChart.vue"),
    meta: {
      title: "Apex Chart",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Apex Chart",
          route: { name: "chart-apex" },
        },
      ],
    },
  },
];
