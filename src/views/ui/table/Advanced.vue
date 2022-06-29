<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> Table</template>
      <template #body>
        <rs-table
          :data="data"
          :options-advanced="{
            sortable: true,
            responsive: true,
          }"
          advanced
        >
        </rs-table>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import data from "./data.js";
import RsTable from "@/components/Table";
export default {
  name: "table-advance",
  components: {
    RsTable,
  },
  setup() {
    return {
      data: data,
    };
  },
};
</script>

<style lang="scss" scoped></style>
