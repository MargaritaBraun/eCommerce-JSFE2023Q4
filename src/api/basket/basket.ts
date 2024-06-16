import { App } from '../../pages/app';
import Cart from '../../utils/interface/Cart';
import CartInfo from '../../utils/interface/CartInfo';
import { projectKey, region } from '../constAPI';

export async function createAnonimCart(): Promise<Cart> {
    const response = await fetch(`https://api.commercetools.com/${projectKey}/carts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${App.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            currency: 'BYN',
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    const data: Cart = await response.json();
    console.log(data);
    return data;
}

export async function createUserCart(id: string): Promise<Cart> {
    const response = await fetch(`https://api.commercetools.com/${projectKey}/carts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${App.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            currency: 'BYN',
            customerId: `${id}`,
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    const data: Cart = await response.json();
    return data;
}

export async function getCart(customerId: string) {
    const response = await fetch(
        `https://api.${region}.commercetools.com/${projectKey}/carts/customer-id=${customerId}`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${App.accessToken}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    const cart: CartInfo = await response.json();
    localStorage.setItem('cartInfo', JSON.stringify(cart));
    return cart;
}
