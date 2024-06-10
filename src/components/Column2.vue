<template>
  <div class="container my-5 justify-content-center">
    <div class="text-center">
      <h1 class="m-5 text-center" style="color: #8350d7">
        {{ $t("Column2H1") }}

        <hr />
      </h1>

      <div
        class="row d-flex align-self-center gap-5 justify-content-center p-2"
      >
        <div
          class="col-5 col-lg-3 d-flex flex-column gap-1 text-center justify-content-center px-5 rounded-4 py-3 align-items-center"
          style="background-color: #8350d7"
        >
          <i class="bi"><img src="../assets/Column/col3card1.png" alt="" /></i>
          <p class="m-0 text-light">{{ $t("Column2P1") }}</p>
        </div>
        <div
          class="col-5 col-lg-3 d-flex flex-row flex-column gap-1 text-center justify-content-center px-5 rounded-4 py-4 align-items-center"
          style="background-color: #8350d7"
        >
          <i class="bi"><img src="../assets/Column/col3card2.png" alt="" /></i>
          <p class="m-0 text-light">
            {{ $t("Column2P2") }}
          </p>
        </div>
        <div
          class="col-5 col-lg-3 d-flex flex-row flex-column gap-1 text-center justify-content-center px-5 rounded-4 py-4 align-items-center"
          style="background-color: #8350d7"
        >
          <i class="bi"><img src="../assets/Column/col3card3.png" alt="" /></i>
          <p class="m-0 text-light text-light">
            {{ $t("Column2P3") }}
          </p>
        </div>
        <div
          class="col-5 col-lg-3 d-flex flex-row flex-column gap-1 text-center justify-content-center px-5 rounded-4 py-4 align-items-center"
          style="background-color: #8350d7"
        >
          <i class="bi"><img src="../assets/Column/col3card4.png" alt="" /></i>
          <p class="m-0 text-light text-light">
            {{ $t("Column2P4") }}
          </p>
        </div>
        <div
          class="col-5 col-lg-3 d-flex flex-row flex-column gap-1 text-center justify-content-center px-5 rounded-4 py-4 align-items-center"
          style="background-color: #8350d7"
        >
          <i class="bi"><img src="../assets/Column/col3card5.png" alt="" /></i>
          <p class="m-0 text-light text-light">
            {{ $t("Column2P5") }}
          </p>
        </div>
        <div
          class="col-5 col-lg-3 d-flex flex-row flex-column gap-1 text-center justify-content-center p-5 rounded-4 py-4 align-items-center"
          style="background-color: #8350d7"
        >
          <i class="bi"><img src="../assets/Column/col3card6.png" alt="" /></i>
          <p class="m-0 text-light text-light">
            {{ $t("Column2P6") }}
          </p>
        </div>
      </div>
    </div>

    <div class="container my-5 d-flex justify-content-center">
      <div class="size text-center">
        <h2 class="m-5 text-center" style="color: #8350d7">
          {{ $t("Column3H1") }}
          <hr />
        </h2>

        <div class="row align-items-center gap-5">
          <div
            class="col d-flex flex-column gap-2 text-center justify-content-center p-4 rounded-4 py-3 align-items-center mx-5"
          >
            <i class="bi"><img src="../assets/col3card1.png" alt="" /></i>
            <p class="fs-2 fw-bold m-0">41</p>
            <p class="fw-medium">{{ $t("Column3P1") }}</p>
          </div>
          <div
            class="col d-flex flex-column gap-2 text-center justify-content-center p-4 rounded-4 py-3 align-items-center mx-5"
          >
            <i class="bi"><img src="../assets/col3card2.png" alt="" /></i>
            <p class="fs-2 fw-bold m-0">23</p>
            <p class="fw-medium">{{ $t("Column3P2") }}</p>
          </div>
          <div
            class="col d-flex flex-column gap-2 text-center justify-content-center p-4 rounded-4 py-3 align-items-center mx-5"
          >
            <i class="bi"><img src="../assets/col3card3.png" alt="" /></i>
            <p class="fs-2 fw-bold m-0">148</p>
            <p class="fw-medium">{{ $t("Column3P3") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
