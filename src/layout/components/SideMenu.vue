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
      transition-all
      duration-300
      border-l-0
      shadow-md shadow-slate-200
      dark:shadow-slate-900
    "
  >
    <div class="py-2 px-4">
      <div class="flex flex-auto gap-3 justify-center items-center">
        <img class="w-12 h-12" src="@/assets/images/logo/logo.svg" alt="" />
        <span class="text-xl font-semibold text-rose-500">Rose UI</span>
      </div>
    </div>
    <div v-if="menuItem" class="flex flex-col justify-between mt-6">
      <perfect-scrollbar class="max-h-screen">
        <div v-for="(item, index) in menuItem" :key="index">
          <div class="text-left font-normal text-xs mx-6 mt-5 mb-2">
            <h2 class="uppercase text-rose-500">
              {{ item.header }}
            </h2>
            <p class="text-gray-500">
              {{ item.description }}
            </p>
          </div>
          <ul class="navigation-menu">
            <li
              class="navigation-item"
              v-for="(item2, index2) in item.child"
              :key="index2"
            >
              <a
                class="
                  flex
                  items-center
                  px-4
                  py-3
                  mx-3
                  rounded-lg
                  cursor-pointer
                "
                :class="activeMenu(item2.route.name)"
                @click="
                  item2.child === undefined || item2.child.length === 0
                    ? navigateMenu(item2.route)
                    : toggleMenuContentOpened(
                        index2 + (index == 0 ? index : index + 1),
                        $event
                      )
                "
              >
                <vue-feather
                  v-if="item2.ficon"
                  :type="item2.ficon"
                  size="18"
                ></vue-feather>
                <vue-feather v-else type="circle" size="18"></vue-feather>
                <span class="mx-3 font-normal">{{ item2.title }}</span>
                <vue-feather
                  v-if="item2.child && item2.child.length > 0"
                  class="ml-auto"
                  type="chevron-right"
                  size="18"
                ></vue-feather>
              </a>
              <ul class="menu-content hide transition-all duration-300">
                <li v-for="(item3, index3) in item2.child" :key="index3">
                  <a
                    class="
                      flex
                      items-center
                      px-4
                      py-3
                      mx-3
                      rounded-lg
                      cursor-pointer
                    "
                    :class="activeMenu(item3.route.name)"
                    @click="!item3.child ? navigateMenu(item3.route) : ''"
                  >
                    <span class="mx-4 font-normal">{{ item3.title }}</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Menu from "@/layout/navigation";
import router from "@/router";
// import layout from "@/store/layout";

export default {
  name: "side-menu-component",
  setup() {
    const menuCount = ref(0);
    const menuItem = Menu;

    onMounted(() => {
      const el = document.querySelector(".active-menu");
      try {
        el.closest(".menu-content").classList.remove("hide");
      } catch (e) {
        return;
      }
    });

    // Navigate to route
    function navigateMenu(route) {
      try {
        router.push(route);
      } catch (e) {
        return;
      }
    }

    // Toggle show and hide menu content
    function toggleMenuContentOpened(i, event) {
      const el = document.getElementsByClassName(`menu-content`);

      // Close all menu content
      Object.keys(el).forEach(function (key) {
        if (key == i) {
          event.target.parentNode.classList.toggle("menu-opened");
          el[key].classList.toggle("hide");
        } else el[key].classList.add("hide");
      });
    }

    // Active menu
    function activeMenu(routeName) {
      return router.currentRoute.value.name == routeName
        ? ` shadow-lg
            shadow-rose-500/30
            text-white
            bg-rose-400
            active-menu`
        : `hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors
            duration-300`;
    }

    return {
      menuItem: menuItem.length > 0 ? menuItem : [],
      menuCount: menuCount,
      activeMenu,
      navigateMenu,
      toggleMenuContentOpened,
    };
  },
};
</script>