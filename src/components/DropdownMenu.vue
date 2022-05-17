<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "dropdown-component",
  props: {
    menu: {
      type: Array,
      required: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>