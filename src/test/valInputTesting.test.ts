import validateValueOnInput from '../js/testingFin';

describe('validateValueOnInput', () => {
    it('should return the value if it consists of alphanumeric characters and has a length greater than 5', () => {
        const input = document.createElement('input');
        input.value = 'abc123';
        expect(validateValueOnInput(input)).toBe('abc123');
    });

    it('should return null if the value does not consist of alphanumeric characters', () => {
        const input = document.createElement('input');
        input.value = 'abc@123';
        expect(validateValueOnInput(input)).toBeNull();
    });

    it('should return null if the value has a length less than or equal to 5', () => {
        const input = document.createElement('input');
        input.value = 'abc12';
        expect(validateValueOnInput(input)).toBeNull();
    });
});
