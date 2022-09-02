//                       Объекты 


// в объекте есть свойство оно состоитт из ключа и значения  

//  object = {
    // литерал объекта
//  };

//  object = {
// свойство: значение,
// ключ: значение
// };
// ключ - в результате всегда строка  

// Мы используем массив, что бы хранить коллекцию чего-то
// Мы используем объекты, что бы группировать характеристики одной сущности  


// const playlist = {
//     name: "Мой супер плейлитст",
//     raiting: 5,
//     tracks: ['трек-1', 'тпек-2', 'трек-3'],
//     treckCount: 3,
// }; 

// console.log(playlist);

// // Объект от облпсти видимоти можно отличить.
// //  Литерал объекта может существовать только справа от равно. 
// //  То есть в операции присваивания. В 3х случаях:
// // 1 - запись в переменную
// // 2 - при передачи функции 
// // 3 - при возвращении чего-то из функции 

// // Обращение к свойству
// //    делается через точку 
// console.log(playlist.name);
// console.log(playlist.tracks);

// // второй вариант имя св-ва это строка
// console.log(playlist['treckCount']);

// ---------------------------------------------------------------------------

// короткая запись свойств: если имя ключа совпадает со значением то пишем так:

// const username = 'Mango';
// const email = 'mango@gmail.com';

// const setUp = {
//     // username: username,
//     username,
//     // email: email,
//     email,
// }; 

// console.log(setUp);
// ---------------------------------------------------------------------------

// вычесляемые свойства 

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPicker = {
//     [inputName]: inputValue,
// };

// console.log(colorPicker);

// ---------------------------------------------------------------------------

// в массив можно добавить свойство через точку 

// const playlist = {
//     name: "Мой супер плейлитст",
//     raiting: 5,
//     tracks: ['трек-1', 'тпек-2', 'трек-3'],
//     treckCount: 3,
// }; 

// // если такого свойства нет, то оно добавится
// playlist.cost = '20$';

// // если есть то оно перезапишется 
// playlist.cost = '30$';

// console.log(playlist);
// ---------------------------------------------------------------------------

// Два объект никогда не равны - потому что они создаются в разных ячейках памяти и у них разные ссылки(адреса)

// const a = { x: 1, y: 2 };
// const b = a;

// console.log({ a: 1 } === { a: 1 });
// console.log(a === b);

// ---------------------------------------------------------------------------

//        Метод объекта 

// const playlist = {
//     name: "Мой супер плейлитст",
//     raiting: 5,
//     tracks: ['трек-1', 'тпек-2', 'трек-3'],
//     treckCount: 3,
//     //  старая запись 👇🏼👇🏼
//     // getName: function () {
//     //     console.log('ага, это getName!');
//     // },
//     // новая запись 👇🏼👇🏼
//     getName() {
//         console.log('ага, это getName!');
//     },
   
// }; 

// playlist.getName();

// console.log(playlist);

// ----------------------------------------------------------------------------------------
//              Перебрать объект  метод for ... in
// Это плохой метод (он перебирает не только собстенные свойства
// объекта, но и унаследованные), но можно преобразовать объект в массив 
// и работать с ним методом forOf или for 

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// // получить общее кол-во фитбеков 
// let totalFedback = 0;

// // метод преобразования ключей объекта в массив!!!!!!!!
// const keys = Object.keys(feedback);

// console.log(keys);

// // работа с массивом
// for (const key of keys) {
//     console.log(key);
//     // получить value👎👇🏼
//     console.log(feedback[key]);

//     totalFedback += feedback[key];
// }

//  console.log('totalfeedback =', totalFedback);

//  метод перобразования значений объекта в массив!!!
// const values = Object.values(feedback);

// console.log(values);

// let totalFeedback = 0;

// for (const value of values) {
//     totalFeedback += value;
// }

// console.log('totalFeedback =', totalFeedback);

// oblect.entries получить массив ключ:объект
// ---------------------------------------------------------------------------
                    //  Задача 1
            // метод изменения имени
// const playlist = {
//     name: "Мой супер плейлитст",
//     raiting: 5,
//     tracks: ['трек-1', 'тпек-2', 'трек-3'],
//     treckCount: 3,
//     changeName(newName) {
//         this.name = newName;
//     },
   
// }; 

// playlist.changeName('имя новое');

// console.log(playlist);

// ---------------------------------------------------------------------------
  //                      Задача 2
            // метод addTrack

//             const playlist = {
//     name: "Мой супер плейлитст",
//     raiting: 5,
//     tracks: ['трек-1', 'тпек-2', 'трек-3'],
//     treckCount: 3,
//     addTrack(track) {
//         this.tracks.push(track);
//     },
   
// }; 

// playlist.addTrack('новый трек ');

// console.log(playlist);

// ------------------------------------------------------------
//              Работа с коллекцие (массив объектов)

// const friends = [
//     { name: 'Ilon', online: false },
//     { name: 'Yana', online: true },
//     { name: 'Yurii', online: true },
//     { name: 'Vlada', online: false },
// ];

// // изменить только одно значение 👇🏼👇🏼👇🏼👇🏼👇🏼
// // friends[1].newprop = 555;

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     friend.newprop = 555;
// };

// console.table(friends);

//почмеу так?  в массиве мы используем for что бы изменить 
//эллемент массива, for of если не нужно 
// но если перебирать массив объектов, то в friend будет 
// записываться ссылка (не копия!) а ссылка на оригинальрый 
// объект (то есть  friend.newprop = будет  добавлять 
// новое свойство то есть мы можем изменять это свойство
// так как это сама ссыылка а не копия)
// ------------------------------------------------------
//                 Задача
// ищем друга по имени 

// const friends = [
//     { name: 'Ilon', online: false },
//     { name: 'Yana', online: true },
//     { name: 'Yurii', online: true },
//     { name: 'Vlada', online: false },
// ];

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         // console.log(friend);
//         // console.log(friend.name);
        
//         if (friend.name === friendName) {
//             return 'Нашли!!!';
//         }
//     }

//     return 'НЕ нашли, печалька';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Yana'));

// метод includes не подходит так как он ищет по значениям 
// массива, а у нас значене массива это { name: 'Ilon', online: false }
// то есть include подходит когда у нас массив примитивов (числа, строка, буль)

// ------------------------------------------------------
//                 Задача
// получаем имена всех друзей 

// const friends = [
//     { name: 'Ilon', online: false },
//     { name: 'Yana', online: true },
//     { name: 'Yurii', online: true },
//     { name: 'Vlada', online: false },
// ];

// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);

//         names.push(friend.name);
//     }

//     return names;
// };

// console.log(getAllNames(friends));

// ------------------------------------------------------
//                 Задача
// получаем имена всех кто онлайн

// const friends = [
//     { name: 'Ilon', online: false },
//     { name: 'Yana', online: true },
//     { name: 'Yurii', online: true },
//     { name: 'Vlada', online: false },
// ];

// const getFriendOnline = function (allFriends) {

//     const friendOnline = [];

//     for (const friend of allFriends) {

//         if (friend.online) {
//             friendOnline.push(friend)
//         }
//     }

//     return friendOnline;
// }

// console.log(getFriendOnline(friends));
// ---------------------------------------------------------------




