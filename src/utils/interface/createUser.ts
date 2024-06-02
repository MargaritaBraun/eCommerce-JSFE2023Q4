export interface CreateUser {
    dateOfBirth: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    customerGroup: {
        typeId: string;
        key: string;
    };
    shippingAddresses: [number];
    billingAddresses: [number];
    addresses: Address[];
}

export interface Address {
    streetName: string;
    streetNumber: string;
    postalCode: string;
    apartment: string;
    city: 'Гомель';
    country: 'BY';
}
