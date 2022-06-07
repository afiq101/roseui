export default [
  {
    path: "/auth/login-v1",
    name: "auth-loginv1",
    component: () => import("@/views/authentication/LoginV1.vue"),
  },
  {
    path: "/auth/login-v2",
    name: "auth-loginv2",
    component: () => import("@/views/authentication/LoginV2.vue"),
  },
  {
    path: "/auth/register-v1",
    name: "auth-registerv1",
    component: () => import("@/views/authentication/RegisterV1.vue"),
  },
  {
    path: "/auth/register-v2",
    name: "auth-registerv2",
    component: () => import("@/views/authentication/RegisterV2.vue"),
  },
  {
    path: "/auth/forgotpassword-v1",
    name: "auth-forgotpasswordv1",
    component: () => import("@/views/authentication/ForgotPasswordV1.vue"),
  },
  {
    path: "/auth/forgotpassword-v2",
    name: "auth-forgotpasswordv2",
    component: () => import("@/views/authentication/ForgotPasswordV2.vue"),
  },
  {
    path: "/auth/resetpassword-v1",
    name: "auth-resetpasswordv1",
    component: () => import("@/views/authentication/ResetPasswordV1.vue"),
  },
  {
    path: "/auth/resetpassword-v2",
    name: "auth-resetpasswordv2",
    component: () => import("@/views/authentication/ResetPasswordV2.vue"),
  },
];
