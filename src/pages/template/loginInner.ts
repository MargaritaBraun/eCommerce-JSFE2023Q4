const loginInner: string = `
<main class="login-page">
  <form class="login-form">
    <label class="title-page">.Apoint</label>
    <fieldset class="inputs">
      <div class="title-inputs">Авторизация</div>
      <div class="email-box">
        <span class="svg-email"></span>
        <input class="email-input" placeholder="Введите почту" type="text" autocomplete="on">
      </div>
      <div class="pass-box">
        <span class="svg-lock"></span>
        <input class="pass-input" placeholder="Введите пароль" type="password" autocomplete="on">
      </div>
    </fieldset>
  </form>
  <div class="errors">
    <span class="svg-alert"></span>
    <label class="error-text"></label>
  </div>
  <button type="submit" class="btn-submit" disabled>Войти</button>
  <div class="text-register">У вас нет аккаунта? <span>Регистрация</span></div>
</main>
`;

export default loginInner;
