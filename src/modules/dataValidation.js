const dataValidation = () => {
    const calcItems = document.querySelectorAll('.calc-item');
    const inputName = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    const inputEmail = document.querySelectorAll('input[type="email"]');
    const inputTel = document.querySelectorAll('input[type="tel"]');

    const numberRegexp = /\D/g;
    const txtRegexp = /[^а-яё -]+$/gi;
    const emailRegexp = /[^a-z\d@-_.!~*']+$/gi;
    const telRegexp = /[^\d()-]+$/g;


    for (let i = 0; i < inputName.length; i++) {
        inputName[i].addEventListener('input', () => inputName[i].value = inputName[i].value.replace(txtRegexp, '').trimStart());
    }

    for (let i = 0; i < inputEmail.length; i++) {
        inputEmail[i].addEventListener('input', () => inputEmail[i].value = inputEmail[i].value.replace(emailRegexp, '').trimStart());
    }

    for (let i = 0; i < inputTel.length; i++) {
        inputTel[i].addEventListener('input', () => inputTel[i].value = inputTel[i].value.replace(telRegexp, ''));
    }

    for (let i = 0; i < calcItems.length; i++) {
        calcItems[i].addEventListener('input', () => calcItems[i].value = calcItems[i].value.replace(numberRegexp, ''));
    }

    inputMessage.addEventListener('input', () => inputMessage.value = inputMessage.value.replace(txtRegexp, '').trimStart());
};

export default dataValidation;