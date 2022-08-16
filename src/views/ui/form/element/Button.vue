<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header>Basic Button </template>
      <template #body>
        <div class="grid grid-cols-3">
          <FormKit
            type="button"
            label="Checkout my label"
            help="You can use the label prop."
          />

          <FormKit type="button" help="You can use the default slot.">
            Checkout my slot
          </FormKit>

          <FormKit
            type="button"
            help="You can bind event listeners."
            @click="randomColor"
          >
            Click me!
          </FormKit>
        </div>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>


export default {
  name: "form-element-input-button",
  
  setup() {
    const randomColor = (e) => {
      const hex = Math.floor(Math.random() * 16777215).toString(16);
      e.target.setAttribute("style", "background-color: #" + hex);
    };

    return {
      randomColor,
    };
  },
};
</script>

<style lang="scss" scoped></style>
