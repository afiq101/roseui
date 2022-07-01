<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> Calendar </template>
      <template #body>
        <p class="mb-4">
          Use <code>rs-calendar</code> to display a calendar. The calendar is a
          simple component that displays a grid of days.
        </p>
        <rs-calendar :events="events"></rs-calendar>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import RsCalendar from "@/components/Calendar";
export default {
  name: "component-calendar",
  components: {
    RsCalendar,
  },
  setup() {
    return {
      events: [
        {
          title: "Event",
          startDate: "2022-07-01",
          endDate: "2022-07-06",
          color: "green",
        },
      ],
    };
  },
};
</script>
