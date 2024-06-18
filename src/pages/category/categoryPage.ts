import UserInfo from '../../utils/interface/userInfo';
import Page from '../page';
import categoryPageTemplate from '../template/categoryPageTemplate';
import renderOnCategoryList from '../../utils/functions/renderOnCategoryList';
import { addItem, changeItem, createAnonimCart } from '../../api/basket/basket';
import { App } from '../app';
import Cart from '../../utils/interface/Cart';

export default class CategoryPage extends Page {
    private getVersionCart(): number {
        const cartJSON = localStorage.getItem('cart');
        if (!cartJSON) {
            return 1;
        }
        const cart: Cart = JSON.parse(cartJSON);
        const version = +cart.version;
        return version;
    }

    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = categoryPageTemplate;
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

    private async getAnonimCartId() {
        const user = localStorage.getItem('user');
        if (!user && !App.cartID) {
            const cart: Cart = await createAnonimCart();
            App.cartID = cart.id;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    private async addItem() {
        const div: HTMLDivElement | null = document.querySelector('.main-wrap');
        const cartJson: string | null = localStorage.getItem('cart');
        const cart: Cart = JSON.parse(cartJson!);
        const cartId = cart.id;
        if (div) {
            div.addEventListener('click', async (e) => {
                if (
                    (e.target as HTMLButtonElement).classList.contains(`button_add_basket`) &&
                    (e.target as HTMLButtonElement).classList.contains(`active`)
                ) {
                    const cartInfo: Cart = JSON.parse(localStorage.getItem('cart')!);
                    const version: number = this.getVersionCart();
                    const index = cartInfo.lineItems.findIndex(
                        (x) => x.productId === (e.target as HTMLButtonElement).id
                    );
                    changeItem(cartId!, cartInfo.lineItems[index].id, version);
                    (e.target as HTMLButtonElement).textContent = 'Добавить в  корзину';
                    (e.target as HTMLButtonElement).classList.remove('active');
                } else if (
                    (e.target as HTMLButtonElement).classList.contains(`button_add_basket`) &&
                    !(e.target as HTMLButtonElement).classList.contains(`active`)
                ) {
                    (e.target as HTMLButtonElement).classList.add('active');
                    (e.target as HTMLButtonElement).textContent = 'Удалить из корзины';
                    const version: number = this.getVersionCart();
                    await addItem(cartId!, (e.target as HTMLButtonElement).id, version);
                }
            });
        }
    }

    public async run() {
        this.rendercategoryOnPages();
        await this.getAnonimCartId();
        await this.addItem();
    }

    public rendercategoryOnPages() {
        renderOnCategoryList();
        this.getNameUser();
    }
}
