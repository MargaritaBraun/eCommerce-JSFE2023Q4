import Page from '../page';
import registrationPageTemplate from '../template/registrationPageTemplate';
import {
    validationOnInputName,
    validationOnInputBaseName,
    validationOnInputLogin,
    validationOnInputPassword,
    validationOnInputBirthday,
    validationOnInputPostalCode,
    validationOnInputStreet,
    checkedOnField,
} from '../../utils/functions/validation-registration';
import CreateUser from '../../utils/interface/createUser';
import { App, PagesID } from '../app';
import { projectKey } from '../../api/constAPI';
import createCustomer from '../../api/registration/registrationUser';
import { getCustomerToken } from '../../api/login/login';

export default class RegistrationPage extends Page {
    public render(): HTMLElement {
        this.container.classList.add('registration_container');
        this.container.innerHTML = registrationPageTemplate;
        return this.container;
    }

    public validateOnField() {
        const registrationForm: HTMLFormElement = document.querySelector('.registration') as HTMLFormElement;
        const inputName: HTMLInputElement = document.querySelector('.name_input') as HTMLInputElement;
        const basename: HTMLInputElement = document.querySelector('.input_basename') as HTMLInputElement;
        const emailInput: HTMLInputElement = document.querySelector('.input_email') as HTMLInputElement;
        const passwordInput: HTMLInputElement = document.querySelector('.input_password') as HTMLInputElement;
        const birthdayInput: HTMLInputElement = document.querySelector('.input_birthday') as HTMLInputElement;
        const postalCodeInput: HTMLInputElement = document.querySelector('.input_postal_code') as HTMLInputElement;
        const streetInput: HTMLInputElement = document.querySelector('.input_street') as HTMLInputElement;

        const buttonSubmit: HTMLButtonElement | null = document.querySelector('.button_registration');

        if (buttonSubmit) {
            const isValidName = () => validationOnInputName(inputName);
            inputName.addEventListener('input', isValidName);
            const isValidBaseName = () => validationOnInputBaseName(basename);
            basename.addEventListener('input', isValidBaseName);
            const isValidLogin = () => validationOnInputLogin(emailInput);
            emailInput.addEventListener('input', isValidLogin);
            const isValidPassword = () => validationOnInputPassword(passwordInput);
            passwordInput.addEventListener('input', isValidPassword);
            const isValidBirthday = () => validationOnInputBirthday(birthdayInput);
            birthdayInput.addEventListener('input', isValidBirthday);
            const isValidPostalCode = () => validationOnInputPostalCode(postalCodeInput);
            postalCodeInput.addEventListener('input', isValidPostalCode);
            const isValidStreet = () => validationOnInputStreet(streetInput);
            streetInput.addEventListener('input', isValidStreet);
            checkedOnField();
            registrationForm.addEventListener('click', () => {
                if (
                    isValidName() &&
                    isValidBaseName() &&
                    isValidLogin() &&
                    isValidPassword() &&
                    isValidBirthday() &&
                    isValidPostalCode() &&
                    isValidStreet()
                ) {
                    buttonSubmit.removeAttribute('disabled');
                }
            });
        }
    }

    async registrationUser() {
        const registrationForm: HTMLFormElement = document.querySelector('.registration') as HTMLFormElement;
        const inputName: HTMLInputElement = document.querySelector('.name_input') as HTMLInputElement;
        const basename: HTMLInputElement = document.querySelector('.input_basename') as HTMLInputElement;
        const emailInput: HTMLInputElement = document.querySelector('.input_email') as HTMLInputElement;
        const passwordInput: HTMLInputElement = document.querySelector('.input_password') as HTMLInputElement;
        const buttonSubmit: HTMLButtonElement | null = document.querySelector('.button_registration');
        if (buttonSubmit) {
            registrationForm.addEventListener('submit', (e) => {
                e.preventDefault();
            });
            buttonSubmit.addEventListener('click', async () => {
                const userInfo: CreateUser = {
                    email: emailInput.value,
                    password: passwordInput.value,
                    firstName: inputName.value,
                    lastName: basename.value,
                    customerGroup: {
                        typeId: 'customer-group',
                        key: 'general',
                    },
                };
                const customer = await createCustomer(App.accessToken!, projectKey, userInfo);
                if (customer) {
                    await this.saveTokenAfterRegistration(emailInput.value, passwordInput.value);
                } else {
                    this.showEmailError();
                }
            });
        }
    }

    private async saveTokenAfterRegistration(email: string, password: string) {
        const customerToken = await getCustomerToken(email, password);
        if (customerToken) {
            localStorage.setItem('user', JSON.stringify(customerToken));
            App.accessToken = customerToken;
            window.location.hash = PagesID.MAIN;
        }
    }

    private showEmailError() {
        const errorName: HTMLParagraphElement = document.querySelector('.login_error') as HTMLParagraphElement;
        errorName.innerHTML = 'Такая почта уже используется';
    }

    private goMainPage() {
        const logo: HTMLElement | null = document.querySelector('.logo_registration');
        if (logo) {
            logo.addEventListener('click', () => {
                window.location.hash = PagesID.MAIN;
            });
        }
    }

    public async run() {
        this.validateOnField();
        await this.registrationUser();
        this.goMainPage();
    }
}
