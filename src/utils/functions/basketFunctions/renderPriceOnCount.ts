import getPriceWithDiscount from './getPriceWithDiscount';

export default function renderPriceOnCount(cost: string, value: string): string {
    const priceInfo = getPriceWithDiscount(cost);
    if (priceInfo.originalPrice && !priceInfo.discountedPrice) {
        const newPriceValue = priceInfo.originalPrice * +value;
        return `${newPriceValue.toFixed(2)} BYN`;
    }
    if (priceInfo.originalPrice && priceInfo.discountedPrice) {
        const newPriceOriginValue = priceInfo.originalPrice * +value;
        const newPriceDiscountedValue = priceInfo.discountedPrice * +value;
        return `${newPriceOriginValue.toFixed(2)} BYN (Скидка ${newPriceDiscountedValue.toFixed(2)} BYN)`;
    }
    return cost;
}
