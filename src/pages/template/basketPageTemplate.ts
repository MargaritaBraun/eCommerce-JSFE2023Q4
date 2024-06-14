const basketPageTemplate: string = `
<main class="main-box">
  <section class="main-wrap">
    <h1 class="main-title">Корзина</h1>
    <div class="basket__container">
    <div class="card_basket_container">
    <p class="card_basket_title">Название события</p>
    <p class="card_basket_parametrs">Удалить из корзины</p>
    <p class="card_basket_parametrs">Количество билетов</p>
    <p class="card_basket_parametrs">Цена одного билета</p>
    <p class="card_basket_parametrs">Общая стоимость</p>
    </div>
    </div>
    <div class="basket__footer">
    <p>Итоговая сумма : <span class="final_amount_span">0,00 BYN</span></p>
    <button class="button_delete_all">Удалить все продукты из корзины</button>
    </div>
  </section>
</main>
`;

export default basketPageTemplate;
