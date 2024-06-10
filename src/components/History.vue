<template>
  <section id="info " class="my-5 container">
    <div class="row">
      <div
        class="col-lg-6 col-md-6 col-sm-6 justify-content-center text-left infoS"
      >
        <p class="">
          {{ $t("HistoryP1") }}
        </p>
        <p>
          {{ $t("HistoryP2") }}
        </p>
        <p>
          {{ $t("HistoryP3") }}
        </p>
        <p>
          {{ $t("HistoryP4") }}
        </p>
      </div>
      <div
        class="col-lg-6 col-md-6 col-sm-6 align-self-center justify-content-end d-flex"
      >
        <img src="../assets/historyturkyz.png" alt="" class="img-fluid" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Jumbotron2",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
