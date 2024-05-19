import { isValidPass } from '../utils/functions/validation-loginpage';
import { validationOnInputPassword } from '../utils/functions/validation-registration';

describe('isValidPass', () => {
    let inputPass: HTMLInputElement;
    let errorText: HTMLElement | null;
    let errorsBox: HTMLElement | null;

    beforeEach(() => {
        // Set up the DOM elements for testing
        inputPass = document.createElement('input');
        errorText = document.createElement('div');
        errorText.classList.add('error-pass');
        errorsBox = document.createElement('div');
        errorsBox.classList.add('errorsbox-pass');
        document.body.appendChild(errorText);
        document.body.appendChild(errorsBox);
    });

    afterEach(() => {
        // Clean up the DOM elements
        document.body.removeChild(errorText!);
        document.body.removeChild(errorsBox!);
    });

    test('should return true for a valid password', () => {
        inputPass.value = 'Password123!';
        expect(isValidPass(inputPass)).toBe(true);
    });

    test('should return false for a password without an uppercase letter', () => {
        inputPass.value = 'password123!';
        expect(isValidPass(inputPass)).toBe(false);
    });

    test('should return false for a password without a lowercase letter', () => {
        inputPass.value = 'PASSWORD123!';
        expect(isValidPass(inputPass)).toBe(false);
    });

    test('should return false for a password without a digit', () => {
        inputPass.value = 'PasswordABC!';
        expect(isValidPass(inputPass)).toBe(false);
    });

    test('should return false for a password without a special symbol', () => {
        inputPass.value = 'Password123';
        expect(isValidPass(inputPass)).toBe(false);
    });

    test('should return false for a password with leading or trailing spaces', () => {
        inputPass.value = ' Password123! ';
        expect(isValidPass(inputPass)).toBe(false);
    });

    test('should return false for a password that is too short', () => {
        inputPass.value = 'Pass1!';
        expect(isValidPass(inputPass)).toBe(false);
    });
});

describe('validationOnInputPassword', () => {
    let passwordInput: HTMLInputElement;
    let errorName: HTMLParagraphElement;

    beforeEach(() => {
        // Set up the DOM elements for testing
        passwordInput = document.createElement('input');
        errorName = document.createElement('p');
        errorName.classList.add('password_error');
        document.body.appendChild(errorName);
    });

    afterEach(() => {
        // Clean up the DOM elements
        document.body.removeChild(errorName);
    });

    test('should return true for a valid password', () => {
        passwordInput.value = 'Password123!';
        expect(validationOnInputPassword(passwordInput)).toBe(true);
        expect(errorName.textContent).toBe('');
    });

    test('should return false and display an error for a password without an uppercase letter', () => {
        passwordInput.value = 'password123!';
        expect(validationOnInputPassword(passwordInput)).toBe(false);
        expect(errorName.textContent).toBe('Необходимо использовать заглавную букву');
    });

    test('should return false and display an error for a password without a lowercase letter', () => {
        passwordInput.value = 'PASSWORD123!';
        expect(validationOnInputPassword(passwordInput)).toBe(false);
        expect(errorName.textContent).toBe('Необходимо использовать строчную букву');
    });

    test('should return false and display an error for a password without a digit', () => {
        passwordInput.value = 'PasswordABC!';
        expect(validationOnInputPassword(passwordInput)).toBe(false);
        expect(errorName.textContent).toBe('Необходимо использовать цифру');
    });

    test('should return false and display an error for a password without a special symbol', () => {
        passwordInput.value = 'Password123';
        expect(validationOnInputPassword(passwordInput)).toBe(false);
        expect(errorName.textContent).toBe('Необходимо использовать специальный символ');
    });

    test('should return false and display an error for a password that is too short', () => {
        passwordInput.value = 'Pass1!';
        expect(validationOnInputPassword(passwordInput)).toBe(false);
        expect(errorName.textContent).toBe('Необходимо использовать не менее 8 символов');
    });

    test('should return false and display an error for a password with invalid characters', () => {
        passwordInput.value = 'Пароль123$%';
        expect(validationOnInputPassword(passwordInput)).toBe(false);
        expect(errorName.textContent).toBe('Допустимы только символы латиницы, цифры, символы');
    });
});
