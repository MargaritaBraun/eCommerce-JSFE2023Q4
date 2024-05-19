import { PagesID } from '../app';
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

    // переход на LoginPage (выход из аккаунта авторизированных пользователей)
    private switchLoginPageAuthorized() {
        const btnSwitchLogin: HTMLButtonElement | null = document.querySelector('.btn-user-logout');
        if (btnSwitchLogin) {
            btnSwitchLogin.addEventListener('click', () => {
                window.location.hash = PagesID.LOGIN;
                // тут код для очистки localstorage
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
    }
}
