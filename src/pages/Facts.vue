<script>
import Hero2 from "../components/Hero2.vue";
import Facts from "../components/Facts.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Facts,
  },
};
</script>
<template>
  <Hero2 :title="$t('FactPage.title')" :podtitle="$t('FactPage.podtitle')" />
  <Facts />
</template>
