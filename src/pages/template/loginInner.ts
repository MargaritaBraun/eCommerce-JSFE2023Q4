const loginInner: string = `
<main class="login-page">
  <form class="login-form">
    <label class="title-page">.Apoint</label>
    <fieldset class="inputs">
      <div class="title-inputs">Авторизация</div>
      <div class="email-box">
        <img class="logo-email">
        <input class="email-input" placeholder="Введите почту" type="text" autocomplete="on">
      </div>
      <div class="pass-box">
        <img class="logo-lock">
        <input class="pass-input" placeholder="Введите пароль" type="text" autocomplete="on">
      </div>
    </fieldset>
    <div class="errors">
      <img class="logo-error">
      <label class="error-text"></label>
    </div>
  </form>
  <button type="submit" class="btn-submit" disabled>Войти</button>
  <div class="text-register">У вас нет аккаунта? <span>Регистрация</span></div>
</main>
`;

export default loginInner;
