import { getBasket } from '../../utils/functions/basketFunctions/allFunsBasket';
import renderCardOnBasket from '../../utils/functions/basketFunctions/renderCardOnBasket';
import UserInfo from '../../utils/interface/userInfo';
import Page from '../page';
import basketPageTemplate from '../template/basketPageTemplate';

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

    isEmply() {
        // Тут реализовать если пусто
        // getBasket();
        // console.log(localStorage.myBasket);
        const basket = getBasket();
        if (!basket) {
            console.log('Корзина пуста');
        } else {
            console.log('Корзина не пуста, содержимое:', basket);
            // console.log(basket.length); // массив id
            basket.forEach((id: string) => {
                renderCardOnBasket(id);
            });
        }
    }

    public run() {
        this.getNameUser();
        this.isEmply();
    }
}
