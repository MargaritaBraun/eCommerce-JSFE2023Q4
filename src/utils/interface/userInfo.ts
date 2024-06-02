export default interface UserInfo {
    customer?: {
        dateOfBirth?: string;
        addresses?: [];
        authenticationMode: string;
        billingAddressIds?: [];
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
        shippingAddressIds?: [];
        stores?: [];
        version: number;
        versionModifiedAt: string;
    };
    dateOfBirth?: string;
    addresses?: [];
    authenticationMode: string;
    billingAddressIds?: [];
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
    shippingAddressIds?: [];
    stores?: [];
    version: number;
    versionModifiedAt: string;
}
