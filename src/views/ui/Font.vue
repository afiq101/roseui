<template>
  <rs-layout>
    <rs-breadcrumb />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <rs-card>
        <template #header>
          <h3>Font Weight</h3>
        </template>
        <template #body>
          <p class="mb-4">
            Use <span class="text-cyan-500">tailwind</span> pre-defined class to change font
            weight of different element.
          </p>
          <div class="grid grid-cols-2 justify-between gap-y-2">
            <div class="py-1 bg-slate-100 dark:bg-gray-700 text-center">Example</div>
            <div class="py-1 bg-slate-100 dark:bg-gray-700 text-center">Class Name</div>
            <span class="font-light ml-2">This is the heading.</span>
            <code class="text-right mr-2">
              <span class="w-full bg-slate-100 dark:bg-gray-700"
                >font-light</span
              >
            </code>
            <span class="font-normal ml-2">This is the heading.</span>
            <code class="text-right mr-2">
              <span class="w-full bg-slate-100 dark:bg-gray-700"
                >font-normal</span
              >
            </code>
            <span class="font-medium ml-2">This is the heading.</span>
            <code class="text-right mr-2">
              <span class="w-full bg-slate-100 dark:bg-gray-700"
                >font-medium</span
              >
            </code>
            <span class="font-semibold ml-2">This is the heading.</span>
            <code class="text-right mr-2">
              <span class="w-full bg-slate-100 dark:bg-gray-700"
                >font-semibold</span
              >
            </code>
            <span class="font-bold ml-2">This is the heading.</span>
            <code class="text-right mr-2">
              <span class="w-full bg-slate-100 dark:bg-gray-700"
                >font-bold</span
              >
            </code>
          </div>
        </template>
      </rs-card>
      <rs-card>
        <template #header>
          <h3>Font Size</h3>
        </template>
        <template #body> tetete </template>
      </rs-card>
    </div>
  </rs-layout>
</template>

<script>
import RsCard from "@/components/Card.vue";

export default {
  name: "ui-font",
  components: {
    RsCard,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>