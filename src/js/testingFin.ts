export default function validateValueOnInput(input: HTMLInputElement): string | null {
    console.log(input.value);
    const valueInput: string = input.value;
    const pattern = /^[A-Za-z0-9]+$/;
    if (pattern.test(valueInput)) {
        if (valueInput.length > 5) {
            return valueInput;
        }
    }
    return null;
}

// module.exports = validateValueOnInput;
