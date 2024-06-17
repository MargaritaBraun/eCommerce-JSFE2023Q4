export default interface CartInfo {
    type: 'Cart';
    id: string;
    version: number;
    versionModifiedAt: string;
    lastMessageSequenceNumber: number;
    createdAt: string;
    lastModifiedAt: string;
    lastModifiedBy: {
        clientId: string;
        isPlatformClient: boolean;
        customer: {
            typeId: 'customer';
            id: string;
        };
    };
    createdBy: {
        isPlatformClient: boolean;
        customer: {
            typeId: 'customer';
            id: string;
        };
    };
    customerId: string;
    customerGroup: {
        typeId: 'customer-group';
        id: string;
    };
    lineItems: [];
    cartState: 'Active';
    totalPrice: {
        type: 'centPrecision';
        currencyCode: string;
        centAmount: number;
        fractionDigits: number;
    };
    shippingMode: 'Single';
    shipping: [];
    customLineItems: [];
    discountCodes: [];
    directDiscounts: [];
    inventoryMode: 'None';
    taxMode: 'Platform';
    taxRoundingMode: 'HalfEven';
    taxCalculationMode: 'LineItemLevel';
    deleteDaysAfterLastModification: number;
    refusedGifts: [];
    origin: 'Customer';
    itemShippingAddresses: [];
}
