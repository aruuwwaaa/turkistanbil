<script>
import Hero from "../components/Hero.vue";
import Column from "../components/Column.vue";
import Jumbotron from "../components/Jumbotron.vue";
import Column2 from "../components/Column2.vue";

export default {
  name: "App",
  components: {
    Hero,
    Column,
    Jumbotron,
    Column2,
  },
};
</script>
<template>
  <hero />
  <Column />
  <jumbotron />
  <column2 />
  <News />
</template>
