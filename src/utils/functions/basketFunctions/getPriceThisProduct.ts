import finalAmountPrice from './finalAmountPrice';
import getPriceWithDiscount from './getPriceWithDiscount';

export default function getPricesThisProduct(event: Event): void {
    const parantContainer = event.target instanceof HTMLElement && event.target.closest('.card_basket_container');
    if (parantContainer) {
        const pricesContainer = parantContainer.querySelector('.prices_products');

        const input = parantContainer.querySelector('.input_basket') as HTMLInputElement;
        const totalPricesBasket = parantContainer.querySelector('.total_prices_basket') as HTMLParagraphElement;
        if (pricesContainer && pricesContainer.textContent) {
            if (input && totalPricesBasket) {
                const priceString = pricesContainer.textContent;
                const priceInfo = getPriceWithDiscount(priceString);
                if (priceInfo.originalPrice && !priceInfo.discountedPrice) {
                    const newPriceValue = priceInfo.originalPrice * +input.value;
                    totalPricesBasket.textContent = `${newPriceValue.toFixed(2)} BYN`;
                } else if (priceInfo.originalPrice && priceInfo.discountedPrice) {
                    const newPriceOriginValue = priceInfo.originalPrice * +input.value;
                    const newPriceDiscountedValue = priceInfo.discountedPrice * +input.value;
                    totalPricesBasket.textContent = `${newPriceOriginValue.toFixed(2)} BYN (Скидка ${newPriceDiscountedValue.toFixed(2)} BYN)`;
                }
            }
            finalAmountPrice();
        }
    }
}
