import getPriceWithDiscount from './getPriceWithDiscount';

export default function finalAmountPrice() {
    const finalAmountSpan = document.querySelector('.final_amount_span');
    if (finalAmountSpan) {
        const allTotalPrice = document.querySelectorAll('.total_prices_basket');
        if (allTotalPrice) {
            let fullPrice = 0;
            let discountedPrice = 0;
            allTotalPrice.forEach((item) => {
                const itemTextContent = item.textContent;
                if (itemTextContent) {
                    const priceInfo = getPriceWithDiscount(itemTextContent);
                    // priceInfo.originalPrice
                    // priceInfo.discountedPrice
                    if (priceInfo.discountedPrice) {
                        discountedPrice += priceInfo.discountedPrice;
                    } else if (!priceInfo.discountedPrice) {
                        discountedPrice += priceInfo.originalPrice;
                    }
                    fullPrice += priceInfo.originalPrice;
                }
                // console.log(fullPrice);
                // console.log(discountedPrice);
                if (fullPrice > discountedPrice) {
                    finalAmountSpan.textContent = `Цена без скидки ${fullPrice.toFixed(2)} BYN
                 Цена со скидкой ${discountedPrice.toFixed(2)} BYN`;
                } else if (fullPrice === discountedPrice) {
                    finalAmountSpan.textContent = `${fullPrice.toFixed(2)} BYN`;
                }
            });
            // finalAmountSpan.textContent = `Цена без скидки ${fullPrice.toFixed(2)}
            // Цена со скидкой ${discountedPrice.toFixed(2)}`;
        }
    }
}
