<script>
import Hero2 from "../components/Hero2.vue";
import AcademicCalendar from "../components/AcademicCalendar.vue";

export default {
  name: "App",
  components: {
    Hero2,
    AcademicCalendar,
  },
};
</script>
<template>
  <hero2
    title="Академиялық календарь"
    podtitle="Басты бет / Академиялық календарь"
  />
  <AcademicCalendar />
</template>
