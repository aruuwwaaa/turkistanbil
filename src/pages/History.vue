<script>
import Hero2 from "../components/Hero2.vue";
import History from "../components/History.vue";

export default {
  name: "App",
  components: {
    Hero2,
    History,
  },
};
</script>
<template>
  <hero2
    :title="$t('HistoryPage.title')"
    :podtitle="$t('HistoryPage.podtitle')"
  />
  <history />
</template>
