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

// 1. Сумма свойств объекта

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

// 2. Подсчёт количества свойств объекта

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

// 1. Фильтрация уникальных элементов массива

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

// ---------------------

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

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// const aclean = arr => {

//   arr.map()
// }

// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

//----------------------------------

// Object.keys, values, entries

// 1. Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с 
// помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.
// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// alert( sumSalaries(salaries) ); // 650

// -----------------------------

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// const sumSalaries = salaries => {

//   let sumOfSalaries = 0;

//   for (let value of Object.values(salaries)) {
//     sumOfSalaries += value;
//   }

//   return sumOfSalaries;
// }

// console.log(sumSalaries(salaries)); // 650

// 2. Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество 
// свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только 
// «обычные».

// -----------------------------

// let user = {
//   name: 'John',
//   age: 30
// };

// const count = obj => Object.values(obj).length;

// console.log(count(user));

// Деструктурирующее присваивание

// 1. У нас есть объект:
// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:
// - свойство name присвоит в переменную name.
// - свойство years присвоит в переменную age.
// - свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// // ... = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// --------------------------------

// let user = { name: "John", years: 30 };

// let { name, years: age, isAdmin = false } = user;

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// ---------------------------

// 2. Максимальная зарплата
// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого 
// высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары 
// ключ/значение.

// ---------------------------

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// const topSalary = salaries => {

//   if (Object.entries(salaries).length == 0) {
//     return null;
//   }

//   let topWorker;
//   let topSalary = 0;

//   for (let [worker, value] of Object.entries(salaries)) { // ["John", 100], ["Pete", 300], ["Mary", 250]

//     if (`${value}` > topSalary) {
//       topSalary = `${value}`;
//       topWorker = `${worker}`;
//     }
//   }

//   return topWorker;

// }

// console.log(topSalary(salaries));

// Дата и время

// 1. Создайте дату
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. 
// Временная зона – местная.
// Для вывода используйте alert.

// ---------------------------

// console.log(new Date(2012, 1, 20, 3, 12));

//2. Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком 
// формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
// Например:
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

// ---------------------------

// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// const getWeekDay = date => {

//   let options = {
//     weekday: 'short',
//   };

//   return (new Intl.DateTimeFormat('ru-RU', options).format(date)).toUpperCase();

// }
// console.log(getWeekDay(date)); // нужно вывести "ВТ"

// 3. День недели в европейской нумерации
// В Европейских странах неделя начинается с понедельника 
// (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
// Напишите функцию getLocalDay(date), которая возвращает «европейский» 
// день недели для даты date.

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2

// ---------------------------

// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// const getLocalDay = date => {

//   let europeanWeekday = date.getDay();

//   if (europeanWeekday == 0) {
//     return 7;
//   } else {
//     return europeanWeekday;
//   }
// }

// console.log(getLocalDay(date)); // вторник, нужно показать 2

// 4. Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было 
// days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) 
// вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

// ---------------------------

// let date = new Date(2015, 0, 2); // 02 Jan 2015

// const getDateAgo = (date, days) => {

//   let newDate = new Date(date);

//   newDate.setDate(newDate.getDate() - days);
//   return newDate.getDate();
// }

// console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// 5. Последнее число месяца?
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее 
// число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// ---------------------------

const getLastDayOfMonth = (year, month) => {

  let newYear = year; // 2012
  let newMonth = month + 1; // 2

  let nextMonth = new Date(year, month); // Mar 01 2012

  let dateWithLastDay = nextMonth.getDate() - 1; // 

  dateWithLastDay.setDate();
   .getDate();
}


getLastDayOfMonth(2012, 1);