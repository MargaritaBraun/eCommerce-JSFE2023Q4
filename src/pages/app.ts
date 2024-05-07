import LoginPage from './login/login';
import MainPage from './main/main';
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

        switch (id) {
            case PagesID.loginPage:
                this.renderLoginPage();
                break;
            case PagesID.registrationPage:
                this.renderRegistrationPage();
                break;
            case PagesID.mainPage:
                this.renderMainPage();
                break;
            default:
                break;
        }
    }

    private static renderLoginPage() {
        const page = new LoginPage(PagesID.loginPage);
        window.location.hash = PagesID.loginPage;

        const pageHTML = page.render();
        App.container.append(pageHTML);

        page.loginRun();
    }

    private static renderRegistrationPage() {
        const page = new RegistrationPage(PagesID.registrationPage);
        window.location.hash = PagesID.registrationPage;

        const pageHTML = page.render();
        App.container.append(pageHTML);

        page.registrationRun();
    }

    private static renderMainPage() {
        const page = new MainPage(PagesID.mainPage);
        window.location.hash = PagesID.mainPage;

        const pageHTML = page.render();
        App.container.append(pageHTML);

        page.mainRun();
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
        App.renderNewPage(hash);
        this.routingChange();
    }
}
