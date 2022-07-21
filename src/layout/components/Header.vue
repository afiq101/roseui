<template>
  <div
    class="
      w-header
      z-20
      bg-white
      dark:bg-slate-800
      fixed
      top-0
      right-0
      px-5
      py-3
      duration-300
      shadow-md shadow-slate-200
      dark:shadow-slate-900
    "
  >
    <div class="flex items-stretch justify-between">
      <div v-if="isVertical" class="flex">
        <span class="flex items-center justify-center"
          ><button
            class="icon-btn h-10 w-10 rounded-full"
            @click="toggleMenuOpened"
          >
            <vue-feather type="menu" mb-2></vue-feather></button
        ></span>
      </div>
      <div class="flex" v-else>
        <div class="flex flex-auto gap-3 justify-center items-center">
          <img
            class="h-10 w-10 block dark:hidden"
            src="@/assets/images/logo/logo.png"
            alt=""
          />
          <img
            class="h-10 w-10 hidden dark:block"
            src="@/assets/images/logo/logo-white.png"
            alt=""
          />
          <span
            v-if="isDesktop"
            class="text-xl font-semibold text-primary-500 dark:text-white"
            >Rose UI</span
          >
        </div>
      </div>

      <div class="flex gap-2 item-center justify-items-end">
        <button
          class="icon-btn h-10 w-10 rounded-full"
          v-s-dropdown-toggle:language
        >
          <country-flag iso="GB" />
        </button>
        <SDropdown align="left" name="language">
          <ul class="header-dropdown w-full md:w-32">
            <li
              class="
                flex
                items-center
                justify-center
                hover:bg-slate-200 hover:dark:bg-slate-700
              "
            >
              <button class="py-2 px-4">
                <country-flag iso="GB" />
                <span class="ml-2">English</span>
              </button>
            </li>
            <li
              class="
                flex
                items-center
                justify-center
                hover:bg-slate-200 hover:dark:bg-slate-700
              "
            >
              <button class="py-2 px-4">
                <country-flag iso="MY" />
                <span class="ml-2">Melayu</span>
              </button>
            </li>
            <li
              class="
                flex
                items-center
                justify-center
                hover:bg-slate-200 hover:dark:bg-slate-700
              "
            >
              <button class="py-2 px-4">
                <country-flag iso="EG" />
                <span class="ml-2">Arabic</span>
              </button>
            </li>
          </ul>
        </SDropdown>
        <button
          class="icon-btn h-10 w-10 rounded-full"
          @click="dark ? (dark = false) : (dark = true)"
        >
          <vue-feather v-if="!dark" type="moon" mb-2></vue-feather>
          <vue-feather v-else type="sun" mb-2></vue-feather>
        </button>
        <button class="icon-btn h-10 w-10 rounded-full">
          <vue-feather @click="toggleSearch" type="search" mb-2></vue-feather>
        </button>
        <VTooltip>
          <template #popper> 10 unread notification </template>
          <button
            class="relative icon-btn h-10 w-10 rounded-full"
            v-s-dropdown-toggle:notification
          >
            <span
              class="w-3 h-3 absolute top-1 right-2 rounded-full bg-primary-400"
            ></span>
            <vue-feather type="bell" mb-2></vue-feather>
          </button>
        </VTooltip>
        <SDropdown align="left" name="notification">
          <ul class="header-dropdown w-full md:w-80">
            <li class="d-head flex items-center justify-between py-2 px-4">
              <span class="font-semibold">Notification</span>
              <div
                class="
                  flex
                  items-center
                  text-primary-400
                  cursor-pointer
                  hover:underline
                "
              >
                <a class="ml-2">View All</a>
              </div>
            </li>
            <perfect-scrollbar>
              <li>
                <div class="bg-slate-100 dark:bg-slate-700 py-2 px-4">
                  Today
                </div>
                <a class="py-2 px-4 block">
                  <div class="flex items-center">
                    <vue-feather
                      type="circle"
                      size="12"
                      class="text-primary-400 flex-none"
                      fill="pink"
                    ></vue-feather>
                    <span class="mx-2"
                      >Terdapat Satu Pembayaran yang berlaku menggunakan bil
                      Kuih Raya Cik Kiah</span
                    >
                    <div class="w-12 h-12 rounded-full ml-auto flex-none">
                      <img
                        class="rounded-full"
                        src="https://ui-avatars.com/api/?name=Raziq Danish"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
                <a class="py-2 px-4 block">
                  <div class="flex items-center">
                    <vue-feather
                      type="circle"
                      size="12"
                      class="text-primary-400 flex-none"
                      fill="pink"
                    ></vue-feather>
                    <span class="mx-2"
                      >Terdapat Satu Pembayaran yang berlaku menggunakan bil
                      Mercun</span
                    >
                    <div class="w-12 h-12 rounded-full ml-auto flex-none">
                      <img
                        class="rounded-full"
                        src="https://ui-avatars.com/api/?name=Iqmal Rizal"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              </li>
            </perfect-scrollbar>
          </ul>
        </SDropdown>
        <button
          class="
            icon-btn
            px-2
            rounded-lg
            border border-white
            md:border-gray-200
            dark:border-gray-700
          "
          v-s-dropdown-toggle:profile
        >
          <img
            class="w-8 h-8 object-cover rounded-full"
            src="https://ui-avatars.com/api/?name=John Doe"
          />
          <div
            v-if="isDesktop"
            class="grid grid-cols-1 text-left ml-3 flex-none"
          >
            <p class="font-semibold text-sm truncate w-24 mb-0">John Doe</p>
            <span class="font-medium text-xs truncate w-24">RM 10,000.00</span>
          </div>
          <vue-feather
            v-if="isDesktop"
            class="ml-3"
            type="chevron-down"
            mb-2
            size="18"
          ></vue-feather>
        </button>
        <SDropdown align="left" name="profile">
          <ul class="header-dropdown w-full md:w-52">
            <li>
              <a
                class="
                  flex
                  items-center
                  cursor-pointer
                  py-2
                  px-4
                  hover:bg-slate-200 hover:dark:bg-slate-700
                "
                @click="changeLayout"
              >
                <vue-feather
                  type="sidebar"
                  size="18"
                  class="mr-2"
                ></vue-feather>
                {{ isVertical ? "Horizontal Layout" : "Vertical Layout" }}
              </a>
            </li>
            <li>
              <a
                class="
                  flex
                  items-center
                  cursor-pointer
                  py-2
                  px-4
                  hover:bg-slate-200 hover:dark:bg-slate-700
                "
              >
                <vue-feather type="user" size="18" class="mr-2"></vue-feather>
                Account
              </a>
            </li>
            <li>
              <a
                class="
                  flex
                  items-center
                  cursor-pointer
                  py-2
                  px-4
                  hover:bg-slate-200 hover:dark:bg-slate-700
                "
              >
                <vue-feather
                  type="settings"
                  size="18"
                  class="mr-2"
                ></vue-feather>
                Setting
              </a>
            </li>
            <li>
              <a
                class="
                  flex
                  items-center
                  cursor-pointer
                  py-2
                  px-4
                  hover:bg-slate-200 hover:dark:bg-slate-700
                "
              >
                <vue-feather
                  type="log-out"
                  size="18"
                  class="mr-2"
                ></vue-feather>
                Logout
              </a>
            </li>
          </ul>
        </SDropdown>
      </div>
    </div>
  </div>

  <!-- Search Nav for Layout Vertical -->
  <div
    tabindex="0"
    class="
      w-header-search
      bg-white
      dark:bg-slate-800
      px-4
      z-40
      duration-300
      shadow-md shadow-slate-200
      dark:shadow-slate-900
      -top-20
      focus-within:top-0
      right-0
    "
  >
    <vue-feather type="search" mb-2 size="18"></vue-feather>
    <input
      id="header-search"
      type="text"
      class="
        w-full
        ml-2
        px-2
        py-3
        appearance-none
        text-md
        rounded-lg
        focus:outline-none
        dark:bg-slate-800
      "
      name="Search"
      placeholder="Search..."
    />
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from "vue";
import state from "@/store";
export default {
  name: "header-component",
  emits: ["toggleMenu"],
  setup(_, { emit }) {
    const dark = ref(false);

    // Get darkmode from localstorage and toggle dark mode
    dark.value = state.getters.darkMode;

    // Watch for changes in Dark mode
    watch(dark, (value) => {
      state.commit("CHANGE_DARK_MODE", {
        value,
      });
      state.dispatch("toggleDarkMode");
    });

    // Computed for change window width
    const isDesktop = computed(() => {
      return state.getters.windowWidth >= state.getters.mobileWidth
        ? true
        : false;
    });

    // Check if vertical layout is active
    const isVertical = computed(() => {
      return state.getters.layoutType === "vertical" ? true : false;
    });

    // Toggle default setting after component mounted
    onMounted(() => {
      if (!isDesktop.value) {
        toggleMenuOpened();
      }
    });

    // Change Layout Type
    function changeLayout() {
      const layoutType =
        state.getters.layoutType === "vertical" ? "horizontal" : "vertical";
      state.dispatch("changeLayoutType", { layoutType: layoutType });
      localStorage.setItem("layoutType", layoutType);
    }

    // Toggle Open/Close menu
    function toggleMenuOpened() {
      emit("toggleMenu");
    }

    // Focus on search input
    function toggleSearch() {
      document.getElementById("header-search").value = "";
      document.getElementById("header-search").focus();
    }

    return {
      dark: dark,
      isDesktop,
      isVertical,
      toggleMenuOpened,
      toggleSearch,
      changeLayout,
    };
  },
};
</script>
