<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header>
        <div class="flex item-center">
          <h3 class="flex-grow">Default</h3>
          <div class="flex-shrink-0">
            <button>Show Code</button>
          </div>
        </div>
      </template>
      <template #body>
        <p class="mb-2">Use the <code>rs-alert</code> to show alert.</p>
        <rs-alert class="mb-4">Hi, this is an info alert!</rs-alert>
        <rs-alert type="primary" class="mb-4">
          Hi, this is an primary alert!
        </rs-alert>
        <rs-alert type="success" class="mb-4">
          Hi, this is an success alert!
        </rs-alert>
        <rs-alert type="warning" class="mb-4">
          Hi, this is an warning alert!
        </rs-alert>
        <rs-alert type="danger" class="mb-4">
          Hi, this is an danger alert!
        </rs-alert>
        <div v-highlight>
          <pre class="language-html">
            <code>
              &lt;template&gt; 
              
              &lt;/template&gt;

              &lt;script&gt; 
                import RsAlert from "@/components/Alert.vue";
              &lt;/script&gt;
            </code>
          </pre>
        </div>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import { ref } from "vue";
import RsAlert from "@/components/Alert.vue";

export default {
  name: "component-alert",
  components: {
    RsAlert,
  },
  setup() {
    const showCode = ref(false);
    console.log(showCode);
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>