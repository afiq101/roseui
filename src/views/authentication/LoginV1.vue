<template>
  <div class="flex-none lg:flex justify-center h-screen ">
    <div class="flex-auto w-full md:w-full lg:w-5/12 bg-white dark:bg-slate-800">
      <div class="flex h-screen items-start md:items-center justify-start md:justify-center">
        <div class="w-full md:w-8/12 lg:w-full px-10 md:px-16 py-12 md:py-20">
          <div class="text-center">
            <!-- <img class="w-10 mb-6" src="@/assets/images/logo/logo.svg" /> -->
          </div>
          <h3 class="mb-5">Login</h3>
          <p class="text-slate-500 mb-5">
            Welcome to Rose UI. Please login to continue.
          </p>
          <div class="grid grid-cols-2">
            <FormKit
              label="Username"
              type="text"
              outer-class="col-span-2"
            />
            <FormKit
              label="Password"
              type="password"
              outer-class="col-span-2"
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
              :to="{ name: 'auth-forgotpasswordv1' }"
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
            <router-link :to="{ name: 'auth-registerv1'}" class="text-primary-400 hover:underline"
              >Sign Up</router-link
            >
          </p>
        </div>
      </div>
      <div class="absolute bottom-5 left-5 text-xs text-slate-400">
        © Rose UI 2022
      </div>
    </div>
    <div class="flex-auto w-full lg:w-7/12 m-auto hidden md:block">
      <div class="flex justify-center items-center">
        <img class="w-96" src="@/assets/images/illustration/login.svg" />
      </div>
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
