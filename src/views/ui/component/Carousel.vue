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
        <p class="mb-4">
          This template use
          <a
            href="https://swiperjs.com/vue"
            target="_blank"
            class="hover:underline text-primary-400"
            >Swiper JS</a
          >
          which is a Vue component that allows you to create a carousel.
        </p>
      </template>
    </rs-card>
    <rs-card>
      <template #header> Default (Horizontal)</template>
      <template #body>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :centeredSlides="true"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          navigation
        >
          <swiper-slide v-for="n in 10" :key="n">
            <div class="w-full flex justify-center items-center">
              <img
                :src="'https://picsum.photos/1024/600?random=' + n"
                class="object-contain w-full md:w-1/2"
              />
            </div>
          </swiper-slide>
        </swiper>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "component-carousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = () => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style lang="scss" scoped></style>
