<template>
  <section id="blog" class="text-center text-light mb-5 bg-img size">
    <div class="inner-overlay overlay size">
      <div
        class="px-5 py-5 container size text-center text-lg-start d-flex align-items-center"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  // Component logic goes here
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-img {
  background-image: url("@/assets/bgimg.JPG"); /* Adjust the path to your background image */
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
}

/* .overlay {
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
  top: 0;
  left: 0;
} */

.size {
  min-height: 800px;
  margin-top: -180px;
}
@media (max-width: 767px) {
  .size {
    min-height: 200px;
  }
}
</style>
