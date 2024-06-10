<script>
import Hero2 from "../components/Hero2.vue";
import Translate from "../components/Translate.vue";
export default {
  name: "App",
  components: {
    Hero2,
    Translate,
  },
};
</script>
<template>
  <hero2
    :title="$t('TranslatePage.title')"
    :podtitle="$t('TranslatePage.podtitle')"
  />
  <Translate />
</template>
