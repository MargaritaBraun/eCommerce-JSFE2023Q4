import Page from '../page';

export default class RegistrationPage extends Page {
    public render(): HTMLElement {
        // this.container.innerHTML = 'Registration Page';
        this.container.classList.add('registration_container');
        this.container.innerHTML = `<div class="registration">
        <div class='logo_registration'></div>
        <p class="name_error registration__error">Пожалуйста введите русские буквы</p>
        <label class="label_basic">
        <span class='svg_user'></span>
        <input type="text" class="input_basic" placeholder='Введите имя' minlength='4' pattern="[А-ЯЁа-яё]+" required>
        </label>
        <p class="lastname_error registration__error">Пожалуйста введите русские буквы</p>
        <label class="label_basic">
        <span class='svg_users'></span>
      <input type="text" class="input_basic" placeholder='Введите фамилию' minlength='5' pattern="[А-ЯЁа-яё]+" required>
        </label>
        <p class="login_error registration__error">Пожалуйста введите русские буквы</p>
        <label class="label_basic">
        <span class='svg_email'></span>
      <input type="email" class="input_basic" placeholder='Введите электронную почту' required>
        </label>
        <p class="password_error registration__error">Пожалуйста введите русские буквы</p>
        <label class="label_basic">
        <span class='svg_password'></span>
      <input type="password" class="input_basic" placeholder='Введите пароль' required>
        </label>
        <p class="birthday_error registration__error">Пожалуйста введите русские буквы</p>
        <label class="label_basic">
        <span class='svg_calendar'></span>
      <input type="date" class="input_basic" value="2024-06-04" min="2010-01-01">
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
        <p class=" postal_code_error registration__error">Пожалуйста введите русские буквы</p>
        <label class="label_basic">
        <span class='svg_map_pin'></span>
      <input type="number" class="input_basic" placeholder='Введите индекс' value="246003" maxlength='6' minlength='6'>
        </label>
        <p class="address_error registration__error">Пожалуйста введите русские буквы</p>
        <label class="label_basic">
        <span class='svg_map_pin'></span>
        <input type="text" class="input_basic" placeholder='Введите адрес'>
        </label>
      <button class='button_registration'>Зарегистрироваться</button>
        </div>
        </div>`;
        return this.container;
    }

    public registrationRun() {}
    /*
    public clickedOnInput() {
        this.inputName.addEventListener('click', () => {
            console.log(this.inputName.value);
            // console.log(this.inputName.value);
        });
    }
    */
}
