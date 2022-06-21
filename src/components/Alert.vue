<template>
  <Transition name="fade-up">
    <div
      v-if="showComponent"
      class="visible flex items-center justify-between w-100 py-2 px-3 rounded-lg"
      :class="{
        'bg-blue-100  text-blue-500  ': type === 'info',
        'bg-rose-100  text-rose-500 ': type === 'primary',
        'bg-green-100  text-green-500  ': type === 'success',
        'bg-orange-100  text-orange-500  ': type === 'warning',
        'bg-red-100  text-red-500  ': type === 'danger',
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

<style lang="scss" scoped></style>
