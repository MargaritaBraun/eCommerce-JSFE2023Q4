// <div class="registration">
const registrationPageTemplate: string = `
      <form class="registration">
        <div class='logo_registration'></div>
        <p class="name_error registration__error"></p>
        <label class="label_basic">
        <span class='svg_user'></span>
        <input type="text" class="input_basic name_input" placeholder='Введите имя' minlength='4' pattern="[А-ЯЁа-яё-0-9]+" required>
        </label>
        <p class="basename_error registration__error"></p>
        <label class="label_basic">
        <span class='svg_users'></span>
      <input type="text" class="input_basic input_basename" placeholder='Введите фамилию' minlength='5' pattern="[А-ЯЁа-яё]+" required>
        </label>
        <p class="login_error registration__error"></p>
        <label class="label_basic">
        <span class='svg_email'></span>
      <input type="email" class="input_basic input_email" placeholder='Введите электронную почту' required autocomplete="on" pattern=".+(\\.ru|\\.com)$">
        </label>
        <p class="password_error registration__error"></p>
        <label class="label_basic">
        <span class='svg_password'></span>
      <input type="password" class="input_basic input_password" placeholder='Введите пароль' required autocomplete="on">
        </label>
        <p class="birthday_error registration__error">Введите дату рождения</p>
        <label class="label_basic">
        <span class='svg_calendar'></span>
      <input type="date" class="input_basic input_birthday" max="2010-01-01" value="2024-06-04">
        </label>
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
        
        <p class="address_title">Адрес прописки</p>
        <p class="postal_code_error registration__error"></p>
        <label class="label_basic">
        <span class='address_span'>Индекс</span>
      <input type="number" class="input_postal_code input_basic" placeholder='Введите индекс' value="246003" min="246000" max="246051">
        </label>
        <p class="street_error registration__error"></p>
        <label class="label_basic">
        <span class='address_span'>Улица</span>
        <input type="text" class="input_basic input_street" placeholder='Введите улицу'>
        </label>
        <p class="num_house_error registration__error"></p>
        <label class="label_basic">
        <span class='address_span'>Дом</span>
        <input type="text" class="input_num_house input_basic" placeholder='Введите номер дома'>
        </label>
        <p class="apartment_error registration__error"></p>
        <label class="label_basic">
        <span class='address_span'>Квартира</span>
        <input type="text" class="input_apartment input_basic" placeholder='Введите номер квартиры'>
        </label>
        </div>
        <div class="shipping_address">
        <p class="address_title">Адрес проживания</p>
        <p class="postal_code_error registration__error"></p>
        <label class="label_basic">
        <span class='address_span'>Индекс</span>
      <input type="number" class="input_postal_code input_basic" placeholder='Введите индекс' value="246003" min="246000" max="246051">
        </label>
        <p class="street_error registration__error"></p>
        <label class="label_basic">
        <span class='address_span'>Улица</span>
        <input type="text" class="input_basic input_street" placeholder='Введите улицу'>
        </label>
        <p class="num_house_error registration__error"></p>
        <label class="label_basic">
        <span class='address_span'>Дом</span>
        <input type="text" class="input_num_house input_basic" placeholder='Введите номер дома'>
        </label>
        <p class="apartment_error registration__error"></p>
        <label class="label_basic">
        <span class='address_span'>Квартира</span>
        <input type="text" class="input_apartment input_basic" placeholder='Введите номер квартиры'>
        </label>
        </div>

        </div>
      <button class='button_registration' disabled='true'>Зарегистрироваться</button>
        </div>
        </form>
        `;
// </div>
export default registrationPageTemplate;
