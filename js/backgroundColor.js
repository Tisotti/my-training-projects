// меняет бэкграунд при каждой перезагрузке окна брраузера 

const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue', 'aqua', 'red'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];

console.log(index);

document.body.style.backgroundColor = color;

// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// console.log (message);












