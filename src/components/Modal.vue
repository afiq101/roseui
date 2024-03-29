<template>
  <Teleport to="body">
    <transition-group name="fade">
      <div
        v-if="modelValue"
        @click.self="closeModal"
        class="modal fixed top-0 left-0 w-full h-full overflow-hidden"
        :class="{
          'flex items-start': position == 'top',
          'flex items-center': position == 'center',
          'flex items-end': position == 'bottom',
          '!bg-transparent': hideOverlay,
        }"
      >
        <div
          v-show="modelValue"
          class="modal-dialog"
          :style="{
            width: size == 'sm' ? '300px' : size == 'md' ? '500px' : '800px',
          }"
        >
          <div
            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-slate-800 bg-clip-padding rounded-md outline-none text-current"
          >
            <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700 rounded-t-md"
            >
              <h4 v-if="!$slots.header">
                {{ title }}
              </h4>
              <slot name="header"></slot>
              <vue-feather
                @click="closeModal"
                class="hover:text-gray-800 cursor-pointer"
                type="x"
              ></vue-feather>
            </div>
            <div class="modal-body relative p-4">
              <slot name="body"></slot>
              <slot v-if="!$slots.body"></slot>
            </div>
            <div
              class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 dark:border-slate-700 rounded-b-md gap-x-3"
            >
              <slot name="footer"></slot>
              <rs-button
                v-if="!$slots.footer && !okOnly"
                @click="validateCancelCallback"
                class="bg-gray-500 hover:bg-gray-600"
              >
                {{ cancelTitle }}</rs-button
              >
              <rs-button
                v-if="!$slots.footer && !cancelOnly"
                @click="okCallback"
                >{{ okTitle }}</rs-button
              >
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </Teleport>
</template>

<script>
import RsButton from "@/components/Button.vue";

export default {
  name: "component-modal",
  components: {
    RsButton,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
    },
    hideOverlay: {
      type: Boolean,
      default: false,
    },
    okOnly: {
      type: Boolean,
      default: false,
    },
    okTitle: {
      type: String,
      default: "OK",
    },
    cancelOnly: {
      type: Boolean,
      default: false,
    },
    cancelTitle: {
      type: String,
      default: "Cancel",
    },
    okCallback: {
      type: Function,
      default: () => {},
    },
    cancelCallback: {
      type: Function,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const closeModal = () => {
      emit("update:modelValue", false);
    };

    const validateCancelCallback = () => {
      if (props.cancelCallback == "() => {}") closeModal();
      else props.cancelCallback();
    };

    return {
      closeModal,
      validateCancelCallback,
    };
  },
};
</script>

<style lang="scss" scoped></style>
