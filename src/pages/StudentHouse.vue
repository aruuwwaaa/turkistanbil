<script>
import Hero2 from "../components/Hero2.vue";
import StudentHouse from "../components/StudentHouse.vue";

export default {
  name: "App",
  components: {
    Hero2,
    StudentHouse,
  },
};
</script>
<template>
  <hero2 title="Жатақхана" podtitle="Басты бет / Жатақхана" />
  <StudentHouse />
</template>
