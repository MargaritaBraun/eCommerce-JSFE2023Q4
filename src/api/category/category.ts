import { region, projectKey, clientId, clientSecret } from '../constAPI';

export interface Category {
    id: string;
    name: { [key: string]: string };
    slug: { [key: string]: string };
    ancestors: Category[];
}

async function getAccessToken(): Promise<string> {
    const response = await fetch(`https://auth.${region}.commercetools.com/oauth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        return data.access_token;
    }
    throw new Error(`Error getting access token: ${response.status} - ${response.statusText}`);
}

async function getCategories(): Promise<Category[]> {
    const accessToken = await getAccessToken();

    const response = await fetch(`https://api.commercetools.com/${projectKey}/categories`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data.results;
    }
    throw new Error(`Error fetching categories: ${response.status} - ${response.statusText}`);
}

export default async function fetchCategories(): Promise<Category[]> {
    try {
        const categories = await getCategories();
        return categories;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
