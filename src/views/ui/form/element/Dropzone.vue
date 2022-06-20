<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> Dropzone</template>
      <template #body>
        <FormKit
          type="dropzone"
          label="Documents"
          accept=".pdf,.doc,.docx,.xml,.md,.csv"
          help="Select as many documents as you would like."

        />
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>


export default {
  name: "form-element-input-dropzone",
  
  setup() {},
};
</script>

<style lang="scss" scoped></style>
