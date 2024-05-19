import { isValidEmail } from '../utils/functions/validation-loginpage';
import { validationOnInputLogin } from '../utils/functions/validation-registration';

describe('validationOnInputLogin', () => {
    let mockEmailInput: HTMLInputElement;
    let mockErrorName: HTMLParagraphElement;

    beforeEach(() => {
        mockEmailInput = document.createElement('input');
        mockErrorName = document.createElement('p');
        mockErrorName.classList.add('login_error');
        document.body.appendChild(mockErrorName);
    });

    afterEach(() => {
        document.body.removeChild(mockErrorName);
    });

    it('should return true for a valid email address', () => {
        mockEmailInput.value = 'test@example.com';
        const isValid = validationOnInputLogin(mockEmailInput);
        expect(isValid).toBe(true);
        expect(mockErrorName.textContent).toBe('');
    });

    it('should return false and set the error message for an email address without a domain', () => {
        mockEmailInput.value = 'test@';
        const isValid = validationOnInputLogin(mockEmailInput);
        expect(isValid).toBe(false);
        expect(mockErrorName.textContent).toBe('Укажите доменную зону com или ru');
    });

    it('should return false and set the error message for an email address without an @ symbol', () => {
        mockEmailInput.value = 'testexample.com';
        const isValid = validationOnInputLogin(mockEmailInput);
        expect(isValid).toBe(false);
        expect(mockErrorName.textContent).toBe('Необходимо использовать @');
    });

    it('should return false and set the error message for an email address with invalid characters', () => {
        mockEmailInput.value = 'test@example_com';
        const isValid = validationOnInputLogin(mockEmailInput);
        expect(isValid).toBe(false);
        expect(mockErrorName.textContent).toBe('Допустимы только символы латиницы и цифры');
    });
});

describe('isValidEmail', () => {
    let mockInputEmail: HTMLInputElement;
    let mockErrorText: HTMLElement;
    let mockErrorsBox: HTMLElement;

    beforeEach(() => {
        mockInputEmail = document.createElement('input');
        mockErrorText = document.createElement('div');
        mockErrorText.classList.add('error-email');
        mockErrorsBox = document.createElement('div');
        mockErrorsBox.classList.add('errorsbox-email');
        document.body.appendChild(mockErrorText);
        document.body.appendChild(mockErrorsBox);
    });

    afterEach(() => {
        document.body.removeChild(mockErrorText);
        document.body.removeChild(mockErrorsBox);
    });

    it('should return true for a valid email address', () => {
        mockInputEmail.value = 'test@example.com';
        const isValid = isValidEmail(mockInputEmail);
        expect(isValid).toBe(true);
        expect(mockErrorText.textContent).toBe('');
        expect(mockErrorsBox.style.visibility).toBe('hidden');
    });

    it('should return false and set the error message for an email address without an @ symbol', () => {
        mockInputEmail.value = 'testexample.com';
        const isValid = isValidEmail(mockInputEmail);
        expect(isValid).toBe(false);
        expect(mockErrorText.textContent).toBe('Адрес должен содержать символ "@"');
        expect(mockErrorsBox.style.visibility).toBe('visible');
    });

    it('should return false and set the error message for an email address without a domain', () => {
        mockInputEmail.value = 'test@';
        const isValid = isValidEmail(mockInputEmail);
        expect(isValid).toBe(false);
        expect(mockErrorText.textContent).toBe('Адрес должен содержать доменное имя');
        expect(mockErrorsBox.style.visibility).toBe('visible');
    });

    it('should return false and set the error message for an email address with an invalid format', () => {
        mockInputEmail.value = 'test.example.com';
        const isValid = isValidEmail(mockInputEmail);
        expect(isValid).toBe(false);
        expect(mockErrorText.textContent).toBe(`Адрес должен содержать символ "@"`);
        expect(mockErrorsBox.style.visibility).toBe('visible');
    });

    it('should return false and set the error message for an email address with leading or trailing spaces', () => {
        mockInputEmail.value = '  test@example.com  ';
        const isValid = isValidEmail(mockInputEmail);
        expect(isValid).toBe(false);
        expect(mockErrorText.textContent).toBe('Адрес не должен содержать пробелы в начале и в конце');
        expect(mockErrorsBox.style.visibility).toBe('visible');
    });
});
