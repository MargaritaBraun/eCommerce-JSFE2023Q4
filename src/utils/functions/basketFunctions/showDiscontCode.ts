import Cart from '../../interface/Cart';

export default function showDiscountCode(): string {
    const cart: Cart = JSON.parse(localStorage.getItem('cart')!);
    if (cart) {
        if (cart.discountOnTotalPrice.discountedAmount) {
            const centAmount = cart.discountOnTotalPrice.discountedAmount.centAmount;
            const fractionDigits = 1;
            const discountedFormattedPrice = (centAmount / 10 ** fractionDigits).toFixed(fractionDigits);
            return ` ${discountedFormattedPrice} BYN`;
        }
    }
    return `0.00 BYN`;
}
