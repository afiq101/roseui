<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> Default </template>
      <template #body>
        <p class="mb-4">Use the <code>rs-button</code> to show badges.</p>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
          <rs-button> Button </rs-button>
        </div>
        <div class="flex justify-end">
          <button
            class="text-sm border border-slate-200 py-1 px-3 rounded-lg my-2"
            @click="showCode1 ? (showCode1 = false) : (showCode1 = true)"
          >
            Show Code
          </button>
        </div>
        <transition name="fade">
          <div v-if="showCode1" v-highlight>
            <perfect-scrollbar style="height: 300px">
              <pre class="language-html shadow-none">
            <code>
              &lt;template&gt; 
                &lt;rs-button&gt;Button&lt;/rs-button&gt;
              &lt;/template&gt;

              &lt;script&gt; 
                import RsButton from "@/components/Button.vue";

                export default {
                  components: {
                    RsButton,
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

    <rs-card>
      <template #header> Variant </template>
      <template #body>
        <p class="mb-4">
          Button variant uses props <code>variant</code> to change the color of
          the button. There are 6 variants: <code>primary</code>,
          <code>info</code>, <code>success</code>, <code>warning</code> and
          <code>danger</code>.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
          <rs-button variant="primary"> Primary </rs-button>
          <rs-button variant="info"> Info </rs-button>
          <rs-button variant="success"> Success </rs-button>
          <rs-button variant="warning"> Warning </rs-button>
          <rs-button variant="danger"> Danger </rs-button>
        </div>

        <div class="flex justify-end">
          <button
            class="text-sm border border-slate-200 py-1 px-3 rounded-lg my-2"
            @click="showCode2 ? (showCode2 = false) : (showCode2 = true)"
          >
            Show Code
          </button>
        </div>
        <transition name="fade">
          <div v-if="showCode2" v-highlight>
            <perfect-scrollbar style="height: 300px">
              <pre class="language-html shadow-none">
            <code>
              &lt;template&gt; 
                &lt;rs-button variant="primary"&gt;Primary&lt;/rs-button&gt;
                &lt;rs-button variant="info"&gt;Info&lt;/rs-button&gt;
                &lt;rs-button variant="success"&gt;Success&lt;/rs-button&gt;
                &lt;rs-button variant="warning"&gt;Warning&lt;/rs-button&gt;
                &lt;rs-button variant="danger"&gt;Danger&lt;/rs-button&gt;
              &lt;/template&gt;

              &lt;script&gt; 
                import RsButton from "@/components/Button.vue";

                export default {
                  components: {
                    RsButton,
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

    <rs-card>
      <template #header> Type </template>
      <template #body>
        <p class="mb-4">
          Button type uses props <code>type</code> to change the shape of the
          button. There are 3 types: <code>fill</code>, <code>outline</code> and
          <code>text</code>. <code>fill</code> is the default.
          <code>outline</code> is used to create a button with a border.
          <code>text</code> is used to create a button with no border and no
          background.
        </p>

        <!-- Fill Button -->
        <div class="my-6">
          <div
            class="font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"
          >
            Fill
          </div>
          <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <rs-button type="fill" variant="primary"> Primary </rs-button>
            <rs-button type="fill" variant="info"> Info </rs-button>
            <rs-button type="fill" variant="success"> Success </rs-button>
            <rs-button type="fill" variant="warning"> Warning </rs-button>
            <rs-button type="fill" variant="danger"> Danger </rs-button>
          </div>
        </div>

        <!-- Outline Button -->
        <div class="my-6">
          <div
            class="font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"
          >
            Outline
          </div>
          <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <rs-button type="outline" variant="primary"> Primary </rs-button>
            <rs-button type="outline" variant="info"> Info </rs-button>
            <rs-button type="outline" variant="success"> Success </rs-button>
            <rs-button type="outline" variant="warning"> Warning </rs-button>
            <rs-button type="outline" variant="danger"> Danger </rs-button>
          </div>
        </div>

        <!-- Text Button -->
        <div class="my-6">
          <div
            class="font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"
          >
            Text
          </div>
          <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <rs-button type="text" variant="primary"> Primary </rs-button>
            <rs-button type="text" variant="info"> Info </rs-button>
            <rs-button type="text" variant="success"> Success </rs-button>
            <rs-button type="text" variant="warning"> Warning </rs-button>
            <rs-button type="text" variant="danger"> Danger </rs-button>
          </div>
        </div>

        <div class="flex justify-end">
          <button
            class="text-sm border border-slate-200 py-1 px-3 rounded-lg my-2"
            @click="showCode3 ? (showCode3 = false) : (showCode3 = true)"
          >
            Show Code
          </button>
        </div>
        <transition name="fade">
          <div v-if="showCode3" v-highlight>
            <perfect-scrollbar style="height: 300px">
              <pre class="language-html shadow-none">
            <code>
              &lt;template&gt; 
                &lt;!-- Fill Button --&gt;
                &lt;rs-button type="fill" variant="primary"&gt;Primary&lt;/rs-button&gt;
                &lt;rs-button type="fill" variant="info"&gt;Info&lt;/rs-button&gt;
                &lt;rs-button type="fill" variant="success"&gt;Success&lt;/rs-button&gt;
                &lt;rs-button type="fill" variant="warning"&gt;Warning&lt;/rs-button&gt;
                &lt;rs-button type="fill" variant="danger"&gt;Danger&lt;/rs-button&gt;

                &lt;!-- Outline Button --&gt;
                &lt;rs-button type="outline" variant="primary"&gt;Primary&lt;/rs-button&gt;
                &lt;rs-button type="outline" variant="info"&gt;Info&lt;/rs-button&gt;
                &lt;rs-button type="outline" variant="success"&gt;Success&lt;/rs-button&gt;
                &lt;rs-button type="outline" variant="warning"&gt;Warning&lt;/rs-button&gt;
                &lt;rs-button type="outline" variant="danger"&gt;Danger&lt;/rs-button&gt;

                &lt;!-- Text Button --&gt;
                &lt;rs-button type="text" variant="primary"&gt;Primary&lt;/rs-button&gt;
                &lt;rs-button type="text" variant="info"&gt;Info&lt;/rs-button&gt;
                &lt;rs-button type="text" variant="success"&gt;Success&lt;/rs-button&gt;
                &lt;rs-button type="text" variant="warning"&gt;Warning&lt;/rs-button&gt;
                &lt;rs-button type="text" variant="danger"&gt;Danger&lt;/rs-button&gt;
              &lt;/template&gt;

              &lt;script&gt; 
                import RsButton from "@/components/Button.vue";

                export default {
                  components: {
                    RsButton,
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

import RsButton from "@/components/Button.vue";

export default {
  name: "component-button",
  components: {
    RsButton,
  },
  setup() {
    const showCode1 = ref(false);
    const showCode2 = ref(false);
    const showCode3 = ref(false);
    return {
      showCode1,
      showCode2,
      showCode3,
    };
  },
};
</script>

<style lang="scss" scoped></style>
