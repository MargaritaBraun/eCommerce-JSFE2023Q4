import { App } from '../../pages/app';
import { projectKey, region } from '../constAPI';
import getAccessToken from '../login/api';
import { CategoriesName } from '../../utils/interface/categoriesDataName';

export default async function getCategories() {
    const response = await fetch(`https://api.${region}.commercetools.com/${projectKey}/categories/`, {
        headers: {
            Authorization: `Bearer ${App.accessToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        if (response.status === 401) {
            localStorage.removeItem('token');
            const newToken = await getAccessToken();
            localStorage.setItem('token', newToken);
            if (localStorage.getItem('token')) {
                App.accessToken = newToken;
                getCategories();
            }
        }
    }

    const categories: CategoriesName = await response.json();
    console.log(categories);
    return categories;
}
