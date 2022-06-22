<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header>
        <h5>Default Alert</h5>
      </template>
      <template #body>
        <p class="mb-2">Use the <code>rs-alert</code> to show alert.</p>
        <rs-alert variant="primary" class="mb-4"
          >Hi, this is a primary alert!</rs-alert
        >
        <rs-alert variant="info" class="mb-4">Hi, this is an info alert!</rs-alert>
        <rs-alert variant="success" class="mb-4"
          >Hi, this is a success alert!</rs-alert
        >
        <rs-alert variant="warning" class="mb-4"
          >Hi, this is a warning alert!</rs-alert
        >
        <rs-alert variant="danger" class="mb-4"
          >Hi, this is a danger alert!</rs-alert
        >
        <div class="flex justify-end">
          <button
            class="text-sm border border-slate-200 py-1 px-3 rounded-lg"
            @click="showCode ? (showCode = false) : (showCode = true)"
          >
            Show Code
          </button>
        </div>
        <transition name="fade">
          <div v-show="showCode" v-highlight>
            <perfect-scrollbar style="height: 400px">
              <pre class="language-html shadow-none">
            <code>
              &lt;template&gt; 
                &lt;rs-alert variant="primary"&gt;Hi, this is a primary alert!&lt;/rs-alert&gt;
                &lt;rs-alert variant="info"&gt;Hi, this is an info alert!&lt;/rs-alert&gt;
                &lt;rs-alert variant="success"&gt;Hi, this is a success alert!&lt;/rs-alert&gt;
                &lt;rs-alert variant="warning"&gt;Hi, this is a warning alert!&lt;/rs-alert&gt;
                &lt;rs-alert variant="danger"&gt;Hi, this is a danger alert!&lt;/rs-alert&gt;
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

<style lang="scss" scoped></style>
