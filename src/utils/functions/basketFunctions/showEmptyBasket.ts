export default function showEmptyBasket() {
    const contentContainer = document.querySelector('.basket__container');
    const footerBasketContainer = document.querySelector('.basket__footer') as HTMLDivElement;
    if (contentContainer && footerBasketContainer) {
        contentContainer.innerHTML = `
        <h2>Корзина пуста</h2>
        <a href="#category">Перейти к каталогу</a>
        `;
        footerBasketContainer.style.display = 'none';
    }
}
