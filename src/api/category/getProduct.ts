import { App } from '../../pages/app';
import { projectKey, region } from '../constAPI';

export default async function getProductOnID(id: string) {
    // /{projectKey}/products/{id}
    const response = await fetch(`https://api.${region}.commercetools.com/${projectKey}/products/${id}`, {
        headers: {
            Authorization: `Bearer ${await App.accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    const products = await response.json();
    console.log(products);
    return products;
}
