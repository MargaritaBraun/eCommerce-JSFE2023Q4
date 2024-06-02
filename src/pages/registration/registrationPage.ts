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
import { CreateUser, Address } from '../../utils/interface/createUser';
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
            this.showPass();
            registrationForm.addEventListener('input', () => {
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
                } else {
                    buttonSubmit.setAttribute('disabled', 'true');
                }
            });
        }
    }

    private showPass() {
        const btnShowPass: HTMLInputElement | null = document.querySelector('.show-pass');
        const input: HTMLInputElement = document.querySelector('.input_password') as HTMLInputElement;

        const toggleType = () => {
            if (input.type === 'password') {
                input.type = 'text';
            } else {
                input.type = 'password';
            }
        };
        btnShowPass?.addEventListener('click', toggleType);
    }

    async registrationUser() {
        const buttonSubmit: HTMLButtonElement | null = document.querySelector('.button_registration');
        if (buttonSubmit) {
            this.preventDefaultForm();
            this.createUserAndSaveHisToken();
        }
    }

    private createUserAndSaveHisToken() {
        const buttonSubmit: HTMLButtonElement | null = document.querySelector('.button_registration');
        const inputName: HTMLInputElement = document.querySelector('.name_input') as HTMLInputElement;
        const basename: HTMLInputElement = document.querySelector('.input_basename') as HTMLInputElement;
        const emailInput: HTMLInputElement = document.querySelector('.input_email') as HTMLInputElement;
        const passwordInput: HTMLInputElement = document.querySelector('.input_password') as HTMLInputElement;
        const checkbox: HTMLInputElement | null = document.querySelector('.input_checkbox');
        const birthday: HTMLInputElement = document.querySelector('.input_birthday') as HTMLInputElement;

        if (buttonSubmit) {
            buttonSubmit.addEventListener('click', async () => {
                const userInfo: CreateUser = {
                    email: emailInput.value,
                    password: passwordInput.value,
                    firstName: inputName.value,
                    lastName: basename.value,
                    dateOfBirth: birthday.value,
                    customerGroup: {
                        typeId: 'customer-group',
                        key: 'general',
                    },
                    addresses:
                        checkbox && checkbox.checked
                            ? [this.createBillingAddress()]
                            : [this.createBillingAddress(), this.createShippingAddress()],
                    shippingAddresses: checkbox && checkbox.checked ? [0] : [1],
                    billingAddresses: [0],
                };

                const customer = await createCustomer(App.accessToken!, projectKey, userInfo);
                if (customer) {
                    await this.saveTokenAfterRegistration(emailInput.value, passwordInput.value);
                    localStorage.setItem('user', JSON.stringify(userInfo));
                } else {
                    this.showEmailError();
                }
            });
        }
    }

    private createBillingAddress(): Address {
        const billingForm: HTMLElement | null = document.querySelector('.billing_address');
        let billingAddress: Address | null;
        if (billingForm) {
            const postIndex: HTMLInputElement | null = billingForm.querySelector('.input_postal_code');
            const streetName: HTMLInputElement | null = billingForm.querySelector('.input_street');
            const streetNumber: HTMLInputElement | null = billingForm.querySelector('.input_num_house');
            const apartment: HTMLInputElement | null = billingForm.querySelector('.input_apartment');
            billingAddress = {
                streetName: streetName!.value,
                streetNumber: streetNumber!.value,
                postalCode: postIndex!.value,
                apartment: apartment!.value,
                city: 'Гомель',
                country: 'BY',
            };
        }
        return billingAddress!;
    }

    private createShippingAddress(): Address {
        const shippingForm: HTMLElement | null = document.querySelector('.shipping_address');
        let shippingAddress: Address | null;
        if (shippingForm) {
            const postIndex: HTMLInputElement | null = shippingForm.querySelector('.input_postal_code');
            const streetName: HTMLInputElement | null = shippingForm.querySelector('.input_street');
            const streetNumber: HTMLInputElement | null = shippingForm.querySelector('.input_num_house');
            const apartment: HTMLInputElement | null = shippingForm.querySelector('.input_apartment');
            shippingAddress = {
                streetName: streetName!.value,
                streetNumber: streetNumber!.value,
                postalCode: postIndex!.value,
                apartment: apartment!.value,
                city: 'Гомель',
                country: 'BY',
            };
        }
        return shippingAddress!;
    }

    private preventDefaultForm() {
        const registrationForm: HTMLFormElement = document.querySelector('.registration') as HTMLFormElement;
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    private async saveTokenAfterRegistration(email: string, password: string) {
        const customerToken = await getCustomerToken(email, password);
        if (customerToken) {
            localStorage.setItem('token', JSON.stringify(customerToken));
            App.accessToken = customerToken;
            window.location.hash = PagesID.MAIN;
        }
    }

    private showEmailError() {
        const errorName: HTMLParagraphElement = document.querySelector('.login_error') as HTMLParagraphElement;
        errorName.innerHTML = 'Такая почта уже используется';
    }

    private initMainPageListener() {
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
        this.initMainPageListener();
    }
}
