const root = document.querySelector('#root');

const currentDate = new Date();
const hours = currentDate.getHours();
const day = currentDate.toLocaleDateString('ru', {weekday: 'long'});
const time = currentDate.toLocaleTimeString('en');
const nextDate = new Date("1 january 2023");
const dateNow = new Date().getTime();

const words = function (number, arr) {
    let count = Math.abs(number) % 100;
    let count1 = count % 10;

    switch (true) {
        case (count > 10 && count < 20):
            return `${number} ${arr[2]}`;

        case (count1 > 1 && count1 < 5):
            return `${number} ${arr[1]}`;

        case (count1 === 1):
            return `${number} ${arr[0]}`;

        default:
            return `${number} ${arr[2]}`;
    }
};

const getGreeting = () => {
    const greetingElement = document.createElement('div');
    greetingElement.classList.add('greeting');

    switch (true) {
        case (hours >= 5 && hours <= 11):
            greetingElement.textContent = 'Доброе утро';
            break;
        case (hours >= 11 && hours < 16):
            greetingElement.textContent = 'Добрый день';
            break;
        case (hours >= 16 && hours <= 23):
            greetingElement.textContent = 'Добрый вечер';
            break;
        case (hours >= 0 && hours < 5):
            greetingElement.textContent = 'Доброй ночи';
            break;
    }

    root.append(greetingElement);
};

const getDay = () => {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = `Сегодня: ${day.charAt(0).toUpperCase() + day.slice(1)}`;
    root.append(dayElement);
};

const getTime = () => {
    const timeElement = document.createElement('div');
    timeElement.classList.add('time');
    timeElement.textContent = `Текущее время: ${time}`;
    root.append(timeElement);
};

const getNewYear = () => {
    const timeRemaining = (nextDate - dateNow) / 1000;
    const daysToNewYear = words(Math.floor(timeRemaining / 60 / 60 / 24), ['день', 'дня', 'дней']);

    const newYear = document.createElement('div');
    newYear.classList.add('newYear');
    newYear.textContent = `До нового года осталось ${daysToNewYear}`;
    root.append(newYear);
};

getGreeting();
getDay();
getTime();
getNewYear();





