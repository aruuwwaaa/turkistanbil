<script>
import Hero2 from "../components/Hero2.vue";
import Dormitory from "../components/Dormitory.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Dormitory,
  },
};
</script>
<template>
  <Hero2 title="Жатақхана" podtitle="Басты бет / Жатақхана" />

  <Dormitory />
</template>
