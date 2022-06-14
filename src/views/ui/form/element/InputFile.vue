<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> Default </template>
      <template #body
        ><FormKit
          type="file"
          label="Documents"
          accept=".pdf,.doc,.docx,.xml,.md,.csv"
          help="Select as many documents as you would like."
        />
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import RsCard from "@/components/Card.vue";

export default {
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