import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.js";
import { createI18n } from "vue-i18n";
// import ru from "./locales/ru";
import kz from "./locales/kz";
import axios from "axios";
// main.js

// Import the router configuration
import router from "./router/index";

const i18n = createI18n({
  locale: "kz",
  messages: {
    kz,
  },
});

// Language switch logic
i18n.beforeCreate = function () {
  this.$root.$on("changeLocale", (newLocale) => {
    localStorage.setItem("userLocale", newLocale);
    this.$i18n.locale = newLocale; // Update the locale dynamically
  });
};

// Create the Vue app and use the router and i18n
const app = createApp(App);
app.use(router);
app.use(i18n);

axios.interceptors.response.use(undefined, async function (error) {
  if (error.response.status === 401 && !error.config._retry) {
    error.config._retry = true;
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post("http://localhost:8800/auth/refresh", {
        refreshToken,
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;
      return axios(error.config);
    } catch (refreshError) {
      console.error("Refresh token invalid or network error", refreshError);
      // Redirect to login page
      router.push("/loginToTheAdminPanel");
    }
  }
  return Promise.reject(error);
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Mount the app to the #app element
app.mount("#app");
