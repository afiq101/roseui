<template>
  <router-view> </router-view>
</template>

<script>
import { ref, onMounted } from "vue";
import state from "@/store";

export default {
  setup() {
    const name = ref("");
    name.value = "Vue.js";

    //window.onsize
    window.onresize = () => {
      state.dispatch("changeWindowWidth", { windowWidth: window.innerWidth });
    };

    onMounted(() => {
      state.dispatch("toggleDarkMode");
    });

    return {
      Name: name,
    };
  },
};
</script>
