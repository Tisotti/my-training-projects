let messeges = [
   'Зверніть увагу на старих друзів',
   'Прислухайтеся до натяків, які дає вам доля',
   'Робіть все, чого душа забажає',
   'Не забувай про головне!',
   'Зміни вже на порозі!',
   'Ви рухаєтеся у вірному напрямку.',
   'Ви рухаєтеся у вірному напрямку.',
   'Вашій мрії просто нікуди відступати, їй доведеться збутися.',
];

// JSON.stringify(messeges);
// console.log(messeges);

// sessionStorage.setItem('my-data', JSON.stringify(messeges)); 

// const savedData = sessionStorage.getItem('my-data');
// console.log(savedData);

// const parsedData = JSON.parse(savedData);
// console.log(parsedData);




// код рандомно выбирает сообщение

const maxi = messeges.length -1;
const mini = 0;

const randomMessage = Math.round(Math.random() * (maxi - mini) + mini);
const messege = messeges[randomMessage];

console.log(randomMessage);

document.querySelector(".random_message_place").innerHTML = messege;

// логика 
// 1 создвть массив со строками (в которых значение - предсказание)
// 2 выбирать из массива строку под рандобным номером 
// 3 взять параграф 
// 4 число преобразовать в строку
// 5 записать в параграф рандомное число (значение - строку) из массива


// const template = RollTemplate.compile('<p>{{ messeges }}</p>');

// template({ messeges });