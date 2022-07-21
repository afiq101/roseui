<template>
  <div></div>
</template>

<script>
export default {
  name: "component-progress-bar",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "md",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>