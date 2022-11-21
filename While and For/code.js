/* 1 */
/*const number = +prompt("Введите первое число диапазона: ");
const number_two = +prompt("Введите конечное число диапазона: ");
const d = number_two - number;
let summ = 0;

for (let i = 0; i < d; i++) {
    summ = summ + number + i;
};

alert(summ);*/

/* 2 */
/* let number = +prompt("Введите первое число: ");
let number_two = +prompt("Введите второе число: ");
let result;

while(number != number_two) {
    if(number > number_two) {
        number = number - number_two;
    }
    else {
        number_two = number_two - number;
    }
};

alert(number); */

/* 3 */
/* const number = +prompt("Введите число: ");
let d = 0;
let array = [];

for (i = 0; i < number; i++) {
    d++;
    if((number % d) == 0) {
        array[i] = d;
    }
};

alert(array); */

/* 4 */
/* let number = prompt("Введите число: ");

alert(number.length); */

/* 5 */
/* let array = [];
let plus = 0;
let minus = 0;
let nUll = 0;
let chet = 0;
let nechet = 0;

for (let i = 0; i < 10; i++) {
    array[i] = +prompt("Введите " + (i + 1) + "-е число: ");
}

for (let i = 0; i < 10; i++) {
    if (array[i] > 0) {
        plus++;
    }
    else if (array[i] == 0) {
        nUll++;
    }
    else {
        minus++;
    }

    if(array[i] % 2 == 0) {
        chet++;
    }
    else {
        nechet++;
    }
}

alert("Положительные: " + plus + ", отрицательные: " + minus + ", нули: " + nUll + ", чётные: " + chet + ", нечётные: " + nechet);
 */

/* 6 */
/* let number;
let number_two;
let sign;
let result;

while(true) {
    number = +prompt("Введите первое число: ");
    number_two = +prompt("Введите второе число: ");
    sign = prompt("Введите знак: ");

    if(sign == '+') {
        result = number + number_two;
    }
    else if(sign == '-') {
        result = number - number_two;
    }
    else if(sign == '*') {
        result = number * number_two;
    }
    else if(sign == '/') {
        result = number / number_two;
    }
    alert("Ответ: " + result);
    if(confirm("Хотите решить ещё пример?") == false) {
        break;
    }
} */

/* 7 */
/* let number = prompt("Введите число: ");
let a = +prompt("Введите цифру, на которую нужно сместить число: ");
let string = '';
let string_two = '';
for(let i = 0; i < number.length; i++) {
    if(i < a) {
        string += number[i];
    }
    else {
        string_two += number[i];
    }
}

alert(string_two + string); */

/* 8 */
/* let array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let i = 0;

while(true) {
    alert(array[i] + " - сегодняшний день.");
    if(confirm("Хотите увидеть следующий день недели?") == true) {
        i++;
    }
    else {
        break;
    }
} */

/* 9 */
/* let array = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

for(let i = 0; i < 9; i++) {
    for(let j = 1; j < 10; j++) {
        array[j][i] = array[i][0] * (j + 1);
    }
}

alert(array); */

/* 10 */



