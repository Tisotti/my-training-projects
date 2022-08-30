                        // Занятие 2
                        // switch
                        // for
// const stars = 2;
// let price;

// const balanced = require("balanced-match");

// switch (stars) {
//     case 1: 
//     case 2:
//         price = 10;
//         break;
    
//     case 3:
//     case 4:
//         price = 20;
//         break;
    
//     case 5:
//         price = 60;
//         break;
    
//     default:
//         console.log('Столько звезд нет, выдумщик');
// }

// console.log(price);



// потреніровать цікл for 
// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
// };

// // записать от 0 до 100 с шагом 1 
// for (let i = 0; i <= 100; i += 1) {
//     console.log(i);
// }

// // от 50 до 100 с шагом 5 
// for (let i = 50; i <= 100; i += 5) {
//     console.log(i);
// }

// //  от 100 до 0 с шагом 1 
// for (let i = 100; i > 0; i -= 1) {
//     console.log(i);
// }

// //  от 50 до 0 с шагом 5  
// for (let i = 50; i >= 0; i -= 5) {
//     console.log(i);
// }

                    //  Задача 1️⃣
// Напиши скрипт который подсятывает общую сумму зарплат работников 
// Кол-во работников хранится в переменной empoyers 
// зарплата каждого работника это случайное число от 500 до 5000
// записать сумму в переменную totalSalary и вывести в консоль 

// Алгоритм

// // 1 сделать переменные 
// const employers = 3;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;
// // 2 перебрать работников в цикле 
// for (let i = 1; i < 5; i += 1) {
// // 3 сгенерировать случайную зп    
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
    
//     console.log(`зп работника ${i} - ${salary}`);
// // 4 прибавить к тотал     
//     totalSalary += salary;
// }
// // 5 лог 
//     console.log('totalSalary', totalSalary);


                //  Задача 2️⃣
// Напиши скрипт который подсчитывает сумму всех четных чисел
// которые входят в диапозон чисел в переменных от min до max
// например все min = 0 и max=5 то диапозон 0-5 и в нем четные 2 и 4 
// их сумма 6


// // 1 объявить переменные
// const min = 6;
// const max = 13;
// let total = 0;

// // 2 перебрать циклом от мин до макс с шагом 1 на проверку четного
// for (let i = min; i <= max; i += 1) {
//     console.log(i);

// // 3 проверить на остаток
//     if (i % 2 === 0) {
//         console.log('четное, нашли', i);

// // пишим сумму 
//         total += i;
//     }
// }
// console.log('общая сумма четных ', total);

// *** как проверить на четное - если есть остаток от деления есть то число не четное
// *** если остаток 0 - то четное  
// ----------------------------------------------------------------------------------------------
                        // Задача 3️⃣
// напиши скрипт обработки покупок в магазине 
// баланс хранится в переменной balance
// сумма покупки хранится в переменной payment 
// перед проверкой вывести сообщение
// "Общая стоимость заказа [число] кредиттов. Проверяем кол-во доступных средств на счету"
// Если сумма покупки не превышает баланс:
//  - вычесть из баланса сумму покупки
// вывести сообщение "На счету осталось [число] кредитов"
// Если превышает 
// "На счету недостаточно средств"
// В концевывести сообщение "Операция завершена"


// let balance = 10000;
// const payment = 12000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);

// if (balance >= payment) {
//     console.log('ok');

//     balance -= payment;
//     // balance = balance - payment

//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log("На счету недостаточно средств");
// };

// console.log("Операция завершена");
// ----------------------------------------------------------------------------------------------------
//                                         Задача 4️⃣
// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнер, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Серебрянный партнер, скидка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('Золотой партнер, скидка 10%');
//   discount = 0.1;
// } else {
//   console.log('Не партнёр, скидка 0%');
// }

// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);
// -------------------------------------------------------------------------
//                             Задача 5️⃣
// прибавляет числа - очищает поле
// const btnAdd = document.querySelector('button[data-add]');
// const resetBtn = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');

// let total = 0;

// btnAdd.addEventListener('click', function () {
//   const value = Number(valueInput.value);

//   total += value;
//   outputEl.textContent = total;
//   valueInput.value = '';
// });

// resetBtn.addEventListener('click', function () {
//   total = 0;
//   outputEl.textContent = total;
// });










 

