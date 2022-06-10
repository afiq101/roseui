<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> Coming Soon... </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import RsCard from "@/components/Card.vue";

export default {
  name: "form-element-input-mask",
  components: {
    RsCard,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
