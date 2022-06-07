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
        <FormKit
          type="text"
          label="Default"
          placeholder="This is a placeholder"
        />
        <FormKit type="text" placeholder="This is a placeholder">
          <template #label>
            <label class="font-semibold"
              >Default <span class="text-red-400">*</span></label
            >
          </template>
        </FormKit>
      </template>
    </rs-card>

    <rs-card>
      <template #header>Prefix</template>
      <template #body>
        <FormKit type="text" placeholder="This is a placeholder">
          <template #label>
            <label class="font-semibold"
              >Default <span class="text-red-400">*</span></label
            >
          </template>
        </FormKit>
      </template>
    </rs-card>

    <rs-card>
      <template #header>Suffix</template>
      <template #body>
        <FormKit type="text" placeholder="This is a placeholder">
          <template #label>
            <label class="font-semibold"
              >Default <span class="text-red-400">*</span></label
            >
          </template>
        </FormKit>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import RsCard from "@/components/Card.vue";

export default {
  name: "form-element-input",
  components: {
    RsCard,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>