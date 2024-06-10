<template>
  <div>
    <!-- Navbar for larger screens -->
    <div class="d-lg-block d-none d-xl-block d-xxl-block">
      <SecondNav />
      <ThirdNav />
    </div>

    <!-- Navbar for smaller screens (collapsed) -->
    <div class="d-lg-none">
      <nav
        class="navbar navbar-expand-lg py-2 sticky-top"
        aria-label="Twelfth navbar example"
      >
        <div class="container-fluid container">
          <div class="d-flex">
            <router-link to="/" exact class="navbar-brand m-0" href="#">
              ></router-link
            >
            <a
              href="https://sdu.edu.kz/language/ru/"
              class="immg ms-2 mt-1"
            ></a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-md-center navbargo"
            id="navbarsExample10"
          >
            <ul class="navbar-nav">
              <li>
                <router-link
                  to="/"
                  exact
                  class="nav-link active"
                  href="#"
                  @click="closeNavbar"
                >
                  Главная
                </router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Лицей
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/history"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >История лицея</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/facts"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Важные факты</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/documents"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Документы</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/comand"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Команда</router-link
                    >
                  </li>

                  <li>
                    <router-link
                      to="/board"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Попечительский совет</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/AllNews"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Объявления</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Поступление
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/profession"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Специальности</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/supplydocuments"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Подача документов</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/translate"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Перевод</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Специальности
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/it"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Информационные системы <br />
                      и программное обеспечение</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/accounting"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Бухгалтерcкий учет</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/pedogogika"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Педагогика - математика</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Инфраструктура
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/corpus"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Корпус</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/labaratory"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Лаборатории</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/Dormitory"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Общежитие</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/sporthall"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Спортзал + поле</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/canteen"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Столовая</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Студентам
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/AcademCalendar"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Академический календарь</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/edupage"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Электронный журнал - Edupage</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/practica"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Практика , Карьера , Проф. ориентация</router-link
                    >
                  </li>

                  <li>
                    <router-link
                      to="/comit"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Комитеты</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/studentlife"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Үйірмелер</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/dormitoryrools"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Жатақхана</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Родителям
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/parentcomit"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Ата-ана комитеті</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/contact"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Контакты с колледжем</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/connectionteachers"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Связь с учителем</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link
                  to="/partner"
                  exact
                  class="nav-link active"
                  href="#"
                  @click="closeNavbar"
                  >{{ $t("ThirdNavNavItem7") }}</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Выпускникам
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      to="/association"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Ассоциация</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/sponsorship"
                      exact
                      class="dropdown-item"
                      href="#"
                      @click="closeNavbar"
                      >Спонсорство</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link
                  to="/googlecalendar"
                  exact
                  class="nav-link active"
                  href="#"
                  @click="closeNavbar"
                  >{{ $t("ThirdNavNavItem9") }}</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  style="display: list-item; align-items: center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="lang"
                >
                  {{ currentLangName }}
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <button
                      class="dropdown-item"
                      @click="handleLanguageChange('kz', 'Қаз')"
                    >
                      Қаз
                    </button>
                  </li>
                  <li>
                    <button
                      class="dropdown-item"
                      @click="handleLanguageChange('ru', 'Рус')"
                    >
                      Рус
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import ThirdNav from "./ThirdNav.vue";

export default {
  components: {
    ThirdNav,
  },
  methods: {
    handleLanguageChange(locale, langName) {
      this.closeNavbar();
      this.changeLanguage(locale, langName);
    },
    closeNavbar() {
      console.log("close");
      // Close the navbar by toggling the collapsed state
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbargo");
      console.log(navbarCollapse);
      if (navbarToggler && navbarCollapse) {
        navbarToggler.classList.add("collapsed");
        navbarCollapse.classList.remove("show");
      }
    },
    changeLanguage(locale, langName) {
      this.$i18n.locale = locale;
      this.currentLangName = langName;
      this.$root.$emit("changeLocale", locale);
    },
    getLangName(locale) {
      if (locale === "kz") {
        return "Қаз";
      } else if (locale === "ru") {
        return "Рус";
      }
      return locale;
    },
  },
  data() {
    return {
      currentLangName: this.getLangName(this.$i18n.locale),
    };
  },
  mounted() {
    // Set the default language to 'ru'
    this.$i18n.locale = "ru";
    this.currentLangName = this.getLangName("ru");
    this.$root.$emit("changeLocale", "ru");
  },
  // Component logic goes here
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 990px) and (max-width: 1225px) {
  .navbar-nav > li > a {
    font-size: 10px;
  }
}
@media (min-width: 1225px) and (max-width: 1380px) {
  .navbar-nav > li > a {
    font-size: 14px;
  }
}

@media (max-width: 756px) {
}
</style>
