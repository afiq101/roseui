<template>
  <hr v-if="divider" />
  <div class="hover:bg-slate-100 cursor-pointer px-4 py-2">
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
  setup() {
    return {};
  },
};
</script>
