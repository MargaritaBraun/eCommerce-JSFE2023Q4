import getAccessToken from '../api/login/api';
import LoginPage from './login/loginPage';
import MainPage from './main/mainPage';
import RegistrationPage from './registration/registrationPage';
import ErrorPage from './404/errorPage';
import CategoryPage from './category/categoryPage';
import DiscountsPage from './discounts/discountsPage';
import AboutPage from './about/aboutPage';
import BasketPage from './basket/basketPage';
import UserPage from './user/user';

export const enum PagesID {
    REGISTRATION = 'registration',
    LOGIN = 'login',
    MAIN = 'main',
    ERROR = 'error',
    CATEGORY = 'category',
    DISCOUNTS = 'discounts',
    ABOUT = 'about',
    BASKET = 'basket',
    USER = 'user',
}

export type Page =
    | LoginPage
    | RegistrationPage
    | MainPage
    | ErrorPage
    | CategoryPage
    | DiscountsPage
    | AboutPage
    | BasketPage
    | UserPage;

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
        const token = localStorage.getItem('token');
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
            case PagesID.CATEGORY:
                return new CategoryPage(id);
            case PagesID.DISCOUNTS:
                return new DiscountsPage(id);
            case PagesID.ABOUT:
                return new AboutPage(id);
            case PagesID.BASKET:
                return new BasketPage(id);
            case PagesID.USER:
                return new UserPage(id);
            default:
                return new ErrorPage(id);
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
        const token = localStorage.getItem('token');
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
