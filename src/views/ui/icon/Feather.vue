<template>
  <rs-layout>
    <rs-breadcrumb />
    <FormKit v-model="search" placeholder="Search Icon..." type="search" />
    <div
      class="
        mt-4
        grid grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-6
      "
    >
      <div
        class="
          flex
          justify-center
          items-center
          flex-col
          gap-y-2
          cursor-pointer
          bg-white
          dark:bg-slate-800
          border-2 border-slate-200
          dark:border-slate-700
          p-4
          w-full
          rounded-lg
          hover:scale-110
          transition-all
          duration-200
        "
        v-for="(icon, index) in icons"
        :key="index"
        @click="copyText(icon)"
      >
        <vue-feather :type="icon"></vue-feather>
        <p class="whitespace-nowrap">{{ icon }}</p>
      </div>
    </div>
  </rs-layout>
</template>

<script>
import { ref, watch } from "vue";
import featherIcon from "./feather";
import { useToast } from "vue-toastification";

export default {
  name: "icon-feather",
  setup() {
    const toast = useToast();

    const search = ref("");
    const icons = ref(featherIcon);

    //search icons
    watch(
      () => search.value,
      (value) => {
        if (value) {
          icons.value = featherIcon.filter((icon) =>
            icon.toLowerCase().includes(value.toLowerCase())
          );
        } else {
          icons.value = featherIcon;
        }
      }
    );

    const copyText = (text) => {
      const elementText = `<vue-feather type="${text}"></vue-feather>`;
      navigator.clipboard.writeText(elementText);
      toast.info("Copied to clipboard", {
        timeout: 2000,
      });
    };
    return {
      search,
      icons,
      copyText,
    };
  },
};
</script>

<style lang="scss" scoped></style>
