<template>
  <section id="blog" class="text-center text-light bg-img size">
    <div
      class="inner-overlay overlay size d-flex justify-content-center flex-column"
    >
      <h1 class="display-5 fw-bold text-light">
        {{ title }}
      </h1>
      <p>{{ podtitle }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    podtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-img {
  background-image: url("@/assets/bgimg.JPG"); /* Adjust the path to your background image */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
}

.overlay {
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.3)
  ); /* Adjust the opacity by changing the alpha values */
  top: 0;
  left: 0;
}

.size {
  min-height: 350px;
}
@media (max-width: 767px) {
  .size {
    min-height: 200px;
  }
}
</style>
