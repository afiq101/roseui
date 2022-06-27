<template>
  <div
    class="table-wrapper"
    :class="{
      '!border': advanced,
    }"
  >
    <div v-if="advanced" class="table-header">
      <div class="flex gap-x-2">
        <FormKit
          v-model="keyword"
          type="search"
          placeholder="Search..."
          outer-class="mb-0"
        />
        <rs-button class="!px-3 sm:!px-6">
          <vue-feather
            type="filter"
            class="mr-0 md:mr-1"
            size="1rem"
          ></vue-feather>
          <span class="hidden sm:block">Filter</span>
        </rs-button>
      </div>
      <div class="flex justify-center items-center gap-x-2">
        <span class="text-gray-400">Result per page:</span>
        <v-select
          name="country"
          :options="[5, 10, 25, 100]"
          v-model="pageSize"
          :clearable="false"
        ></v-select>
      </div>
    </div>
    <div class="w-full overflow-x-auto">
      <table
        class="table-content"
        :class="{
          '!border-y !border-0': advanced,
          'table-fixed': options.fixed,
          'table-auto': !options.fixed,
        }"
      >
        <thead
          class="text-left"
          :class="{
            'border-y': !options.borderless,
            'border-gray-200 bg-gray-100 ': options.variant === 'default',
            'border-rose-200 bg-rose-400 text-white ':
              options.variant === 'primary',
            'border-gray-200 bg-gray-400 text-white':
              options.variant === 'secondary',
            'border-blue-200 bg-blue-500 text-white ':
              options.variant === 'info',
            'border-green-200 bg-green-500 text-white':
              options.variant === 'success',
            'border-orange-200 bg-orange-400 text-white':
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
                'border-rose-300': options.variant === 'primary',
                'border-gray-300': options.variant === 'secondary',
                'border-blue-300': options.variant === 'info',
                'border-green-300': options.variant === 'success',
                'border-orange-300': options.variant === 'warning',
                'border-red-300': options.variant === 'danger',
                'w-36': options.fixed,
                'cursor-pointer': optionsAdvanced.sortable,
              }"
              style="min-width: 100px"
              @click="optionsAdvanced.sortable ? sort(index) : null"
              v-for="(val, index) in title"
              :key="index"
            >
              {{ field.length > 0 ? val : camelCasetoTitle(val) }}
              <div v-if="optionsAdvanced.sortable" class="sortable">
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
              'border-y border-gray-200':
                !options.bordered && !options.borderless,
              'border-b': options.bordered && !options.borderless,
              'border-b-0': options.borderless,
              'border-gray-200 odd:bg-white even:bg-slate-50':
                options.variant === 'default' && options.striped,
              'border-rose-100 odd:bg-white even:bg-rose-50':
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
              'cursor-pointer hover:bg-rose-50':
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
                'border-rose-100': options.variant === 'primary',
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
    </div>
    <div v-if="advanced" class="table-footer">
      <span class="text-sm text-gray-400 hidden md:block"
        >Showing
        {{ currentPage === 1 ? 1 : pageSize * currentPage - pageSize }} to
        {{ pageSize * currentPage }} of {{ totalEntries }} entries</span
      >
      <div class="table-footer-page">
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
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, watch, computed } from "vue";
import RsButton from "@/components/Button";
export default {
  name: "component-table",
  components: {
    RsButton,
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
      }),
    },
  },
  setup(props) {
    // Default varaiable
    const columnTitle = ref([]);
    const dataTable = ref(props.data);
    const dataLength = ref(props.data.length);

    // Advanced Option Variable
    const currentSort = ref(0);
    const currentSortDir = ref("asc");
    const currentPage = ref(1);
    const pageSize = ref(10);
    const maxPageShown = ref(3);

    // Searching Variable
    const keyword = ref("");

    if (dataLength.value == 0) {
      return false;
    }

    // watch props.data change and redo all the data
    watch(
      () => [props.data, props.field],
      () => {
        if (props.field.length > 0) {
          columnTitle.value = props.field;
        } else {
          columnTitle.value = Object.keys(dataTable.value[0]);
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

    return {
      camelCasetoTitle,
      filteredDatabyTitle,
      sort,
      nextPage,
      prevPage,
      pageChange,
      pageSize,
      title: columnTitle,
      computedData,
      currentSort,
      currentSortDir,
      pages,
      totalPage,
      currentPage,
      totalEntries,
      keyword,
    };
  },
};
</script>

<style lang="scss" scoped></style>
