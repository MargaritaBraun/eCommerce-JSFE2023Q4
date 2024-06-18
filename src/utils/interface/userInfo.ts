import Cart from './Cart';
import Address from './address';

export default interface UserInfo {
    customer?: {
        cart?: Cart;
        dateOfBirth?: string;
        addresses: Address[];
        authenticationMode: string;
        billingAddressIds?: string[] | number[];
        createdAt: string;
        createdBy: {
            clientID: string;
            isPlatformClient: boolean;
        };
        customerGroup: {
            typeID: string;
            id: string;
        };
        email: string;
        firstName: string;
        id: string;
        isEmailVerified: boolean;
        lastMessageSequenceNumber: number;
        lastModifiedAt: string;
        lastModifiedBy: {
            clientID: string;
            isPlatformClient: boolean;
        };
        lastName: string;
        password: string;
        shippingAddressIds?: string[] | number[];
        stores?: [];
        version: number;
        versionModifiedAt: string;
    };
    cart?: Cart;
    dateOfBirth?: string;
    addresses?: Address[];
    authenticationMode: string;
    billingAddressIds?: string[] | number[];
    createdAt: string;
    createdBy: {
        clientID: string;
        isPlatformClient: boolean;
    };
    customerGroup: {
        typeID: string;
        id: string;
    };
    email: string;
    firstName: string;
    id: string;
    isEmailVerified: boolean;
    lastMessageSequenceNumber: number;
    lastModifiedAt: string;
    lastModifiedBy: {
        clientID: string;
        isPlatformClient: boolean;
    };
    lastName: string;
    password: string;
    shippingAddressIds?: string[] | number[];
    stores?: [];
    version: number;
    versionModifiedAt: string;
}
