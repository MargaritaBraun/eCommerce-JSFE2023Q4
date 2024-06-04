import { App } from '../../pages/app';
import UpdatedCustomerData from '../../utils/interface/changeInfo';
import UserInfo from '../../utils/interface/userInfo';
import { projectKey } from '../constAPI';

export default async function updateCustomerProfile(info: UpdatedCustomerData): Promise<UserInfo | null> {
    const updateCustomerUrl = `https://api.commercetools.com/${projectKey}/me`;

    const response = await fetch(updateCustomerUrl, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${App.accessToken}`, // Добавляем обратные кавычки для корректной интерполяции переменной App.accessToken
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
    });
    if (!response.ok) {
        return null;
    }

    const data = response.json();
    return data;
}
