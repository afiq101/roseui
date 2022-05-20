<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header>
        <h5>Default Alert</h5>
      </template>
      <template #body>
        <p class="mb-2">Use the <code>rs-alert</code> to show alert.</p>
        <rs-alert type="primary" class="mb-4">Hi, this is a primary alert!</rs-alert>
        <rs-alert type="info" class="mb-4">Hi, this is an info alert!</rs-alert>
        <rs-alert type="success" class="mb-4">Hi, this is a success alert!</rs-alert>
        <rs-alert type="warning" class="mb-4">Hi, this is a warning alert!</rs-alert>
        <rs-alert type="danger" class="mb-4">Hi, this is a danger alert!</rs-alert>
        <button
          class="text-sm border border-slate-200 py-1 px-3 rounded-md"
          @click="showCode ? (showCode = false) : (showCode = true)"
        >
          Show Code
        </button>
        <transition name="fade">
          <div v-if="showCode" v-highlight>
            <perfect-scrollbar style="height: 300px">
              <pre class="language-html shadow-none">
            <code>
              &lt;template&gt; 
                &lt;rs-alert type="primary"&gt;Hi, this is a primary alert!&lt;/rs-alert&gt;
                &lt;rs-alert type="info"&gt;Hi, this is an info alert!&lt;/rs-alert&gt;
                &lt;rs-alert type="success"&gt;Hi, this is a success alert!&lt;/rs-alert&gt;
                &lt;rs-alert type="warning"&gt;Hi, this is a warning alert!&lt;/rs-alert&gt;
                &lt;rs-alert type="danger"&gt;Hi, this is a danger alert!&lt;/rs-alert&gt;
              &lt;/template&gt;

              &lt;script&gt; 
                import RsAlert from "@/components/Alert.vue";

                export default {
                  components: {
                    RsAlert,
                  },
                  setup() {
                    return {};
                  },
                };
              &lt;/script&gt;
            </code>
          </pre>
            </perfect-scrollbar>
          </div>
        </transition>
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
    // console.log(showCode);
    return {
      showCode,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>