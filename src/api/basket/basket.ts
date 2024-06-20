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
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
}

export async function addItem(cartId: string, productId: string, version: number = 1): Promise<Cart> {
    const response = await fetch(`https://api.${region}.commercetools.com/${projectKey}/carts/${cartId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${App.accessToken}`,
        },
        body: JSON.stringify({
            version,
            actions: [
                {
                    action: 'addLineItem',
                    productId,
                    variantId: 1,
                    quantity: 1,
                },
            ],
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    const data: Cart = await response.json();
    localStorage.setItem('cart', JSON.stringify(data));
    return data;
}

export async function changeItem(cartId: string, lineItemId: string, version: number = 1): Promise<Cart> {
    const response = await fetch(`https://api.${region}.commercetools.com/${projectKey}/carts/${cartId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${App.accessToken}`,
        },
        body: JSON.stringify({
            version,
            actions: [
                {
                    action: 'changeLineItemQuantity',
                    lineItemId,
                    quantity: 0,
                },
            ],
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    const data: Cart = await response.json();
    localStorage.setItem('cart', JSON.stringify(data));
    return data;
}

export async function plusAndMinus(
    cartId: string,
    lineItemId: string,
    quantity: number,
    version: number = 1
): Promise<Cart> {
    const response = await fetch(`https://api.${region}.commercetools.com/${projectKey}/carts/${cartId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${App.accessToken}`,
        },
        body: JSON.stringify({
            version,
            actions: [
                {
                    action: 'changeLineItemQuantity',
                    lineItemId,
                    quantity,
                },
            ],
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    const data: Cart = await response.json();
    localStorage.setItem('cart', JSON.stringify(data));
    return data;
}

export async function addDiscount(cartId: string, version: number = 1): Promise<Cart> {
    const response = await fetch(`https://api.${region}.commercetools.com/${projectKey}/carts/${cartId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${App.accessToken}`,
        },
        body: JSON.stringify({
            version,
            actions: [
                {
                    action: 'addDiscountCode',
                    code: 'summer24',
                },
            ],
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    const data: Cart = await response.json();
    console.log(data);
    localStorage.setItem('cart', JSON.stringify(data));
    return data;
}
