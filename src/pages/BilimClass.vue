<script>
import Hero2 from "../components/Hero2.vue";
import Edupage from "../components/BilimClass.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Edupage,
  },
};
</script>
<template>
  <hero2 title="Электронды журнал" podtitle="Басты бет / Электронды журнал" />
  <Edupage />
</template>
