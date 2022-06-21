<template>
  <div
    class="collapse-group"
    :class="{
      'border-b': type === 'default',
      'border-b last:rounded-b-lg': type === 'border',
      'shadow-md dark:shadow-slate-900 my-4': type === 'card',
    }"
    style="max-height: 60px; transition-property: max-height"
    @click="onClick"
  >
    <div class="collapse-header">
      {{ title }}
    </div>
    <div class="collapse-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, watch, getCurrentInstance } from "vue";
export default {
  name: "component-collapse-item",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const instance = getCurrentInstance();
    const parentID = instance.parent.uid;
    const isAccordion = instance.parent.props.accordion;
    const type = ref(instance.parent.props.type);

    //watch intance type
    watch(
      () => instance.parent.props.type,
      (newValue) => {
        // Note: `newValue` will be equal to `oldValue` here
        // *unless* state.someObject has been replaced
        type.value = newValue;
      },
      { deep: true }
    );

    const onClick = (e) => {
      const parentElement = e.target.parentElement;
      const height = parentElement.scrollHeight;
      const targetOpenCollapse = parentElement.classList.contains(
        "collapse-group--open"
      );
      const openCollapse = document.querySelector(
        `#collapse-${parentID} .collapse-group--open`
      );

      if (isAccordion)
        if (openCollapse) {
          openCollapse.style.maxHeight = "60px";
          openCollapse.classList.remove("collapse-group--open");
        }

      if (targetOpenCollapse) {
        parentElement.style.maxHeight = "60px";
        parentElement.classList.remove("collapse-group--open");
      } else {
        parentElement.style.maxHeight = height + "px";
        parentElement.classList.add("collapse-group--open");
      }
    };
    return {
      onClick,
      type,
    };
  },
};
</script>
