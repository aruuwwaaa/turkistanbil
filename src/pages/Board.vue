<script>
import Hero2 from "../components/Hero2.vue";
import Board from "../components/Board.vue";

export default {
  name: "App",
  components: {
    Hero2,
    Board,
  },
};
</script>
<template>
  <hero2 :title="$t('BoardPage.title')" :podtitle="$t('BoardPage.podtitle')" />
  <Board />
</template>
