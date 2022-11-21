/* 1 */
        /* let age = +prompt('Input age');
        if (age < 3) console.log('Child');
        else if (age > 11 && age < 19) console.log('teenager');
        else if (age > 17 && age < 61) console.log('adult');
        else if (age > 60) console.log('old'); */
        /* 2 */
        /* switch (+prompt('Input number from 1 to 9')){
            case 1: console.log('!');break;
            case 2: console.log('@');break;
            case 3: console.log('#');break;
            case 4: console.log('$');break;
            case 5: console.log('%');break;
            case 6: console.log('^');break;
            case 7: console.log('&');break;
            case 8: console.log('*');break;
            case 9: console.log('(');break;
        } */
        /* 3 */
        /*  let number, a, b, c;
        number = +prompt("Введите число от 100 до 999");
        a = Math.floor(number / 100);
        b = Math.floor(number / 10 % 10);
        c = number % 10;
        if (a == b || a == c || b == c) {
            alert(`В числе есть одинаковые цифры`);
        } else {
            alert(`В числе все цифры разные`);
        } */
        /* 4 */
        /* let year = +prompt('Input year');
        if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) console.log('Високосный'); 
        else console.log('Не високосный'); */
        /* 5 */
       /*  let palindrom = prompt('Input number');
        if (palindrom == palindrom.split("").reverse().join("")) console.log('palindrom');
        else console.log('not palindrom'); */
        /* 6 */
        /* let usd = +prompt('input count usd')
        switch(prompt('eur/uan/azn')){
            case 'eur': console.log(usd * 0.9723); break;
            case 'uan': console.log(usd * 36.77); break;
            case 'azn': console.log(usd * 1.70); break;
        } */
        /* 7 */
        /* let amount = +prompt('Input amount');
        if (amount >= 200 && amount < 300) console.log(amount - amount / 100 * 3);
        else if (amount >= 300 && amount <= 500) console.log(amount - amount / 100 * 5);
        else console.log(amount - amount / 100 * 7); */
        /* 8 */
        /* let l = +prompt('input l');
        let p = +prompt('input p');
        if (l / 2 / Math.PI <= p / 8) console.log('YES');
        else console.log('NO'); */
        /* 9 */
        /* let ball = 0;
        let t = +prompt('Столица Беларуси - ?\n 1) Москва \n 2) Минск \n 3) Алматы');
        if (t == 2) ball++;
        t = +prompt('Формула длины окружности - ?\n 1) 2пr \n 2) 2r \n 3) Sp');
        if (t == 1) ball++;
        t = +prompt('На что отвечает прилогательное - ?\n 1) Какой \n 2) Что \n 3) Где');
        if (t == 1) ball++;
        console.log(ball); */
        /* 10 */
        /* let y = +prompt('Input year');
        let m = +prompt('Input month');
        let d = +prompt('Input day');
        if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0){
            if (m == 2){
                if (d < 29) console.log(y,m,d+1);
                else console.log(y,m+1,1);
            } 
        }
        else{
            if (m == 2){
                if (d < 28) console.log(y,m,d+1);
                else console.log(y,m+1,1);
            } 
            else if (m == 12){
                if (d < 31)  console.log(y,m,d+1);
                else console.log(y+1,1,1);
            }
            else if (m % 2 == 1){
                if (d < 30) console.log(y,m,d+1);
                else console.log(y,m+1,1);
            } 
            else {
                if (d < 31) console.log(y,m,d+1);
                else console.log(y,m+1,1);
            } 
        } */