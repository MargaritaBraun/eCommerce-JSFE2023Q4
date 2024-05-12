import { isValidEmail, isValidPass } from '../../utils/functions/validation-loginpage';
import Page from '../page';
import loginPage from '../template/loginPage';

export default class LoginPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = loginPage;
        return this.container;
    }

    // активация кнопки Войти после пройденой валидации
    public isValidation() {
        const btn: HTMLElement | null = document.querySelector('.btn-submit');
        if (btn) {
            const inputEmail: HTMLInputElement = document.querySelector('.email-input') as HTMLInputElement;
            const inputPass: HTMLInputElement = document.querySelector('.pass-input') as HTMLInputElement;
            const isValid = () => {
                const isValidationEmail: boolean = isValidEmail(inputEmail);
                const isValidationPass: boolean = isValidPass(inputPass);

                btn.style.cursor = isValidationEmail && isValidationPass ? 'pointer' : 'auto';
                btn.style.opacity = isValidationEmail && isValidationPass ? '1' : '0.5';
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

    public run() {
        this.isValidation();
        this.showPass();
    }
}
