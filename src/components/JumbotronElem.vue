<template>
  <div class="container mb-4 rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold mb-5">
        {{ $t("JumbotronElemH1") }}
      </h1>
      <p class="mb-5">
        {{ $t("JumbotronElemP1") }}
      </p>
      <p class="m-0">
        {{ $t("JumbotronElemP2") }}
      </p>
      <p class="m-0">
        {{ $t("JumbotronElemP3") }}
      </p>
      <p class="mb-5">
        {{ $t("JumbotronElemP4") }}
      </p>
      <p class="mb-5">
        {{ $t("JumbotronElemP5") }}
      </p>
      <p class="mb-5">
        {{ $t("JumbotronElemP6") }}
      </p>

      <ol class="list-group list-group list-group-numbered">
        <h4 class="mb-3">{{ $t("JumbotronElemH2") }}</h4>
        <li class="list-group-item">{{ $t("JumbotronElemLI1") }}</li>
        <li class="list-group-item">{{ $t("JumbotronElemLI2") }}</li>
        <li class="list-group-item">{{ $t("JumbotronElemLI3") }}</li>

        <li class="list-group-item">{{ $t("JumbotronElemLI4") }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
