<template>
  <div class="container my-5 d-flex justify-content-center">
    <div class="size text-center">
      <h2 class="m-5 text-center" style="color: #0077ff">
        {{ $t("Column3H1") }}
        <hr />
      </h2>

      <div class="row align-items-center gap-5">
        <div
          class="col d-flex flex-column gap-2 text-center justify-content-center p-4 rounded-4 py-3 align-items-center mx-5"
        >
          <i class="bi"><img src="../assets/col3card1.png" alt="" /></i>
          <p class="fs-2 fw-bold m-0">56</p>
          <p class="fw-medium">{{ $t("Column3P1") }}</p>
        </div>
        <div
          class="col d-flex flex-column gap-2 text-center justify-content-center p-4 rounded-4 py-3 align-items-center mx-5"
        >
          <i class="bi"><img src="../assets/col3card2.png" alt="" /></i>
          <p class="fs-2 fw-bold m-0">26</p>
          <p class="fw-medium">{{ $t("Column3P2") }}</p>
        </div>
        <div
          class="col d-flex flex-column gap-2 text-center justify-content-center p-4 rounded-4 py-3 align-items-center mx-5"
        >
          <i class="bi"><img src="../assets/col3card3.png" alt="" /></i>
          <p class="fs-2 fw-bold m-0">203</p>
          <p class="fw-medium">{{ $t("Column3P3") }}</p>
        </div>
        <div
          class="col d-flex flex-column gap-2 text-center justify-content-center p-4 rounded-4 py-3 align-items-center mx-5"
        >
          <i class="bi"><img src="../assets/col3card4.png" alt="" /></i>
          <p class="fs-2 fw-bold m-0">160</p>
          <p class="fw-medium">{{ $t("Column3P4") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column2",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.size {
  max-width: 1142px;
}
</style>
