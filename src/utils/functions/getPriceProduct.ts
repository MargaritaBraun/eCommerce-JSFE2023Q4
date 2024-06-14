import { CostPrices } from '../interface/productTypes';

export default function getPricesOfProduct(pricesObject: CostPrices[]) {
    if (pricesObject.length === 0) {
        return '7,50 BYN';
    }

    const { value, discounted } = pricesObject[0];
    const { centAmount, fractionDigits, currencyCode } = value;

    const formattedPrice = (centAmount / 10 ** fractionDigits).toFixed(fractionDigits);

    if (discounted) {
        const { value: discountedValue } = discounted;
        const discountedCentAmount = discountedValue.centAmount;
        const discountedFormattedPrice = (discountedCentAmount / 10 ** discountedValue.fractionDigits).toFixed(
            discountedValue.fractionDigits
        );
        return `${formattedPrice} ${currencyCode} (Скидка: ${discountedFormattedPrice} ${currencyCode})`;
    }

    return `${formattedPrice} ${currencyCode}`;
}
