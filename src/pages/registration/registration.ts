import Page from '../page';

export default class RegistrationPage extends Page {
    public render(): HTMLElement {
        // this.container.innerHTML = 'Registration Page';
        this.container.classList.add('registration_container');
        this.container.innerHTML = `
    <div class="registration">
        <label class="label_basic">
        <span class='svg_user'></span>
      <input type="text" class="input_basic" placeholder='Введите имя'>
        </label>
        <label class="label_basic">
        <span class='svg_users'></span>
      <input type="text" class="input_basic" placeholder='Введите фамилию'>
        </label>
        <label class="label_basic">
        <span class='svg_email'></span>
      <input type="email" class="input_basic" placeholder='Введите электронную почту'>
        </label>
        <label class="label_basic">
        <span class='svg_password'></span>
      <input type="password" class="input_basic" placeholder='Введите пароль'>
        </label>
        <label class="label_basic">
        <span class='svg_calendar'></span>
      <input type="date" class="input_basic" value="2024-06-04" min="2010-01-01">
        </label>
        <label class="label_basic">
        <span class='svg_map_pin'></span>
      <input type="text" class="input_basic" placeholder='Введите адрес'>
        </label>
    </div>
        `;
        return this.container;
    }

    public registrationRun() {}
}
