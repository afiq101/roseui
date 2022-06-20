<template>
  <button
    class="w-full py-2 px-3 rounded-lg flex justify-center items-center"
    :class="{
      // Filled Button
      'text-white bg-rose-400 hover:bg-rose-500':
        variant === 'primary' && type === 'fill',
      'text-white bg-blue-500 hover:bg-blue-600':
        variant === 'info' && type === 'fill',
      'text-white bg-green-500 hover:bg-green-600':
        variant === 'success' && type === 'fill',
      'text-white bg-orange-400 hover:bg-orange-500':
        variant === 'warning' && type === 'fill',
      'text-white bg-red-500 hover:bg-red-600':
        variant === 'danger' && type === 'fill',

      // Outline Button
      'text-rose-400 border border-rose-400 hover:bg-rose-50':
        variant === 'primary' && type === 'outline',
      'text-blue-500 border border-blue-500 hover:bg-blue-50':
        variant === 'info' && type === 'outline',
      'text-green-500 border border-green-500 hover:bg-green-50':
        variant === 'success' && type === 'outline',
      'text-orange-400 border border-orange-400 hover:bg-orange-50':
        variant === 'warning' && type === 'outline',
      'text-red-500 border border-red-500 hover:bg-red-50':
        variant === 'danger' && type === 'outline',

      //Text Button
      'text-rose-400 hover:bg-rose-50':
        variant === 'primary' && type === 'text',
      'text-blue-500 hover:bg-blue-50': variant === 'info' && type === 'text',
      'text-green-500 hover:bg-green-50':
        variant === 'success' && type === 'text',
      'text-orange-400 hover:bg-orange-50':
        variant === 'warning' && type === 'text',
      'text-red-500 hover:bg-red-50': variant === 'danger' && type === 'text',
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "component-badges",
  props: {
    type: {
      type: String,
      default: "fill",
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
