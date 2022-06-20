<template>
  <div
    class="w-full fixed top-16 z-40 py-3 px-5 bg-white dark:bg-slate-800 shadow-md shadow-slate-200 dark:shadow-slate-900"
  >
    <ul class="flex gap-3 flex-row overflow-x-auto">
      <li class="border border-slate-300 py-2 px-4 rounded-lg">
        <a href="">Dashboard</a>
      </li>
      <li class="border border-slate-300 py-2 px-4 rounded-lg">
        <a href="">Page</a>
      </li>
      <li class="border border-slate-300 py-2 px-4 rounded-lg">
        <a href="">Color</a>
      </li>
      <li class="border border-slate-300 py-2 px-4 rounded-lg">
        <a href="">Form</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "top-menu-component",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
