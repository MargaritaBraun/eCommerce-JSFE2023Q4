const userPageTemplate: string = `
<main class="amain-box">
  <section class="amain-wrap">
    <form class="aregistration">

      <h1 class="atitle">Данные покупателя</h1>

      <span class="auserlogo"></span>


      <div class="abasic_box">
        <label class="alabel_basic">
          <input type="text" class="ainput_basic aname_input" placeholder='Имя' pattern="^[А-ЯЁ][а-яё]{3,}$" required disabled>
          <button class='change_first_name'>Изменить</button>
        </label>
        <p class="aname_error aregistration__error"></p>
        <label class="alabel_basic">
          <input type="text" class="ainput_basic ainput_basename" placeholder='Фамилия' minlength='5' pattern="[А-ЯЁа-яё]+" required disabled>
          <button class='change_last_name'>Изменить</button>
        </label>
        <p class="abasename_error registration__error"></p>
        <label class="alabel_basic">
          <input type="email" class="ainput_basic ainput_email" placeholder='Электронная почта' required autocomplete="on" pattern=".+(\\.ru|\\.com)$" disabled>
          <button class='change_email' >Изменить</button>
        </label>
        <p class="alogin_error aregistration__error"></p>
        <label class="alabel_basic">
          <input type="password" class="ainput_basic ainput_password" placeholder='Пароль' required autocomplete="on" pattern="^(?=.*[a-zA-Z]).{8,}$" disabled>
          <button class='change_password'>Изменить</button>
        </label>
        <label class="ashow-pass-text">
          <input type="checkbox" class="ashow-pass">Показать пароль
        </label>
        <p class="apassword_error aregistration__error"></p>
        <label class="alabel_basic">
          <input type="date" class="ainput_basic ainput_birthday" max="2010-01-01" value="гггг-мм-дд" disabled>
          <button class='change_birthday'>Изменить</button>
        </label>
      </div>


      <div class="aaddress_block">
        <button class='change_address'>Изменить Адрес</button>
        <label class="alabel_basic">
          <span class='acheckbox_span'>Использовать адрес по умолчанию</span>
          <input type="checkbox" class="ainput_checkbox">
        </label>

        <div class="aselect_block">
          <span class='asvg_map_pin'></span>
          <select class="aselect_basic" disabled>
            <option value="Беларусь" selected>Беларусь</option>
          </select>
          <select class="aselect_basic" disabled>
            <option value="Гомель" selected>Гомель</option>
          </select>
        </div>

        <div class='abilling_address'>
          <p class="aaddress_title">Адрес для счёта</p>
          <label class="alabel_basic">
            <span class='aaddress_span'>Индекс</span>
            <input type="number" class="ainput_postal_code ainput_basic" placeholder='Введите индекс' value="246003" min="246000" max="246051" disabled>
          </label>
          <p class="apostal_code_error aregistration__error"></p>
          <label class="alabel_basic">
            <span class='aaddress_span'>Улица</span>
            <input type="text" class="ainput_basic ainput_street" placeholder='Введите улицу' disabled>
          </label>
          <p class="astreet_error aregistration__error"></p>
          <label class="alabel_basic">
            <span class='aaddress_span'>Дом</span>
            <input type="text" class="ainput_num_house ainput_basic" placeholder='Введите номер дома' disabled>
          </label>
          <p class="anum_house_error aregistration__error"></p>
          <label class="alabel_basic">
            <span class='aaddress_span'>Квартира</span>
            <input type="text" class="ainput_apartment ainput_basic" placeholder='Введите номер квартиры' disabled>
          </label>
          <p class="aapartment_error aregistration__error"></p>
        </div>

        <div class="ashipping_address">
          <p class="aaddress_title">Адрес доставки</p>
          <label class="alabel_basic">
            <span class='aaddress_span'>Индекс</span>
            <input type="number" class="ainput_postal_code ainput_basic" placeholder='Введите индекс' value="246003" min="246000" max="246051" disabled>
          </label>
          <p class="apostal_code_error aregistration__error"></p>
          <label class="alabel_basic">
            <span class='aaddress_span'>Улица</span>
            <input type="text" class="ainput_basic ainput_street" placeholder='Введите улицу' disabled>
          </label>
          <p class="astreet_error aregistration__error"></p>
          <label class="alabel_basic">
            <span class='aaddress_span'>Дом</span>
            <input type="text" class="ainput_num_house ainput_basic" placeholder='Введите номер дома' disabled>
          </label>
          <p class="anum_house_error aregistration__error"></p>
          <label class="alabel_basic">
            <span class='aaddress_span'>Квартира</span>
            <input type="text" class="ainput_apartment ainput_basic" placeholder='Введите номер квартиры' disabled>
          </label>
          <p class="aapartment_error aregistration__error"></p>
        </div>

      </div>
        <button class='abutton_registration save'>Сохранить изменения</button>
        <button class='abutton_registration change' disabled>Изменить </button>
    </form>
  </section>
</main>
`;

export default userPageTemplate;
