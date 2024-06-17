import UserInfo from '../../utils/interface/userInfo';
import Page from '../page';
import categoryPageTemplate from '../template/categoryPageTemplate';
import renderOnCategoryList from '../../utils/functions/renderOnCategoryList';
import { createAnonimCart } from '../../api/basket/basket';
import { App } from '../app';

export default class CategoryPage extends Page {
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
            const cartId: string = (await createAnonimCart()).id;
            App.cartID = cartId;
            localStorage.setItem('cart', cartId);
        }
    }

    public async run() {
        this.rendercategoryOnPages();
        await this.getAnonimCartId();
    }

    public rendercategoryOnPages() {
        renderOnCategoryList();
        this.getNameUser();
    }
}
