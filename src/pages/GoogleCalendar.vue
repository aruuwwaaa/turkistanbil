<script>
import Hero2 from "@/components/Hero2.vue";
import googlecalendar from "../components/googleCalendar.vue";

export default {
  name: "App",
  components: {
    Hero2,
    googlecalendar,
  },
};
</script>
<template>
  <hero2 title="Календарь" podtitle="Главная / Календарь" />
  <googlecalendar />
</template>
