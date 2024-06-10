<script>
import Hero2 from "../components/Hero2.vue";
import StudentLife from "../components/StudentLife.vue";

export default {
  name: "App",
  components: {
    Hero2,
    StudentLife,
  },
};
</script>
<template>
  <hero2 :title="$t('LifePage.title')" :podtitle="$t('LifePage.podtitle')" />
  <StudentLife />
</template>
