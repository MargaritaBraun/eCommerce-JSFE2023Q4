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
                if (buttonAddBasket.classList.contains('active')) {
                    removeFromBasket(idProduct);
                } else if (!buttonAddBasket.classList.contains('active')) {
                    addToBasket(idProduct);
                }
                // данные хранятся localStorage.myBasket
            });
        }
    }
}
