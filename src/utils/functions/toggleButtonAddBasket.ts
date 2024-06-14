import { addToBasket, removeFromBasket, isProductInBasket } from './basketFunctions/allFunsBasket';

export default function toggleButtonAddBasket() {
    const buttonAddBasket = document.querySelector('.button_add_basket');
    if (buttonAddBasket) {
        const idProduct = buttonAddBasket.getAttribute('id');
        if (idProduct) {
            // Проверка есть ли в корзине
            const isInBasket = isProductInBasket(idProduct);
            if (isInBasket) {
                buttonAddBasket.classList.add('active');
                buttonAddBasket.textContent = 'Удалить из корзины';
            }
            buttonAddBasket.addEventListener('click', () => {
                buttonAddBasket.classList.toggle('active');
                if (buttonAddBasket.classList.contains('active')) {
                    buttonAddBasket.textContent = 'Удалить из корзины';
                    addToBasket(idProduct);
                } else if (!buttonAddBasket.classList.contains('active')) {
                    buttonAddBasket.textContent = 'Добавить в корзину';
                    removeFromBasket(idProduct);
                }
                // данные хранятся localStorage.myBasket
            });
        }
    }
}
