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

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]
