<template>
  <div class="student-life">
    <h1>Student Life</h1>
    <div class="box-container">
      <div class="box">
        <div class="image shine">
          <img src="../assets/media2.png" alt="" />
        </div>
        <div class="content">
          <h3>
            Media Club - IT саласындағы Web және Design бағыттары бойынша
            проекттер жасауды үйретеді
          </h3>
        </div>
      </div>

      <div class="box">
        <div class="image shine">
          <img src="../assets/cookingclub.png" alt="" />
        </div>
        <div class="content">
          <h3>
            Cooking Club - қыздарға неше түрлі тағам түрлерін жасап үйренуге
            шақырады
          </h3>
        </div>
      </div>

      <div class="box">
        <div class="image shine">
          <img src="../assets/dance.png" alt="" />
        </div>
        <div class="content">
          <h3>
            Dance Club - қыздардың өнер жағынан потенциалдарын ашуға мүмкіндік
            береді
          </h3>
        </div>
      </div>

      <div class="box">
        <div class="image shine">
          <img src="../assets/volleyballClub.png" alt="" />
        </div>
        <div class="content">
          <h3>
            Volleyball Club - қыздарды спорт түрлеріне бейімдеп,денелерін
            шынықтырып,жарыстарға дайындайды
          </h3>
        </div>
      </div>

      <div class="box">
        <div class="image shine">
          <img src="../assets/charityClub.png" alt="" />
        </div>
        <div class="content">
          <h3>
            Charity Club - қыздармен көптеген қайырымдылық іс-шараларын
            ұйымдастыруға шақырады
          </h3>
        </div>
      </div>

      <div class="box">
        <div class="image shine">
          <img src="../assets/EcoClub.png" alt="" />
        </div>
        <div class="content">
          <h3>Eco Club - айналамызды жинастыру, тазалықты орнатуға шақырады</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.student-life {
  text-align: center;
  margin: 20px;
}
.box-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.box-container .box {
  background-color: #8a65c5;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 400px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.box-container .box .image {
  height: 20rem;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.box-container .box .image img {
  width: 100%;
  height: 400px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  object-fit: cover;
}

.box-container .box:hover .image img {
  transform: scale(1.05);
}

.box-container .box .image h3 {
  padding: 15px;
  font-size: 1.5em;
  margin: 0;
}

.box-container .box .content {
  padding: 2rem 2rem;
  background: var(--secondary);
  border-radius: 0 0 2rem 2rem;
}

.box-container .box .content h3 {
  font-size: 20px;
  color: #fff;
}
</style>
