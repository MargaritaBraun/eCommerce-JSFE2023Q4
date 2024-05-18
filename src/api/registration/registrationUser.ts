import CreateUser from '../../utils/interface/createUser';

export default async function createCustomer(accessToken: string, projectKey: string, customerData: CreateUser) {
    const response = await fetch(`https://api.commercetools.com/${projectKey}/customers`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
    });
    const customer = await response.json();
    if (response.ok) {
        console.log('Customer created:', customer);
        return customer;
    }
    return null;
}
