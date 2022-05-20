<template>
  <rs-layout>
    <rs-breadcrumb />
    <!-- Default Badges -->
    <rs-card>
      <template #header>
        <h5>Default Badges</h5>
      </template>
      <template #body>
        <p class="mb-2">Use the <code>rs-badges</code> to show badges.</p>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4 gap-y-0">
          <rs-badges type="primary" class="mb-4"> Primary </rs-badges>
          <rs-badges type="info" class="mb-4"> Info </rs-badges>
          <rs-badges type="success" class="mb-4"> Success </rs-badges>
          <rs-badges type="warning" class="mb-4"> Warning </rs-badges>
          <rs-badges type="danger" class="mb-4"> Danger </rs-badges>
        </div>
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
                &lt;rs-badges type="primary"&gt;Primary&lt;/rs-badges&gt;
                &lt;rs-badges type="info"&gt;Info&lt;/rs-badges&gt;
                &lt;rs-badges type="success"&gt;Success&lt;/rs-badges&gt;
                &lt;rs-badges type="warning"&gt;Warning&lt;/rs-badges&gt;
                &lt;rs-badges type="danger"&gt;Danger&lt;/rs-badges&gt;
              &lt;/template&gt;

              &lt;script&gt; 
                import RsBadges from "@/components/Badges.vue";

                export default {
                  components: {
                    RsBadges,
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
    <!-- Badges with icon -->
    <rs-card>
      <template #header>
        <h5>Badges With Icon</h5>
      </template>
      <template #body>
        <p class="mb-2">
          Include props <code>icon</code> to <code>rs-badges</code> to show
          badges.
        </p>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4 gap-y-0">
          <rs-badges type="primary" icon="star" class="mb-4">
            Primary
          </rs-badges>
          <rs-badges type="info" icon="star" class="mb-4"> Info </rs-badges>
          <rs-badges type="success" icon="star" class="mb-4">
            Success
          </rs-badges>
          <rs-badges type="warning" icon="star" class="mb-4">
            Warning
          </rs-badges>
          <rs-badges type="danger" icon="star" class="mb-4"> Danger </rs-badges>
        </div>
        <button
          class="text-sm border border-slate-200 py-1 px-3 rounded-md"
          @click="showCode2 ? (showCode2 = false) : (showCode2 = true)"
        >
          Show Code
        </button>
        <transition name="fade">
          <div v-if="showCode2" v-highlight>
            <perfect-scrollbar style="height: 300px">
              <pre class="language-html shadow-none">
            <code>
              &lt;template&gt; 
                &lt;rs-badges type="primary" icon="star"&gt;Primary&lt;/rs-badges&gt;
                &lt;rs-badges type="info" icon="star"&gt;Info&lt;/rs-badges&gt;
                &lt;rs-badges type="success" icon="star"&gt;Success&lt;/rs-badges&gt;
                &lt;rs-badges type="warning" icon="star"&gt;Warning&lt;/rs-badges&gt;
                &lt;rs-badges type="danger" icon="star"&gt;Danger&lt;/rs-badges&gt;
              &lt;/template&gt;

              &lt;script&gt; 
                import RsBadges from "@/components/Badges.vue";

                export default {
                  components: {
                    RsBadges,
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
import RsCard from "@/components/Card.vue";
import RsBadges from "@/components/Badges.vue";

export default {
  name: "badge-component",
  components: {
    RsCard,
    RsBadges,
  },
  setup() {
    const showCode = ref(false);
    const showCode2 = ref(false);
    return {
      showCode,
      showCode2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>