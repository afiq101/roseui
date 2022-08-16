<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> Default </template>
      <template #body>
        <FormKit type="datetime-local" :value="datetime" label="Datetime" />
        <FormKit type="date" :value="date" label="Date Only" />
        <FormKit type="month" :value="month" label="Month Only" />
        <FormKit type="time" :value="time" label="Time Only" />
        <FormKit type="week" :value="week" label="Week Only" />
      </template>
    </rs-card>

    <rs-card>
      <template #header> Validation </template>
      <template #body>
        <FormKit
          type="date"
          label="Date"
          help="Enter date (the date must be after 2020)"
          validation="date_after:2020-12-31"
          validation-visibility="live"
        />
        <FormKit
          type="date"
          label="Date"
          help="Enter date (the date must be before 2020)"
          validation="date_before:2020-01-01"
          validation-visibility="live"
        />
        <FormKit
          type="date"
          label="Date"
          help="Enter date (the date must be between 6/6/2022 and 20/6/2022)"
          :validation="[['date_between', dateStart, dateEnd]]"
          validation-visibility="live"
        />
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>

import { DateTime } from "luxon";

export default {
  name: "form-element-input-datetime",
  
  setup() {
    const dt = DateTime.now();
    return {
      date: dt.toISODate(),
      datetime: dt.toFormat("yyyy-MM-dd'T'HH:mm"),
      month: dt.toFormat("yyyy-MM"),
      time: dt.toFormat("HH:mm"),
      week: dt.toFormat("yyyy-'W'kk"),
      dateStart: dt.plus({ days: -7 }).toFormat("yyyy-MM-dd"),
      dateEnd: dt.plus({ days: 7 }).toFormat("yyyy-MM-dd"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
