
const passwordOutput = document.querySelector('input[type="text"]');
const lowercaseCheckbox = document.querySelectorAll('input[type="checkbox"]')[0];
const uppercaseCheckbox = document.querySelectorAll('input[type="checkbox"]')[1];
const numbersCheckbox = document.querySelectorAll('input[type="checkbox"]')[2];
const specialCharsCheckbox = document.querySelectorAll('input[type="checkbox"]')[3];
const generateButton = document.querySelector('button[type="button"]');

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

function generatePassword() {
    let characterPool = '';
    let password = '';

    if (lowercaseCheckbox.checked) characterPool += lowercase;
    if (uppercaseCheckbox.checked) characterPool += uppercase;
    if (numbersCheckbox.checked) characterPool += numbers;
    if (specialCharsCheckbox.checked) characterPool += specialChars;

    if (characterPool === '') {
        passwordOutput.value = 'Please select at least one option';
        return;
    }
    const passwordLength = 12;
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    passwordOutput.value = password;
}
generateButton.addEventListener('click', generatePassword);
