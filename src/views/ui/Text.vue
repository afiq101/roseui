<template>
  <rs-layout>
    <rs-breadcrumb />
    <div class="grid grid-cols-2 gap-6">
      <rs-card>
        <template #header>
          <h3>Text Sizing</h3>
        </template>
        <template #body> tetete </template>
      </rs-card>
      <rs-card>
        <template #header>
          <h3>Text Sizing</h3>
        </template>
        <template #body> tetete </template>
      </rs-card>
    </div>
  </rs-layout>
</template>

<script>
import RsCard from "@/components/Card.vue";

export default {
  name: "ui-text",
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