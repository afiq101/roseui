<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> One-Time Password </template>
      <template #body>
        <FormKit
          type="otp"
          label="One-Time Password"
          help="We've sent code to your phone number"
          digits="6"
        />
      </template>
    </rs-card>

    <rs-card>
      <template #header> Dropzone</template>
      <template #body>
        <FormKit
          type="dropzone"
          label="Documents"
          accept=".pdf,.doc,.docx,.xml,.md,.csv"
          help="Select as many documents as you would like."
          maxSize="1000"
          maxFiles="5"
          multiple="true"
        />
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import RsCard from "@/components/Card.vue";

export default {
  name: "form-element-input-custom",
  components: {
    RsCard,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
