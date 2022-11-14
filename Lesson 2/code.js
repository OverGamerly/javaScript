/* 1 */
/* if ('0') {
    alert('alert');
} */

/* 2 */
/* const string = prompt();
if (string == 'ECMAScript') {
    lert('Верно!')
}
else {
    alert('Не знаете? ECMAScript!');
} */

/* 3 */
/* const number = +prompt();
if (number > 0) {
    alert(1);
}
else if (number < 0) {
    alert(-1);
}
else {
    alert(0);
}
 */

/* 4 */
/* let a = 1;
let b = 1;
let result = a + b < 4 ? 'Мало' : 'Много';
alert(result); */

/* 5 */
/* let login = prompt();
let message = login == 'Сотрудник' ? 'Привет!' : login == 'Директор' ? 'Здравствуй!' : login == '' ? 'Нет логина' : ''; 
alert(message); */

/* 1.1 */
/* const action = confirm('Действие');
if (action == true) {
    alert('Подтверждено');
}
else {
    alert('Отменено');
} */

/* 1.2 */
/* const password = prompt('Введите пароль: ');
if (password == 'Step') {
    alert('Подтверждено');
}
else if (password == 'Web') {
    alert('Подтверждено');
}
else if (password == 'JavaScript') {
    alert('Подтверждено');
}
else {
    alert('Отменено');
} */

/* 1.3 */
/* const number = +prompt('Введите число:');
if(number <= 100 && number >= 0) {
    alert('' + number + ' - принадлежит');
}
else {
    alert('' + number + ' - не принадлежит');
} */

/* 1.4 */
/* const number_one = +prompt('Введите первое число: ');
const number_two = +prompt('Введите второе число: ');
if(number_one > number_two) {
    alert(number_one + '>' + number_two + '');
}
else if(number_two > number_one) {
    alert(number_one + '<' + number_two + '');
}
else if(number_one == number_two) {
    alert(number_one + '=' + number_two + '');
} */

/* 1.5 */
/* const number = +prompt('Введите число: ');
if(number >= 0 && number <= 100) {
    alert('' + number + ' принадлежит диапазону 0..100');
}
else if(number >= 101 && number <= 200) {
    alert('' + number + ' принадлежит диапазону 101..200');
}
else if(number >= 201 && number <= 300) {
    alert('' + number + ' принадлежит диапазону 201..300');
}
else {
    alert('' + number + ' ничему не пренадлежит');
} */

/* 1.6 */
/* const number = +prompt('Введите число: ');
switch(number) {
    case 1: alert('Единица'); break;
    case 2: alert('Двойка'); break;
    case 3: alert('Тройка'); break;
    case 4: alert('Четырре'); break;
    case 5: alert('Пять'); break;
    case 6: alert('Шесть'); break;
    case 7: alert('Семь'); break;
    case 8: alert('Восемь'); break;
    case 9: alert('Девять'); break;
    case 9: alert('Десять'); break;
} */
