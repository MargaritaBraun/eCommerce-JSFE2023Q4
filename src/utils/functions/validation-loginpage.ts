export function isValidEmail(inputEmail: HTMLInputElement): boolean {
    const errorText: HTMLElement | null = document.querySelector('.error-email');
    const errorsBox: HTMLElement | null = document.querySelector('.errorsbox-email');
    const emailText: string = inputEmail.value.trim();
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domain: string = emailText.split('@')[1];

    if (errorText) {
        if (!emailRegex.test(emailText)) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = 'Неверный формат почты';
            return false;
        }
        if (emailText !== inputEmail.value) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = 'Адрес не должен содержать пробелов';
            return false;
        }
        if (!emailText.includes('@')) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = 'Адрес должен содержать символ "@"';
            return false;
        }
        if (!domain.includes('.')) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = 'Адрес должен содержать доменное имя';
            return false;
        }
    }
    (errorsBox as HTMLElement).style.visibility = 'hidden';
    (errorText as HTMLElement).textContent = '';

    return true;
}

export function isValidPass(inputPass: HTMLInputElement): boolean {
    const errorText: HTMLElement | null = document.querySelector('.error-pass');
    const errorsBox: HTMLElement | null = document.querySelector('.errorsbox-pass');
    const minSymbol: number = 8;
    const inputText: string = inputPass.value.trim();
    const upperRegex: RegExp = /[A-Z]/;
    const lowerRegex: RegExp = /[a-z]/;
    const digitRegex: RegExp = /[0-9]/;
    const specialRegex: RegExp = /[!@#$%^&*-]/;

    if (errorText) {
        if (inputText.length < minSymbol) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = `Минимум ${minSymbol} символов`;
            return false;
        }
        if (!upperRegex.test(inputText)) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = 'Пароль должен содержать хотя бы одну заглавную букву';
            return false;
        }
        if (!lowerRegex.test(inputText)) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = 'Пароль должен содержать хотя бы одну строчную букву';
            return false;
        }

        if (!digitRegex.test(inputText)) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = 'Пароль должен содержать хотя бы одну цифру';
            return false;
        }

        if (!specialRegex.test(inputText)) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = 'Пароль должен содержать хотя бы один специальный символ';
            return false;
        }

        if (inputText !== inputPass.value) {
            (errorsBox as HTMLElement).style.visibility = 'visible';
            (errorText as HTMLElement).textContent = 'Пароль не должен содержать пробелы в начале или в конце';
            return false;
        }
    }
    (errorsBox as HTMLElement).style.visibility = 'hidden';
    (errorText as HTMLElement).textContent = '';

    return true;
}
