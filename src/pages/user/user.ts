import UserInfo from '../../utils/interface/userInfo';
import Page from '../page';
import userPageTemplate from '../template/userPageTemplate';

export default class UserPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = userPageTemplate;
        this.createHeaderFooter();
        return this.container;
    }

    private getUserInfoFromStorage(): UserInfo | null {
        const userFromStorage: UserInfo = JSON.parse(localStorage.getItem('user')!);
        let userInfo: UserInfo | null = null;
        if (userFromStorage) {
            if (userFromStorage.customer) {
                userInfo = userFromStorage.customer;
            } else {
                userInfo = userFromStorage;
            }
        }
        return userInfo;
    }

    private preventDefaultForm() {
        const registrationForm: HTMLFormElement = document.querySelector('.registration') as HTMLFormElement;
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    private showShippingAddress() {
        const checkboxAddress: HTMLInputElement | null = document.querySelector('.input_checkbox');
        const shippingAddressBlock: HTMLElement | null = document.querySelector('.shipping_address');
        if (checkboxAddress) {
            shippingAddressBlock!.style.display = 'flex';
            checkboxAddress.addEventListener('click', () => {
                if (checkboxAddress.checked) {
                    shippingAddressBlock!.style.display = 'none';
                } else {
                    shippingAddressBlock!.style.display = 'flex';
                }
            });
        }
    }

    private fillInputs() {
        const billingDiv: HTMLDivElement | null = document.querySelector('.billing_address');
        // const shippingDiv: HTMLDivElement | null = document.querySelector('.shipping_address');
        const firstName: HTMLInputElement | null = document.querySelector('.name_input');
        const lastName: HTMLInputElement | null = document.querySelector('.input_basename');
        const email: HTMLInputElement | null = document.querySelector('.input_email');
        const password: HTMLInputElement | null = document.querySelector('.input_password');
        const birthday: HTMLInputElement | null = document.querySelector('.input_birthday');
        // const postalCodeBilling: HTMLInputElement | null = billingDiv!.querySelector('.input_basic name_input');
        // const streetBilling: HTMLInputElement | null = billingDiv!.querySelector('.input_basic name_input');
        // const houseBilling: HTMLInputElement | null = billingDiv!.querySelector('.input_basic name_input');
        // const apartmentBilling: HTMLInputElement | null = billingDiv!.querySelector('.input_basic name_input');
        // const postalCodeShipping: HTMLInputElement | null = shippingDiv!.querySelector('.input_basic name_input');
        // const streetShipping: HTMLInputElement | null = shippingDiv!.querySelector('.input_basic name_input');
        // const houseShipping: HTMLInputElement | null = shippingDiv!.querySelector('.input_basic name_input');
        // const apartmentShipping: HTMLInputElement | null = shippingDiv!.querySelector('.input_basic name_input');
        if (billingDiv) {
            const userInfo = this.getUserInfoFromStorage();
            if (userInfo) {
                firstName!.value = userInfo!.firstName;
                lastName!.value = userInfo!.lastName;
                email!.value = userInfo!.email;
                password!.value = userInfo!.password;
                birthday!.value = userInfo!.dateOfBirth!;
                // postalCodeBilling!.value = userInfo!.addresses[]
            }
        }
    }

    private showPassword() {
        const checkboxPassword: HTMLInputElement | null = document.querySelector('.show-pass');
        const password: HTMLInputElement | null = document.querySelector('.input_password');
        if (checkboxPassword && password) {
            checkboxPassword.addEventListener('click', () => {
                if (checkboxPassword.checked) {
                    password.type = 'text';
                } else {
                    password.type = 'password';
                }
            });
        }
    }

    public run() {
        this.preventDefaultForm();
        this.showShippingAddress();
        this.fillInputs();
        this.showPassword();
    }
}
