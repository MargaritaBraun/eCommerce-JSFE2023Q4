import { CostPrices } from '../interface/productTypes';

export default function getPricesOfProduct(pricesObject: CostPrices[]) {
    if (pricesObject.length === 0) {
        return '7,50 BYN';
    }

    const { value } = pricesObject[0];
    const { centAmount, fractionDigits, currencyCode } = value;

    const formattedPrice = (centAmount / 10 ** fractionDigits).toFixed(fractionDigits);
    return `${formattedPrice} ${currencyCode}`;
}
