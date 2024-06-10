<template>
  <section class="container my-5">
    <div class="row g-4 d-flex justify-content-center">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="col-lg-3 col-md-5"
      >
        <div class="card text-white rounded-5 shadow-risen">
          <img
            class="card-img rounded-5"
            :src="card.imgPath"
            alt="Card image"
          />
          <div class="card-img-overlay d-flex flex-column">
            <div class="mt-auto">
              <h3 class="card-text font-weight-bold h4">
                <span class="d-flex flex-column md-3 fw-bold">{{
                  card.name
                }}</span>
              </h3>
              <p class="card-title" style="font-size: 0.9rem">
                {{ card.jobTitle }}
              </p>
              <a
                :href="`mailto:${card.email}`"
                class="card-title text-decoration-underline"
                >{{ card.email }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="m-5 text-center" style="color: #8350d7">
      Администрация
      <hr />
    </h1>
    <div class="row g-3 mx-4 gap-3 d-flex justify-content-start">
      <div
        class="col-lg-6 gap-3 rounded-5 p-4 frame d-flex flex-column"
        v-for="card in cards2"
        :key="card.email"
        style="background-color: #8350d7"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>
    <h1 class="m-5 text-center" style="color: #8350d7">
      Тілдер кафедрасы
      <hr />
    </h1>
    <div class="row g-3 mx-4 gap-3 d-flex justify-content-start">
      <div
        class="col-lg-6 gap-3 rounded-5 p-4 frame d-flex flex-column"
        v-for="card in cards3"
        :key="card.email"
        style="background-color: #00805e"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>
    <h1 class="m-5 text-center" style="color: #8350d7">
      Гуманитарлық ғылымдар және дене шынықтыру кафедрасы
      <hr />
    </h1>
    <div class="row g-3 mx-4 gap-3 d-flex justify-content-start">
      <div
        class="col-lg-6 gap-3 rounded-5 p-4 frame d-flex flex-column"
        v-for="card in cards4"
        :key="card.email"
        style="background-color: #43188a"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>
    <h1 class="m-5 text-center" style="color: #8350d7">
      Жаратылыстану-математикалық цикл кафедрасы
      <hr />
    </h1>
    <div class="row g-3 mx-4 gap-3 d-flex justify-content-start">
      <div
        class="col-lg-6 gap-3 rounded-5 p-4 frame d-flex flex-column"
        v-for="card in cards5"
        :key="card.email"
        style="background-color: #ff9100"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>

    <h1 class="m-5 text-center" style="color: #8350d7">
      Тәрбиешілер
      <hr />
    </h1>
    <div class="row g-3 mx-4 gap-3 d-flex justify-content-start">
      <div
        class="col-lg-6 gap-3 rounded-5 p-4 frame d-flex flex-column"
        v-for="card in cards8"
        :key="card.email"
        style="background-color: #00a353"
      >
        <p class="fw-bold text-light m-0 ms-1">{{ card.name }}</p>
        <p class="fw-medium text-light p-0 m-0 ms-1 job">
          {{ card.jobTitle }}
        </p>
        <a :href="`mailto:${card.email}`" class="ms-1 fw-medium text-light">{{
          card.email
        }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards2: [
        {
          jobTitle: "Директор",
          name: "Кенжеқұлұлы Қанат",
        },
        {
          jobTitle: "Директордың оқу-әдістемелік жұмысы жөніндегі орынбасары",
          name: "Сарсенбеков Мелдехан Мухтарұлы",
        },
        {
          jobTitle: "Директордың тәрбие ісі жөніндегі орынбасары",
          name: "Сері Ботакөз Ерікқызы",
        },
        {
          jobTitle: "Жатақхана меңгерушісі",
          name: "Спабек Жанна Абылханқызы",
        },
        {
          name: "Кенжебаев Ерлан Бахытұлы",
          jobTitle: "Экономика бөлімінің басшысы",
        },
        {
          name: "Адылханов Умиджон Набихонұлы",
          jobTitle:
            "Кадрлар жөніндегі инспекторы, қоғаммен байланыс жөніндегі директордың орынбасары",
        },
        {
          name: "Исабекова Дарина Өміржанқызы",
          jobTitle: "Бас бухгалтер",
        },
        {
          name: "Рахманкулова Гульдана Мадыхановна",
          jobTitle: "Экономист",
        },
        {
          name: "Тоқтар Нұргүл Ауесхановна",
          jobTitle: "Методист",
        },
        {
          name: "Елеусіз Жансая Оңғарбекқызы",
          jobTitle: "Білім басқармасының хатшысы",
        },
        {
          name: "Асылзат Амирова",
          jobTitle: "Психолог",
        },
        {
          name: "Жүнісбай Ақерке Болатқызы",
          jobTitle: "Медбике",
        },
        {
          name: "Кулмаханбетова Бибинур Ермековна",
          jobTitle: "Кітапханашы",
        },
        {
          name: "Медет",
          jobTitle: "Жүйелік администратор – программист",
        },
      ],
      cards3: [
        {
          name: "Туракулова Фарангиз Асановна",
          jobTitle: "Ағылшын тілі пәнінің мұғалімі, кафедра меңгерушісі",
        },
        {
          name: "Маннапова Гулназа Маннапқызы ",
          jobTitle: "Орыс тілі мен әдебиет пәнінің мұғалімі",
        },
        {
          name: "Сейтбекова Фатима Мадиханқызы",
          jobTitle: "Ағылшын тілі пәнінің мұғалімі",
        },
        {
          name: "Абдувалиева Сагдиана Бахадырқызы",
          jobTitle: "Ағылшын тілі пәнінің мұғалімі",
        },
        {
          name: "Абддураимова Жасмина Акмалқызы ",
          jobTitle: "Ағылшын тілі пәнінің мұғалімі",
        },
        {
          name: "Адылханов Умиджон Набихонұлы",
          jobTitle: "Қазақ тілі мен әдебиет пәнінің мұғалімі",
        },
        {
          name: "Кусаинов Рустем Менжасарович",
          jobTitle: "Түрік тілі пәнінің мұғалімі",
        },
      ],
      cards4: [
        {
          name: "Әпет Құралай",
          jobTitle: "Тарих пәнінің мұғалімі",
        },
        {
          name: "Сәрсенбекова Жанерке Аманбекқызы",
          jobTitle: "Биология пәнінің мұғалімі",
        },
        {
          name: "Садуллаев Бекзод Шухратуллаевич",
          jobTitle: "Химия пәнінің мұғалімі",
        },
        {
          name: "Тилентаев Қанат Берикбаевич",
          jobTitle: "Учитель физкультуры",
        },
      ],
      cards5: [
        {
          name: "Спабек Жанна Абылханқызы",
          jobTitle: "Математика пәнінің  мұғалімі",
        },
        {
          name: "Еркебулан Ишмуханбетов",
          jobTitle: " Математика пәнінің  мұғалімі",
        },
        {
          name: "Сарсенбеков Мелдехан Мухтарұлы",
          jobTitle: "Математика пәнінің  мұғалімі",
        },
        {
          name: "Сансызбай Ермахан Нағашбекұлы",
          jobTitle: "Физика пәнінің мұғалімі",
        },
        {
          name: "Жұмабай Нұрай Жұмағалиқызы",
          jobTitle: "Информатика пәнінің мұғалімі",
        },
        {
          name: "Жанболат",
          jobTitle: "Информатика пәнінің мұғалімі",
        },
      ],
      cards8: [
        {
          name: "Самбет Зейнеп Алиханқызы",
          jobTitle: "Тәрбиеші",
        },
        {
          name: "Сабырбек Қарақат Мажитқызы",
          jobTitle: "Тәрбиеші",
        },
        {
          name: "Сейсенбай Қазына Сейсенбайқызы",
          jobTitle: "Тәрбиеші",
        },
        {
          name: "Худайбергенова Дилнура Улугбекқызы",
          jobTitle: "Тәрбиеші",
        },
        {
          name: "Бақытжанқызы Нұрсәуле",
          jobTitle: "Тәрбиеші",
        },
        {
          name: "Таңатар Айдана Бахытқызы",
          jobTitle: "Тәрбиеші",
        },
      ],
    };
  },
};
</script>

<style scoped>
.job {
  line-height: 16px;
  font-size: 12px;
}
.frame {
  max-width: 300px;
}
/* Add your component-specific styles here */
.inner-shadow-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%; /* Adjust the height of the shadow as needed */
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: inherit;
  pointer-events: none; /* Ensure the pseudo-element doesn't interfere with interaction */
}
.card {
  border: 0 !important;
}
.card {
  position: relative;
}
.card img {
  max-height: 326.25px;
  object-fit: cover; /* Ensures the image doesn't exceed the width of its container */
  width: auto; /* Maintains the aspect ratio */
}
</style>
