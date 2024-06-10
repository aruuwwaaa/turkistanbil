<template>
  <div class="d-flex align-items-center py-4">
    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="submitForm">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control mb-1"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control mb-1"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button class="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async submitForm(event) {
      event.preventDefault();
      const formData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value,
      };

      // Inside your login method
      try {
        const response = await axios.post(
          "https://jihc.edu.kz/api/auth",
          formData
        );
        sessionStorage.setItem("accessToken", response.data.accessToken);
        sessionStorage.setItem("refreshToken", response.data.refreshToken);

        // Redirect to the admin page

        this.$router.push({ name: "Admin" });
      } catch (error) {
        console.error("Login error:", error);
      }
    },
  },
};
</script>

<style scoped>
.form-signin {
  max-width: 330px;
}
</style>
