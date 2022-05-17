<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header>
        <h3>Default</h3>
      </template>
      <template #body>
        <rs-alert class="mb-4">Hi, this is an info alert!</rs-alert>
        <rs-alert type="primary" class="mb-4">
          Hi, this is an primary alert!
        </rs-alert>
        <rs-alert type="success" class="mb-4">
          Hi, this is an success alert!
        </rs-alert>
        <rs-alert type="warning" class="mb-4">
          Hi, this is an warning alert!
        </rs-alert>
        <rs-alert type="danger" class="mb-4">
          Hi, this is an danger alert!
        </rs-alert>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import RsAlert from "@/components/Alert.vue";

export default {
  name: "component-alert",
  components: {
    RsAlert,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>