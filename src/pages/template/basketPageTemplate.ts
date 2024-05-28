const basketPageTemplate: string = `
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
    <div class="header-user-name"></div>
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

<main class="main-box">
  <section class="main-wrap">
    <h1>Корзина</h1>
  </section>
</main>

<footer class="footer">
  <div class="left-footer">
    <ul class="nav-footer">
      <li class="category-f">
        <a class="footer-link" href="#category">Категории</a>
      </li>
      <li class="discounts-f">
        <a class="footer-link" href="#discounts">Скидки</a>
      </li>
      <li class="about-f">
        <a class="footer-link" href="#about">О нас</a>
      </li>
      <li class="basket-f">
        <a class="footer-link" href="#basket">Корзина</a>
      </li>
    </ul>
    </div>
    <div class="middle-footer">
      <label>Thank you for shopping with us!</label>
      <label>© 2024 Apoint. All rights reserved.</label>
    </div>
    <div class="right-footer">
      <div class="logo-footer">.Apoint</div>
      <div class="text-footer">События в одной точке!</div>
  </div>
</footer>
`;

export default basketPageTemplate;
