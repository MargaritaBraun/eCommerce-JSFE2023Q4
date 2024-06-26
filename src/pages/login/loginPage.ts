import { checkoutCustomer, getCustomerToken, loginCustomer } from '../../api/login/login';
import { isValidEmail, isValidPass } from '../../utils/functions/validation-loginpage';
import { App, PagesID } from '../app';
import Page from '../page';
import loginPage from '../template/loginPageTemplate';

export default class LoginPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = loginPage;
        return this.container;
    }

    // активация кнопки Войти после пройденой валидации
    public isValidation() {
        const btn: HTMLButtonElement | null = document.querySelector('.btn-submit');
        if (btn) {
            const inputEmail: HTMLInputElement = document.querySelector('.email-input') as HTMLInputElement;
            const inputPass: HTMLInputElement = document.querySelector('.pass-input') as HTMLInputElement;
            const isValid = () => {
                const isValidationEmail: boolean = isValidEmail(inputEmail);
                const isValidationPass: boolean = isValidPass(inputPass);

                btn.style.cursor = isValidationEmail && isValidationPass ? 'pointer' : 'auto';
                btn.style.opacity = isValidationEmail && isValidationPass ? '1' : '0.5';
                btn.disabled = !(isValidationEmail && isValidationPass);
            };

            inputEmail.addEventListener('input', isValid);
            inputPass.addEventListener('input', isValid);
        }
    }

    // чек-бокс для показа пароля
    private showPass() {
        const btnShowPass: HTMLInputElement | null = document.querySelector('.show-pass');
        const input: HTMLInputElement = document.querySelector('.pass-box input.pass-input') as HTMLInputElement;

        const toggleType = () => {
            if (input.type === 'password') {
                input.type = 'text';
            } else {
                input.type = 'password';
            }
        };
        btnShowPass?.addEventListener('click', toggleType);
    }

    // действие при нажатии на активную кнопку SUBMIT
    private authorizationUser() {
        const btn: HTMLButtonElement | null = document.querySelector('.btn-submit');
        if (btn) {
            btn.addEventListener('click', async () => {
                if (!btn.disabled) {
                    await this.checkEmail();
                }
            });
        }
    }

    // проверка на наличие введенного EMAIL
    private async getStatusEmail() {
        const inputEmail: HTMLInputElement = document.querySelector('.email-input') as HTMLInputElement;
        const infoUser = await checkoutCustomer();
        const users = Array.from(infoUser.results);
        const usersEmail = users.map((x) => x.email);
        return usersEmail.includes(inputEmail.value);
    }

    // действие при отсутствии EMAIL
    private async checkEmail() {
        const errorText: HTMLElement | null = document.querySelector('.error-email');
        const errorsBox: HTMLElement | null = document.querySelector('.errorsbox-email');
        if (errorText && errorsBox) {
            if (!(await this.getStatusEmail())) {
                (errorsBox as HTMLElement).style.visibility = 'visible';
                (errorText as HTMLElement).textContent = 'Такая электронная почта не зарегестрирована.';
            } else {
                this.loginUser();
            }
        }
    }

    // действие, если есть EMAIL
    private async loginUser() {
        const inputEmail: HTMLInputElement = document.querySelector('.email-input') as HTMLInputElement;
        const input: HTMLInputElement = document.querySelector('.pass-box input.pass-input') as HTMLInputElement;
        const infoUser = await loginCustomer(inputEmail.value, input.value);
        if (inputEmail && input) {
            if (!infoUser) {
                this.errorPass();
            } else {
                const customerToken = await getCustomerToken(inputEmail.value, input.value);
                localStorage.setItem('token', JSON.stringify(customerToken));
                App.accessToken = customerToken;
                localStorage.setItem('user', JSON.stringify(infoUser));
                localStorage.setItem('pass', JSON.stringify(input.value));
                window.location.hash = PagesID.MAIN;
            }
        }
    }

    // действие, если EMAIL есть, но пароль не подходит
    private errorPass() {
        const errorText: HTMLElement | null = document.querySelector('.error-pass');
        const errorsBox: HTMLElement | null = document.querySelector('.errorsbox-pass');
        if (errorText && errorsBox) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = `Пароль не соответствует EMAIL`;
        }
    }

    // переход на Регистрацию
    private switchRegistration() {
        const btnRegistration: HTMLElement | null = document.querySelector('.text-register span');
        if (btnRegistration) {
            btnRegistration.addEventListener('click', () => {
                window.location.hash = PagesID.REGISTRATION;
            });
        }
    }

    // переход на Главную всем пользователем
    private switchMain() {
        const btnMain: HTMLElement | null = document.querySelector('.title-page');
        if (btnMain) {
            btnMain.addEventListener('click', () => {
                window.location.hash = PagesID.MAIN;
            });
        }
    }

    public run() {
        this.isValidation();
        this.showPass();
        this.authorizationUser();
        this.switchRegistration();
        this.switchMain();
    }
}
