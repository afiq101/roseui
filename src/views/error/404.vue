<template>
  <div class="flex h-screen p-6 md:p-10">
    <div class="m-auto">
      <div class="flex items-center flex-col md:flex-row gap-10">
        <img
          class="w-80 flex-shrink"
          src="@/assets/images/illustration/404-2.svg"
          alt=""
        />
        <div class="flex-1 text-center md:text-left items-center">
          <span class="block mb-2 font-bold text-2xl md:text-3xl">Oops!</span>
          <p class="text-lg md:text-xl font-base">
            The page you are looking for does not exist.
          </p>
          <router-link to="/">
            <button
              class="
                inline-block
                align-middle
                md:align-baseline
                w-full
                md:w-fit
                mt-7
                md:mt-4
                px-4
                py-3
                rounded-lg
                shadow-lg shadow-primary-500/30
                text-white
                bg-primary-400
                hover:bg-primary-500
              "
            >
              Back to Home
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404-page",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>