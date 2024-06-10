<template>
  <div class="container my-3">
    <div class="d-flex justify-content-between align-items-center">
      <h1>News:</h1>
      <router-link
        to="/adminPanelNewsToAddNews"
        exact
        class="navbar-brand"
        href="#"
      >
        Add news <i class="bi bi-plus"></i
      ></router-link>
    </div>
    <div class="justify-content-center align-items-center">
      <article>
        <h2>
          <a :href="`/posts/${item._id}`" class="">{{ item.newsTitle }}</a>
        </h2>
        <img class="img-fluid d-flex" :src="item.imgPath" alt="News image" />
        <p></p>
        <div class="info">
          <span>{{ item.description }}</span>
          <span>{{ formatDate(item.createdAt) }}</span>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <span>{{ formatDate(item.createdAt) }}</span>
          <button class="btn-delete" @click="deleteNews(item._id)">
            <i class="bi bi-trash"></i>
          </button>
        </div>
        <hr />
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Jumbotron2",
  data() {
    return {
      cards: [], // Initialize cards as an empty array
    };
  },
  created() {
    this.fetchNews(); // Fetch news when the component is created
  },
  methods: {
    formatDate(value) {
      if (value) {
        // You can customize the options as needed
        return new Date(value).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      return "";
    },
    async fetchNews() {
      try {
        const response = await axios.get("https://jihc.edu.kz/api/admin/news", {
          withCredentials: true,
        });
        this.cards = response.data.map((item) => ({
          ...item,
          // Directly assign the transformed URL to imgPath
          imgPath: item.imgPath,
        }));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    },
    async deleteNews(id) {
      try {
        await axios.delete(`https://jihc.edu.kz/api/admin/news/${id}`);
        this.cards = this.cards.filter((item) => item._id !== id);
      } catch (error) {
        console.error("Error deleting news:", error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
