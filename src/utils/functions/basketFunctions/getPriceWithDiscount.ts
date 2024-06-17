export default function getPriceWithDiscount(priceString: string): {
    discountedPrice: number | null;
    originalPrice: number;
} {
    const priceRegex = /(\d+\.\d{2}) BYN/;
    const discountRegex = /\(Скидка: (\d+\.\d{2}) BYN\)/;

    const priceMatch = priceString.match(priceRegex);
    const discountMatch = priceString.match(discountRegex);

    let originalPrice = 0;
    let discountedPrice: number | null = null;

    if (priceMatch && priceMatch.length >= 2) {
        originalPrice = parseFloat(priceMatch[1]);
    }

    if (discountMatch && discountMatch.length >= 2) {
        discountedPrice = parseFloat(discountMatch[1]);
    }

    return { discountedPrice, originalPrice };
}
