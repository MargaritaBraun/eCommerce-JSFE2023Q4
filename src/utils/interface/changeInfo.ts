import Address from './address';

export default interface UpdatedCustomerData {
    version: number;
    actions: UpdateCustomerAction[];
}

interface UpdateCustomerAction {
    action: 'setFirstName' | 'setLastName' | 'changeEmail' | 'setDateOfBirth' | 'changeAddress';
    firstName?: string;
    lastName?: string;
    email?: string;
    dateOfBirth?: string;
    addressId?: string;
    address?: Address;
}
