import { getCustomerToken } from '../../api/login/login';
import updateCustomerProfile from '../../api/user/user';
import UpdatedCustomerData from '../../utils/interface/changeInfo';
import UserInfo from '../../utils/interface/userInfo';
import { App } from '../app';
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
        const registrationForm: HTMLFormElement = document.querySelector('.aregistration') as HTMLFormElement;
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    private showShippingAddressBlock() {
        const checkboxAddress: HTMLInputElement | null = document.querySelector('.ainput_checkbox');
        const shippingAddressBlock: HTMLElement | null = document.querySelector('.ashipping_address');
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
        const firstName: HTMLInputElement | null = document.querySelector('.aname_input');
        const lastName: HTMLInputElement | null = document.querySelector('.ainput_basename');
        const email: HTMLInputElement | null = document.querySelector('.ainput_email');
        const password: HTMLInputElement | null = document.querySelector('.ainput_password');
        const birthday: HTMLInputElement | null = document.querySelector('.ainput_birthday');
        if (firstName) {
            const userInfo = this.getUserInfoFromStorage();
            if (userInfo) {
                firstName!.value = userInfo!.firstName;
                lastName!.value = userInfo!.lastName;
                email!.value = userInfo!.email;
                password!.value = userInfo!.password;
                birthday!.value = userInfo!.dateOfBirth!;
            }
        }
    }

    private showPassword() {
        const checkboxPassword: HTMLInputElement | null = document.querySelector('.ashow-pass');
        const password: HTMLInputElement | null = document.querySelector('.ainput_password');
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

    private showBillingAddress() {
        const infoUser = this.getUserInfoFromStorage();
        const billingDiv: HTMLDivElement | null = document.querySelector('.abilling_address');
        if (infoUser && billingDiv) {
            const billingAddressId = infoUser.billingAddressIds?.[0] || null;
            if (billingAddressId) {
                const postalCodeBilling: HTMLInputElement | null = billingDiv!.querySelector(
                    '.ainput_postal_code'
                ) as HTMLInputElement;
                const streetBilling: HTMLInputElement | null = billingDiv!.querySelector(
                    '.ainput_street'
                ) as HTMLInputElement;
                const houseBilling: HTMLInputElement | null = billingDiv!.querySelector(
                    '.ainput_num_house'
                ) as HTMLInputElement;
                const apartmentBilling: HTMLInputElement | null = billingDiv!.querySelector(
                    '.ainput_apartment'
                ) as HTMLInputElement;

                const billingAddress = infoUser.addresses?.find((address) => address.id === billingAddressId);
                if (billingAddress) {
                    postalCodeBilling!.value = billingAddress.postalCode;
                    streetBilling!.value = billingAddress.streetName;
                    houseBilling!.value = billingAddress.streetNumber;
                    apartmentBilling!.value = billingAddress.apartment;
                }
            } else {
                const otherAddresses = infoUser.addresses?.filter((address) => address.id !== billingAddressId);
                if (otherAddresses?.length) {
                    const firstAddress = otherAddresses[0];
                    const postalCodeBilling: HTMLInputElement | null = billingDiv!.querySelector(
                        '.ainput_postal_code'
                    ) as HTMLInputElement;
                    const streetBilling: HTMLInputElement | null = billingDiv!.querySelector(
                        '.ainput_street'
                    ) as HTMLInputElement;
                    const houseBilling: HTMLInputElement | null = billingDiv!.querySelector(
                        '.ainput_num_house'
                    ) as HTMLInputElement;
                    const apartmentBilling: HTMLInputElement | null = billingDiv!.querySelector(
                        '.ainput_apartment'
                    ) as HTMLInputElement;

                    postalCodeBilling!.value = firstAddress.postalCode;
                    streetBilling!.value = firstAddress.streetName;
                    houseBilling!.value = firstAddress.streetNumber;
                    apartmentBilling!.value = firstAddress.apartment;
                }
            }
        }
    }

    private showShippingAddress() {
        const infoUser = this.getUserInfoFromStorage();
        const shippingDiv: HTMLDivElement | null = document.querySelector('.ashipping_address');
        if (infoUser && shippingDiv) {
            const shippingAddressId = infoUser.shippingAddressIds?.[0] || null;
            if (shippingAddressId) {
                const postalCodeShipping: HTMLInputElement | null = shippingDiv!.querySelector(
                    '.ainput_postal_code'
                ) as HTMLInputElement;
                const streetShipping: HTMLInputElement | null = shippingDiv!.querySelector(
                    '.ainput_street'
                ) as HTMLInputElement;
                const houseShipping: HTMLInputElement | null = shippingDiv!.querySelector(
                    '.ainput_num_house'
                ) as HTMLInputElement;
                const apartmentShipping: HTMLInputElement | null = shippingDiv!.querySelector(
                    '.ainput_apartment'
                ) as HTMLInputElement;

                const shippingAddress = infoUser.addresses?.find((address) => address.id === shippingAddressId) || null;
                if (shippingAddress) {
                    postalCodeShipping!.value = shippingAddress.postalCode;
                    streetShipping!.value = shippingAddress.streetName;
                    houseShipping!.value = shippingAddress.streetNumber;
                    apartmentShipping!.value = shippingAddress.apartment;
                }
            } else {
                const otherAddresses = infoUser.addresses?.filter((address) => address.id !== shippingAddressId);
                if (otherAddresses?.length) {
                    const firstAddress = otherAddresses[1];
                    const postalCodeShipping: HTMLInputElement | null = shippingDiv!.querySelector(
                        '.ainput_postal_code'
                    ) as HTMLInputElement;
                    const streetShipping: HTMLInputElement | null = shippingDiv!.querySelector(
                        '.ainput_street'
                    ) as HTMLInputElement;
                    const houseShipping: HTMLInputElement | null = shippingDiv!.querySelector(
                        '.ainput_num_house'
                    ) as HTMLInputElement;
                    const apartmentShipping: HTMLInputElement | null = shippingDiv!.querySelector(
                        '.ainput_apartment'
                    ) as HTMLInputElement;

                    postalCodeShipping!.value = firstAddress.postalCode;
                    streetShipping!.value = firstAddress.streetName;
                    houseShipping!.value = firstAddress.streetNumber;
                    apartmentShipping!.value = firstAddress.apartment;
                }
            }
        }
    }

    private modificateInputs(input: HTMLInputElement, button: HTMLButtonElement) {
        if (input && button) {
            button.addEventListener('click', () => {
                const newInput = input;
                newInput.disabled = false;
            });
        }
    }

    private changeFirstName() {
        const firstName: HTMLInputElement | null = document.querySelector('.aname_input');
        const changeButton: HTMLButtonElement | null = document.querySelector('.change_first_name');
        this.modificateInputs(firstName!, changeButton!);
    }

    private changeLastName() {
        const lastName: HTMLInputElement | null = document.querySelector('.ainput_basename');
        const changeButton: HTMLButtonElement | null = document.querySelector('.change_last_name');
        this.modificateInputs(lastName!, changeButton!);
    }

    private changeEmail() {
        const email: HTMLInputElement | null = document.querySelector('.ainput_email');
        const changeButton: HTMLButtonElement | null = document.querySelector('.change_email');
        this.modificateInputs(email!, changeButton!);
    }

    private changePassword() {
        const password: HTMLInputElement | null = document.querySelector('.ainput_password');
        const changeButton: HTMLButtonElement | null = document.querySelector('.change_password');
        if (changeButton && password) {
            changeButton.addEventListener('click', () => {
                const oldPass = password.value;
                password.type = 'text';
                password.value = 'Нельзя поменять пароль';
                setTimeout(() => {
                    password.value = oldPass;
                    password.type = 'password';
                }, 2000);
            });
        }
    }

    private changeBirthday() {
        const birthday: HTMLInputElement | null = document.querySelector('.ainput_birthday');
        const changeButton: HTMLButtonElement | null = document.querySelector('.change_birthday');
        this.modificateInputs(birthday!, changeButton!);
    }

    private changeBillingAddress() {
        const billingDiv: HTMLDivElement | null = document.querySelector('.abilling_address');
        const postalCodeBilling: HTMLInputElement | null = billingDiv!.querySelector(
            '.ainput_postal_code'
        ) as HTMLInputElement;
        const streetBilling: HTMLInputElement | null = billingDiv!.querySelector('.ainput_street') as HTMLInputElement;
        const houseBilling: HTMLInputElement | null = billingDiv!.querySelector(
            '.ainput_num_house'
        ) as HTMLInputElement;
        const apartmentBilling: HTMLInputElement | null = billingDiv!.querySelector(
            '.ainput_apartment'
        ) as HTMLInputElement;
        const changeButton: HTMLButtonElement | null = document.querySelector('.change_address');
        if (changeButton) {
            this.modificateInputs(postalCodeBilling!, changeButton);
            this.modificateInputs(streetBilling!, changeButton);
            this.modificateInputs(houseBilling!, changeButton);
            this.modificateInputs(apartmentBilling!, changeButton);
        }
    }

    private changeShippingAddress() {
        const shippingDiv: HTMLDivElement | null = document.querySelector('.ashipping_address');
        const postalCodeShipping: HTMLInputElement | null = shippingDiv!.querySelector(
            '.ainput_postal_code'
        ) as HTMLInputElement;
        const streetShipping: HTMLInputElement | null = shippingDiv!.querySelector(
            '.ainput_street'
        ) as HTMLInputElement;
        const houseShipping: HTMLInputElement | null = shippingDiv!.querySelector(
            '.ainput_num_house'
        ) as HTMLInputElement;
        const apartmentShipping: HTMLInputElement | null = shippingDiv!.querySelector(
            '.ainput_apartment'
        ) as HTMLInputElement;
        const changeButton: HTMLButtonElement | null = document.querySelector('.change_address');
        if (changeButton) {
            this.modificateInputs(postalCodeShipping!, changeButton);
            this.modificateInputs(streetShipping!, changeButton);
            this.modificateInputs(houseShipping!, changeButton);
            this.modificateInputs(apartmentShipping!, changeButton);
        }
    }

    private changeAddresses() {
        this.changeBillingAddress();
        this.changeShippingAddress();
    }

    private saveChanges() {
        const saveChangeButton: HTMLButtonElement | null = document.querySelector('.save');
        const changeButton: HTMLButtonElement | null = document.querySelector('.change');
        const form: HTMLDivElement | null = document.querySelector('.aregistration');
        if (saveChangeButton) {
            saveChangeButton.addEventListener('click', () => {
                const inputs = Array.from(form!.querySelectorAll('input'));
                inputs.forEach((x) => {
                    const item = x;
                    item.disabled = true;
                });
                saveChangeButton.disabled = true;
                changeButton!.disabled = false;
            });
        }
    }

    private async changeInfo() {
        const saveChangeButton: HTMLButtonElement | null = document.querySelector('.save');
        const changeSaveButton: HTMLButtonElement | null = document.querySelector('.change');
        if (changeSaveButton) {
            changeSaveButton.addEventListener('click', async () => {
                this.getVersion();
                App.accessToken = null;
                App.accessToken = await getCustomerToken(this.getEmailUser() as string, this.getPassUser() as string);
                if (App.accessToken) {
                    const newInfoUser = await updateCustomerProfile(this.getNewInfo());
                    if (newInfoUser) {
                        localStorage.removeItem('user');
                        localStorage.setItem('user', JSON.stringify(newInfoUser));
                        this.fillInputs();
                        this.showBillingAddress();
                        this.showShippingAddress();
                        const form: HTMLDivElement | null = document.querySelector('.aregistration');
                        const inputs = Array.from(form!.querySelectorAll('input'));
                        inputs.forEach((x) => {
                            const item = x;
                            item.disabled = true;
                        });
                        changeSaveButton.disabled = true;
                        saveChangeButton!.disabled = false;
                        this.getNameUser();
                    }
                }
            });
        }
    }

    private getNewInfo(): UpdatedCustomerData {
        const billingDiv: HTMLDivElement | null = document.querySelector('.abilling_address');
        const postalCodeBilling: HTMLInputElement | null = billingDiv!.querySelector(
            '.ainput_postal_code'
        ) as HTMLInputElement;
        const streetBilling: HTMLInputElement | null = billingDiv!.querySelector('.ainput_street') as HTMLInputElement;
        const houseBilling: HTMLInputElement | null = billingDiv!.querySelector(
            '.ainput_num_house'
        ) as HTMLInputElement;
        const apartmentBilling: HTMLInputElement | null = billingDiv!.querySelector(
            '.ainput_apartment'
        ) as HTMLInputElement;
        const shippingDiv: HTMLDivElement | null = document.querySelector('.ashipping_address');
        const postalCodeShipping: HTMLInputElement | null = shippingDiv!.querySelector(
            '.ainput_postal_code'
        ) as HTMLInputElement;
        const streetShipping: HTMLInputElement | null = shippingDiv!.querySelector(
            '.ainput_street'
        ) as HTMLInputElement;
        const houseShipping: HTMLInputElement | null = shippingDiv!.querySelector(
            '.ainput_num_house'
        ) as HTMLInputElement;
        const apartmentShipping: HTMLInputElement | null = shippingDiv!.querySelector(
            '.ainput_apartment'
        ) as HTMLInputElement;
        const firstName: HTMLInputElement | null = document.querySelector('.aname_input');
        const lastName: HTMLInputElement | null = document.querySelector('.ainput_basename');
        const email: HTMLInputElement | null = document.querySelector('.ainput_email');
        const birthday: HTMLInputElement | null = document.querySelector('.ainput_birthday');
        const updatedCustomerData: UpdatedCustomerData = {
            version: this.getVersion()!,
            actions: [
                {
                    action: 'setFirstName',
                    firstName: firstName!.value,
                },
                {
                    action: 'setLastName',
                    lastName: lastName!.value,
                },
                {
                    action: 'changeEmail',
                    email: email!.value,
                },
                {
                    action: 'setDateOfBirth',
                    dateOfBirth: birthday!.value,
                },
                {
                    action: 'changeAddress',
                    addressId: this.getBillingId() as string,
                    address: {
                        streetName: streetBilling.value,
                        apartment: apartmentBilling.value,
                        streetNumber: houseBilling.value,
                        postalCode: postalCodeBilling.value,
                        city: 'Гомель',
                        country: 'BY',
                    },
                },
                {
                    action: 'changeAddress',
                    addressId: this.getShippingId() as string,
                    address: {
                        streetName: streetShipping.value,
                        apartment: apartmentShipping.value,
                        streetNumber: houseShipping.value,
                        postalCode: postalCodeShipping.value,
                        city: 'Гомель',
                        country: 'BY',
                    },
                },
            ],
        };
        return updatedCustomerData;
    }

    private getVersion() {
        let userInfo: string | null | UserInfo = localStorage.getItem('user');
        let version;
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            if ((userInfo as UserInfo).customer) {
                version = (userInfo as UserInfo).customer!.version;
            } else {
                version = (userInfo as UserInfo).version;
            }
        }
        return version;
    }

    private getBillingId() {
        let userInfo: string | null | UserInfo = localStorage.getItem('user');
        let id;
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            if ((userInfo as UserInfo).customer) {
                id = (userInfo as UserInfo).customer!.billingAddressIds![0];
            } else {
                id = (userInfo as UserInfo).billingAddressIds![0];
            }
        }
        return id;
    }

    private getShippingId() {
        let userInfo: string | null | UserInfo = localStorage.getItem('user');
        let id;
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            if ((userInfo as UserInfo).customer) {
                id = (userInfo as UserInfo).customer!.shippingAddressIds![0];
            } else {
                id = (userInfo as UserInfo).shippingAddressIds![0];
            }
        }
        return id;
    }

    private getEmailUser() {
        let userInfo: string | null | UserInfo = localStorage.getItem('user');
        let email;
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            if ((userInfo as UserInfo).customer) {
                email = (userInfo as UserInfo).customer!.email;
            } else {
                email = (userInfo as UserInfo).email;
            }
        }
        return email;
    }

    private getPassUser() {
        let userInfo: string | null | UserInfo = localStorage.getItem('pass');
        let pass;
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            pass = userInfo;
        }
        return pass;
    }

    private changeInputs() {
        this.changeFirstName();
        this.changeLastName();
        this.changeEmail();
        this.changePassword();
        this.changeBirthday();
        this.changeAddresses();
    }

    public getNameUser() {
        const userInfo: UserInfo | null = JSON.parse(localStorage.getItem('user') || 'null');
        if (userInfo) {
            console.log(123);
            const userLink: HTMLElement | null = document.querySelector('.header-user-name');
            if (userLink) {
                if (userInfo.customer) {
                    userLink.innerHTML = `${userInfo.customer.firstName} ${userInfo.customer.lastName}`;
                } else if (userInfo.firstName && userInfo.lastName) {
                    userLink.innerHTML = `${userInfo.firstName} ${userInfo.lastName}`;
                }
            }
        }
    }

    public run() {
        this.preventDefaultForm();
        this.showShippingAddressBlock();
        this.fillInputs();
        this.showBillingAddress();
        this.showShippingAddress();
        this.showPassword();
        this.changeInputs();
        this.saveChanges();
        this.changeInfo();
        this.getNameUser();
    }
}
