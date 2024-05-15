export function validationOnInputName(inputName: HTMLInputElement) {
    const errorName: HTMLParagraphElement = document.querySelector('.name_error') as HTMLParagraphElement;
    const patternOnCyrillicAlphabetAndNumbers: RegExp = /^[А-ЯЁа-яё0-9]+$/;
    const patternOnUppercaseCyrillicAlphabet: RegExp = /^[А-ЯЁ]/;
    const countOnMinimalLengthOnName: number = 3;
    let isValid = false;

    if (patternOnCyrillicAlphabetAndNumbers.test(inputName.value)) {
        errorName.textContent = '';
        if (patternOnUppercaseCyrillicAlphabet.test(inputName.value)) {
            errorName.textContent = '';
            if (inputName.value.length > countOnMinimalLengthOnName) {
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
    const patternOnCyrillicAlphabet: RegExp = /^[А-ЯЁа-яё]+$/;
    const patternOnUppercaseCyrillicAlphabet: RegExp = /^[А-ЯЁ]/;
    const countOnMinimalLengthOnBasename: number = 4;
    let isValid = false;

    if (patternOnCyrillicAlphabet.test(basename.value)) {
        errorName.textContent = '';
        if (patternOnUppercaseCyrillicAlphabet.test(basename.value)) {
            errorName.textContent = '';
            if (basename.value.length > countOnMinimalLengthOnBasename) {
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
    const patternOnEnglishAlphabetAndNumbers: RegExp = /^[A-Za-z-0-9@.]+$/;
    const patternAtSymbol: RegExp = /@/;
    const patternOnDomainName: RegExp = /\.(com|ru)$/;
    let isValid = false;

    if (patternOnEnglishAlphabetAndNumbers.test(emailInput.value)) {
        errorName.textContent = '';
        if (patternAtSymbol.test(emailInput.value)) {
            errorName.textContent = '';
            if (patternOnDomainName.test(emailInput.value)) {
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
    const patternOnEnglishAlphabetAndNumbersAndSymbols: RegExp = /^[A-Za-z-0-9!@#$%^&*-.]+$/;
    const patternOnUppercaseEnglishAlphabet: RegExp = /[A-Z]/;
    const patternOnLowercaseEnglishAlphabet: RegExp = /[a-z]/;
    const patternOnNumbers: RegExp = /[0-9]/;
    const patternOnSpecialSymbols: RegExp = /[!@#$%^&*-.]/;
    let isValid = false;

    if (patternOnEnglishAlphabetAndNumbersAndSymbols.test(passwordInput.value)) {
        errorName.textContent = '';
        if (patternOnUppercaseEnglishAlphabet.test(passwordInput.value)) {
            errorName.textContent = '';
            if (patternOnLowercaseEnglishAlphabet.test(passwordInput.value)) {
                errorName.textContent = '';
                if (patternOnNumbers.test(passwordInput.value)) {
                    errorName.textContent = '';
                    if (patternOnSpecialSymbols.test(passwordInput.value)) {
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
    const maxDate: Date = new Date('2010-01-01');
    let isValid = false;

    const enteredDate: Date = new Date(birthdayInput.value);
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
    const expectedPrefix: string = '2460';
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
    const patternOnCyrillicAlphabet: RegExp = /^[А-ЯЁа-яё]+$/;
    const patternOnUpperCaseCyrillicAlphabet: RegExp = /^[А-ЯЁ]/;
    const countOnMinimalLengthOnStreet: number = 4;
    let isValid = false;

    if (patternOnCyrillicAlphabet.test(streetInput.value)) {
        errorName.textContent = '';
        if (patternOnUpperCaseCyrillicAlphabet.test(streetInput.value)) {
            errorName.textContent = '';
            if (streetInput.value.length > countOnMinimalLengthOnStreet) {
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
    registrationblock.addEventListener('click', () => {
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
