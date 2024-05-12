import { checkoutCustomer, loginCustomer } from '../../api/login/login';
import { isValidEmail, isValidPass } from '../../utils/functions/validation-loginpage';
import UserInfo from '../../utils/interface/userInfo';
import { PagesID } from '../app';
import Page from '../page';
import loginPage from '../template/loginPage';
import './login.scss';

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

    private avtorizationUser() {
        const btn: HTMLButtonElement | null = document.querySelector('.btn-submit');
        if (btn) {
            btn.addEventListener('click', async () => {
                if (btn.disabled === false) {
                    await this.noEmail();
                    await this.yesEmail();
                }
            });
        }
    }

    // проверка на наличие введенного EMAIL

    private async getStatusEmail() {
        const inputEmail: HTMLInputElement = document.querySelector('.email-input') as HTMLInputElement;
        const statusEmail = await checkoutCustomer();
        const arr = Array.from(statusEmail.results);
        const arrEmail = arr.map((x) => x.email);
        return arrEmail.includes(inputEmail.value);
    }

    // действие при отсутствии EMAIL

    private async noEmail() {
        const errorText: HTMLElement | null = document.querySelector('.error-email');
        const errorsBox: HTMLElement | null = document.querySelector('.errorsbox-email');
        if (errorText && errorsBox) {
            if (!(await this.getStatusEmail())) {
                (errorsBox as HTMLElement).style.visibility = 'visible';
                (errorText as HTMLElement).textContent = 'Такая электронная почта не зарегестрирована.';
            }
        }
    }

    // действие, если есть EMAIL

    private async yesEmail() {
        const inputEmail: HTMLInputElement = document.querySelector('.email-input') as HTMLInputElement;
        const input: HTMLInputElement = document.querySelector('.pass-box input.pass-input') as HTMLInputElement;
        if (inputEmail && input) {
            if (await this.getStatusEmail()) {
                if (!(await loginCustomer(inputEmail.value, input.value))) {
                    this.errorPass();
                } else {
                    const infoUser = (await loginCustomer(inputEmail.value, input.value)) as UserInfo;
                    if (infoUser) {
                        localStorage.setItem('id', JSON.stringify(infoUser.customer!.id));
                        window.location.hash = PagesID.MAIN;
                    }
                }
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

    public run() {
        this.isValidation();
        this.showPass();
        this.avtorizationUser();
    }
}
