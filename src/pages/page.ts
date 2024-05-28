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

    private switchLoginPage() {
        const btnSwitchLogin: HTMLButtonElement | null = document.querySelector('.btn-user-login');
        if (btnSwitchLogin) {
            btnSwitchLogin.addEventListener('click', () => {
                window.location.hash = PagesID.LOGIN;
            });
        }
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

    // переход на RegistrationPage
    private switchRegistrationPage() {
        const btnSwitchReg: HTMLButtonElement | null = document.querySelector('.btn-user-signup');
        if (btnSwitchReg) {
            btnSwitchReg.addEventListener('click', () => {
                window.location.hash = PagesID.REGISTRATION;
            });
        }
    }

    // переход на Main по клику на логотип
    private switchMainFromLogo() {
        const btnMain: HTMLElement | null = document.querySelector('.header-logo');
        if (btnMain) {
            btnMain.addEventListener('click', () => {
                window.location.hash = PagesID.MAIN;
            });
        }
    }

    // переход на страницу Пользователя по клику на его имя
    private switchUserPage() {
        const btnMain: HTMLElement | null = document.querySelector('.header-user-name');
        if (btnMain) {
            btnMain.addEventListener('click', () => {
                window.location.hash = PagesID.USER;
            });
        }
    }

    public methodsForAllPages() {
        this.switchLoginPage();
        this.switchRegistrationPage();
        this.switchLoginPageAuthorized();
        this.hiddenLoginAndLogoutButton();
        this.switchMainFromLogo();
        this.switchUserPage();
    }
}

export default Page;
