import { createRouter, createWebHistory } from "vue-router";
import dashboardRoute from "./routes/dashboard";
import uiRoute from "./routes/ui";
import errorRoute from "./routes/error";

const routes = [
  { path: "/", redirect: { name: "dashboard" } },
  ...dashboardRoute,
  ...uiRoute,
  ...errorRoute,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Make user authentication available to all routes
// router.beforeEach((to, from) => {
//   console.log(to);
//   console.log(from);
// });

// router.beforeResolve((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   try {
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// });

export default router;
