<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header>Default </template>
      <template #body>
        <rs-button @click="showModal ? (showModal = false) : (showModal = true)"
          >Click Modal</rs-button
        >
        <rs-modal title="This is a modal" v-model="showModal">
          tesxt
        </rs-modal>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import { ref } from "vue";
import RsButton from "@/components/Button.vue";
import RsModal from "@/components/Modal.vue";

export default {
  name: "component-modal",
  components: {
    RsModal,
    RsButton,
  },
  setup() {
    const showModal = ref(false);
    return {
      showModal,
    };
  },
};
</script>

<style lang="scss" scoped></style>
