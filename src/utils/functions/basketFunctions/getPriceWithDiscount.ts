export default function getPriceWithDiscount(priceString: string): {
    discountedPrice: number | null;
    originalPrice: number;
} {
    const priceRegex = /(\d+\.\d{2})/g;
    const matches = priceString.match(priceRegex);

    let originalPrice = 0;
    let discountedPrice: number | null = null;

    if (matches) {
        originalPrice = parseFloat(matches[0]);
        discountedPrice = matches.length > 1 ? parseFloat(matches[1]) : null;
    }

    return { discountedPrice, originalPrice };
}
