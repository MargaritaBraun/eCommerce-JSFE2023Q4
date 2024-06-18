import { getBasket, removeFromBasket } from './allFunsBasket';
import finalAmountPrice from './finalAmountPrice';
import showEmptyBasket from './showEmptyBasket';

export default function deleteSelectProductBasket(event: Event): void {
    const target = event.target;
    if (target instanceof Element) {
        const cardBasketContainer = target.closest('.card_basket_container');
        if (cardBasketContainer) {
            const containerId = cardBasketContainer.id;
            removeFromBasket(containerId);
            cardBasketContainer.remove();
            finalAmountPrice();
            const basket = getBasket();
            if (!basket || basket.length === 0) {
                showEmptyBasket();
            }
        }
    }
}