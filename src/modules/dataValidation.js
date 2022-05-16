const dataValidation = () => {
    const calcItems = document.querySelectorAll('.calc-item');
    const inputName = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    const inputEmail = document.querySelectorAll('input[type="email"]');
    const inputTel = document.querySelectorAll('input[type="tel"]');
    const formBtns = document.querySelectorAll('form[name="user_form"] .form-btn');

    const numberRegexp = /\D/g;
    const nameRegexp = /[а-яё -]+$/gi;
    const emailRegexp = /^[-_.!~*']*([a-z\d][-_.!~*']?)*([a-z\d][-_.!~*']?)*@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-z\-\d]+\.)+[a-z]{2,}))$/gi;
    const telRegexp = /^\+?(\d{1,3})?[- .]?\(?\d{2,3}\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;


    formBtns.forEach(formBtn => {
        formBtn.addEventListener('click', (event) => {
            event.preventDefault();

            inputName.forEach(name => {
                if (nameRegexp.test(name.value) === false) {
                    name.value = '';
                    name.style.border = '2px solid red';
                } else {
                    name.style.border = '';
                }
            });

            inputEmail.forEach(email => {
                if (emailRegexp.test(email.value) === false) {
                    email.value = '';
                    email.style.border = '2px solid red';
                } else {
                    email.style.border = '';
                }
            });

            inputTel.forEach(tel => {
                if (telRegexp.test(tel.value) === false) {
                    tel.value = '';
                    tel.style.border = '2px solid red';
                } else {
                    tel.style.border = '';
                }
            });
        });
    });

    for (let i = 1; i < calcItems.length; i++) {
        calcItems[i].addEventListener('input', (event) => {
            if (numberRegexp.test(calcItems[i].value) && calcItems[i].value !== '') {
                event.target.value = '';
                calcItems[i].style.border = '2px solid red';
            } else {
                calcItems[i].style.border = '';
            }
        });
    }

    inputMessage.addEventListener('input', (event) => {
        if (nameRegexp.test(inputMessage.value) === false) {
            event.target.value = '';
            inputMessage.style.border = '2px solid red';
        } else {
            inputMessage.style.border = '';
        }
    });
};

export default dataValidation;