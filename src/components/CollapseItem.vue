<template>
  <div
    :id="`collapse-group-${uid}`"
    class="collapse-group"
    :class="{
      'border-b': type === 'default',
      'border-b last:rounded-b-lg': type === 'border',
      'shadow-md dark:shadow-slate-900 my-4': type === 'card',
    }"
    :style="`max-height: ${maxHeight}px; transition-property: max-height`"
    @click="onClick"
  >
    <div class="collapse-header">
      <slot v-if="!!$slots.title" name="title"></slot>
      <span v-else> {{ title }}</span>
    </div>
    <div class="collapse-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, watch, getCurrentInstance, onMounted } from "vue";
export default {
  name: "component-collapse-item",
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  setup() {
    const instance = getCurrentInstance();
    const uid = ref(instance.uid);
    const parentID = instance.parent.uid;
    const isAccordion = instance.parent.props.accordion;
    const type = ref(instance.parent.props.type);
    const height = ref(0);
    const maxHeight = ref(60);

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

    const onClick = () => {
      const parentElement = document.querySelector(
        `#collapse-group-${uid.value}`
      );
      const scrollHeight = parentElement.scrollHeight;
      const targetOpenCollapse = parentElement.classList.contains(
        "collapse-group--open"
      );
      const openCollapse = document.querySelector(
        `#collapse-${parentID} .collapse-group--open`
      );

      if (isAccordion)
        if (openCollapse) {
          const openCollapseHeader = document.querySelector(
            `#collapse-${parentID} .collapse-group--open .collapse-header`
          );
          openCollapse.style.maxHeight = `${openCollapseHeader.scrollHeight}px`;
          openCollapse.classList.remove("collapse-group--open");
        }

      if (targetOpenCollapse) {
        parentElement.style.maxHeight = maxHeight.value + "px";
        parentElement.classList.remove("collapse-group--open");
      } else {
        parentElement.style.maxHeight = scrollHeight + "px";
        parentElement.classList.add("collapse-group--open");
      }
    };

    // On mounted get height collapse header
    onMounted(() => {
      const parentElement = document.querySelector(
        `#collapse-group-${uid.value} .collapse-header`
      );
      const scrollHeight = parentElement.scrollHeight;
      maxHeight.value = scrollHeight;
      height.value = scrollHeight;
    });

    return {
      uid,
      onClick,
      type,
      maxHeight,
    };
  },
};
</script>
