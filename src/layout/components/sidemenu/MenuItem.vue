<template>
  <div v-for="(item, index) in menuItem" :key="index">
    <div
      v-if="item.header"
      class="text-left font-normal text-xs mx-6 mt-5 mb-2"
    >
      <span class="uppercase text-primary-500 dark:text-primary-400">
        {{ item.header ? item.header : "" }}
      </span>
      <p class="text-gray-500 dark:text-secondary">
        {{ item.description ? item.description : "" }}
      </p>
    </div>
    <ul class="navigation-menu">
      <li
        class="navigation-item"
        v-for="(item2, index2) in item.child"
        :key="index2"
        @click="
          item2.child === undefined || item2.child.length === 0
            ? navigateMenu(item2.route)
            : openMenu($event)
        "
      >
        <a
          class="flex items-center px-4 py-3 mx-3 rounded-lg cursor-pointer"
          style="transition: margin 0.2s ease-in-out"
          :class="activeMenu(item2.route.name)"
        >
          <vue-feather
            v-if="item2.icon"
            :type="item2.icon"
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
        <rs-menu-child-items
          v-if="item2.child"
          :items="item2.child"
          @navigateMenu="navigateMenu"
          @openMenu="openMenu"
          @activeMenu="activeMenu"
        ></rs-menu-child-items>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router";
import RsMenuChildItems from "./MenuChildItem.vue";

export default {
  name: "RsMenuItems",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    RsMenuChildItems,
  },
  setup(props) {
    const menuOpen = ref(false);

    // Navigate to route
    function navigateMenu(route) {
      try {
        router.push(route);
      } catch (e) {
        router.push({ name: "error-404" });
      }
    }

    // Toggle show and hide menu content
    function openMenu(event) {
      const target = event.currentTarget;
      try {
        target.querySelector("a").classList.toggle("nav-open");
        target.querySelector("ul").classList.toggle("hide");
      } catch (e) {
        console.log(e);
        return;
      }
    }

    // Active menu
    function activeMenu(routeName) {
      return router.currentRoute.value.name == routeName
        ? ` shadow-lg
            shadow-primary-700/30
            dark:shadow-primary-500/10
            text-white
            bg-primary-400
            active-menu`
        : `hover:ml-4`;
    }

    return {
      menuItem: props.items ? props.items : [],
      menuOpen,
      navigateMenu,
      openMenu,
      activeMenu,
    };
  },
};
</script>

<style lang="scss" scoped></style>
