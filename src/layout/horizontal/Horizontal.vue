<template>
  <div>
    <rs-header></rs-header>
    <rs-top-menu></rs-top-menu>
    <div class="content-page">
      <slot />
    </div>
    <rs-footer></rs-footer>
  </div>
</template>

<script>
import RsHeader from "@/layout/components/Header.vue";
import RsTopMenu from "@/layout/components/TopMenu.vue";
import RsFooter from "@/layout/components/Footer.vue";

export default {
  name: "layout-horizontal",
  inheritAttrs: false,
  components: {
    RsHeader,
    RsTopMenu,
    RsFooter,
  },
  setup() {
    return {};
  },
};
</script>