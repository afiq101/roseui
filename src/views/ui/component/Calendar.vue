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
            href="https://fullcalendar.io/"
            target="_blank"
            class="hover:underline text-primary-400"
            >FullCalendar</a
          >
          which is a Vue component that allows you to create a calendar.
          Fullcalendar is a JavaScript library that provides a simple API for
          easily creating a calendar. Besides, it is a great way to display
          events on a page.
        </p>
      </template>
    </rs-card>
    <rs-card>
      <template #header> Default </template>
      <template #body>
        <p class="mb-4">
          Use <code>rs-calendar</code> to display a calendar. The calendar is a
          simple component that displays a grid of days.
        </p>
        <!-- <rs-calendar :events="events"></rs-calendar> -->
        <full-calendar :options="calendarOptions" />
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
/* eslint-disable */
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import scrollGrid from "@fullcalendar/scrollgrid";
import luxon2Plugin from "@fullcalendar/luxon2";

export default {
  name: "component-calendar",
  components: {
    FullCalendar,
  },
  setup() {
    const handleDateClick = (arg) => {
      // alert("date click! " + arg.dateStr);
    };

    return {
      events: [
        {
          title: "Event",
          startDate: "2022-07-01",
          endDate: "2022-07-06",
          color: "green",
        },
      ],
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next title",
          right: "dayGridMonth,timeGridWeek,listWeek",
        },
        dateClick: handleDateClick,
        dragScroll: true,
        dayMaxEvents: 2,
        navLinks: true,
        events: [
          { title: "event 1", start: "2022-07-05", end: "2022-07-08" },
          { title: "event 2", start: "2022-07-05", end: "2022-07-08" },
          { title: "event 3", start: "2022-07-05", end: "2022-07-08" },
          { title: "event 3", start: "2022-07-05", end: "2022-07-08" },
          { title: "event 3", start: "2022-07-05", end: "2022-07-08" },
          { title: "event 3", start: "2022-07-05", end: "2022-07-08" },
          { title: "event 4", date: "2022-07-22" },
        ],
      },
    };
  },
};
</script>
