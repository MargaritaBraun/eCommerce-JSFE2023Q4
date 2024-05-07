import LoginPage from './login/login';
import MainPage from './main/main';
import Page from './page';
import RegistrationPage from './registration/registration';

export const enum PagesID {
    registrationPage = 'registration',
    loginPage = 'login',
    mainPage = 'main',
}

export class App {
    static container: HTMLElement = document.body;

    static renderNewPage(id: string): void {
        App.container.innerHTML = '';
        let page: null | Page = null;
        if (id === PagesID.loginPage) {
            page = new LoginPage(id);
            window.location.hash = PagesID.loginPage;
        } else if (id === PagesID.registrationPage) {
            page = new RegistrationPage(id);
            window.location.hash = PagesID.registrationPage;
        } else if (id === PagesID.mainPage) {
            page = new MainPage(id);
            window.location.hash = PagesID.mainPage;
        }
        if (page) {
            const pageHTML: HTMLElement = page.render();
            App.container.append(pageHTML);
            if (page instanceof LoginPage) {
                const loginPage = page as LoginPage;
                loginPage.loginRun();
                if (page instanceof RegistrationPage) {
                    const registrationPage = page as RegistrationPage;
                    registrationPage.registrationRun();
                }
                if (page instanceof MainPage) {
                    const gamePage = page as MainPage;
                    gamePage.mainRun();
                }
            }
        }
    }

    private routingChange(): void {
        window.addEventListener('hashchange', () => {
            const hash: string = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    public run(): void {
        const hash: string = window.location.hash.slice(1);
        window.location.hash = `#${PagesID.loginPage}`;
        if (hash === PagesID.loginPage) {
            App.renderNewPage(PagesID.loginPage);
        } else if (hash === PagesID.registrationPage) {
            App.renderNewPage(PagesID.registrationPage);
        } else if (hash === PagesID.mainPage) {
            App.renderNewPage(PagesID.mainPage);
        }
        this.routingChange();
    }
}
