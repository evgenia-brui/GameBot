// Генерация случайного числа
const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// Проверка на число
const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

const startGame = () => {
    let guessNumber = randomInteger(1, 100); // Генерируем число
    let userNumber; // Введенное число игроком

    console.log(guessNumber);

    const guessing = () => {
        while (true) {
            userNumber = prompt('Угадай число от 1 до 100');
            if (userNumber === null) break;
            if (guessNumber == userNumber) {
                alert('Вы угадали!');
                break;
            }
            if (!isNumber(userNumber)) {
                alert('Введи число!');
                continue;
            }
            if (guessNumber < userNumber) {
                alert('Загаданное число меньше');
            } else {
                alert('Загаданное число больше');
            }
        }
    };

    guessing();
    console.dir(guessing);
};

startGame();