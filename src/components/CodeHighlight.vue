<template>
  <div v-highlight>
    <perfect-scrollbar style="height: 400px">
      <pre class="shadow-none" :class="`language-${code ? code : 'html'}`">
            <code>
              <slot></slot>
            </code>
          </pre>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: "html",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>