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

console.log('Hello my team');

const img: HTMLImageElement = document.createElement('img');
img.setAttribute('src', './img/logo.png');
document.body.appendChild(img);

const input = document.createElement('input');
input.classList.add('input_login');
input.placeholder = 'Введите логин';
document.body.appendChild(input);

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'eCommerce Application';
document.body.appendChild(title);

const title2 = document.createElement('p');
title2.classList.add('basic-text');
title2.textContent = '2eCommerce Application';
document.body.appendChild(title2);

const button = document.createElement('button');
button.classList.add('button-basic');
// button.classList.add('active');
button.textContent = 'Click';
document.body.appendChild(button);

input.addEventListener('input', () => validateValueOnInput(input));
