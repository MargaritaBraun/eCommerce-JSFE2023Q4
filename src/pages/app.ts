import getAccessToken from '../api/login/api';
import LoginPage from './login/login';
import MainPage from './main/main';
import RegistrationPage from './registration/registration';
import ErrorPage from './404/error';
import CategoryPage from './category/category';
import DiscountsPage from './discounts/discounts';
import AboutPage from './about/about';
import BasketPage from './basket/basket';

export const enum PagesID {
    REGISTRATION = 'registration',
    LOGIN = 'login',
    MAIN = 'main',
    ERROR = 'error',
    CATEGORY = 'category',
    DISCOUNTS = 'discounts',
    ABOUT = 'about',
    BASKET = 'basket',
}

export type Page =
    | LoginPage
    | RegistrationPage
    | MainPage
    | ErrorPage
    | CategoryPage
    | DiscountsPage
    | AboutPage
    | BasketPage;

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
        App.accessToken = await getAccessToken();
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
            const hash: string = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    public async run(): Promise<void> {
        await this.saveAccessToken();
        const hash: string = window.location.hash.slice(1);
        App.renderNewPage(hash);
        this.routingChange();
    }
}
