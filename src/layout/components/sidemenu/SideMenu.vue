<template>
  <div
    class="
      vertical-menu
      bg-white
      dark:bg-slate-800
      text-base
      h-screen
      fixed
      w-64
      top-0
      z-50
      duration-300
      border-l-0
      shadow-md shadow-slate-200
      dark:shadow-slate-900
    "
  >
    <div class="py-2 px-4">
      <div class="flex flex-auto gap-3 justify-center items-center">
        <img
          class="h-10 w-10 block dark:hidden"
          src="@/assets/images/logo/logo.png"
          alt=""
        />
        <img
          class="h-10 w-10 hidden dark:block"
          src="@/assets/images/logo/logo-white.png"
          alt=""
        />
        <span class="text-xl font-semibold text-primary-500 dark:text-white"
          >Rose UI</span
        >
      </div>
    </div>
    <div class="flex flex-col justify-between my-6">
      <perfect-scrollbar style="max-height: 87vh">
        <rs-menu-items :items="menuItem"></rs-menu-items>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import RsMenuItems from "@/layout/components/sidemenu/MenuItem.vue";
import Menu from "@/layout/navigation";

export default {
  components: {
    RsMenuItems,
  },
  setup() {
    const menuItem = Menu;
    onMounted(() => {
      try {
        const el = document
          .querySelector(".active-menu")
          .closest(".menu-content");
        const elParent = el.parentElement.parentElement;

        if (elParent) elParent.classList.remove("hide");
        if (el) el.classList.remove("hide");
      } catch (e) {
        return;
      }
    });
    return {
      menuItem,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>