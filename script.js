// Kata 1:
// You are given an array (which will have a length of at least 3, 
// but could be very large) containing integers. The array is either entirely comprised
// of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(integers) {

//     let evens = [];
//     let odds = [];

//     for (let elem of integers) {

//         if (elem % 2 === 0) {
//             if (evens.length < 2) evens.push(elem);
//         } else
//             if (odds.length < 2) odds.push(elem);

//         if (evens.length > 1 && odds.length > 0)
//             return odds.pop();
//         if (evens.length > 0 && odds.length > 1)
//             return evens.pop()
//     }
// }

// console.log(findOutlier([0, 1, 2]));

// --------------------

// let evenNumbersArray = [];
// let oddNumbersArray = [];

// integers.forEach(eachElem => {
//     eachElem % 2 === 0 ? evenNumbersArray.push(eachElem) : oddNumbersArray.push(eachElem);
// })

// if (evenNumbersArray.length > oddNumbersArray.length) {
//     return oddNumbersArray[0];
// } else {
//     return evenNumbersArray[0];
// }

// ---------------------------------

// Kata 2:
// Bob is preparing to pass IQ test. The most frequent task in this test
// is to find out which one of the given numbers differs from the others. 
// Bob observed that one number usually differs from the others in evenness. 
// Help Bob — to check his answers, he needs a program that among the given 
// numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means
// indexes of the elements start from 1 (not 0)

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

// function iqTest(numbers) {

//     let inputStr = numbers.split(' ');

//     let even = inputStr.filter(num => num % 2 == 0);
//     let odd = inputStr.filter(num => num % 2 != 0);

//     let index = even.length === 1 ? inputStr.indexOf(even[0]) : inputStr.indexOf(odd[0]);

//     return index + 1;
// }

// console.log(iqTest("2 4 7 8 10"));

// ------------------------------------

// Object.keys, values, entries

// + 1. Сумма свойств объекта

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью 
// метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

// Например:
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   alert( sumSalaries(salaries) ); // 650

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// const sumSalaries = salaries => Object.values(salaries).reduce((sum, elem) => sum + elem, 0);

// console.log(sumSalaries(salaries)); // 650

// ------------------------

// + 2. Подсчёт количества свойств объекта

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

// let user = {
//     name: 'John',
//     age: 30,
// };

// const count = obj => Object.values(user).length;

// console.log(count(user)); // 2

// --------------------

// Map и Set

// + 1. Фильтрация уникальных элементов массива

// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, 
// не повторяющихся значений массива arr.

// Например:
// function unique(arr) {
//   /* ваш код */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
// P.P.S. Используйте Set для хранения уникальных значений.


// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// function unique(arr) {
//     let result = [];
//     let set = new Set(arr);

//     for (elem of set) {
//         result.push(elem);
//     }
//     return result;
// }

// console.log(unique(values)); // Hare,Krishna,:-O

// -----------------------

// 2. Отфильтруйте анаграммы

// Анаграммы – это слова, у которых те же буквы в том же количестве, 
// но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = arr => {

  arr.map()
}

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"