
<template>
  <input
    @input="handleInput"
    :class="context.classes.input"
    :value="props.context._value"
    v-maska="mask"
  />
</template>

<script setup>
/* eslint-disable */
const props = defineProps({
  context: Object,
});

const mask = String(props.context.mask);

function handleInput(e) {
  props.context.node.input(e.target.value);
}
</script>
