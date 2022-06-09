<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <vue-feather
            class="mr-2 flex justify-center"
            type="info"
          ></vue-feather
          >Info
        </div>
      </template>
      <template #body>
        <p class="mb-4">
          This template uses
          <a
            href="https://formkit.com"
            target="_blank"
            class="hover:underline text-rose-400"
            >Formkit</a
          >
          which is a powerfull form builder for Vue. It is a Vue component that
          allows you to create forms with a lot of different elements.
        </p>
      </template>
    </rs-card>

    <rs-card>
      <template #header>Default</template>
      <template #body>
        <FormKit type="text" label="Default" />
        <FormKit type="text">
          <template #label>
            <label class="font-semibold"
              >Required <span class="text-red-400">*</span></label
            >
          </template>
        </FormKit>
        <FormKit
          type="text"
          label="Placeholder"
          placeholder="This is a placeholder"
        />
      </template>
    </rs-card>

    <rs-card>
      <template #header>Prefix</template>
      <template #body>
        <!-- Prefix with button text -->
        <FormKit type="text" label="Text" placeholder="1.00">
          <template #prefix> <div class="p-2">RM</div> </template>
        </FormKit>

        <!-- Prefix with button text -->
        <FormKit type="text" placeholder="1.00">
          <template #prefix>
            <div class="bg-slate-100 dark:bg-slate-700 h-full rounded-l-md p-2">RM</div>
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
              class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-900 h-full rounded-l-md p-2 flex justify-center items-center"
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
          <template #suffix> <div class="p-2">Kg</div> </template>
        </FormKit>

        <!-- Prefix with button text -->
        <FormKit type="text" placeholder="1.00">
          <template #suffix>
            <div class="bg-slate-100 dark:bg-slate-700 h-full rounded-r-md p-2">Kg</div>
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
              class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 hover:dark:bg-slate-900 h-full rounded-r-md p-2 flex justify-center items-center"
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
import RsCard from "@/components/Card.vue";

export default {
  name: "form-element-input",
  components: {
    RsCard,
  },
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
