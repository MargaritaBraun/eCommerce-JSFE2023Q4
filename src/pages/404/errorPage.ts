import { PagesID } from '../app';
import Page from '../page';
import errorPage from '../template/errorPageTemplate';

export default class ErrorPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = errorPage;
        return this.container;
    }

    // переход на Главную
    private switchMainFromError() {
        const btnSwitchMain: HTMLButtonElement | null = document.querySelector('.btn-switch-main');
        if (btnSwitchMain) {
            btnSwitchMain.addEventListener('click', () => {
                window.location.hash = PagesID.MAIN;
            });
        }
    }

    public run() {
        this.switchMainFromError();
    }
}