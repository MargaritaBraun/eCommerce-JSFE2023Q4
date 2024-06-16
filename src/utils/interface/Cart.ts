interface CartItem {
    id: string;
    productId: string;
    name: string;
    quantity: number;
    price: {
        currencyCode: string;
        centAmount: number;
    };
    totalPrice: {
        currencyCode: string;
        centAmount: number;
    };
}

export default interface Cart {
    id: string;
    version: number;
    createdAt: string;
    lastModifiedAt: string;
    lastModifiedBy: {
        isPlatformClient: boolean;
    };
    createdBy: {
        isPlatformClient: boolean;
    };
    lineItems: CartItem[];
    cartState: 'Active' | 'Ordered' | 'Deleted';
    totalPrice: {
        type: 'centPrecision';
        currencyCode: string;
        centAmount: number;
        fractionDigits: number;
    };
    shippingMode: 'Single' | 'MultipleShipping';
    shipping: [];
    customLineItems: [];
    discountCodes: string[];
    directDiscounts: [];
    inventoryMode: 'None' | 'Tracking' | 'ReserveOnOrder';
    taxMode: 'Platform' | 'External';
    taxRoundingMode: 'HalfEven' | 'Up' | 'Down';
    taxCalculationMode: 'LineItemLevel' | 'TotalLevel';
    refusedGifts: [];
    origin: 'Customer' | 'External';
    itemShippingAddresses: [];
}
