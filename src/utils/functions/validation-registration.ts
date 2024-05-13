export function validationOnInputName(inputName: HTMLInputElement) {
    const errorName: HTMLParagraphElement = document.querySelector('.name_error') as HTMLParagraphElement;
    const pattern = /^[А-ЯЁа-яё0-9]+$/;
    const pattern2 = /^[А-ЯЁ]/;
    let isValid = false;

    console.log(inputName.value);
    if (pattern.test(inputName.value)) {
        errorName.textContent = '';
        if (pattern2.test(inputName.value)) {
            errorName.textContent = '';
            if (inputName.value.length > 3) {
                errorName.textContent = '';
                isValid = true;
            } else {
                errorName.textContent = 'Минимум 4 символа';
            }
        } else {
            errorName.textContent = 'Первый символ должен быть заглавной буквой';
        }
    } else {
        errorName.textContent = 'Допустимы символы кириллицы и цифры';
    }

    return isValid;
}

export function validationOnInputBaseName(basename: HTMLInputElement) {
    const errorName: HTMLParagraphElement = document.querySelector('.basename_error') as HTMLParagraphElement;
    const pattern = /^[А-ЯЁа-яё]+$/;
    const pattern2 = /^[А-ЯЁ]/;
    let isValid = false;

    console.log(basename.value);

    if (pattern.test(basename.value)) {
        errorName.textContent = '';
        if (pattern2.test(basename.value)) {
            errorName.textContent = '';
            if (basename.value.length > 4) {
                errorName.textContent = '';
                isValid = true;
            } else {
                errorName.textContent = 'Минимум 5 символов';
            }
        } else {
            errorName.textContent = 'Первый символ должен быть заглавной буквой';
        }
    } else {
        errorName.textContent = 'Допустимы только символы кириллицы';
    }

    return isValid;
}

export function validationOnInputLogin(emailInput: HTMLInputElement) {
    const errorName: HTMLParagraphElement = document.querySelector('.login_error') as HTMLParagraphElement;
    const pattern = /^[A-Za-z-0-9@.]+$/;
    const pattern2 = /@/;
    const pattern3 = /\.(com|ru)$/;
    let isValid = false;

    console.log(emailInput.value);
    if (pattern.test(emailInput.value)) {
        errorName.textContent = '';
        if (pattern2.test(emailInput.value)) {
            errorName.textContent = '';
            if (pattern3.test(emailInput.value)) {
                errorName.textContent = '';
                isValid = true;
            } else {
                errorName.textContent = 'Укажите доменную зону com или ru';
            }
        } else {
            errorName.textContent = 'Необходимо использовать @';
        }
    } else {
        errorName.textContent = 'Допустимы только символы латиницы и цифры';
    }
    return isValid;
}

export function validationOnInputPassword(passwordInput: HTMLInputElement) {
    const errorName: HTMLParagraphElement = document.querySelector('.password_error') as HTMLParagraphElement;
    const pattern = /^[A-Za-z-0-9!@#$%^&*-.]+$/;
    const pattern2 = /[A-Z]/;
    const pattern3 = /[a-z]/;
    const pattern4 = /[0-9]/;
    const pattern5 = /[!@#$%^&*-.]/;
    let isValid = false;

    console.log(passwordInput.value);
    if (pattern.test(passwordInput.value)) {
        errorName.textContent = '';
        if (pattern2.test(passwordInput.value)) {
            errorName.textContent = '';
            if (pattern3.test(passwordInput.value)) {
                errorName.textContent = '';
                if (pattern4.test(passwordInput.value)) {
                    errorName.textContent = '';
                    if (pattern5.test(passwordInput.value)) {
                        errorName.textContent = '';
                        if (passwordInput.value.length > 7) {
                            errorName.textContent = '';
                            isValid = true;
                        } else {
                            errorName.textContent = 'Необходимо использовать не менее 8 символов';
                        }
                    } else {
                        errorName.textContent = 'Необходимо использовать специальный символ';
                    }
                } else {
                    errorName.textContent = 'Необходимо использовать цифру';
                }
            } else {
                errorName.textContent = 'Необходимо использовать строчную букву';
            }
        } else {
            errorName.textContent = 'Необходимо использовать заглавную букву';
        }
    } else {
        errorName.textContent = 'Допустимы только символы латиницы, цифры, символы';
    }
    return isValid;
}

export function validationOnInputBirthday(birthdayInput: HTMLInputElement) {
    const errorName: HTMLParagraphElement = document.querySelector('.birthday_error') as HTMLParagraphElement;
    const maxDate = new Date('2010-01-01');
    let isValid = false;

    const enteredDate = new Date(birthdayInput.value);
    if (enteredDate > maxDate) {
        errorName.textContent = 'Дата рождения не может быть после 01-01-2010';
    } else {
        errorName.textContent = '';
        isValid = true;
    }

    return isValid;
}

export function validationOnInputPostalCode(postalCodeInput: HTMLInputElement) {
    const errorName: HTMLParagraphElement = document.querySelector('.postal_code_error') as HTMLParagraphElement;
    const expectedPrefix = '2460';
    const postalCodeLength: number = 6;
    let isValid = false;

    const enteredPostalCode = postalCodeInput.value.trim();

    if (enteredPostalCode.length === postalCodeLength && enteredPostalCode.startsWith(expectedPrefix)) {
        errorName.textContent = '';
        isValid = true;
    } else {
        errorName.textContent = 'Индекс не может быть меньше 246000 и не больше 246051';
    }

    return isValid;
}

export function validationOnInputStreet(streetInput: HTMLInputElement) {
    const errorName: HTMLParagraphElement = document.querySelector('.street_error') as HTMLParagraphElement;
    const pattern = /^[А-ЯЁа-яё]+$/;
    const pattern2 = /^[А-ЯЁ]/;
    let isValid = false;

    console.log(streetInput.value);

    if (pattern.test(streetInput.value)) {
        errorName.textContent = '';
        if (pattern2.test(streetInput.value)) {
            errorName.textContent = '';
            if (streetInput.value.length > 4) {
                errorName.textContent = '';
                isValid = true;
            } else {
                errorName.textContent = 'Минимум 5 символов';
            }
        } else {
            errorName.textContent = 'Первый символ должен быть заглавной буквой';
        }
    } else {
        errorName.textContent = 'Допустимы только символы кириллицы';
    }

    return isValid;
}

export function checkedOnField() {
    const registrationblock: HTMLInputElement = document.querySelector('.input_checkbox') as HTMLInputElement;
    const isChecked = registrationblock.checked;
    registrationblock.addEventListener('click', (event) => {
        console.log(event.target);
        const addressTitleAll: HTMLParagraphElement[] = Array.from(document.querySelectorAll('.address_title'));
        const billingAddress: HTMLDivElement = document.querySelector('.shipping_address') as HTMLDivElement;
        if (registrationblock.checked) {
            // Действия, если атрибут "checked" установлен
            addressTitleAll[0].style.display = 'none';
            billingAddress.style.display = 'none';
        } else {
            // Действия, если атрибут "checked" не установлен
            addressTitleAll.forEach((item) => {
                const currentItem = item;
                currentItem.style.display = 'block';
            });
            billingAddress.style.display = 'flex';
        }
    });
    return isChecked;
}
