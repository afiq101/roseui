<template>
  <div v-highlight>
    <pre class="language-html">
        <code>
         &lt;template&gt;
          asdasd
         &lt;/template&gt;
        </code>
      </pre>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>