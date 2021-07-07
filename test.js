// Object.keys, values, entries

// + 1. Сумма свойств объекта

// describe("sumSalaries", function () {
//     it("returns sum of salaries", function () {
//         let salaries = {
//             "John": 100,
//             "Pete": 300,
//             "Mary": 250
//         };

//         assert.equal(sumSalaries(salaries), 650);
//     });

//     it("returns 0 for the empty object", function () {
//         assert.strictEqual(sumSalaries({}), 0);
//     });
// });

// 2. Подсчёт количества свойств объекта

// describe("count", function () {
//     it("counts the number of properties", function () {
//         assert.equal(count({ a: 1, b: 2 }), 2);
//     });

//     it("returns 0 for an empty object", function () {
//         assert.equal(count({}), 0);
//     });

//     it("ignores symbolic properties", function () {
//         assert.equal(count({ [Symbol('id')]: 1 }), 0);
//     });
// });

// 1. Фильтрация уникальных элементов массива

// describe("unique", function () {
//     it("removes non-unique elements", function () {
//         let strings = ["Hare", "Krishna", "Hare", "Krishna",
//             "Krishna", "Krishna", "Hare", "Hare", ":-O"
//         ];

//         assert.deepEqual(unique(strings), ["Hare", "Krishna", ":-O"]);
//     });

//     it("does not change the source array", function () {
//         let strings = ["Krishna", "Krishna", "Hare", "Hare"];
//         unique(strings);
//         assert.deepEqual(strings, ["Krishna", "Krishna", "Hare", "Hare"]);
//     });
// });

// 2. Отфильтруйте анаграммы

// function intersection(arr1, arr2) {
//     return arr1.filter(item => arr2.includes(item));
// }

// describe("aclean", function () {

//     it("returns exactly 1 word from each anagram set", function () {
//         let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//         let result = aclean(arr);
//         assert.equal(result.length, 3);

//         assert.equal(intersection(result, ["nap", "PAN"]).length, 1);
//         assert.equal(intersection(result, ["teachers", "cheaters", "hectares"]).length, 1);
//         assert.equal(intersection(result, ["ear", "era"]).length, 1);

//     });

//     it("is case-insensitive", function () {
//         let arr = ["era", "EAR"];
//         assert.equal(aclean(arr).length, 1);
//     });

// });

// Object.keys, values, entries

// 1. Сумма свойств объекта

// describe("sumSalaries", function () {
//   it("returns sum of salaries", function () {
//     let salaries = {
//       "John": 100,
//       "Pete": 300,
//       "Mary": 250
//     };

//     assert.equal(sumSalaries(salaries), 650);
//   });

//   it("returns 0 for the empty object", function () {
//     assert.strictEqual(sumSalaries({}), 0);
//   });
// });

// 2. Подсчёт количества свойств объекта
// describe("count", function () {
//   it("counts the number of properties", function () {
//     assert.equal(count({ a: 1, b: 2 }), 2);
//   });

//   it("returns 0 for an empty object", function () {
//     assert.equal(count({}), 0);
//   });

//   it("ignores symbolic properties", function () {
//     assert.equal(count({ [Symbol('id')]: 1 }), 0);
//   });
// });

// Деструктурирующее присваивание
// 2. Максимальная зарплата

// describe("topSalary", function () {
//   it("returns top-paid person", function () {
//     let salaries = {
//       "John": 100,
//       "Pete": 300,
//       "Mary": 250
//     };

//     assert.equal(topSalary(salaries), "Pete");
//   });

//   it("returns null for the empty object", function () {
//     assert.isNull(topSalary({}));
//   });
// });

// Дата и время

// 2. Покажите день недели

// describe("getWeekDay", function () {
//   it("3 января 2014 года - пятница", function () {
//     assert.equal(getWeekDay(new Date(2014, 0, 3)), 'ПТ');
//   });

//   it("4 января 2014 года - суббота", function () {
//     assert.equal(getWeekDay(new Date(2014, 0, 4)), 'СБ');
//   });

//   it("5 января 2014 года - воскресенье", function () {
//     assert.equal(getWeekDay(new Date(2014, 0, 5)), 'ВС');
//   });

//   it("6 января 2014 года - понедельник", function () {
//     assert.equal(getWeekDay(new Date(2014, 0, 6)), 'ПН');
//   });

//   it("7 января 2014 года - вторник", function () {
//     assert.equal(getWeekDay(new Date(2014, 0, 7)), 'ВТ');
//   });

//   it("8 января 2014 года - среда", function () {
//     assert.equal(getWeekDay(new Date(2014, 0, 8)), 'СР');
//   });

//   it("9 января 2014 - четверг", function () {
//     assert.equal(getWeekDay(new Date(2014, 0, 9)), 'ЧТ');
//   });
// });

// 3. День недели в европейской нумерации

// describe("getLocalDay возвращает \"европейский\" день недели", function () {
//   it("3 января 2014 года - пятница", function () {
//     assert.equal(getLocalDay(new Date(2014, 0, 3)), 5);
//   });

//   it("4 января 2014 года - суббота", function () {
//     assert.equal(getLocalDay(new Date(2014, 0, 4)), 6);
//   });

//   it("5 января 2014 года - воскресенье", function () {
//     assert.equal(getLocalDay(new Date(2014, 0, 5)), 7);
//   });

//   it("6 января 2014 года - понедельник", function () {
//     assert.equal(getLocalDay(new Date(2014, 0, 6)), 1);
//   });

//   it("7 января 2014 года - вторник", function () {
//     assert.equal(getLocalDay(new Date(2014, 0, 7)), 2);
//   });

//   it("8 января 2014 года - среда", function () {
//     assert.equal(getLocalDay(new Date(2014, 0, 8)), 3);
//   });

//   it("9 января 2014 года - четверг", function () {
//     assert.equal(getLocalDay(new Date(2014, 0, 9)), 4);
//   });
// });

// 4. Какой день месяца был много дней назад?

// describe("getDateAgo", function () {

//   it("1 день до 02.01.2015 -> день 1", function () {
//     assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
//   });


//   it("2 дня до 02.01.2015 -> день 31", function () {
//     assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
//   });

//   it("100 дней до 02.01.2015 -> день 24", function () {
//     assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
//   });

//   it("365 дней до 02.01.2015 -> день 2", function () {
//     assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
//   });

//   it("переданный объект date не модифицируется", function () {
//     let date = new Date(2015, 0, 2);
//     let dateCopy = new Date(date);
//     getDateAgo(dateCopy, 100);
//     assert.equal(date.getTime(), dateCopy.getTime());
//   });

// });

// 5. Последнее число месяца?

describe("getLastDayOfMonth", function () {
  it("последнее число 01.01.2012 - 31", function () {
    assert.equal(getLastDayOfMonth(2012, 0), 31);
  });

  it("последнее число 01.02.2012 - 29 (високосный год)", function () {
    assert.equal(getLastDayOfMonth(2012, 1), 29);
  });

  it("последнее число 01.02.2013 - 28", function () {
    assert.equal(getLastDayOfMonth(2013, 1), 28);
  });
});