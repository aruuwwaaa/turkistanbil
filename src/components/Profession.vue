<template>
  <div class="container py-5" id="featured-3">
    <div class="row pb-5 g-4 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div
          class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2"
        ></div>
      </div>
    </div>
    <h4 class="pb-2 fw-bold" style="color: #0077ff">
      ЛИЦЕЙДЕ ОҚУ ПРОЦЕСІНІҢ ТІЛДІК КАРТАСЫ
    </h4>
    <div
      class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-start"
    >
      <div class="list-group">
        <div class="list-group-item d-flex gap-3 py-3" aria-current="true">
          <img src="../assets/kz_flag.png" alt="" class="" />
          <div
            class="d-flex gap-2 w-100 justify-content-center align-self-center"
          >
            <div>
              <h6 class="mb-0 fw-bold">
                20% <span style="color: #0077ff">НА</span> КАЗАХСКОМ
                <span style="color: #0077ff">ЯЗЫКЕ</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="list-group-item d-flex gap-3 py-3" aria-current="true">
          <img src="../assets/ru_flag.png" alt="twbs" class="flex-shrink-0" />
          <div
            class="d-flex gap-2 w-100 justify-content-center align-self-center"
          >
            <div>
              <h6 class="mb-0 fw-bold">
                5% <span style="color: #0077ff">НА</span> РУССКОМ
                <span style="color: #0077ff">ЯЗЫКЕ</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="list-group-item d-flex gap-3 py-3" aria-current="true">
          <img src="../assets/tu_flag.png" alt="twbs" class="flex-shrink-0" />
          <div
            class="d-flex gap-2 w-100 justify-content-center align-self-center"
          >
            <div>
              <h6 class="mb-0 fw-bold">
                5% <span style="color: #0077ff">НА</span> ТУРЕЦКОМ
                <span style="color: #0077ff">ЯЗЫКЕ</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="list-group-item d-flex gap-3 py-3" aria-current="true">
          <img src="../assets/eng_flag.png" alt="twbs" class="flex-shrink-0" />
          <div class="d-flex w-100 justify-content-center align-self-center">
            <div>
              <h6 class="mb-0 fw-bold">
                70% <span style="color: #0077ff">НА</span> АНГЛИЙСКОМ
                <span style="color: #0077ff">ЯЗЫКЕ</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToTop() {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Add smooth scrolling effect
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
