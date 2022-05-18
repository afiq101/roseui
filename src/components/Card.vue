<template>
  <div
    class="
      bg-white
      dark:bg-slate-800 dark:text-white
      rounded-md
      transition-all
      mb-5
      duration-300
      shadow-md shadow-slate-200
      dark:shadow-slate-900
    "
  >
    <header v-if="!!$slots.header" class="text-xl p-5 font-medium">
      <slot name="header"></slot>
    </header>
    <main><slot></slot></main>
    <div class="px-5 pb-5">
      <slot v-if="!!$slots.body" name="body"></slot>
    </div>
    <footer v-if="!!$slots.footer" class="px-5 pb-5">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "card-component",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>