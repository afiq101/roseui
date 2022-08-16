<template>
  <rs-layout>
    <rs-breadcrumb />

    <rs-card>
      <template #header>Prefix</template>
      <template #body>
        <!-- Prefix with button text -->
        <FormKit type="text" label="Text" placeholder="1.00">
          <template #prefix> <div class="p-3">RM</div> </template>
        </FormKit>

        <!-- Prefix with button text -->
        <FormKit type="text" placeholder="1.00">
          <template #prefix>
            <div class="bg-slate-100 dark:bg-slate-700 h-full rounded-l-md p-3">
              RM
            </div>
          </template>
        </FormKit>

        <!-- Prefix Icon -->
        <FormKit type="text" label="Icon" placeholder="Icon">
          <template #prefix>
            <vue-feather class="px-2" type="info"></vue-feather>
          </template>
        </FormKit>

        <!-- Prefix with button text -->
        <FormKit
          type="text"
          label="Button"
          v-model="computedKey"
          placeholder="Button"
        >
          <template #prefix>
            <button
              class="
                bg-slate-100
                hover:bg-slate-200
                dark:bg-slate-700
                hover:dark:bg-slate-900
                h-full
                rounded-l-md
                p-3
                flex
                justify-center
                items-center
              "
              @click="generateKey"
            >
              <vue-feather type="refresh-cw" size="19"></vue-feather>
            </button>
          </template>
        </FormKit>
      </template>
    </rs-card>

    <rs-card>
      <template #header>Suffix</template>
      <template #body>
        <!-- Prefix with button text -->
        <FormKit type="text" label="Text" placeholder="10.00">
          <template #suffix> <div class="p-3">Kg</div> </template>
        </FormKit>

        <!-- Prefix with button text -->
        <FormKit type="text" placeholder="1.00">
          <template #suffix>
            <div class="bg-slate-100 dark:bg-slate-700 h-full rounded-r-md p-3">
              Kg
            </div>
          </template>
        </FormKit>

        <!-- Prefix Icon -->
        <FormKit type="text" label="Icon" placeholder="Icon">
          <template #suffix>
            <vue-feather class="px-2" type="info"></vue-feather>
          </template>
        </FormKit>

        <!-- Prefix with button text -->
        <FormKit
          type="text"
          label="Button"
          v-model="computedKey"
          placeholder="Button"
        >
          <template #suffix>
            <button
              class="
                bg-slate-100
                hover:bg-slate-200
                dark:bg-slate-700
                hover:dark:bg-slate-900
                h-full
                rounded-r-md
                p-3
                flex
                justify-center
                items-center
              "
              @click="generateKey"
            >
              <vue-feather type="refresh-cw" size="19"></vue-feather>
            </button>
          </template>
        </FormKit>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "form-element-input-group",

  setup() {
    const key = ref("jg9dsk23rnfsd");

    const generateKey = () => {
      key.value = Math.random().toString(36).substring(2, 15);
    };

    const computedKey = computed(() => {
      return key.value;
    });

    return {
      generateKey,
      computedKey,
    };
  },
};
</script>

<style lang="scss" scoped></style>
