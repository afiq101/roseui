<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <vue-feather
            class="mr-2 flex justify-center"
            type="info"
          ></vue-feather
          >Info
        </div>
      </template>
      <template #body>
        <p class="mb-4 text-justify">
          To use free
          <a
            href="https://fontawesome.com/"
            target="_blank"
            class="hover:underline text-primary-400"
            >Font Awesome 6</a
          >
          inside our Vue components, we need to import each icon separately.
          This is because our template use tree shaking method to minimize the
          size of the bundle. This means that the icons will not be included in
          the bundle if they are not used. You can import new icon inside
          <code>src/assets/js/fontawesome.js</code>. Below is the code to import
          the icon:
        </p>
        <div class="flex justify-end">
          <button
            class="text-sm border border-slate-200 py-1 px-3 rounded-lg"
            @click="showCode ? (showCode = false) : (showCode = true)"
          >
            Show Code
          </button>
        </div>
        <transition name="fade">
          <div v-show="showCode" v-highlight>
            <pre class="language-js shadow-none">
            <code>
             import {
                faUser,
                faUserPlus,
                faUserEdit,
                ... // Others icons
                } from '@fortawesome/free-solid-svg-icons';

                export default {
                  faUser,
                  faUserPlus,
                  faUserEdit,
                  ... // Others icons
                };
            </code>
          </pre>
          </div>
        </transition>
      </template>
    </rs-card>

    <span class="text-xl p-5 font-medium">Imported Icon</span>
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
        <!-- <vue-feather :type="icon"></vue-feather> -->
        <font-awesome-icon :icon="[icon.prefix, icon.iconName]" size="2x" />
        <p class="whitespace-nowrap">{{ icon.prefix }} {{ icon.iconName }}</p>
      </div>
    </div>
  </rs-layout>
</template>

<script>
import { ref } from "vue";
import FontAwesomeIcon from "@/assets/js/fontawesome.js";
import { useToast } from "vue-toastification";

export default {
  name: "icon-fontawesome",

  setup() {
    const toast = useToast();

    const showCode = ref(false);
    const icons = ref(FontAwesomeIcon);

    const copyText = (icon) => {
      const elementText = `<font-awesome-icon :icon="['${icon.prefix}', '${icon.iconName}']" />`;
      navigator.clipboard.writeText(elementText);
      toast.info("Copied to clipboard", {
        timeout: 2000,
      });
    };

    return {
      showCode,
      icons,
      copyText,
    };
  },
};
</script>

<style lang="scss" scoped></style>
