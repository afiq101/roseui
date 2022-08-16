<template>
  <ul
    class="menu-content hide transition-all duration-300"
    :style="indentStyle"
  >
    <li
      v-for="(item, index) in menuItem"
      :key="index"
      @click.stop="
        item.child === undefined || item.child.length === 0
          ? navigateMenu(item.route)
          : openMenu($event)
      "
    >
      <a
        class="flex items-center px-4 py-3 mx-3 rounded-lg cursor-pointer"
        style="transition: margin 0.2s ease-in-out"
        :class="activeMenu(item.route.name)"
      >
        <span class="mx-4 font-normal">{{ item.title }}</span>
        <vue-feather
          v-if="item.child && item.child.length > 0"
          class="ml-auto"
          type="chevron-right"
          size="18"
        ></vue-feather>
      </a>
      <RsMenuChildItems
        v-if="item.child"
        :items="item.child"
        :indent="indent + 0.1"
        @navigateMenu="navigateMenu"
        @openMenu="openMenu"
        @activeMenu="activeMenu"
      ></RsMenuChildItems>
    </li>
  </ul>
</template>

<script>
import { ref, computed } from "vue";
import state from "@/store"
import router from "@/router";

export default {
  name: "RsMenuChildItems",
  emits: ["navigateMenu", "openMenu"],
  props: {
    items: {
      type: Array,
      required: true,
    },
    indent: {
      type: Number,
      required: false,
      default: 0.1,
    },
  },
  setup(props, { emit }) {
    const menuOpen = ref(false);
    const indent = ref(props.indent);

    // Toggle Open/Close menu
    function navigateMenu(route) {
      emit("navigateMenu", route);
    }

    // Toggle Open/Close menu
    function openMenu(event) {
      emit("openMenu", event);
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

    const indentStyle = computed(() => {
      if(state.getters.darkMode) return { "background-color": `rgba(18, 24, 37, ${indent.value})` };
      else return { "background-color": `rgba(226, 232, 240, ${indent.value})` };
    });

    return {
      menuItem: props.items ? props.items : [],
      menuOpen,
      indentStyle,
      navigateMenu,
      openMenu,
      activeMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>