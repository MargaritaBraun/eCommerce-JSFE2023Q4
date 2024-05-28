const headerTemplate: string = `
<header class="header">
<div class="header-up">
  <a href="#main" class="header-logo">.Apoint</a>
  <div class="burger-nav">
    <ul class="navigation">
      <li class="category-pg"><a href="#category">Категории</a></li>
      <li class="discounts-pg"><a href="#discounts">Скидки</a></li>
      <li class="about-pg"><a href="#about">О нас</a></li>
      <li class="basket-pg"><a href="#basket">Корзина</a></li>
    </ul>
  </div>
  <div class="btn-header">
    <a href="#user" class="header-user-name"></a>
    <a href="#login" class="btn-user-login">Войти</a>
    <a href="#registration" class="btn-user-signup">Регистрация</a>
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

export default headerTemplate;
