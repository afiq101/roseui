<template>
  <div
    class="
      inline
      whitespace-nowrap
      text-center
      rounded-lg
      w-auto
      text-white
      px-3
      py-1
    "
    :class="{
      'bg-blue-500': type === 'info',
      'bg-rose-500': type === 'primary',
      'bg-green-500': type === 'success',
      'bg-orange-400': type === 'warning',
      'bg-red-500': type === 'danger',
    }"
  >
    <vue-feather
      class="align-middle"
      v-if="icon"
      :type="icon"
      :size="iconSize"
    ></vue-feather>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "component-badges",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    icon: {
      type: String,
      default: "",
    },
    iconSize: {
      type: String,
      default: "18",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>