import RsLayout from "@/layout/Layout.vue";
import RsBreadcrumb from "@/layout/components/Breadcrumb.vue";
import RsCard from "@/components/Card.vue";

// Register components globally
const registerComponent = function (app) {
  app.component("rs-layout", RsLayout);
  app.component("rs-breadcrumb", RsBreadcrumb);
  app.component("rs-card", RsCard);
};

export default {
  registerComponent,
};
