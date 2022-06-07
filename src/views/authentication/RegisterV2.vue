<template>
  <div
    class="flex-none md:flex justify-center text-center items-center h-screen"
  >
    <div class="w-auto">
      <rs-card class="h-screen md:h-auto px-10 md:px-16 py-12 md:py-20 mb-0">
        <h3 class="mb-4">Sign Up</h3>
        <p class="text-slate-500 mb-6 col-sp">
          Please fill in the form to create an account.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-5">
          <FormKit label="Username" type="text" label-class="text-left" />
          <FormKit label="Email" type="email" label-class="text-left" />
          <FormKit label="Password" type="password" label-class="text-left" />
          <FormKit
            label="Re-enter Password"
            type="password"
            label-class="text-left"
          />
          <FormKit type="checkbox" outer-class="col-span-1 md:col-span-2">
            <template #label
              >I agree to the
              <a class="text-rose-400 hover:underline ml-1"
                >Term and Services</a
              >
            </template>
          </FormKit>

          <router-link to="/" class="col-span-1 md:col-span-2">
            <FormKit type="button" input-class="w-full">Sign up</FormKit>
          </router-link>
        </div>

        <p class="mt-3 text-center text-slate-500">
          Already have an account?
          <router-link
            :to="{ name: 'auth-loginv2' }"
            class="text-rose-400 hover:underline"
            >Login</router-link
          >
        </p>
      </rs-card>
    </div>
  </div>
</template>

<script>
import RsCard from "@/components/Card.vue";

export default {
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