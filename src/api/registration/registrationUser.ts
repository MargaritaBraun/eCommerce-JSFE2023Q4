import CreateUser from '../../utils/interface/createUser';

export default async function createCustomer(
    accessToken: string,
    projectKey: string,
    customerData: CreateUser
): Promise<string | null> {
    const response = await fetch(`https://api.commercetools.com/${projectKey}/customers`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
    });
    const customer = await response.json();
    return response.ok ? customer : null;
}
