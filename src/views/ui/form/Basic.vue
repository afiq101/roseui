<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header>Form</template>
      <template #body>
        <p class="mb-4">
          This template uses
          <a
            href="https://formkit.com"
            target="_blank"
            class="hover:underline text-primary-400"
            >Formkit</a
          >
          which is a powerfull form builder for Vue. It is a Vue component that
          allows you to create forms with a lot of different elements.
        </p>
        <FormKit
          type="text"
          label="Input Text"
          placeholder=""
          help="This is input text"
        />
        <FormKit
          type="textarea"
          label="Textarea"
          rows="10"
          placeholder=""
          help="This is input textarea"
        />
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>


export default {
  name: "form-basic",
  
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>