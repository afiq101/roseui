<template>
  <rs-layout>
    <rs-breadcrumb />
    <FormKit
      v-model="search"
      placeholder="Search for a products, brand and etc...."
      type="search"
    />
    <!-- Filter n Categories -->
    <div class="filter-wrapper flex pb-4">
      <button
        class="
          flex
          items-center
          rounded-lg
          py-2
          px-4
          bg-white
          dark:bg-slate-800 dark:text-gray-300
          hover:bg-slate-200
          shadow-md shadow-slate-200
          dark:shadow-slate-900
        "
        @click="showFilter ? (showFilter = false) : (showFilter = true)"
      >
        <vue-feather size="1.25rem" type="filter"></vue-feather>
      </button>
      <perfect-scrollbar style="width: 100%">
        <div class="category-wrapper flex gap-x-4 pl-4">
          <button
            class="
              flex
              items-center
              rounded-lg
              py-2
              px-3
              bg-white
              dark:bg-slate-800 dark:text-gray-300
              hover:bg-slate-200
              font-semibold
              text-sm
              shadow-md shadow-slate-200
              dark:shadow-slate-900
            "
            v-for="(category, index) in categories"
            :key="index"
          >
            <div
              class="
                flex
                items-center
                bg-slate-100
                dark:bg-slate-700
                border border-slate-200
                dark:border-slate-700
                w-10
                h-10
                rounded-lg
                mr-2
              "
            >
              <img
                class="h-full w-full object-scale-down"
                :src="category.image"
              />
            </div>
            <span>{{ category.name }}</span>
          </button>
        </div>
      </perfect-scrollbar>
    </div>

    <!-- Products -->
    <div v-if="showFilter" class="filter-wrapper float-left w-64 mr-6">
      <div class="filter-title mb-4">
        <h3 class="text-sm font-semibold">Filter</h3>
      </div>
      <rs-card class="p-4">
        <span class="font-semibold">Categories</span>
        <FormKit
          type="radio"
          :options="[...categories.map((category) => category.name)]"
          :classes="{
            fieldset: 'border-none !p-0 mt-4',
          }"
        />
        <hr class="my-2" />
        <span class="font-semibold">Price</span>
        <FormKit
          type="radio"
          :options="[
            'RM0 - RM100',
            'RM100 - RM500',
            'RM500 - RM1000',
            'RM1000+',
          ]"
          :classes="{
            fieldset: 'border-none !p-0 mt-4',
          }"
        />
        <hr class="my-2" />
      </rs-card>
    </div>

    <div class="product-wrapper grid grid-cols-1 md:grid-cols-3 gap-x-5">
      <rs-card
        class="cursor-pointer hover:scale-105 transition-all"
        v-for="(product, index) in data"
        :key="index"
      >
        <div class="product-image relative h-50 rounded-lg">
          <img
            class="object-scale-down w-full h-full"
            :src="product.images.length > 0 ? product.images[0] : ''"
            :alt="product.name"
          />
        </div>
        <div class="product-content-wrapper flex flex-col px-4 mb-4">
          <div class="product-title flex justify-between my-2">
            <span class="block text-base font-semibold line-clamp-2">{{
              product.name
            }}</span>
          </div>
          <div class="product-content flex flex-col">
            <div class="product-rating flex items-center mb-2">
              <font-awesome-icon
                :icon="['fas', 'star']"
                class="text-amber-400"
                v-for="(star, index) in Math.floor(product.rating)"
                :key="index"
              />
              <font-awesome-icon
                :icon="['fas', 'star-half-stroke']"
                class="text-amber-400"
                v-for="(star, index) in product.rating % 1 != 0 ? 1 : 0"
                :key="index"
              />
              <font-awesome-icon
                :icon="['far', 'star']"
                class="text-amber-400"
                v-for="(star, index) in 5 - Math.ceil(product.rating)"
                :key="index"
              />
              <div class="product-rating-sold ml-1">
                <span class="text-xs"> ({{ formatSold(product.sold) }}) </span>
              </div>
            </div>
            <div class="product-price truncate gap-1">
              <div class="text-sm text-rose-400">
                {{ product.currency
                }}<span class="text-lg">
                  {{
                    product.discountedPrice
                      ? formatPrice(product.discountedPrice)
                      : formatPrice(product.price)
                  }}</span
                >
                <span
                  v-if="product.discount || product.discount != 0"
                  class="product-discount text-lg text-rose-400"
                >
                  (-{{ product.discount }}%)
                </span>
              </div>
              <span
                v-if="product.discountedPrice"
                class="text-sm line-through text-gray-400 mt-1"
              >
                {{ product.currency }}{{ formatPrice(product.price) }}</span
              >
            </div>
          </div>
        </div>
      </rs-card>
    </div>
  </rs-layout>
</template>

<script>
import { ref } from "vue";
import products from "./data";
import category from "./category";
export default {
  name: "ecommerce-products",
  setup() {
    const search = ref("");
    const data = ref(products);
    const categories = ref(category);
    const showFilter = ref(true);

    const formatPrice = (price) => {
      return parseFloat(price)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const formatSold = (n) => {
      if (n < 1e3) return n;
      if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
    };

    return {
      showFilter,
      data,
      categories,
      search,
      formatPrice,
      formatSold,
    };
  },
};
</script>
