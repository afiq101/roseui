<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header>
        <h5>Default Dropdown</h5>
      </template>
      <template #body>
        <p class="mb-2">Use the <code>rs-dropdown</code> to show alert.</p>
        <div class="flex items-center mb-3">
          <rs-dropdown
            title="Default"
            :menuItems="dropdownItems"
            class="mb-2"
          ></rs-dropdown>
          <rs-dropdown title="Custom Dropdown" class="mb-2 ml-4">
            <template #content>This is custom</template>
          </rs-dropdown>
        </div>

        <div class="flex justify-end">
          <button
            class="text-sm border border-slate-200 py-1 px-3 rounded-lg"
            @click="showCode ? (showCode = false) : (showCode = true)"
          >
            Show Code
          </button>
        </div>
        <transition name="fade">
          <div class="z-0" v-if="showCode" v-highlight>
            <perfect-scrollbar style="height: 300px">
              <pre class="language-html shadow-none">
            <code>
              &lt;template&gt; 
                &lt;rs-dropdown title="Default" :menuItems="dropdownItems"&gt;&lt;/rs-alert&gt;
                &lt;rs-dropdown title="Custom Dropdown"&gt;&lt;template #content&gt;This is custom&lt;/template&gt;&lt;/rs-dropdown&gt;
              &lt;/template&gt;

              &lt;script&gt; 
                import RsDropdown from "@/components/Dropdown.vue";

                export default {
                  components: {
                    RsDropdown,
                  },
                  setup() {
                    return {
                        dropdownItems: [
                            {
                              label: "Item 1 - Application",
                              route: { name: "dashboard" },
                            },
                            {
                              label: "Item 2 - Dashboard",
                              route: { name: "dashboard" },
                            },
                            {
                              label: "Item 3 - Items",
                              route: { name: "dashboard" },
                            },
                        ],
                    };
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
import RsDropdown from "@/components/Dropdown.vue";

export default {
  name: "component-dropdown",
  components: {
    RsDropdown,
  },
  setup() {
    const showCode = ref(false);
    // console.log(showCode);
    return {
      showCode,
      dropdownItems: [
        {
          label: "Item 1 - Application",
          route: { name: "dashboard" },
        },
        {
          label: "Item 2 - Dashboard",
          route: { name: "dashboard" },
        },
        {
          label: "Item 3 - Items",
          route: { name: "dashboard" },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
