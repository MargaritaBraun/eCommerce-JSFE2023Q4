import getAccessToken from '../api/login/api';
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

    public run(): void {
        // this.functionalityFromPage();
    }

    // protected functionalityFromPage(): void {
    //     this.switchLoginPageAuthorized();
    //     this.hiddenLoginAndLogoutButton();
    // }

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
    }

    protected hiddenLoginAndLogoutButton() {
        const token = localStorage.getItem('user');
        const btnLogin: HTMLElement | null = document.querySelector('.btn-user-login');
        const btnUserName: HTMLElement | null = document.querySelector('.header-user-name');
        const btnRegistration: HTMLElement | null = document.querySelector('.btn-user-signup');
        const btnLogout: HTMLElement | null = document.querySelector('.btn-user-logout');
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
        const btnSwitchLogin: HTMLButtonElement | null = document.querySelector('.btn-user-logout');
        if (btnSwitchLogin) {
            btnSwitchLogin.addEventListener('click', async () => {
                window.location.hash = PagesID.LOGIN;
                localStorage.removeItem('user');
                App.accessToken = await getAccessToken();
            });
        }
    }
}

export default Page;
