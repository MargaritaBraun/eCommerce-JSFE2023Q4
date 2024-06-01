import getAccessToken from '../api/login/api';
import UserInfo from '../utils/interface/userInfo';
import { App, PagesID } from './app';
import footerTemplate from './template/footerTemplate';
import headerTemplate from './template/headerTemplate';

abstract class Page {
    protected container: HTMLElement;

    constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }

    public render(): HTMLElement {
        return this.container;
    }

    public run(): void {}

    // метод создания хедера и футера
    protected createHeaderFooter(): void {
        const header: HTMLElement = document.createElement('header');
        const footer: HTMLElement = document.createElement('footer');
        header.innerHTML = headerTemplate;
        footer.innerHTML = footerTemplate;
        this.container.prepend(header);
        this.container.append(footer);

        this.switchLoginPageAuthorized();
        this.hiddenLoginAndLogoutButton();
        this.getNameUser();
    }

    protected hiddenLoginAndLogoutButton() {
        const token = localStorage.getItem('token');
        const btnLogin: HTMLElement | null = this.container.querySelector('.btn-user-login');
        const btnUserName: HTMLElement | null = this.container.querySelector('.header-user-name');
        const btnRegistration: HTMLElement | null = this.container.querySelector('.btn-user-signup');
        const btnLogout: HTMLElement | null = this.container.querySelector('.btn-user-logout');
        if (btnLogin && btnRegistration && btnLogout && btnUserName) {
            if (token) {
                btnLogin.style.display = 'none';
                btnRegistration.style.display = 'none';
                btnLogout.style.display = 'flex';
                btnUserName.style.display = 'block';
            } else {
                btnLogin.style.display = 'flex';
                btnRegistration.style.display = 'flex';
                btnLogout.style.display = 'none';
                btnUserName.style.display = 'none';
            }
        }
    }

    // переход на LoginPage (выход из аккаунта авторизированных пользователей)
    protected async switchLoginPageAuthorized() {
        const btnSwitchLogin: HTMLButtonElement | null = this.container.querySelector('.btn-user-logout');
        if (btnSwitchLogin) {
            btnSwitchLogin.addEventListener('click', async () => {
                window.location.hash = PagesID.LOGIN;
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                App.accessToken = await getAccessToken();
            });
        }
    }

    protected getNameUser() {
        let user: UserInfo | null = null;
        window.addEventListener('hashchange', () => {
            const userString = localStorage.getItem('user');
            const userLink: HTMLElement | null = document.querySelector('.header-user-name');
            if (userString) {
                user = JSON.parse(userString) as UserInfo;
                if (user.customer) {
                    userLink!.innerHTML = `${user.customer?.firstName} ${user.customer?.lastName}`;
                } else {
                    userLink!.innerHTML = `${user.firstName}`;
                }
            }
        });
    }
}

export default Page;
