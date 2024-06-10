<template>
  <nav
    class="navbar navbar-expand-lg rounded-top-4"
    aria-label="Twelfth navbar example"
    data-bs-theme="dark"
  >
    <div class="container-fluid container">
      <div class="d-flex">
        <router-link to="/" exact class="navbar-brand m-0" href="#">
          <div class="immg2 border-end border-secondary"></div
        ></router-link>
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
        class="collapse navbar-collapse justify-content-md-center"
        id="navbarsExample10"
      >
        <div class="logo">
          <img src="../assets/logotype.png" />
        </div>
        <ul class="navbar-nav">
          <li>
            <router-link to="/" exact class="nav-link active" href="#">
              Осы бет
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
              {{ $t("ThirdNavNavItem1") }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/history" exact class="dropdown-item" href="#">
                  {{ $t("ThirdNavNavItem1Li1") }}
                </router-link>
              </li>
              <li>
                <router-link
                  to="/AcademCalendar"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem5Li1") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="/comand"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem1Li4") }}</router-link
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
              {{ $t("ThirdNavNavItem2") }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  to="/profession"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem2Li1") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="/supplydocuments"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem2Li2") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="/translate"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem2Li3") }}</router-link
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
              {{ $t("ThirdNavNavItem4") }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/corpusA" exact class="dropdown-item" href="#"
                  >Корпус (оқу корпусы)
                </router-link>
              </li>
              <li>
                <router-link
                  to="/Dormitory"
                  exact
                  class="dropdown-item"
                  href="#"
                  >Жатақхана</router-link
                >
              </li>
              <li>
                <router-link
                  to="/sporthall"
                  exact
                  class="dropdown-item"
                  href="#"
                  >Спортзал</router-link
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
              {{ $t("ThirdNavNavItem5") }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  to="/edupage"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem5Li2") }}</router-link
                >
              </li>

              <li>
                <router-link
                  to="/studentlife"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem5Li7") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="/dormitoryrools"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem5Li8") }}
                </router-link>
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
              {{ $t("ThirdNavNavItem6") }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  to="/parentcomit"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem6Li1") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem6Li2") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="/connectionteachers"
                  exact
                  class="dropdown-item"
                  href="#"
                  >{{ $t("ThirdNavNavItem6Li3") }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyThirdNavbar",
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo img {
  height: 70px;
  width: 70px;
  margin-left: -350px;
  /* background-repeat: no-repeat; */
}
/* .immg2 {
  background-image: url("../assets/jihc-logo-png-v1.png");
  height: 35px;
  width: 130px;
  background-repeat: no-repeat;
} */
.navbar {
  background-color: #8350d7;
  height: 100px;
}
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
</style>
