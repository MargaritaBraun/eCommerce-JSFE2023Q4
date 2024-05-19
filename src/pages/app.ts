import getAccessToken from '../api/login/api';
import LoginPage from './login/login';
import MainPage from './main/main';
import RegistrationPage from './registration/registration';

export const enum PagesID {
    REGISTRATION = 'registration',
    LOGIN = 'login',
    MAIN = 'main',
}

export type Page = LoginPage | RegistrationPage | MainPage;

export class App {
    static container: HTMLElement = document.body;

    static accessToken: null | string;

    static renderNewPage(id: string): void {
        App.container.innerHTML = '';
        const page: Page = this.getPage(id);
        this.renderPage(page);
    }

    // сохранение токена клиента

    private async saveAccessToken(): Promise<void> {
        const token = localStorage.getItem('user');
        if (token) {
            App.accessToken = token;
        } else {
            App.accessToken = await getAccessToken();
        }
    }

    private static getPage(id: string): Page {
        switch (id) {
            case PagesID.LOGIN:
                return new LoginPage(id);
            case PagesID.REGISTRATION:
                return new RegistrationPage(id);
            case PagesID.MAIN:
                return new MainPage(id);
            default:
                return new LoginPage(id);
        }
    }

    private static renderPage(page: Page): void {
        App.container.append(page.render());
        page.run();
    }

    private routingChange(): void {
        window.addEventListener('hashchange', () => {
            App.renderNewPage(this.getHash());
        });
    }

    private getHash() {
        let hash = window.location.hash.slice(1);
        const token = localStorage.getItem('user');
        if (!hash) {
            hash = PagesID.LOGIN;
        }
        if (token && (hash === PagesID.LOGIN || hash === PagesID.REGISTRATION)) {
            hash = PagesID.MAIN;
        }
        window.location.hash = hash;
        return hash;
    }

    public async run(): Promise<void> {
        await this.saveAccessToken();
        const hash: string = this.getHash();
        App.renderNewPage(hash);
        this.routingChange();
    }
}
