// Работа с массивами

var arr1 = ['a', 'b', 'c'];
alert(arr1);

alert(arr1[0]);
alert(arr1[1]);
alert(arr1[2]);

var arr2 = ['a', 'b', 'c', 'd'];
alert(arr2[0] + '+' + arr2[1] + ', ' + arr2[2] + '+' + arr2[3]);

var arr3 = [2, 5, 3, 9];
var result = arr3[0] * arr3[1] + arr3[2] * arr3[3];
alert(result);

// Объекты

var obj1 = {a: 1, b: 2, c: 3};
alert(obj1['c']);
alert(obj1.c);

var salaries = {Коля: '1000', Вася: '500', Петя: '200'};
alert(salaries['Петя']);
alert(salaries['Коля']);

var days = {
  1: 'понедельник',
  2: 'вторник',
  3: 'среда',
  4: 'четверг',
  5: 'пятница',
  6: 'суббота',
  7: 'воскресенье'
};
var today = new Date().getDay();
alert(days[today === 0 ? 7 : today]);

var day = 3;
alert(days[day]);

// Многомерные массивы

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
alert(matrix[1][0]);

var tech = {
  js: ['jQuery', 'Angular'],
  php: 'hello',
  css: 'world'
};
alert(tech.js[0]);

var week = {
  ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
alert(week.ru[0]);
alert(week.en[2]);

var lang = 'ru';
var dayNum = 3;
alert(week[lang][dayNum - 1]);