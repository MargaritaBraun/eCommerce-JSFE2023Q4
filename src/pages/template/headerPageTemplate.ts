const headerPageTemplate: string = `
<header class="header">
<div class="header-up">
  <div class="header-logo">.Apoint</div>
  <div class="burger-nav">
    <ul class="navigation">
      <li class="category-pg"><a class="burger-link" href="#category">Категории</a></li>
      <li class="discounts-pg"><a class="burger-link" href="#discounts">Скидки</a></li>
      <li class="about-pg"><a class="burger-link" href="#about">О нас</a></li>
      <li class="basket-pg"><a class="burger-link" href="#basket">Корзина</a></li>
    </ul>
  </div>
  <div class="btn-header">
    <div class="header-user-name">John</div>
    <button class="btn-user-login">Войти</button>
    <button class="btn-user-signup">Регистрация</button>
    <button class="btn-user-logout">Выйти</button>
  </div>
  </div>
  <div class="header-down">
  <section class="search-box">
  <div class="tagline">События в одной точке!</div>
  <div class="input-search">
    <input class="main-search" type="text" placeholder="Поиск событий в Гомеле...">
    <button class="btn-search">Поиск</button>
    <button class="btn-filter">Фильтр</button>
  </div>
</section>
  </div>
</header>
`;

export default headerPageTemplate;
