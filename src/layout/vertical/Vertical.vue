<template>
  <rs-header @toggleMenu="toggleMenuOpened"></rs-header>
  <rs-side-menu></rs-side-menu>
  <div class="content-page transition-all duration-300">
    <slot />
  </div>
  <rs-footer></rs-footer>
  <div @click="toggleMenuOpened" class="menu-overlay"></div>
</template>

<script>
import store from "@/store";
import RsHeader from "@/layout/components/Header.vue";
import RsSideMenu from "@/layout/components/SideMenu.vue";
import RsFooter from "@/layout/components/Footer.vue";

export default {
  name: "layout-vertical",
  inheritAttrs: false,
  components: {
    RsHeader,
    RsSideMenu,
    RsFooter,
  },
  setup() {
    const mobileWidth = store.getters.mobileWidth;

    function toggleMenuOpened() {
      document.querySelector(".v-layout").classList.toggle("menu-hide");
      document
        .getElementsByClassName("menu-overlay")[0]
        .classList.toggle("hide");
    }

    store.watch(
      (state, getters) => getters.windowWidth,
      (value) => {
        if (value <= mobileWidth) {
          document.querySelector(".v-layout").classList.add("menu-hide");
          document
            .getElementsByClassName("menu-overlay")[0]
            .classList.add("hide");
        } else
          document.querySelector(".v-layout").classList.remove("menu-hide");
      }
    );

    return { toggleMenuOpened };
  },
};
</script>