const basketPageTemplate: string = `
<main class="main-box">
  <section class="main-wrap">
    <h1 class="main-title">Корзина</h1>
    <div class="basket__container">
    <div class="card_basket_container">
    <p class="card_basket_title card_basket_title_margin">Название события</p>
    <p class="card_basket_parametrs">Удалить из корзины</p>
    <p class="card_basket_parametrs">Количество билетов</p>
    <p class="card_basket_parametrs">Цена одного билета</p>
    <p class="card_basket_parametrs">Общая стоимость</p>
    </div>
    </div>
    <div class="basket__footer">
    <div class="basket_discount_сode">
    <label class="label_basic">
    <span class='address_span'>Ввести промокод</span>
    <input type="text" class="input_discount_сode input_basic" pattern="^summer24$" value='Тут'>
    </label>
    <button class="button_discount_сode" disabled>Применить промокод</button>
    </div>
    <p class="card_basket_title">Итоговая сумма
    <p class="final_amount_span">0,00 BYN</p>
    <p class="final_amount_span_discount">0,00 BYN</p>
    <p class="final_amount_span_discount_code">0,00 BYN</p>
    </p>
    <button class="button_delete_all">Удалить все продукты из корзины</button>
    </div>
  </section>
</main>
`;

export default basketPageTemplate;
