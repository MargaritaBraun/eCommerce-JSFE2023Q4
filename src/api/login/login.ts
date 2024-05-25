import { App } from '../../pages/app';
import AllUserInfo from '../../utils/interface/allUsersInfo';
import UserInfo from '../../utils/interface/userInfo';
import { clientId, clientSecret, projectKey, region } from '../constAPI';

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

export async function getCustomerToken(email: string, password: string): Promise<string | null> {
    const authHost = 'https://auth.europe-west1.gcp.commercetools.com';
    const authData = `grant_type=password&username=${email}&password=${password}`;
    const authUrl = `${authHost}/oauth/${projectKey}/customers/token`;
    const authHeader = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;

    const response = await fetch(authUrl, {
        method: 'POST',
        headers: {
            Authorization: authHeader,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: authData,
    });
    const data = await response.json();
    return response.ok ? data.access_token : null;
}
