import { App } from '../../pages/app';
import AllUserInfo from '../../utils/interface/allUsersInfo';
import UserInfo from '../../utils/interface/userInfo';
import { projectKey, region } from '../constAPI';

export async function checkoutCustomer(): Promise<AllUserInfo> {
    const url: string = `https://api.${region}.commercetools.com/${projectKey}/customers?`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${App.accessToken}`,
            'Content-Type': 'application/json',
        },
    });

    const data: AllUserInfo = await response.json();
    return data;
}

export async function loginCustomer(email: string, password: string): Promise<UserInfo | boolean> {
    const loginResponse = await fetch(`https://api.${region}.commercetools.com/${projectKey}/login`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${App.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!loginResponse.ok) {
        return false;
    }

    const customerData: UserInfo = await loginResponse.json();
    return customerData;
}
