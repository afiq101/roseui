export default [
  {
    path: "/ecommerce/products",
    name: "ecommerce-products",
    component: () => import("@/views/apps/ecommerce/Products.vue"),
    meta: {
      title: "Products",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Products",
          route: { name: "ecommerce-products" },
        },
      ],
    },
  },
  {
    path: "/ecommerce/product/:sku",
    name: "ecommerce-product-detail",
    component: () => import("@/views/apps/ecommerce/ProductDetail.vue"),
    meta: {
      title: "Product Details",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Products",
          route: { name: "ecommerce-products" },
        },
        {
          title: "Product Details",
          route: { name: "ecommerce-product-detail" },
        },
      ],
    },
  },
  {
    path: "/ecommerce/wishlist",
    name: "ecommerce-wishlist",
    component: () => import("@/views/apps/ecommerce/Wishlist.vue"),
  },
  {
    path: "/ecommerce/checkout",
    name: "ecommerce-checkout",
    component: () => import("@/views/apps/ecommerce/Checkout.vue"),
    meta: {
      title: "Checkout",
      breadcrumb: [
        {
          title: "Home",
          route: { name: "dashboard" },
        },
        {
          title: "Checkout",
          route: { name: "ecommerce-checkout" },
        },
      ],
    },
  },
];
