import getAccessToken from '../../api/login/api';
import { App, PagesID } from '../app';
import Page from '../page';
import mainPage from '../template/mainPageTemplate';

export default class MainPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = mainPage;
        return this.container;
    }

    // переход на LoginPage
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
        const btnRegistration: HTMLElement | null = document.querySelector('.btn-user-signup');
        const btnLogout: HTMLElement | null = document.querySelector('.btn-user-logout');
        if (btnLogin && btnRegistration && btnLogout) {
            if (token) {
                btnLogin.style.display = 'none';
                btnRegistration.style.display = 'none';
                btnLogout.style.display = 'flex';
            } else {
                btnLogin.style.display = 'flex';
                btnRegistration.style.display = 'flex';
                btnLogout.style.display = 'none';
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

    public run() {
        this.switchLoginPage();
        this.switchRegistrationPage();
        this.switchLoginPageAuthorized();
        this.hiddenLoginAndLogoutButton();
    }
}
