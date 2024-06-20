import getPriceWithDiscount from './getPriceWithDiscount';
import showDiscountCode from './showDiscontCode';

export default function finalAmountPrice() {
    const finalAmountSpan = document.querySelector('.final_amount_span');
    const finalAmountSpanDiscount = document.querySelector('.final_amount_span_discount');
    const finalAmountSpanDiscountCode = document.querySelector('.final_amount_span_discount_code');
    if (finalAmountSpan) {
        if (finalAmountSpanDiscount) {
            if (finalAmountSpanDiscountCode) {
                const allTotalPrice = document.querySelectorAll('.total_prices_basket');
                if (allTotalPrice) {
                    let fullPrice = 0;
                    let discountedPrice = 0;
                    allTotalPrice.forEach((item) => {
                        const itemTextContent = item.textContent;
                        if (itemTextContent) {
                            const priceInfo = getPriceWithDiscount(itemTextContent);
                            if (priceInfo.discountedPrice) {
                                discountedPrice += priceInfo.discountedPrice;
                            } else if (!priceInfo.discountedPrice) {
                                discountedPrice += priceInfo.originalPrice;
                            }
                            fullPrice += priceInfo.originalPrice;
                        }
                    });
                    const discountCodePrice = showDiscountCode();
                    finalAmountSpan.textContent = `Цена без скидки ${fullPrice.toFixed(2)} BYN`;
                    finalAmountSpanDiscount.textContent = `Цена со скидкой ${discountedPrice.toFixed(2)} BYN `;
                    finalAmountSpanDiscountCode.textContent = `Цена с промокодом ${discountCodePrice} BYN `;
                }
            }
        }
    }
}
