<template>
  <div
    class="table-wrapper"
    :class="{
      '!border': advanced && !hideTable,
    }"
  >
    <div
      class="table-header"
      :class="{
        open: openFilter,
      }"
      v-if="advanced"
    >
      <div class="table-header-filter">
        <div>
          <div class="flex gap-x-2">
            <FormKit
              v-model="keyword"
              type="search"
              placeholder="Search..."
              outer-class="mb-0"
            />
            <rs-button
              class="!px-3 sm:!px-6"
              @click="openFilter ? (openFilter = false) : (openFilter = true)"
            >
              <vue-feather
                type="filter"
                class="mr-0 md:mr-1"
                size="1rem"
              ></vue-feather>
              <span class="hidden sm:block">Filter</span>
            </rs-button>
          </div>
          <!-- <rs-button class="mt-2">asdaasd</rs-button> -->
        </div>
        <div class="flex justify-center items-center gap-x-2">
          <span class="text-secondary">Result per page:</span>
          <FormKit
            type="select"
            v-model="pageSize"
            :options="[5, 10, 25, 100]"
            outer-class="mb-0"
          />
          <!-- <v-select
            :options="[5, 10, 25, 100]"
            v-model="pageSize"
            :clearable="false"
          ></v-select> -->
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start gap-x-3">
        <rs-dropdown
          :title="camelCasetoTitle(val)"
          size="sm"
          class="mt-3"
          v-for="(val, index) in dataTitle"
          :key="index"
        >
          <rs-dropdown-item @click="hideColumn(val)">
            {{ getFilter(val) ? "Show Column" : "Hide Column" }}
            <vue-feather
              :type="getFilter(val) ? 'eye' : 'eye-off'"
              size="1rem"
              class="ml-auto"
            ></vue-feather>
          </rs-dropdown-item>
        </rs-dropdown>
      </div>
    </div>
    <div
      v-if="filterComputed.length > 0"
      class="table-header-filter-list w-full m-4"
    >
      <div class="flex flex-wrap items-center justify-start gap-x-2">
        <div
          class="
            flex
            items-center
            justify-center
            gap-x-2
            border border-primary-400
            text-primary-400
            rounded-lg
            py-1
            px-2
          "
          v-for="(val, index) in filterComputed"
          :key="index"
        >
          {{ val ? camelCasetoTitle(val.title) : "" }}
          <vue-feather
            type="x"
            class="mr-0 md:mr-1 hover:text-red-500 cursor-pointer"
            size="1rem"
            @click="hideColumn(val.title)"
          ></vue-feather>
        </div>
      </div>
    </div>
    <div class="w-full overflow-x-auto">
      <table
        v-if="!hideTable"
        class="table-content"
        :class="{
          '!border-y !border-0': advanced,
          'table-fixed': options.fixed,
          'table-auto': !options.fixed,
        }"
      >
        <thead
          class="text-left border-gray-200 dark:border-slate-700"
          :class="{
            'border-y': !options.borderless,
            'border-gray-200 bg-gray-100 dark:bg-gray-800':
              options.variant === 'default',
            'border-primary-200 bg-primary-400 text-white ':
              options.variant === 'primary',
            'border-gray-200 bg-secondary text-white':
              options.variant === 'secondary',
            'border-blue-200 bg-blue-500 text-white ':
              options.variant === 'info',
            'border-green-200 bg-green-500 text-white':
              options.variant === 'success',
            'border-orange-200 bg-warning text-white':
              options.variant === 'warning',
            'border-red-200 bg-red-500 text-white':
              options.variant === 'danger',
          }"
        >
          <tr>
            <th
              class="relative py-3 pl-5 pr-8 whitespace-nowrap"
              :class="{
                'border-r last:border-l last:border-r-0':
                  options.bordered && !options.borderless,
                'border-gray-300': options.variant === 'default',
                'border-primary-300': options.variant === 'primary',
                'border-gray-300': options.variant === 'secondary',
                'border-blue-300': options.variant === 'info',
                'border-green-300': options.variant === 'success',
                'border-orange-300': options.variant === 'warning',
                'border-red-300': options.variant === 'danger',
                'w-36': options.fixed,
                'cursor-pointer': optionsAdvanced.sortable && advanced,
              }"
              style="min-width: 100px"
              @click="optionsAdvanced.sortable && advanced ? sort(index) : null"
              v-for="(val, index) in title"
              :key="index"
            >
              {{ field.length > 0 ? val : camelCasetoTitle(val) }}
              <div v-if="optionsAdvanced.sortable && advanced" class="sortable">
                <font-awesome-icon
                  class="absolute top-4 right-4 opacity-20"
                  :icon="['fas', 'sort']"
                />
                <font-awesome-icon
                  v-if="currentSort == index && currentSortDir == 'asc'"
                  class="absolute top-4 right-4 opacity-50"
                  :icon="['fas', 'sort-up']"
                />
                <font-awesome-icon
                  v-else-if="currentSort == index && currentSortDir == 'desc'"
                  class="absolute top-4 right-4 opacity-50"
                  :icon="['fas', 'sort-down']"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="{
              'border-y border-gray-200 dark:border-slate-700':
                !options.bordered && !options.borderless,
              'border-b': options.bordered && !options.borderless,
              'border-b-0': options.borderless,
              'border-gray-200 odd:bg-white even:bg-slate-50 dark:even:bg-slate-700 dark:odd:bg-slate-800':
                options.variant === 'default' && options.striped,
              'border-primary-100 odd:bg-white even:bg-primary-50':
                options.variant === 'primary' && options.striped,
              'border-gray-100 odd:bg-white even:bg-gray-50':
                options.variant === 'secondary' && options.striped,
              'border-blue-100 odd:bg-white even:bg-blue-50':
                options.variant === 'info' && options.striped,
              'border-green-100 odd:bg-white even:bg-green-50':
                options.variant === 'success' && options.striped,
              'border-orange-100 odd:bg-white even:bg-orange-50':
                options.variant === 'warning' && options.striped,
              'border-red-100 odd:bg-white even:bg-red-50':
                options.variant === 'danger' && options.striped,
              'cursor-pointer hover:bg-gray-50':
                options.hover && options.variant === 'default',
              'cursor-pointer hover:bg-primary-50':
                options.hover && options.variant === 'primary',
              'cursor-pointer hover:bg-gray-50':
                options.hover && options.variant === 'secondary',
              'cursor-pointer hover:bg-blue-50':
                options.hover && options.variant === 'info',
              'cursor-pointer hover:bg-green-50':
                options.hover && options.variant === 'success',
              'cursor-pointer hover:bg-orange-50':
                options.hover && options.variant === 'warning',
              'cursor-pointer hover:bg-red-50':
                options.hover && options.variant === 'danger',
            }"
            v-for="(val1, index1) in computedData"
            :key="index1"
          >
            <td
              class="p-4 pl-5 break-words"
              :class="{
                'border-r last:border-l last:border-r-0':
                  options.bordered && !options.borderless,
                'border-gray-100': options.variant === 'default',
                'border-primary-100': options.variant === 'primary',
                'border-gray-100': options.variant === 'secondary',
                'border-blue-100': options.variant === 'info',
                'border-green-100': options.variant === 'success',
                'border-orange-100': options.variant === 'warning',
                'border-red-100': options.variant === 'danger',
              }"
              v-for="(val2, index2) in title"
              :key="index2"
            >
              {{ filteredDatabyTitle(val1, val2) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <rs-collapse v-if="computedData.length > 0" accordion>
          <rs-collapse-item v-for="(val, index) in computedData" :key="index">
            <template #title>
              <div class="grid grid-cols-2">
                <div class="flex flex-col col-span-1">
                  <span class="font-semibold leading-tight">
                    {{ Object.values(val)[0] }}
                  </span>
                  <span class="text-sm"> {{ Object.values(val)[1] }} </span>
                </div>
                <div class="flex justify-end items-center col-span-1">
                  <div class="mr-4">
                    {{ Object.values(val)[computedData.length] }}
                  </div>
                </div>
              </div>
            </template>
            <template #default>
              <div
                class="
                  flex
                  justify-between
                  items-center
                  even:bg-inherit
                  odd:bg-gray-200
                  rounded-lg
                  p-3
                "
                v-for="(val1, index1) in Object.entries(val).slice(
                  2,
                  Object.entries(val).length
                )"
                :key="index1"
              >
                <span>
                  {{ camelCasetoTitle(val1[0]) }}
                </span>
                <span>
                  {{ val1[1] }}
                </span>
              </div>
            </template>
          </rs-collapse-item>
        </rs-collapse>
      </div>
    </div>
    <div v-if="advanced" class="table-footer">
      <div class="flex justify-center items-center gap-x-2">
        <span class="text-sm text-secondary hidden md:block"
          >Showing {{ pageSize * currentPage - pageSize + 1 }} to
          {{ pageSize * currentPage }} of {{ totalEntries }} entries</span
        >
      </div>
      <div class="table-footer-page">
        <rs-button
          variant="primary-outline"
          class="rounded-full !p-1 w-8 h-8"
          @click="firstPage"
          :disabled="currentPage == 1"
        >
          <vue-feather type="chevrons-left" size="1rem"></vue-feather>
        </rs-button>
        <rs-button
          variant="primary-outline"
          class="rounded-full !p-1 w-8 h-8"
          @click="prevPage"
          :disabled="currentPage == 1"
        >
          <vue-feather type="chevron-left" size="1rem"></vue-feather>
        </rs-button>
        <rs-button
          :variant="currentPage == val ? 'primary' : 'primary-outline'"
          class="rounded-full !p-1 w-8 h-8"
          v-for="(val, index) in pages"
          :key="index"
          @click="pageChange(val)"
        >
          {{ val }}
        </rs-button>
        <rs-button
          variant="primary-outline"
          class="rounded-full !p-1 w-8 h-8"
          @click="nextPage"
          :disabled="currentPage == totalPage"
        >
          <vue-feather type="chevron-right" size="1rem"></vue-feather>
        </rs-button>
        <rs-button
          variant="primary-outline"
          class="rounded-full !p-1 w-8 h-8"
          @click="lastPage"
          :disabled="currentPage == totalPage"
        >
          <vue-feather type="chevrons-right" size="1rem"></vue-feather>
        </rs-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, watch, computed } from "vue";
import state from "@/store";
import RsButton from "@/components/Button";
import RsDropdown from "@/components/Dropdown.vue";
import RsDropdownItem from "@/components/DropdownItem.vue";
import RsCollapse from "@/components/Collapse.vue";
import RsCollapseItem from "@/components/CollapseItem.vue";

export default {
  name: "component-table",
  components: {
    RsButton,
    RsDropdown,
    RsDropdownItem,
    RsCollapse,
    RsCollapseItem,
  },
  props: {
    field: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    basic: {
      type: Boolean,
      default: true,
    },
    advanced: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: () => ({
        variant: "default",
        striped: false,
        bordered: false,
        borderless: false,
        hover: false,
      }),
    },
    optionsAdvanced: {
      type: Object,
      default: () => ({
        sortable: true,
        filterable: true,
        responsive: true,
      }),
    },
    grid: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    // Default varaiable
    const columnTitle = ref([]);
    const dataTable = ref(props.data);
    const dataTitle = ref([]);
    const dataLength = ref(props.data.length);

    // Advanced Option Variable
    const currentSort = ref(0);
    const currentSortDir = ref("asc");
    const currentPage = ref(1);
    const pageSize = ref(5);
    const maxPageShown = ref(3);

    // Searching Variable
    const keyword = ref("");

    // Filtering Variable
    const filter = ref([]);
    const openFilter = ref(false);

    const hideTable = ref(false);

    if (dataLength.value == 0) {
      return false;
    }

    const isDesktop = computed(() => {
      return state.getters.windowWidth >= state.getters.mobileWidth
        ? true
        : false;
    });

    if (props.optionsAdvanced.responsive) {
      if (isDesktop.value) {
        hideTable.value = false;
      } else {
        hideTable.value = true;
      }
    }

    // watch props.data change and redo all the data
    watch(
      () => [props.data, props.field],
      () => {
        if (props.field.length > 0) {
          columnTitle.value = props.field;
          dataTitle.value = props.field;
        } else {
          columnTitle.value = Object.keys(dataTable.value[0]);
          dataTitle.value = Object.keys(dataTable.value[0]);
        }
      },
      { immediate: true }
    );

    const camelCasetoTitle = (str) => {
      return str.replace(/([A-Z])/g, " $1").replace(/^./, (str) => {
        return str.toUpperCase();
      });
    };

    const setColumnTitle = (data) => {
      try {
        if (props.field.length == 0) {
          columnTitle.value = Object.keys(data);
        } else {
          columnTitle.value = props.field;
        }
      } catch (error) {
        console.log(error);
      }
    };

    const filteredDatabyTitle = (data, title) => {
      let result = "";
      try {
        if (props.field.length == 0) {
          Object.entries(data).forEach(([key, value]) => {
            if (key === title) {
              result = value;
              return;
            }
          });
        } else {
          // Get index title from columnTitle
          let index = columnTitle.value.indexOf(title);

          // Convert data json to array
          let arr = Object.values(data);

          result = arr[index];
        }
        if (result === "") result = "-";
        return result;
      } catch (error) {
        console.log(error);
        return "-";
      }
    };

    setColumnTitle(dataTable.value[0]);

    // Computed data
    const computedData = computed(() => {
      let result = [];
      let totalData = 0;
      result = dataTable.value
        .slice()
        .sort((a, b) => {
          let modifier = 1;
          let a1 = a[columnTitle.value[currentSort.value]];
          let b1 = b[columnTitle.value[currentSort.value]];

          if (currentSortDir.value === "desc") modifier = -1;
          if (a1 < b1) return -1 * modifier;
          if (a1 > b1) return 1 * modifier;
          return 0;
        })
        .filter((row) => {
          // Search all json object if keyword not equal null
          if (keyword.value === "") return true;
          let result = false;
          Object.entries(row).forEach(([key, value]) => {
            if (
              value
                .toString()
                .toLowerCase()
                .includes(keyword.value.toLowerCase())
            ) {
              result = true;
            }
          });
          return result;
        })
        .filter((_, index) => {
          let start = (currentPage.value - 1) * pageSize.value;
          let end = currentPage.value * pageSize.value;
          totalData++;
          if (index >= start && index < end) return true;
        });
      dataLength.value = totalData;
      return result;
    });

    const totalEntries = computed(() => {
      return dataLength.value;
    });

    const sort = (index) => {
      if (index === currentSort.value) {
        currentSortDir.value = currentSortDir.value === "asc" ? "desc" : "asc";
      } else if (
        index !== currentSort.value &&
        currentSortDir.value == "desc"
      ) {
        currentSortDir.value = "asc";
      }
      currentSort.value = index;
    };

    const pages = computed(() => {
      let totalPG = Math.ceil(dataLength.value / pageSize.value);
      const numShown = Math.min(maxPageShown.value, totalPG);
      let first = currentPage.value - Math.floor(numShown / 2);
      first = Math.max(first, 1);
      first = Math.min(first, totalPG - numShown + 1);
      return [...Array(numShown)].map((k, i) => i + first);
    });

    const totalPage = computed(() => {
      return Math.ceil(dataLength.value / pageSize.value);
    });

    const pageChange = (page) => {
      currentPage.value = page;
    };

    const nextPage = () => {
      if (currentPage.value * pageSize.value < dataLength.value)
        currentPage.value++;
    };
    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const firstPage = () => {
      currentPage.value = 1;
    };

    const lastPage = () => {
      currentPage.value = totalPage.value;
    };

    const hideColumn = (key) => {
      if (!getFilter(key)) {
        // insert into filter variable to tell there is a change in filter
        setFilter(key, "hide", true);
      } else {
        // update filter variable to tell there is a change in filter
        setFilter(key, "hide", false);
      }
    };

    const setFilter = (key, action, condition) => {
      // Check if key exist inside filter
      let index = filter.value.findIndex((item) => item.key === key);

      if (index == -1) {
        // If key not exist, insert new filter
        filter.value.push({
          key: key,
          action: {
            [action]: condition,
          },
        });
      } else {
        // If key exist, update filter
        filter.value[index].action[action] = condition;
        console.log(filter.value);
      }
    };

    const getFilter = (key) => {
      let result = false;
      filter.value.forEach((item) => {
        if (item.key === key) {
          result = item.action.hide;
        }
      });
      return result;
    };

    // Watch filter.value
    watch(
      () => filter.value,
      () => {
        // console.log(filter.value);
        // Loop json object filter.value
        filter.value.forEach((item) => {
          // Hide Column
          if (item.action.hide) {
            // Get index title from columnTitle
            let index = columnTitle.value.indexOf(item.key);

            if (index !== -1) {
              // Remove column from columnTitle
              columnTitle.value.splice(index, 1);
            }
          } else if (!item.action.hide) {
            // Get index title from dataTitle
            let indexData = dataTitle.value.indexOf(item.key);

            if (!columnTitle.value.includes(item.key)) {
              // Add Column back to its original position
              columnTitle.value.splice(indexData, 0, item.key);

              // Sort the columnTitle like dataTitle
              columnTitle.value.sort((a, b) => {
                let indexA = dataTitle.value.indexOf(a);
                let indexB = dataTitle.value.indexOf(b);
                return indexA - indexB;
              });
            }
          }
        });
      },
      { deep: true }
    );

    const filterComputed = computed(() => {
      let result = [];
      let i = 0;
      filter.value.forEach((item) => {
        if (item.action.hide) {
          result.push({
            title: item.key,
            hide: item.action.hide,
          });
        }
        i++;
      });
      return result;
    });

    // watch state getter windowWidth
    watch(
      () => state.getters.windowWidth,
      () => {
        if (props.optionsAdvanced.responsive) {
          if (state.getters.windowWidth <= state.getters.mobileWidth) {
            hideTable.value = true;
          } else {
            hideTable.value = false;
          }
        }
      },
      { deep: true }
    );

    return {
      camelCasetoTitle,
      filteredDatabyTitle,
      sort,
      nextPage,
      prevPage,
      firstPage,
      lastPage,
      pageChange,
      hideColumn,
      getFilter,
      pageSize,
      title: columnTitle,
      dataTitle,
      computedData,
      currentSort,
      currentSortDir,
      pages,
      totalPage,
      currentPage,
      totalEntries,
      keyword,
      openFilter,
      filterComputed,
      hideTable,
    };
  },
};
</script>
