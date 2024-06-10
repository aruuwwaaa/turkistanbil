<script>
import ParentComit from "@/components/parentComit.vue";
import Hero2 from "../components/Hero2.vue";

export default {
  name: "App",
  components: {
    Hero2,
    ParentComit,
  },
};
</script>
<template>
  <hero2 title="Ата-ана комитеті" podtitle="Басты бет / Ата-ана комитеті" />
  <ParentComit />
</template>
