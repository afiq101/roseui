<template>
  <hr v-if="divider" />
  <div
    @click="clickEvent"
    class="flex items-center hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer px-4 py-2"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "component-dropdown-item",
  props: {
    divider: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(_, { emit }) {
    const clickEvent = () => {
      emit("click");
    };
    return {
      clickEvent,
    };
  },
};
</script>
