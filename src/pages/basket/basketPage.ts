import renderCardOnBasket from '../../utils/functions/basketFunctions/renderCardOnBasket';
import showEmptyBasket from '../../utils/functions/basketFunctions/showEmptyBasket';
import { addDiscount, changeItem, createAnonimCart, getCart, plusAndMinus } from '../../api/basket/basket';
import UserInfo from '../../utils/interface/userInfo';
import { App } from '../app';
import Page from '../page';
import basketPageTemplate from '../template/basketPageTemplate';
import Cart from '../../utils/interface/Cart';
import finalAmountPrice from '../../utils/functions/basketFunctions/finalAmountPrice';

export default class BasketPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = basketPageTemplate;
        this.createHeaderFooter();
        return this.container;
    }

    public getNameUser() {
        const userInfo: UserInfo | null = JSON.parse(localStorage.getItem('user') || 'null');
        if (userInfo) {
            const userLink: HTMLElement | null = document.querySelector('.header-user-name');
            if (userLink) {
                if (userInfo.customer) {
                    userLink.innerHTML = `${userInfo.customer.firstName} ${userInfo.customer.lastName}`;
                } else if (userInfo.firstName && userInfo.lastName) {
                    userLink.innerHTML = `${userInfo.firstName} ${userInfo.lastName}`;
                }
            }
        }
    }

    isEmpty() {
        const cart: Cart = JSON.parse(localStorage.getItem('cart')!);

        if (cart.lineItems.length === 0) {
            showEmptyBasket();
        } else {
            cart.lineItems.forEach((x) => {
                renderCardOnBasket(x.productId, String(x.quantity));
            });
        }
        finalAmountPrice();
    }

    private async plusAndMinusItem() {
        const div = document.querySelector('.main-box');
        if (div) {
            div.addEventListener('click', (e) => {
                if ((e.target as HTMLInputElement).classList.contains('input_basket')) {
                    const cartJSON = localStorage.getItem('cart');
                    const cart: Cart = JSON.parse(cartJSON!);
                    console.log(cart);
                    const version: number = this.getVersionCart();
                    const index = cart.lineItems.findIndex((x) => x.productId === (e.target as HTMLInputElement).id);
                    plusAndMinus(cart.id, cart.lineItems[index].id, +(e.target as HTMLInputElement).value, version);
                }
            });
        }
    }

    private getVersionCart(): number {
        const cartJSON = localStorage.getItem('cart');
        if (!cartJSON) {
            return 1;
        }
        const cart: Cart = JSON.parse(cartJSON);
        const version = +cart.version;
        return version;
    }

    private async removeItem() {
        const div: HTMLElement | null = document.querySelector('.main-box');
        if (div) {
            div.addEventListener('click', async (e) => {
                if ((e.target as HTMLButtonElement).classList.contains('button_delete_basket')) {
                    const cart: Cart = JSON.parse(localStorage.getItem('cart')!);
                    const version: number = this.getVersionCart();
                    const index = cart.lineItems.findIndex(
                        (x) => x.productId === (e.target as HTMLButtonElement).parentElement!.id
                    );
                    changeItem(cart.id, cart.lineItems[index].id, version);
                }
            });
        }
    }

    private async getAnonimCartId() {
        const user = localStorage.getItem('user');
        if (!user && !App.cartID) {
            const cart: Cart = await createAnonimCart();
            App.cartID = cart.id;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    private async getCartUser() {
        let user: string | UserInfo | null = localStorage.getItem('user');
        if (user) {
            user = JSON.parse(user as string) as UserInfo;
            if (!user.cart) await getCart(user.customer!.id);
        }
    }

    showDiscountCode(): boolean {
        const buttonDiscountCode = document.querySelector('.button_discount_сode');
        const inputDiscountCode = document.querySelector('.input_discount_сode') as HTMLInputElement;
        if (buttonDiscountCode) {
            if (inputDiscountCode) {
                inputDiscountCode.addEventListener('input', () => {
                    console.log(inputDiscountCode.value);
                    const patternOnDiscountCode: RegExp = /^summer24$/;
                    if (patternOnDiscountCode.test(inputDiscountCode.value)) {
                        buttonDiscountCode.removeAttribute('disabled');
                        inputDiscountCode.value = 'summer24';
                        this.addDiscount();
                        return true;
                    }
                    buttonDiscountCode.setAttribute('disabled', 'true');
                    return false;
                });
            }
        }
        return false;
    }

    showInputDiscountCode() {
        const buttonDiscountCode = document.querySelector('.button_discount_сode');
        const inputDiscountCode = document.querySelector('.input_discount_сode') as HTMLInputElement;
        if (inputDiscountCode && buttonDiscountCode) {
            const cart: Cart = JSON.parse(localStorage.getItem('cart')!);
            if (cart.discountOnTotalPrice) {
                inputDiscountCode.value = 'summer24';
                buttonDiscountCode.setAttribute('disabled', 'true');
            }
        }
    }

    private getIdCart(): string {
        const cartJSON = localStorage.getItem('cart');
        if (!cartJSON) {
            return '';
        }
        const cart: Cart = JSON.parse(cartJSON);
        const id = cart.id;
        return id;
    }

    private async addDiscount() {
        const buttonDiscountCode = document.querySelector('.button_discount_сode');
        if (buttonDiscountCode) {
            buttonDiscountCode.addEventListener('click', async () => {
                console.log('Клик на кнопку');
                await addDiscount(this.getIdCart(), this.getVersionCart());
            });
        }
    }

    public async run() {
        this.getNameUser();
        this.showDiscountCode();
        await this.getAnonimCartId();
        await this.getCartUser();
        this.isEmpty();
        await this.removeItem();
        await this.plusAndMinusItem();
        this.showInputDiscountCode();
    }
}
