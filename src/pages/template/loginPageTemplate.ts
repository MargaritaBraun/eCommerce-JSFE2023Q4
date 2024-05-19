const loginPageTemplate: string = `
<main class="login-page">
  <form class="login-form">
    <label class="title-page">
    <a href='#main' class='logo_registration'></a>
    </label>
    <fieldset class="inputs">
      <div class="title-inputs">Авторизация</div>
      <div class="email-box">
        <span class="svg-email"></span>
        <input class="email-input input_basic" placeholder="hello@example.com" type="email" autocomplete="on" pattern=".+(\\.ru|\\.com)$" required>
      </div>
      <div class="errorsbox-email">
        <label class="error-email"></label>
      </div>
      <div class="pass-box">
        <span class="svg-lock"></span>
        <input class="pass-input input_basic" placeholder="Введите пароль" type="password" autocomplete="on" pattern="^(?=.*[a-zA-Z]).{8,}$" required>
      </div>
      <label class="show-pass-text">
        <input type="checkbox" class="show-pass">Показать пароль
      </label>
    </fieldset>
  </form>
  <div class="errorsbox-pass">
    <label class="error-pass"></label>
  </div>
  <button type="submit" class="btn-submit" disabled>Войти</button>
  <div class="text-register">У вас нет аккаунта? <a href='#registration' class='link_to_pages'>Регистрация</a></div>
</main>
`;

export default loginPageTemplate;
