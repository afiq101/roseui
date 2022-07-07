export default [
  {
    path: "/ecommerce/products",
    name: "ecommerce-products",
    component: () => import("@/views/apps/ecommerce/Products.vue"),
  },
  {
    path: "/ecommerce/product/detail",
    name: "ecommerce-product-detail",
    component: () => import("@/views/apps/ecommerce/ProductDetail.vue"),
  },
  {
    path: "/ecommerce/cart",
    name: "ecommerce-cart",
    component: () => import("@/views/apps/ecommerce/Cart.vue"),
  },
  {
    path: "/ecommerce/checkout",
    name: "ecommerce-checkout",
    component: () => import("@/views/apps/ecommerce/Checkout.vue"),
  },
];
