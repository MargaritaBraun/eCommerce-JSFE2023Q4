const registrationPageTemplate: string = `
<form class="registration">
  <a href='#main' class='logo_registration'></a>
  <h1 class="title">Регистрация</h1>
  <label class="label_basic">
    <span class='svg_user'></span>
    <input type="text" class="input_basic name_input" placeholder='Введите имя' pattern="^[А-ЯЁ][а-яё]{3,}$" required>
  </label>
  <p class="name_error registration__error"></p>
  <label class="label_basic">
    <span class='svg_users'></span>
    <input type="text" class="input_basic input_basename" placeholder='Введите фамилию' minlength='5' pattern="[А-ЯЁа-яё]+" required>
  </label>
  <p class="basename_error registration__error"></p>
  <label class="label_basic">
    <span class='svg-email'></span>
    <input type="email" class="input_basic input_email" placeholder='Введите электронную почту' required autocomplete="on" pattern=".+(\\.ru|\\.com)$">
  </label>
  <p class="login_error registration__error"></p>
  <label class="label_basic">
    <span class='svg-lock'></span>
    <input type="password" class="input_basic input_password" placeholder='Введите пароль' required autocomplete="on" pattern="^(?=.*[a-zA-Z]).{8,}$">
  </label>
  <label class="show-pass-text">
    <input type="checkbox" class="show-pass">Показать пароль
  </label>
  <p class="password_error registration__error"></p>
  <label class="label_basic">
    <span class='svg_calendar'></span>
    <input type="date" class="input_basic input_birthday" max="2010-01-01" value="2024-06-04">
  </label>
  <p class="birthday_error registration__error">Введите дату рождения</p>

  <div class="address_block">
    <label class="label_basic">
      <span class='checkbox_span'>Использовать адрес по умолчанию</span>
      <input type="checkbox" class="input_checkbox" checked>
    </label>
    <div class="select_block">
      <span class='svg_map_pin'></span>
      <select class="select_basic">
        <option value="Беларусь" selected>Беларусь</option>
      </select>
      <select class="select_basic">
        <option value="Гомель" selected>Гомель</option>
      </select>
  </div>

  <div class='billing_address'>
    <p class="address_title">Адрес для счёта</p>
    <label class="label_basic">
      <span class='address_span'>Индекс</span>
      <input type="number" class="input_postal_code input_basic" placeholder='Введите индекс' value="246003" min="246000" max="246051">
    </label>
    <p class="postal_code_error registration__error"></p>
    <label class="label_basic">
      <span class='address_span'>Улица</span>
      <input type="text" class="input_basic input_street" placeholder='Введите улицу'>
    </label>
    <p class="street_error registration__error"></p>
    <label class="label_basic">
      <span class='address_span'>Дом</span>
      <input type="text" class="input_num_house input_basic" placeholder='Введите номер дома'>
    </label>
    <p class="num_house_error registration__error"></p>
    <label class="label_basic">
      <span class='address_span'>Квартира</span>
      <input type="text" class="input_apartment input_basic" placeholder='Введите номер квартиры'>
    </label>
    <p class="apartment_error registration__error"></p>
  </div>

  <div class="shipping_address">
    <p class="address_title">Адрес доставки</p>
    <label class="label_basic">
      <span class='address_span'>Индекс</span>
      <input type="number" class="input_postal_code input_basic" placeholder='Введите индекс' value="246003" min="246000" max="246051">
    </label>
    <p class="postal_code_error registration__error"></p>
    <label class="label_basic">
      <span class='address_span'>Улица</span>
      <input type="text" class="input_basic input_street" placeholder='Введите улицу'>
    </label>
    <p class="street_error registration__error"></p>
    <label class="label_basic">
      <span class='address_span'>Дом</span>
      <input type="text" class="input_num_house input_basic" placeholder='Введите номер дома'>
    </label>
    <p class="num_house_error registration__error"></p>
    <label class="label_basic">
      <span class='address_span'>Квартира</span>
      <input type="text" class="input_apartment input_basic" placeholder='Введите номер квартиры'>
    </label>
    <p class="apartment_error registration__error"></p>
  </div>

  </div>
    <button class='button_registration' disabled='true'>Зарегистрироваться</button>
  </div>
  <div class="text-register">У вас есть аккаунт? <a href='#login' class='link_to_pages'>Войти</a></div>
</form>
        `;

export default registrationPageTemplate;
