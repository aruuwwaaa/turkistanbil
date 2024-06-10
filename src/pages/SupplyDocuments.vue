<script>
import Hero2 from "../components/Hero2.vue";
import JumbotronElem from "../components/JumbotronElem.vue";

export default {
  name: "App",
  components: {
    Hero2,
    JumbotronElem,
  },
};
</script>
<template>
  <hero2
    :title="$t('JumbotronElemPage.title')"
    :podtitle="$t('JumbotronElemPage.podtitle')"
  />
  <JumbotronElem />
</template>
