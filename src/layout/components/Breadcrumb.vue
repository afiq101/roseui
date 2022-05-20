<template>
  <div
    v-if="breadcrumb && title"
    class="flex items-stretch justify-between pb-5"
  >
    <span class="text-xl font-medium">{{ title }}</span>
    <div v-if="breadcrumb && breadcrumb.length != 0">
      <span
        v-for="(item, index) in breadcrumb"
        :key="index"
        class="inline text-rose-400"
      >
        <vue-feather
          v-if="index != 0"
          type="chevron-right"
          size="12"
          class="pr-1"
        ></vue-feather>
        <a
          @click="navigateMenu(item.route)"
          class="underline cursor-pointer hover:text-rose-300 pr-1"
          >{{ item.title }}</a
        >
      </span>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { useRoute } from "vue-router";

export default {
  name: "breadcrumb-component",
  setup() {
    const route = useRoute();

    function navigateMenu(route) {
      try {
        router.push(route);
      } catch (e) {
        return;
      }
    }

    return {
      navigateMenu,
      breadcrumb: route.meta.breadcrumb ? route.meta.breadcrumb : "",
      title: route.meta.title ? route.meta.title : "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>