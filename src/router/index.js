import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import NProgress from "nprogress/nprogress";
import dashboardRoute from "./routes/dashboard";
import authRoute from "./routes/auth";
import appsRoute from "./routes/apps";
import uiRoute from "./routes/ui";
import errorRoute from "./routes/error";

const routes = [
  { path: "/", redirect: { name: "dashboard" } },
  ...dashboardRoute,
  ...appsRoute,
  ...uiRoute,
  ...authRoute,
  ...errorRoute,
];

const router = createRouter({
  history:
    process.env.VUE_APP_ENV == "production"
      ? createWebHistory()
      : createWebHashHistory(process.env.VUE_APP_BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
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
