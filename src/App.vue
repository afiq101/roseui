<template>
  <router-view> </router-view>
</template>

<script>
import { ref } from "vue";
import state from "@/store";

export default {
  setup() {
    const name = ref("");
    name.value = "Vue.js";

    //window.onsize
    window.onresize = () => {
      state.dispatch("changeWindowWidth", { windowWidth: window.innerWidth });
    };

    return {
      Name: name,
    };
  },
};
</script>
