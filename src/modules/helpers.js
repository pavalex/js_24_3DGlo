// anomate helper
const animate = ({timing, draw, duration}) => {

    let idInterval;
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            idInterval = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(idInterval);
        }

    });
};

// validate helper
const validateData = () => {
    const calcItems = document.querySelectorAll('.calc-block input[type="text"]');
    const inputName = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    const inputEmail = document.querySelectorAll('input[type="email"]');
    const inputTel = document.querySelectorAll('input[type="tel"]');

    const numberRegexp = /\D/g;
    const txtRegexp = /[^а-яё -]+$/gi;
    const emailRegexp = /[^a-z\d@-_.!~*']+$/gi;
    const telRegexp = /[^\d()-]+$/g;


    for (let i = 0; i < inputName.length; i++) {
        inputName[i].addEventListener('input', () => {
            inputName[i].value = inputName[i].value.replace(txtRegexp, '').trimStart();

            if (inputName[i].value && inputName[i].classList.contains('error')) {
                inputName[i].classList.remove('error');
            }
        });
    }

    for (let i = 0; i < inputEmail.length; i++) {
        inputEmail[i].addEventListener('input', () => {
            inputEmail[i].value = inputEmail[i].value.replace(emailRegexp, '').trimStart();

            if (inputEmail[i].value && inputEmail[i].classList.contains('error')) {
                inputEmail[i].classList.remove('error');
            }
        });
    }

    for (let i = 0; i < inputTel.length; i++) {
        inputTel[i].addEventListener('input', () => {
            inputTel[i].value = inputTel[i].value.replace(telRegexp, '');

            if (inputTel[i].value && inputTel[i].classList.contains('error')) {
                inputTel[i].classList.remove('error');
            }
        });
    }

    for (let i = 0; i < calcItems.length; i++) {
        calcItems[i].addEventListener('input', () => calcItems[i].value = calcItems[i].value.replace(numberRegexp, ''));
    }

    inputMessage.addEventListener('input', () => inputMessage.value = inputMessage.value.replace(txtRegexp, '').trimStart());
};

export {animate};
export {validateData};