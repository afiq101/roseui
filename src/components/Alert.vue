<template>
  <Transition name="fade-up">
    <div
      v-if="showComponent"
      class="
        visible
        flex
        items-center
        justify-between
        w-100
        py-2
        px-3
        rounded-md
      "
      :class="{
        'bg-blue-100 dark:bg-blue-700 text-blue-500 dark:text-blue-100 ':
          type === 'info',
        'bg-rose-100 dark:bg-rose-700 text-rose-500 dark:text-rose-100 ':
          type === 'primary',
        'bg-green-100 dark:bg-green-700 text-green-500 dark:text-green-100 ':
          type === 'success',
        'bg-orange-100 dark:bg-orange-700 text-orange-500 dark:text-orange-100 ':
          type === 'warning',
        'bg-red-100 dark:bg-red-700 text-red-500 dark:text-red-100 ':
          type === 'danger',
      }"
    >
      <slot />
      <button @click="showComponent = false">
        <vue-feather type="x" size="14"></vue-feather>
      </button>
    </div>
  </Transition>
</template>

<script>
import { ref } from "vue";
export default {
  name: "alert-component",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const showComponent = ref(props.show);
    return { showComponent };
  },
};
</script>

<style lang="scss" scoped>
</style>