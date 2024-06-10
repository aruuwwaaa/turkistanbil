<template>
  <div class="mt-5 bg text-light">
    <footer class="container py-5">
      <div class="row gap-5">
        <div class="col-6 col-md-4 mb-2">
          <h5 class="mb-4">
            {{ $t("FooterH1") }}
          </h5>
          <ul class="nav flex-column text-light gap-3">
            <li class="nav-item mb-2">
              <a
                class="navbar-brand d-flex align-self-center"
                href="kentau.edu.bilim@gmail.com"
              >
                <i
                  class="bi bi-envelope me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                bilturkistanqyz@gmail.com
              </a>
            </li>
            <li class="nav-item mb-2">
              <a
                class="navbar-brand d-flex align-self-center"
                href="tel:8-700-718-01-82"
              >
                <i
                  class="bi bi-telephone me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                8-700-718-01-82
              </a>
            </li>
            <li class="nav-item mb-2">
              <a
                class="navbar-brand d-flex align-self-center"
                href="https://go.2gis.com/vda30k"
              >
                <i
                  class="bi bi-geo-alt-fill me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                {{ $t("FooterL1") }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3 me-5">
          <h5 class="mb-4">
            {{ $t("FooterH2") }}
          </h5>
          <ul class="nav flex-column text-light gap-3">
            <li class="nav-item mb-2">
              <a
                class="navbar-brand d-flex align-self-center"
                href="https://www.instagram.com/bilturkistanqyz?igsh=MTJqcG01cmR0MWh0OA=="
              >
                <i
                  class="bi bi-instagram me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                bilturkistanqyz
              </a>
            </li>
            <li class="nav-item mb-2">
              <a
                class="navbar-brand d-flex align-self-center"
                href="https://www.facebook.com/profile.php?id=100063489881030"
              >
                <i
                  class="bi bi-facebook me-3 h3 m-0"
                  style="display: list-item; align-items: center"
                ></i>
                bilturkistanqyz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-color: #8350d7;
}
</style>
