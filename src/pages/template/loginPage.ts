const loginPage: string = `
<main class="login-page">
  <form class="login-form">
    <label class="title-page">.Apoint</label>
    <fieldset class="inputs">
      <div class="title-inputs">Авторизация</div>
      <div class="email-box">
        <span class="svg-email"></span>
        <input class="email-input" placeholder="hello@example.com" type="email" autocomplete="on">
      </div>
      <div class="errorsbox-email">
        <label class="error-email"></label>
      </div>
      <div class="pass-box">
        <span class="svg-lock"></span>
        <input class="pass-input" placeholder="Введите пароль" type="password" autocomplete="on">
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
  <div class="text-register">У вас нет аккаунта? <span>Регистрация</span></div>
</main>
`;

export default loginPage;
