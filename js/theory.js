"use strict";

// if (4 == 3) {
//     console.log("Yes");
// }else {
//     console.log("No");
// }


// const num = 59;

// // (num == 6) ? console.log('True') : console.log('False');

// switch (num) {
//     case 49:
//         console.log("No");
//         break;
//     case 59:
//         console.log("No");
//         break;
//     case 50:
//         console.log("Yes");
//         break;
//     default:
//         console.log("Sorry");
//         break;
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }while (num < 55);

// for (let num = 50; num <= 60; num++) {
//     if (num === 55) {
//         continue;
//     }else if (num === 58) {
//         break;
//     }
//     console.log(num);
// }

// let num = 10;
//* function declaration
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 30;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// let a = calc(5, 21);
// console.log(a);

// function ret() {
//     let num = 51;
//     if (num == 50) {
//         num = num / 2;
//     }else {
//         num = num * 2;
//     }
//     return num;
// }

// let anotherNum = ret();
// console.log(anotherNum);

//* function expression
// const logger = function() {
//     console.log("hello");
// };

// logger();

//* стрелочные функции
// const calculate = (a,b) => {
//     return a + b;
// };

// console.log(calculate(2,3));



function calculator() {
    let greet = prompt("Добро пожаловать в импровизированный калькулятор!\n"  +
                       "Нажмите +, чтобы сложить;\n" + 
                       "-, чтобы вычесть;\n" +
                       "*, чтобы умножить;\n" +
                       "/, чтобы поделить;\n" +
                       "**, чтобы возвести в степень;", "");

    const multiply = function () {
        alert("Введите два числа чтобы умножить.");
        let a = +prompt("Первое число:", ""),
            b = +prompt("Второе число:", ""),
            c = a * b;
        alert("Ваш результат: " + c);
    };
    const divide = function () {
        alert("Введите два числа чтобы разделить.");
        let a = +prompt("Первое число:", ""),
            b = +prompt("Второе число:", ""),
            c = a / b;
        alert("Ваш результат: " + c);
    };
    const fold = function () {
        alert("Введите два числа чтобы сложить.");
        let a = +prompt("Первое число:", ""),
            b = +prompt("Второе число:", ""),
            c = a + b;
        alert("Ваш результат: " + c);
    };
    const deduct = function () {
        alert("Введите два числа чтобы вычесть.");
        let a = +prompt("Первое число:", ""),
            b = +prompt("Второе число:", ""),
            c = a - b;
        alert("Ваш результат: " + c);
    };
    const stage = function () {
        alert("Введите два числа чтобы возвести в степень.");
        let a = +prompt("Возводимое число:", ""),
            b = +prompt("Степень:", ""),
            c = a ** b;
        alert("Ваш результат: " + c);
    };
    for (let i = 0; i < 1; i++) {
        if (greet == "*") {
            multiply();
        }else if (greet == "/") {
            divide();
        }else if (greet == "+") {
            fold();
        }else if (greet == "-") {
            deduct();
        }
        else if (greet == "**") {
            stage();
        }
        let yet = +prompt("Хотите еще что-то посчитать?(1 - да, 2 - нет)");
        if (yet == 1) {
            greet = prompt("Выберите знак: *, /, +, -");
            i--;
        }else {
            alert("Пака лалка(.Y.)");
            i = 1;
        }
    }
}

//* callback функции
// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done() {
//     console.log("Я прошел этот урок!"); 
// }

// learnJS('JavaScript', done);


//* объекты, деструктуризация объектов
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     // создадим метод
//     makeTest: function () {
//         console.log('test');
//     }
// };
// вызовем метод
// options.makeTest();

// деструктурируем элементы
// const {border, bg} = options.colors;// вытащили 2 ключа из объекта colors
// console.log(border);// выводим значение ключа border

// console.log(options.name);

// delete options.name;

// console.log(options);
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }
// console.log(Object.keys(options).length);


//* массивы и псевдомассивы
// const arr = [1, 44, 8, 55, 6, 12];

// arr.pop();
// console.log(arr);
// arr.push('afsasdfgds');
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products.join("; "));
// console.log(arr.sort(sortedNums));

// function sortedNums(a, b) {
//     return a - b;
// }


//* передача по ссылке или по значению, оператор Spread
// function copy (mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 4,
//     b: 7,
//     c: 33,
//     d: {
//         x: 12,
//         y: 22,
//     },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 90;

// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     g: 11,
//     e: 13,
// };

// console.log(Object.assign(numbers, add));

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();
// newArr[1] = 'sdfs';

// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'twich', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'telegramm'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 7, 34];
// log(...num);

// const object = {
//     one: 1,
//     two: 2,
// };
// const newObject = {...object};
// newObject.one = 3;
// console.log(object);
// console.log(newObject);


//* ООП и прототипно-ориентированное наследование
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     },
// };

// const john = Object.create(soldier);

// const john = {
//     health: 100,
// };

// john.health = 100;
// john.skill = 500;

// john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);

// console.log(john);
// console.log(john.armor);
// john.sayHello();


// const text = document.getElementById('git'),// Ищем по документу
//       btns = document.getElementsByTagName('button'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),// Ищем конкретно у родителя wrapper
//       firstHeart = wrapper.querySelector('.heart');// Ищем конкретно у родителя wrapper

// text.style.cssText = "background-color: #0026ff; width: 400px;";

// hearts.forEach(item => {
//     item.style.cssText = "border: 2px solid #8400ff; padding-top: 10px;";
// });

// const div = document.createElement('div');
// div.classList.add('black');
// wrapper.append(div);
// div.innerHTML = "<h3>Hello World!</h3>";
// div.insertAdjacentHTML("beforeend", '<h4>Hello</h4>');

// hearts[0].before(div);
// hearts[0].after(div);

// btns[2].remove();

// hearts[1].replaceWith(btns[2]);
