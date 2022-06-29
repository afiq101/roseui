<template>
  <div class="tab-pane py-4 px-4" v-show="selectedTitle === title">
    <slot></slot>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "component-tab-item",
  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const selectedTitle = inject("selectedTitle");
    return {
      selectedTitle,
    };
  },
};
</script>

<style lang="scss" scoped></style>
