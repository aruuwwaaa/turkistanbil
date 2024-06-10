<script>
import Hero2 from "../components/Hero2.vue";
import Comit from "../components/Comit.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Comit,
  },
};
</script>
<template>
  <hero2 title="Комитеты" podtitle="Главная / Комитеты" />
  <Comit />
</template>
