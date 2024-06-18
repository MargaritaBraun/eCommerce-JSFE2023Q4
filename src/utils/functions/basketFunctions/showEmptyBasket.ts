export default function showEmptyBasket() {
    const contentContainer = document.querySelector('.basket__container');
    const footerBasketContainer = document.querySelector('.basket__footer') as HTMLDivElement;
    if (contentContainer) {
        contentContainer.innerHTML = `
        <div class="empty_basket_container">
        <h2 class="card_basket_title">Корзина пуста</h2>
        <a href="#category" class="basket_link">Перейти к каталогу</a>
        <div></div>
        `;
    }
    if (footerBasketContainer) {
        footerBasketContainer.style.display = 'none';
    }
}
