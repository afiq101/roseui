<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card class="p-5">
      <div
        class="
          flex flex-col
          md:flex-row
          items-center
          md:items-start
          justify-center
          my-4
        "
      >
        <div
          class="product-image w-full md:w-2/5 flex justify-center items-center"
        >
          <swiper
            v-if="product.images.length > 1"
            :modules="modules"
            :slides-per-view="1"
            :centeredSlides="true"
            :pagination="{ clickable: true }"
            navigation
          >
            <swiper-slide v-for="(val, index) in product.images" :key="index">
              <div class="w-full flex justify-center items-center">
                <img
                  style="max-width: 230px"
                  class="object-scale-down md:!max-w-md"
                  :src="val"
                />
              </div>
            </swiper-slide>
          </swiper>
          <img
            v-else
            style="max-width: 200px"
            class="object-scale-down md:!max-w-md"
            :src="product.images[0]"
          />
        </div>
        <div class="product-content w-full md:w-3/5">
          <a
            href="#"
            class="font-medium text-gray-400 cursor-pointer hover:text-gray-500"
          >
            {{ product.store }}
          </a>
          <h3 class="text-xl md:text-2xl mb-2">{{ product.name }}</h3>
          <div class="flex items-center gap-x-1">
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
              <span class="text-sm"> ({{ formatSold(product.sold) }}) </span>
            </div>
          </div>
          <div class="product-price my-2">
            <span class="text-rose-500 text-3xl md:text-4xl font-semibold"
              >RM{{ formatPrice(product.price) }}</span
            >
            <span
              v-if="product.discountedPrice"
              class="
                text-lg
                line-through
                text-gray-400
                ml-0
                md:ml-2
                mt-1
                block
                md:inline-block
              "
            >
              {{ product.currency }}{{ formatPrice(product.price) }}
            </span>
          </div>

          <div class="product-stock text-gray-500 font-medium my-2">
            Available: {{ product.stock }}
          </div>
          <div class="product-description">
            <p class="text-gray-500">{{ product.description }}</p>
          </div>
          <div class="product-action my-4 flex items-center gap-x-4">
            <rs-button>
              <vue-feather class="mr-2" type="shopping-cart"></vue-feather>
              <span class="text-white">Add to Cart</span>
            </rs-button>
            <rs-button variant="primary-outline">
              <vue-feather class="mr-2" type="heart"></vue-feather>
              <span>Wishlist</span>
            </rs-button>
          </div>
          <div class="product-attributes my-5">
            <h5 class="mb-4">Product Specifications:</h5>
            <ul class="grid grid-cols-2 gap-3">
              <li
                class="font-medium"
                v-for="(val, index) in product.attributes"
                :key="index"
              >
                <span class="font-normal text-gray-400">{{ val.name }}: </span>
                <span>{{ val.value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <div class="container">
        <h4 class="mb-5">Customer Reviews</h4>
        <div class="container-review flex items-center">
          <div class="customer-rating flex-1">asdads</div>
          <div class="customer-review flex-grow">asd</div>
        </div>
      </div>
    </rs-card>
  </rs-layout>
</template>

<script>
import { useRoute } from "vue-router";
import router from "@/router";
import products from "./data";
import RsButton from "@/components/Button.vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "ecommerce-product-detail",
  components: {
    Swiper,
    SwiperSlide,
    RsButton,
  },
  setup() {
    const route = useRoute();
    if (!route.params.sku) {
      router.push({ name: "ecommerce-products" });
    }

    const product = products.find((p) => p.sku === route.params.sku);

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
      product,
      formatPrice,
      formatSold,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style lang="scss" >
.swiper-pagination-bullet {
  width: 1.25rem !important;
  height: 0.2rem !important;
  border-radius: 5px !important;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0px !important;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 1.25rem !important;
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: 0px !important;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: 0px !important;
}
</style>
