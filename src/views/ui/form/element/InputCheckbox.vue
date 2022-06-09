<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card></rs-card>
  </rs-layout>
</template>

<script>
import RsCard from "@/components/Card.vue";

export default {
  name: "form-element-input-checkbox",
  components: {
    RsCard,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
