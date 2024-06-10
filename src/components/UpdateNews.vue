<template>
  <div class="d-flex align-items-center py-4 container">
    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="submitForm">
        <h1 class="h3 mb-3 fw-normal">Please fill all the inputs</h1>

        <div class="form-floating">
          <input
            type="text"
            class="form-control mb-1"
            id="floatingTitle"
            placeholder="name@example.com"
          />
          <label for="floatingInput">News Title</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control mb-1"
            id="floatingImageLink"
            placeholder="Password"
          />
          <label for="floatingPassword">News Image Link</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control mb-1"
            id="floatingDescription"
            placeholder="Password"
          />
          <label for="floatingPassword">News description</label>
        </div>

        <button class="btn btn-primary w-100 py-2" type="submit">
          Update News
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      news: {}, // Initialize cards as an empty array
    };
  },
  name: "UpdateNews",
  created() {
    // Call getNewsById when the component is created (page loads or refreshes)
    this.getNewsById();
  },
  methods: {
    async getNewsById() {
      const id = this.$route.params.id; // Get the id from route params
      try {
        const response = await axios.get(
          `https://jihc.edu.kz/api/admin/news/${id}`
        );
        this.news = {
          newsTitle: response.data.newsTitle,
          imgPath: response.data.imgPath,
          description: response.data.description,
        };

        document.getElementById("floatingTitle").value =
          response.data.newsTitle;
        document.getElementById("floatingDescription").value =
          response.data.description;
        document.getElementById("floatingImageLink").value =
          response.data.imgPath;
      } catch (error) {
        console.log(`Error get element by id ${error}`);
      }
    },
    async submitForm() {
      // Collecting form data
      const formData = {
        newsTitle: document.getElementById("floatingTitle").value,
        description: document.getElementById("floatingDescription").value,
        imgPath: document.getElementById("floatingImageLink").value,
      };

      const id = this.$route.params.id; // Get the id from route params

      try {
        // Sending PUT request with Axios to update news by ID
        const response = await axios.put(
          `https://jihc.edu.kz/api/admin/news/${id}`,
          formData
        );

        // Check if the update was successful
        if (response.status === 200) {
          console.log("News updated successfully:", response.data);

          // Redirect to the admin page upon success
          this.$router.push({ name: "Admin" }); // Ensure the route name 'Admin' exists in your router configuration
        } else {
          console.error("Failed to update news:", response.status);
        }
      } catch (error) {
        console.error("Error updating news:", error);
      }
    },
  },
};
</script>

<style scoped></style>
