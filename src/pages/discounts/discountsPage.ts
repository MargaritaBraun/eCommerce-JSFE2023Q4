import UserInfo from '../../utils/interface/userInfo';
import Page from '../page';
import discountsPageTemplate from '../template/discountsPageTemplate';

export default class DiscountsPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = discountsPageTemplate;
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

    public run() {
        this.getNameUser();
    }
}
