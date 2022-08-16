<template>
  <Transition name="fade-up">
    <div
      v-if="showComponent"
      class="visible flex items-center justify-between w-100 py-2 px-3 rounded-lg"
      :class="{
        'bg-blue-100  text-blue-500  ': variant === 'info',
        'bg-primary-100  text-primary-500 ': variant === 'primary',
        'bg-green-100  text-green-500  ': variant === 'success',
        'bg-orange-100  text-orange-500  ': variant === 'warning',
        'bg-red-100  text-red-500  ': variant === 'danger',
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
import { ref, onMounted } from "vue";
export default {
  name: "alert-component",
  props: {
    variant: {
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
    autoDismiss: {
      type: Boolean,
      default: false,
    },
    timer: {
      type: Number,
      default: 1000,
    },
  },
  setup(props) {
    const showComponent = ref(props.show);

    const autoDismiss = () => {
      setTimeout(() => {
        showComponent.value = false;
      }, props.timer);
    };

    onMounted(() => {
      if (props.autoDismiss) {
        autoDismiss();
      }
    });

    return { showComponent };
  },
};
</script>

<style lang="scss" scoped></style>
