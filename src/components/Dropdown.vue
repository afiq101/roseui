<template>
  <div class="relative" v-click-away="closeMenu">
    <button
      @click="toggle"
      class="px-6 py-2.5 bg-rose-400 hover:bg-rose-500 focus:bg-rose-500 active:bg-rose-600 text-white rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg active:text-white transition duration-150 ease-in-out flex menuItems-center whitespace-nowrap"
      type="button"
    >
      {{ props.title }}
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="caret-down"
        class="w-3 ml-2"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
        ></path>
      </svg>
    </button>
    <transition name="fade">
      <section v-show="isOpen">
        <div
          class="min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
          v-if="!props.menuItems || props.menuItems.length === 0"
        >
          <slot class="cursor-pointer" name="content"></slot>
        </div>
        <div v-else>
          <ul
            class="min-w-max absolute bg-white text-base z-50 float-left py-2 text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
          >
            <li v-for="(value, index) in props.menuItems" :key="index">
              <a
                @click="navigateMenu(value.route)"
                class="cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                >{{ value.label }}</a
              >
            </li>
          </ul>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router";
export default {
  name: "component-dropdown",
  props: {
    title: {
      type: String,
      default: "Default",
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const isOpen = ref(false);

    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    const closeMenu = () => {
      isOpen.value = false;
    };

    const navigateMenu = (route) => {
      try {
        router.push(route);
      } catch (e) {
        router.push({ name: "error-404" });
      }
    };

    return {
      props,
      toggle,
      isOpen,
      navigateMenu,
      closeMenu,
    };
  },
};
</script>

<style lang="scss" scoped></style>
