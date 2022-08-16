<template>
  <div v-if="layoutType === 'vertical'" class="layout-wrapper v-layout h-100">
    <Vertical>
      <slot />
    </Vertical>
  </div>
  <div v-if="layoutType === 'horizontal'" class="layout-wrapper h-layout h-100">
    <Horizontal>
      <slot />
    </Horizontal>
  </div>
</template>

<script>
import { computed } from "vue";
import state from "@/store";
import Vertical from "@/layout/vertical/Vertical.vue";
import Horizontal from "@/layout/horizontal/Horizontal.vue";

export default {
  name: "layout-component",
  components: {
    Vertical,
    Horizontal,
  },
  setup() {
    // Computed layout changes
    const layoutType = computed(() => {
      return state.getters.layoutType;
    });

    return {
      layoutType,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>