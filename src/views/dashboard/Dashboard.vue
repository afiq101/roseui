<template>
  <rs-layout>
    <rs-breadcrumb />
    <!-- First Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">
      <!-- Summary Card #1 -->
      <rs-card>
        <div class="summary-1 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-rose-100 rounded-2xl"
          >
            <vue-feather class="text-rose-500" type="dollar-sign"></vue-feather>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">
              RM 100,000</span
            >
            <span class="text-base font-semibold text-gray-400"
              >Total Revenues</span
            >
          </div>
        </div>
        <VueApexCharts
          width="100%"
          height="53"
          :options="{
            ...chartOptions,
            colors: ['#F43F5E'],
            yaxis: {
              min: 0,
              max: Math.max(...data1[0].data) + 10,
            },
          }"
          :series="data1"
        ></VueApexCharts>
      </rs-card>
      <!-- Summary Card #2 -->
      <rs-card>
        <div class="summary-2 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-indigo-100 rounded-2xl"
          >
            <vue-feather class="text-indigo-500" type="users"></vue-feather>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight"> 512</span>
            <span class="text-base font-semibold text-gray-400"
              >Total Users</span
            >
          </div>
        </div>
        <VueApexCharts
          width="100%"
          height="53"
          :options="{
            ...chartOptions,
            colors: ['#6366F1'],
            yaxis: {
              min: 0,
              max: Math.max(...data2[0].data) + 10,
            },
          }"
          :series="data2"
        ></VueApexCharts>
      </rs-card>
      <!-- Summary Card #3 -->
      <rs-card>
        <div class="summary-3 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-orange-100 rounded-2xl"
          >
            <vue-feather
              class="text-orange-500"
              type="shopping-bag"
            ></vue-feather>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight"> 20</span>
            <span class="text-base font-semibold text-gray-400"
              >Total Products</span
            >
          </div>
        </div>
        <VueApexCharts
          width="100%"
          height="53"
          :options="{
            ...chartOptions,
            colors: ['#F97316'],
            yaxis: {
              min: 0,
              max: Math.max(...data3[0].data) + 10,
            },
          }"
          :series="data3"
        ></VueApexCharts>
      </rs-card>
      <!-- Summary Card #4 -->
      <rs-card>
        <div class="summary-4 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-blue-100 rounded-2xl"
          >
            <vue-feather class="text-blue-500" type="eye"></vue-feather>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">
              2,452</span
            >
            <span class="text-base font-semibold text-gray-400"
              >Total Viewers</span
            >
          </div>
        </div>
        <VueApexCharts
          width="100%"
          height="53"
          :options="{
            ...chartOptions,
            colors: ['#3B82F6'],
            yaxis: {
              min: 0,
              max: Math.max(...data4[0].data) + 10,
            },
          }"
          :series="data4"
        ></VueApexCharts>
      </rs-card>
    </div>

    <div class="grid grid-cols-8 gap-x-6">
      <div class="col-span-5">
        <rs-card>
          <div class="p-5 h-full">asd</div>
        </rs-card>
      </div>
      <div class="col-span-3 flex flex-col">
        <rs-card>
          <div class="p-5">asd</div>
        </rs-card>
        <rs-card>
          <div class="p-5">asd</div>
        </rs-card>
      </div>
    </div>
  </rs-layout>
</template>

<script>
/* eslint-disable */
import { ref, computed } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "dashboard-index",
  components: {
    VueApexCharts,
  },
  data() {
    const spark1 = ref([]);
    const spark2 = ref([]);
    const spark3 = ref([]);
    const spark4 = ref([]);
    var sparkline1Data = [47, 45, 54, 38, 56, 24, 65];
    var sparkline2Data = [61, 35, 66, 41, 59, 25, 32];
    var sparkline3Data = [25, 18, 36, 41, 43, 35, 14];
    var sparkline4Data = [8, 16, 22, 41, 43, 35, 14];

    const randomizeArray = function (arg) {
      var array = arg.slice();
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    spark1.value.push({
      name: "Revenues",
      data: randomizeArray(sparkline1Data),
    });

    spark2.value.push({
      name: "Users",
      data: randomizeArray(sparkline2Data),
    });

    spark3.value.push({
      name: "Products",
      data: randomizeArray(sparkline3Data),
    });

    spark4.value.push({
      name: "Viewers",
      data: randomizeArray(sparkline4Data),
    });

    const chartOptions = computed(() => ({
      chart: {
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        opacity: 1,
      },
      labels: [...Array(7).keys()].map((n) => `2022-06-0${n + 1}`),
      xaxis: {
        type: "datetime",
      },
    }));

    return {
      title: "Dashboard",
      data1: spark1,
      data2: spark2,
      data3: spark3,
      data4: spark4,
      chartOptions,
    };
  },
};
</script>

<style lang="scss" scoped></style>
