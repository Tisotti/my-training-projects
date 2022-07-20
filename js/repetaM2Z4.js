                           // ФУНКЦИИ
// Название отвечает на вопрос "что делает" то есть глагол
// функцию можно записать в переменную 
// const add = function name () {
    // тело функции
// }  - это функционально выражение
// функцию можно вызвать в произвольном месте ниже в коде
// что бы вызвать: имя функции + ()

// const add = function name() {
//     console.log('выполняется функция add');
// };

// add();

// ===============================================================================================================================================
// // у функции есть параметры и аргументы. 
// В()(парметры) локальные переменные для этой функции которые будут доступны только в этой функции
// const add = function name(x, y) {
//     console.log('выполняется функция add');
//     console.log(x);
//     console.log(y);
// };
// // а в вызове () (аргументы) - значемния для параметров
// add(2, 3);

// const add = function name(x, y) {
//     console.log('выполняется функция add');
//     const result = x + y;
//     console.log('x + y =', result);
// };
// add(2, 3);
// ===============================================================================================================================================
// функция как мясорубка что то принимает и что то возвращает при помощи result 
// const add = function name(x, y) {
//     console.log(x);
//     console.log(y);

//     // const result =  x + y;
//     // console.log('result =', result);
//     console.log('выполняется функция add');
//     return  x + y;
// };

// const r1 = add(2, 3);
// console.log('r1 =', r1);
// return полностью прекращает работу функции в том месте где стоит
// ===============================================================================================================================================
// return может быть и в середине
// const fn = function (value) {
//     console.log(1);

//     console.log(2);

//     if (value < 50) {
//         return 'Меньше чем 50 ';
//     } else {
//         return 'Больше чем 50';
//     }
// }

// console.log('Результат функции =', fn(10));

// console.log('Результат функции =', fn(100));
// ===============================================================================================================================================
                            //   Прпктика
                            // задача 1
// переписать задачу. Составить функцию подсчета суммы массива или трех или 150
// const carts = [54, 28, 105, 70, 92, 17, 120, 90, 100, 230, 310, 2];
// let total = 0;
// for (const cart of carts) {
//     total += cart;
// }
// console.log('Total = ', total);
// -------------------------------
// const calculateTotalPrice = function (items) {
//     console.log('items внутри функции =', items);

//     let total = 0;
//     for (const item of items) {
//          total += item;
//     }
//     return total
// } 
// const result1 = calculateTotalPrice([1, 2, 3]);
// console.log(result1);
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));
// ------------------------------------------------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]
// ----------------------------------------------------------------------------------------
                              //  Задача 3
            // Напиши функцию для поимка логина
      // если логина нет, то возвращает "пользователь не найден"
      // если логин есть возвращает вывести "пользователь найден"
// вариант 1 через for of
// const logins = ['no3name', 'mang0d0dj', 'k1w1dabs', 'pol1iskute'];
// const loginToFind = 'mang0d0dj';

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`
    
// console.log(message);

// const findLogin = function (allLogins, loginToFind) {
//   let messege = `Пользователь ${loginToFind} не найден`;

//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       messege = `Пользователь ${loginToFind} найден`;
//     }
//   }

//   return messege;
// };

// console.log(findLogin(logins, 'neNadoPaniki'));
// console.log(findLogin(logins, 'mang0d0dj'));
// console.log(findLogin(logins, 'vsePolu4itsya'));
// console.log(findLogin(logins, 'pol1iskute'));

// делаем модификацию кода 👇🏼👇🏼👇🏼

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден`;
//     }
//   };
  
//   return  `Пользователь ${loginToFind} не найден`;
   
// };

// console.log(findLogin(logins, 'neNadoPaniki'));
// console.log(findLogin(logins, 'mang0d0dj'));
// console.log(findLogin(logins, 'vsePolu4itsya'));
// console.log(findLogin(logins, 'pol1iskute'));

// вариант 2 короче тернанкик читается так:
// делвем перемнную 
// если все логины alllogins включают в себя логин который надо найти loginToFind 
// то в message записываем `Пользователь ${loginToFind} найден`
// если не включает то `Пользователь ${loginToFind} не найден`
// в нашем случае так: если true то на место тернанрника верется найден, если false то вернется не найден и сразу днлаем return
// схема тернарника 
// true ? 1 : 2; //1
// false ? 1 : 2; //2

// const logins = ['no3name', 'mang0d0dj', 'k1w1dabs', 'pol1iskute'];

// const findLogin = function (allLogins, loginToFind) {
//  return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`
  
// };

// console.log(findLogin(logins, 'neNadoPaniki'));
// console.log(findLogin(logins, 'mang0d0dj'));
// console.log(findLogin(logins, 'vsePolu4itsya'));
// console.log(findLogin(logins, 'pol1iskute'));

// ----------------------------------------------------------------------------------------------------------------------------------

// найти самое маленькое число в массиве 
// const numbers = [9, 8, 92, 17, 120, 19, 2, 100, 230, 12];
//  шаг 1 - объявить переменную для результата 
//  шаг 2 - за меньшее число взять первое значение массива 
//  шаг 3 - перебрать массив
//  шаг 4 - сравнить кажое следующее число с текущим если оно меньше то заменить
//                          Решение
// const numbers = [9, 8, 92, 17, 120, 19, 2, 100, 230, 12];
// // шаг 1 + шаг 2
// let smallestNumber = numbers[0]
// // шаг 3
// for (const number of numbers) {
// // шаг 4
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     } 
// }
// console.log('smallestNumber =', smallestNumber)

// Переписываем с функциями (параментр numbers, аргумент 3, 8, 12, -2, 15], возврат return smallestNumber; , тело функции)
// const findSmallesNumber = function (numbers) {
//     let smallestNumber = numbers[0]
//     for (const number of numbers) {
//         if (number < smallestNumber) {
//         smallestNumber = number;
//         } 
//     }

//     return smallestNumber;
// }
 
// console.log('smallestNumber =', findSmallesNumber([3, 8, 12, -2, 15])); //-2
// console.log('smallestNumber =', findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log('smallestNumber =', findSmallesNumber([7, 21, 84, 15, 4])); // 4 

// --------------------------------------------------------------------------------------------------------------------------------
//                              Задача 7
// написать функцию Change Case 
           
// const string = 'qWeRTzxCv';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//     const isEqual = letter === letter.toLowerCase();

//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log('invertedString: ', invertedString); 
   
// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     // читаестя так: а это в нижнем регистре есть true верни в верхнем и наоборот  
//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }

//     return invertedString;
// };

// console.log(changeCase('qwerTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));
// ----------------------------------------------------------------------------------
        //                     Задача 8
// напиши функцию slugify которая получает строку и возвращает URL-slug
//строка состоит только из букв и пробелов
        //                   решение
// const titel = 'Top 10 benefits of React framework'
// // шаг 1 - привести к нижнему регистру 
// const normolizedTitel = titel.toLowerCase();
// console.log(normolizedTitel);
// // шаг 2 - получившуюся строку разбить в массив по пробелу
// const words = normolizedTitel.split(' '); 
// console.log(words);
// // шаг 3 - сшить массив с тирешичками
// const slug = words.join('-');
// console.log(slug);

// // то же самое оптимизировать (декларативный код)
// const slugOptimized = titel.toLowerCase().split(' ').join('-');
// console.log(slugOptimized);

// const slugify = function (string) {
//     // const normolizedTitel = string .toLowerCase();
//     // const words = normolizedTitel.split(' '); 
//     // const slug = words.join('-');
//     // // можно записать короче 
//     // // 👇🏼👇🏼👇🏼
//    return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Top 20 mistakes of writening js code'));
// console.log(slugify('Top 30 good ideas of the future'));
// ---------------------------------------------------------------------------------------------
                        //  Задача 9
        // работа с псевдомассивом
// сделать массив из псевдомассива. Arguments - зарезервированное название 

// метод 1 old school
// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments);

//     console.log(args);

//     // for (const arg of arguments) {
//     //     console.log(arg);
//     // }
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// метод 2 
// при помощи rest ...    ... = Array.from(arguments)

// const fn = function (...args) {
//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// если у нас первые параметры например строка, то можно их записать в 
// параметры, а всё остальное в rest 

// const fn = function (a, b, c, ...args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);
// ---------------------------------------------------------------------------------------------
                        //  Задача 10
                  // на операцию ...rest
 //напищи фукцию add для сложения произвольного кол-ва аргументов (чисел)

// const add = function (...args) { 
//     console.log(args);

//     let total = 0;

//     for (const arg of args) {
//         total += arg; 
//     }

//     return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));
// ---------------------------------------------------------------------------------------------
                        //  Задача 10
        // напиши функцию filterNumbers
    // - первым аргументом принимает массив чисел
    // - после первого арг может быть произвольно екол-во других арг
    // - функция должна вернуть новыц массив, в которорм будет только те аргументы которые начинаются со второго
    //  для которых есть аналог в оригинальнои массиве
    // то есть вернуть только совпадающие
    
// const filterNumbers = function (arrey, ...args) {
//     console.log('arrey', arrey);
//     console.log('args', args);

//     const uniqueElement = [];

//     for (const arg of args) {
//         // console.log(arg);
//         // console.log(arrey.includes(arg));

//         if (arrey.includes(arg)) {
//             console.log(`эллемент ${arg} есть`);

//             uniqueElement.push(arg);
//         }
//     }

//     // console.log('новый массивэ', uniqueElement);

//     return uniqueElement;
//  };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); //[2,3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30,15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); //[200]
