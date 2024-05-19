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

    // переход на CategoryPage
    private switchCategoryPage() {
        const btnSwitchCategory: HTMLButtonElement | null = document.querySelector('.category-pg');
        if (btnSwitchCategory) {
            btnSwitchCategory.addEventListener('click', () => {
                window.location.hash = PagesID.CATEGORY;
            });
        }
    }

    // переход на DiscountsPage
    private switchDiscountsPage() {
        const btnSwitchDisc: HTMLButtonElement | null = document.querySelector('.discounts-pg');
        if (btnSwitchDisc) {
            btnSwitchDisc.addEventListener('click', () => {
                window.location.hash = PagesID.DISCOUNTS;
            });
        }
    }

    // переход на AboutPage
    private switchAboutPage() {
        const btnSwitchAbout: HTMLButtonElement | null = document.querySelector('.about-pg');
        if (btnSwitchAbout) {
            btnSwitchAbout.addEventListener('click', () => {
                window.location.hash = PagesID.ABOUT;
            });
        }
    }

    // переход на BasketPage
    private switchBasketPage() {
        const btnSwitchBasket: HTMLButtonElement | null = document.querySelector('.basket-pg');
        if (btnSwitchBasket) {
            btnSwitchBasket.addEventListener('click', () => {
                window.location.hash = PagesID.BASKET;
            });
        }
    }

    public run() {
        this.switchLoginPage();
        this.switchRegistrationPage();
        this.switchLoginPageAuthorized();
        this.switchCategoryPage();
        this.switchDiscountsPage();
        this.switchAboutPage();
        this.switchBasketPage();
    }
}
