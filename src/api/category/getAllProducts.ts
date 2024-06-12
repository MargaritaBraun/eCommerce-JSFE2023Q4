import { App } from '../../pages/app';
import { projectKey, region } from '../constAPI';

export default async function getProducts() {
    const response = await fetch(`https://api.${region}.commercetools.com/${projectKey}/products/`, {
        headers: {
            Authorization: `Bearer ${await App.accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    const products = await response.json();
    return products;
}
