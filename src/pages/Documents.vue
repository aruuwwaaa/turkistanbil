<script>
import Hero2 from "../components/Hero2.vue";
import Document from "../components/Document.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Document,
  },
};
</script>
<template>
  <hero2
    :title="$t('DocumentPage.title')"
    :podtitle="$t('DocumentPage.podtitle')"
  />
  <Document />
</template>
