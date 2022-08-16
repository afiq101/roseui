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
            href="https://vcalendar.io/"
            target="_blank"
            class="hover:underline text-primary-400"
            >V-Calendar</a
          >
          which is a Vue component that allows you to create a calendar.
        </p>
      </template>
    </rs-card>
    <rs-card>
      <template #header> Single Date </template>
      <template #body>
        <p class="mb-4">
          Single date calendar is a calendar that only allows you to select a
          single date. It is a good way to select a date for a datepicker.
        </p>
        <div class="flex flex-col justify-center items-center">
          <v-date-picker v-model="date" />
          <p class="py-2">
            <span class="font-semibold">Date:</span>
            {{ date }}
          </p>
        </div>
      </template>
    </rs-card>
    <rs-card>
      <template #header> Date Range </template>
      <template #body>
        <p class="mb-4">
          Date range calendar is a calendar that allows you to select a date
          range.
        </p>
        <div class="flex flex-col justify-center items-center">
          <v-date-picker v-model="range" is-range />
          <p class="py-2">
            <span class="font-semibold">Date:</span>
            {{ range }}
          </p>
        </div>
      </template>
    </rs-card>
    <rs-card>
      <template #header> Date & Time </template>
      <template #body>
        <p class="mb-4">
          Date & time calendar is a calendar that allows you to select a date
          and time.
        </p>
        <div class="flex flex-col justify-center items-center">
          <v-date-picker v-model="date" mode="dateTime" />
          <p class="py-2">
            <span class="font-semibold">Date:</span>
            {{ date }}
          </p>
        </div>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import { ref } from "vue";
import "v-calendar/dist/style.css";
import { DatePicker as VDatePicker } from "v-calendar";
import { DateTime } from "luxon";

export default {
  name: "form-element-calendar",
  components: {
    VDatePicker,
  },
  setup() {
    const date = ref(DateTime.now());
    const range = ref({
      start: DateTime.local(2022, 6, 6),
      end: DateTime.local(2022, 6, 20),
    });
    return {
      date,
      range,
    };
  },
};
</script>

<style lang="scss" scoped></style>
