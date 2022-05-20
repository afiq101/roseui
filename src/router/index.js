import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress/nprogress";
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
router.beforeEach((to, from) => {
  // If this isn't an initial page load...
  if (from.name !== null) {
    // Start the route progress bar.
    NProgress.start();
  }

});

router.afterEach(() => {
  NProgress.done();
});

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
