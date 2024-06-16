const aboutPageTemplate: string = `
<main class="main-box">
  <section class="main-wrap">
    <h1 class="main-title">Введение</h1>
    <div class="about-box">
      <div class="about-text">
        <label>Наша работа представляет собой SPA-приложение по продаже билетов на культурно-развлекательные мероприятия в городе Гомель. <br><br>
              <strong>Маргарита</strong> предложила идею проекта, работала с API категорий товаров, создала форму регистрации, настроила проект, предлагала альтернативные пути решения некоторых моментов. <br><br>
              <strong>Влад</strong>, выступая в роли TeamLead, занимался работой с API и внутренней логикой проекта, а также координировал действия команды. <br><br>
              <strong>Павел</strong> создал макет проекта в Figma, разработал форму входа, спроектировал общую структуру проекта по ООП и ее маршрутизацию, а также ввел использование Trello для командной работы. <br><br>
              Несмотря на некоторые трудности с получением данных через API, эффективное сотрудничество команды и помощь менторов, привело к успешному завершению проекта.
        </label>
      </div>
      <div class="command">
        <div class="about-name">
          <div class="m-img"></div>
          <strong>Маргарита</strong>
          <label>FE/BE</label>
          <a target="_blank" href="https://github.com/MargaritaBraun">GitHub</a>
          <label>Выпускница университета культуры и искусств, специализирующаяся на информационных системах в культуре. С энтузиазмом изучает программирование на JavaScript в RS School.</label>
        </div>
        <div class="about-name">
          <div class="v-img"></div>
          <strong>Владислав</strong>
          <label>TeamLead/FE/BE</label>
          <a target="_blank" href="https://github.com/Lisowez">GitHub</a>
          <label>Трудолюбивый работник Мозырского нефтеперерабатывающего завода, изучает React. С июня 2023 года с увлечением учится в RS School, стремясь расширить свои навыки и перспективы в сфере веб-разработки.</label>
        </div>
        <div class="about-name">
          <div class="p-img"></div>
          <strong>Павел</strong>
          <label>FE/UIUX</label>
          <a target="_blank" href="https://github.com/onqqr">GitHub</a>
          <label>Любознательный студент RS School, который с ноября 2023 года с интересом погружается в изучение новых технологий. C удовольствием экспериментирует с Angular в свое свободное время, стремясь углубить свои знания в области веб-разработки.</label>
        </div>
      </div>
    </div>
    <a target="_blank" href="https://rs.school/">
      <div class="about-rss"></div>
    </a>
  </section>
</main>
`;

export default aboutPageTemplate;
