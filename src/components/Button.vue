<template>
  <button
    class="w-fit rounded-lg flex justify-center items-center h-fit"
    :class="{
      'text-xs px-4 py-1': size === 'sm',
      'text-sm px-8 py-2.5': size === 'md',
      'text-base px-10 py-4': size === 'lg',

      // Filled Button
      'text-white bg-rose-400 hover:bg-rose-500': variant === 'primary',
      'text-white bg-blue-500 hover:bg-blue-600': variant === 'info',
      'text-white bg-green-500 hover:bg-green-600': variant === 'success',
      'text-white bg-orange-400 hover:bg-orange-500': variant === 'warning',
      'text-white bg-red-500 hover:bg-red-600': variant === 'danger',

      // Outline Button
      'text-rose-400 border border-rose-400 hover:bg-rose-50':
        variant === 'primary-outline',
      'text-blue-500 border border-blue-500 hover:bg-blue-50':
        variant === 'info-outline',
      'text-green-500 border border-green-500 hover:bg-green-50':
        variant === 'success-outline',
      'text-orange-400 border border-orange-400 hover:bg-orange-50':
        variant === 'warning-outline',
      'text-red-500 border border-red-500 hover:bg-red-50':
        variant === 'danger-outline',

      //Text Button
      'text-rose-400 hover:bg-rose-50': variant === 'primary-text',
      'text-blue-500 hover:bg-blue-50': variant === 'info-text',
      'text-green-500 hover:bg-green-50': variant === 'success-text',
      'text-orange-400 hover:bg-orange-50': variant === 'warning-text',
      'text-red-500 hover:bg-red-50': variant === 'danger-text',
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "component-button",
  props: {
    type: {
      type: String,
      default: "fill",
    },
    variant: {
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

<style lang="scss" scoped></style>
