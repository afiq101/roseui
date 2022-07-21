<template>
  <div
    class="flex-none md:flex justify-center text-center items-center h-screen"
  >
    <div class="w-full md:w-3/4 lg:w-1/2 xl:w-2/6">
      <rs-card class="h-screen md:h-auto px-10 md:px-16 py-12 md:py-20 mb-0">
        <h3 class="mb-4">Login</h3>
        <p class="text-slate-500 mb-6">
          Welcome to Rose UI. Please login to continue.
        </p>
        <div class="grid grid-cols-2">
          <FormKit
            type="text"
            label="Username"
            outer-class="col-span-2"
            label-class="text-left"
          />
          <FormKit
            type="password"
            label="Password"
            outer-class="col-span-2"
            label-class="text-left"
          />
          <FormKit type="checkbox" label="Remember Me" />
          <router-link
            class="
              flex
              items-center
              justify-end
              h-5
              mt-1
              text-primary-400
              hover:underline
            "
            :to="{ name: 'auth-forgotpasswordv2' }"
            >Forgot Password?</router-link
          >
          <router-link to="/" class="col-span-2">
            <FormKit type="button" input-class="w-full"> Sign In </FormKit>
          </router-link>
          <FormKit
            type="button"
            outer-class="col-span-2"
            input-class="w-full btn-white"
          >
            <div class="flex items-center justify-center gap-3">
              <img class="w-5" src="@/assets/images/brand/google-logo.svg" />
              Sign In with Google
            </div>
          </FormKit>
        </div>
        <p class="mt-3 text-center text-slate-500">
          Don't have an account?
          <router-link
            :to="{ name: 'auth-registerv2' }"
            class="text-primary-400 hover:underline"
            >Sign Up</router-link
          >
        </p>
      </rs-card>
    </div>
  </div>
</template>

<script>


export default {
  
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>