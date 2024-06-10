<script>
import Hero2 from "../components/Hero2.vue";
import Profession from "../components/Profession.vue";

export default {
  components: {
    Hero2,
    Profession,
  },
};
</script>

<template>
  <Hero2
    :title="$t('ProfessionPage.title')"
    :podtitle="$t('ProfessionPage.podtitle')"
  />
  <Profession />
</template>
