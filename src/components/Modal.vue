<template>
  <Teleport to="body">
    <transition-group name="fade">
      <div
        v-if="modelValue"
        @click="closeModal"
        class="overlay fixed top-0 left-0 w-full h-full overflow-hidden bg-slate-900 opacity-50"
        style="z-index: 1000"
      ></div>
      <div
        v-show="modelValue"
        class="modal-dialog center-div"
        :style="{
          width: size === 'sm' ? '400px' : size === 'md' ? '500px' : '800px',
        }"
        :class="{
          '!top-28': !center,
        }"
        style="z-index: 9999"
      >
        <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
        >
          <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
          >
            <h4>
              {{ title }}
            </h4>
            <vue-feather type="x"></vue-feather>
          </div>
          <div class="modal-body relative p-4"><slot></slot></div>
          <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
          >
            <rs-button>OK</rs-button>
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
    center: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    const closeModal = () => {
      emit("update:modelValue", false);
    };

    return {
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.center-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
