<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-4" v-for="item in cards" :key="item._id">
        <div class="card mb-3">
          <img class="card-img-top" :src="item.imgPath" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ item.newsTitle }}</h5>
            <p
              class="card-text"
              :class="{ 'text-truncate': !item.isFullTextVisible }"
            >
              {{ item.description }}
            </p>
            <button @click="toggleText(item)" class="btn btn-link p-0">
              {{ item.isFullTextVisible ? "Скрыть" : "Подробнее" }}
            </button>
            <p class="card-time">{{ formatDate(item.createdAt) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cards: [],
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    formatDate(value) {
      if (value) {
        return new Date(value).toLocaleDateString("ru-RU", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        });
      }
      return "";
    },

    toggleText(card) {
      card.isFullTextVisible = !card.isFullTextVisible;
    },

    async fetchNews() {
      try {
        const response = await axios.get("https://jihc.edu.kz/api/news", {
          withCredentials: true,
        });
        response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        this.cards = response.data.map((item) => ({
          ...item,
          imgPath: item.imgPath,
          isFullTextVisible: false,
        }));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    },
  },
};
</script>

<style scoped>
.card img {
  max-height: 275px;
  object-fit: cover;
  background-repeat: no-repeat;
}

.text-truncate {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
</style>
