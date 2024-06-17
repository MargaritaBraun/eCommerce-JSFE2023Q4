// данные хранятся localStorage.myBasket
// Получение корзины из localStorage
export function getBasket() {
    const basket = localStorage.getItem('myBasket');
    return basket ? JSON.parse(basket) : [];
}

// Сохранение корзины в localStorage
export function saveBasket(basket: string[]) {
    localStorage.setItem('myBasket', JSON.stringify(basket));
}

// Добавление товара в корзину
export function addToBasket(productId: string) {
    const basket = getBasket();
    basket.push(productId);
    saveBasket(basket);
}

// Удаление товара из корзины
export function removeFromBasket(productId: string) {
    const basket = getBasket();
    const index = basket.indexOf(productId);
    if (index !== -1) {
        basket.splice(index, 1);
        saveBasket(basket);
    }
}

export function isProductInBasket(productId: string) {
    const basket = getBasket();
    return basket.includes(productId);
}
