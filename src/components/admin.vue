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

    <div class="container my-5">
      <div class="row">
        <div class="col-12 col-md-4" v-for="item in cards" :key="item._id">
          <div class="card mb-3">
            <img
              class="card-img-top"
              :src="item.imgPath"
              alt="Card image cap"
            />
            <div class="card-body">
              <h2>
                <router-link
                  @click="get(item._id)"
                  :to="{
                    name: 'UpdateNews',
                    params: { id: item._id },
                    props: { news: item },
                  }"
                  exact
                  class="navbar-brand"
                  href="#"
                >
                  {{ item.newsTitle }}
                </router-link>
              </h2>
              <p class="card-text">{{ item.description }}</p>
              <p class="card-time">{{ formatDate(item.createdAt) }}</p>
              <button class="btn-delete" @click="deleteNews(item._id)">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Jumbotron2",
  data() {
    return {
      cards: [],
      news: {}, // Initialize cards as an empty array
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
    async get(id) {
      try {
        const response = await axios.get(
          `https://jihc.edu.kz/api/admin/news/${id}`
        );
        this.news = {
          newsTitle: response.data.newsTitle,
          imgPath: response.data.imgPath,
          description: response.data.description,
        };

        // Debugging statements

        this.$router.push({
          name: "UpdateNews",
          params: { id },
        });
      } catch (error) {
        console.log(`Error get element by id ${error}`);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 408px;
}
.card img {
  max-height: 275px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
}
</style>
