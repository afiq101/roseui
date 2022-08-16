<template>
  <div
    class="collapse w-full mb-4"
    :class="{
      'border-t border-x rounded-lg': type === 'border',
    }"
    :id="`collapse-${id}`"
  >
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";

export default {
  name: "component-collapse",
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "default",
    },
  },
  setup() {
    const instance = getCurrentInstance();
    return {
      id: instance.uid,
    };
  },
};
</script>
