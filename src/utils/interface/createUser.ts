export default interface CreateUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    customerGroup: {
        typeId: string;
        key: string;
    };
}
