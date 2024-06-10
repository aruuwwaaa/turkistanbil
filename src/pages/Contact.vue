<script>
import Hero2 from "../components/Hero2.vue";
import contact from "../components/contact.vue";

export default {
  name: "App",
  components: {
    Hero2,
    contact,
  },
};
</script>
<template>
  <hero2 title="Лицеймен байланыс" podtitle="Басты бет / Лицеймен байланыс" />
  <contact />
</template>
