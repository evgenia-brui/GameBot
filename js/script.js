// Генерация случайного числа
const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// Проверка на число
const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

const startGame = () => {
    let guessNumber = randomInteger(1, 100); // Генерируем число
    let userNumber; // Введенное число игроком
    let trying = 10; // Количество попыток

    console.log(guessNumber);

    const guessing = () => {
        while (true) {
            userNumber = prompt('Угадай число от 1 до 100');
            if (userNumber === null) {
                alert('Эх, а ведь могли бы и еще поиграть.. :(');
                break;
            }
            if (guessNumber == userNumber) {
                if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) startGame();
                break;
            }
            if (!isNumber(userNumber)) {
                alert('Введи число!');
                continue;
            }
            trying--;
            if (trying == 0) {
                if (confirm('Попытки закончились, хотите сыграть еще?')) startGame();
                break;
            }
            if (guessNumber < userNumber) {
                alert('Загаданное число меньше, осталось попыток ' + trying);
            } else {
                alert('Загаданное число больше, осталось попыток ' + trying);
            }
        }
    };

    guessing();
    console.dir(guessing);
};

startGame();