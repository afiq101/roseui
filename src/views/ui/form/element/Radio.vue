<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> Default </template>
      <template #body>
        <FormKit
          type="radio"
          label="Cars"
          help="What is your favourite car?"
          :options="options"
        />
      </template>
    </rs-card>
    <rs-card>
      <template #header> Disabled Radio Item </template>
      <template #body>
        <FormKit
          type="radio"
          label="Movies"
          help="What is your favourite movie?"
          :options="options2"
        />
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>


export default {
  name: "form-element-input-radio",
  
  setup() {
    return {
      options: ["Audi", "Mazda", "Proton", "Perodua", "BMW", "Mercedes"],
      options2: [
        { label: "Shawshank redemption", value: "shawshank" },
        { label: "The Godfather", value: "godfather" },
        {
          label: "Casablanca (too old)",
          value: "casablanca",
          attrs: { disabled: true },
        },
        { label: "The Lord of the Rings", value: "lotr" },
        { label: "Saving Private Ryan", value: "saving-ryan" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
