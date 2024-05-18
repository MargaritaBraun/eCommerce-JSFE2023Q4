import { PagesID } from '../app';
import Page from '../page';
import mainPage from '../template/mainPage';

export default class MainPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = mainPage;
        return this.container;
    }

    // переход на LoginPage
    private switchLoginPage() {
        const btnSwitchMain: HTMLButtonElement | null = document.querySelector('.btn-user-login');
        if (btnSwitchMain) {
            btnSwitchMain.addEventListener('click', () => {
                window.location.hash = PagesID.LOGIN;
            });
        }
    }

    // переход на RegistrationPage
    private switchRegistrationPage() {
        const btnSwitchMain: HTMLButtonElement | null = document.querySelector('.btn-user-signup');
        if (btnSwitchMain) {
            btnSwitchMain.addEventListener('click', () => {
                window.location.hash = PagesID.REGISTRATION;
            });
        }
    }

    public run() {
        this.switchLoginPage();
        this.switchRegistrationPage();
    }
}
