import getAccessToken from '../api/login/api';
import { App, PagesID } from './app';

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
        this.methodsForAllPages();
    }

    private hiddenLoginAndLogoutButton() {
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
    private async switchLoginPageAuthorized() {
        const btnSwitchLogin: HTMLButtonElement | null = document.querySelector('.btn-user-logout');
        if (btnSwitchLogin) {
            btnSwitchLogin.addEventListener('click', async () => {
                window.location.hash = PagesID.LOGIN;
                localStorage.removeItem('user');
                App.accessToken = await getAccessToken();
            });
        }
    }

    public methodsForAllPages() {
        this.switchLoginPageAuthorized();
        this.hiddenLoginAndLogoutButton();
    }
}

export default Page;
