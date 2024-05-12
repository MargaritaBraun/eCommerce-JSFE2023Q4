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

    static renderNewPage(id: string): void {
        App.container.innerHTML = '';
        const page: Page = this.getPage(id);
        this.renderPage(page);
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
                return new LoginPage(id); // TODO будет 404 page
        }
    }

    private static renderPage(page: Page): void {
        App.container.append(page.render());
        page.run();
    }

    private routingChange(): void {
        window.addEventListener('hashchange', () => {
            const hash: string = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    public run(): void {
        const hash: string = window.location.hash.slice(1);
        App.renderNewPage(hash);
        this.routingChange();
    }
}
