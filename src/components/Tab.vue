<template>
  <div
    class="tab rounded-md"
    :class="{
      'flex flex-col md:flex-row': vertical,
      'shadow-md pt-4': type === 'card' && !vertical,
      'shadow-md': type === 'card' && vertical,
      'bg-rose-400': type === 'card' && variant === 'primary',
      'bg-gray-400': type === 'card' && variant === 'secondary',
      'bg-green-400': type === 'card' && variant === 'success',
      'bg-red-400': type === 'card' && variant === 'danger',
      'bg-orange-400': type === 'card' && variant === 'warning',
      'bg-blue-400': type === 'card' && variant === 'info',
    }"
  >
    <ul
      class="flex flex-wrap list-none pl-0"
      :class="{
        'mx-4': type === 'card' && !vertical,
        'mx-4 py-0 pt-4 md:py-4': type === 'card' && vertical,
        'flex-row md:flex-col gap-2': vertical,
        'flex-1': vertical && fill,
      }"
    >
      <li
        class="cursor-pointer"
        :class="{
          'flex-1 w-full': fill,
          'px-6': type === 'border',
          'hover:border hover:border-b-0 rounded-t-md':
            type === 'border' && !vertical,
          'border rounded-t-md border-b-0':
            selectedTitle === val.title && type === 'border' && !vertical,
          'hover:border hover:border-r-0 rounded-l-md':
            type === 'border' && vertical,
          'border rounded-t-md rounded-bl-none md:rounded-r-none md:rounded-l-md border-r border-b-0 md:border-b md:border-r-0':
            selectedTitle === val.title && type === 'border' && vertical,

          // Variant Color for Border Type
          'hover:border-rose-400 ': type === 'border' && variant == 'primary',
          'hover:border-gray-400 ': type === 'border' && variant == 'secondary',
          'hover:border-blue-400 ': type === 'border' && variant == 'info',
          'hover:border-green-400 ': type === 'border' && variant == 'success',
          'hover:border-orange-400 ': type === 'border' && variant == 'warning',
          'hover:border-red-400 ': type === 'border' && variant == 'danger',
          'border-rose-400 text-rose-400':
            selectedTitle === val.title &&
            type === 'border' &&
            variant == 'primary',
          'border-gray-400 text-gray-400':
            selectedTitle === val.title &&
            type === 'border' &&
            variant == 'secondary',
          'border-blue-400 text-blue-400':
            selectedTitle === val.title &&
            type === 'border' &&
            variant == 'info',
          'border-green-400 text-green-400':
            selectedTitle === val.title &&
            type === 'border' &&
            variant == 'success',
          'border-orange-400 text-orange-400':
            selectedTitle === val.title &&
            type === 'border' &&
            variant == 'warning',
          'border-red-400 text-red-400':
            selectedTitle === val.title &&
            type === 'border' &&
            variant == 'danger',
        }"
        role="presentation"
        v-for="(val, index) in tabs"
        :key="index"
        @click="selectedTitle = val.title"
      >
        <a
          class="nav-link block font-medium text-base leading-tight capitalize border-x-0 border-t-0 py-3"
          :class="{
            'hover:border-b-2 mx-2 px-4': type === 'default' && !vertical,
            'hover:border-l-2 mx-2 px-4': type === 'default' && vertical,
            'border-b-2':
              selectedTitle === val.title && type === 'default' && !vertical,
            'border-l-2':
              selectedTitle === val.title && type === 'default' && vertical,

            // Variant Color for default type
            'hover:border-rose-400 hover:text-rose-400':
              type === 'default' && variant == 'primary',
            'hover:border-gray-400 hover:text-gray-400':
              type === 'default' && variant == 'secondary',
            'hover:border-blue-400 hover:text-blue-400':
              type === 'default' && variant == 'info',
            'hover:border-green-400 hover:text-green-400':
              type === 'default' && variant == 'success',
            'hover:border-orange-400 hover:text-orange-400':
              type === 'default' && variant == 'warning',
            'hover:border-red-400 hover:text-red-400':
              type === 'default' && variant == 'danger',
            'text-rose-400 border-rose-400':
              selectedTitle === val.title &&
              type === 'default' &&
              variant == 'primary',
            'text-gray-400 border-gray-400':
              selectedTitle === val.title &&
              type === 'default' &&
              variant == 'secondary',
            'text-blue-400 border-blue-400':
              selectedTitle === val.title &&
              type === 'default' &&
              variant == 'info',
            'text-green-400 border-green-400':
              selectedTitle === val.title &&
              type === 'default' &&
              variant == 'success',
            'text-orange-400 border-orange-400':
              selectedTitle === val.title &&
              type === 'default' &&
              variant == 'warning',
            'text-red-400 border-red-400':
              selectedTitle === val.title &&
              type === 'default' &&
              variant == 'danger',

            'px-5 mx-1 text-white rounded-t-md': type === 'card' && !vertical,
            'px-5 my-0 mb:my-1 mb:px-0 text-white rounded-bl-none rounded-t-md md:rounded-tr-none md:rounded-l-md':
              type === 'card' && vertical,
            'bg-rose-300': type === 'card' && variant == 'primary',
            'bg-gray-300': type === 'card' && variant == 'secondary',
            'bg-blue-300': type === 'card' && variant == 'info',
            'bg-green-300': type === 'card' && variant == 'success',
            'bg-orange-300': type === 'card' && variant == 'warning',
            'bg-red-300': type === 'card' && variant == 'danger',
            '!bg-white text-rose-300':
              selectedTitle === val.title &&
              type === 'card' &&
              variant == 'primary',
            '!bg-white text-gray-300':
              selectedTitle === val.title &&
              type === 'card' &&
              variant == 'secondary',
            '!bg-white text-blue-300':
              selectedTitle === val.title &&
              type === 'card' &&
              variant == 'info',
            '!bg-white text-green-300':
              selectedTitle === val.title &&
              type === 'card' &&
              variant == 'success',
            '!bg-white text-orange-300':
              selectedTitle === val.title &&
              type === 'card' &&
              variant == 'warning',
            '!bg-white text-red-300':
              selectedTitle === val.title &&
              type === 'card' &&
              variant == 'danger',

            'w-23/24': fill,
            'flex flex-wrap justify-start': justify == 'left',
            'flex flex-wrap justify-center': justify == 'center',
            'flex flex-wrap justify-end': justify == 'right',
          }"
          >{{ val.title }}</a
        >
      </li>
    </ul>
    <div
      class="tab-content bg-white"
      :class="{
        'flex-grow': vertical && !fill,
        'flex-1': vertical && fill,
        'border rounded-b-md': type === 'border' && !vertical,
        'border rounded-md rounded-l-none': type === 'border' && vertical,
        'border-rose-400': type === 'border' && variant === 'primary',
        'border-gray-400': type === 'border' && variant === 'secondary',
        'border-blue-400': type === 'border' && variant === 'info',
        'border-green-400': type === 'border' && variant === 'success',
        'border-orange-400': type === 'border' && variant === 'warning',
        'border-red-400': type === 'border' && variant === 'danger',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, provide } from "vue";
export default {
  name: "component-tab",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    type: {
      type: String,
      default: "default",
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: Boolean,
      default: false,
    },
    justify: {
      type: String,
      default: "left",
    },
  },
  setup(_, { slots }) {
    const tabs = ref(slots.default().map((tab) => tab.props));
    const selectedTitle = ref(tabs.value[0]["title"]);

    tabs.value.forEach((tab) => {
      if (typeof tab.active !== "undefined") {
        selectedTitle.value = tab.title;
      }
    });

    provide("selectedTitle", selectedTitle);
    return {
      tabs,
      selectedTitle,
    };
  },
};
</script>

<style lang="scss" scoped></style>
