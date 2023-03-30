"use strict";

// if(5 == 6){
//   console.log('yes');
// } else{
//   console.log('no');
// } 


// const num = 50;

// if (num === 50) {
//   console.log('good');
// } else {
//   console.log('error');
// };

// switch (num) {
//   case 49:
//     console.log('num > 49');
//     break;
//   case 100:
//     console.log('num < 100');
//     break;
//   case 50:
//     console.log('yeah');
//     break;

//   default:
//     console.log('ne etot raz');
//     break;
// }






// let num = 0;

// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num <= 10);


// for (let i = 0; i <= 10; i += 2) {

//   if (i == 6) {
//     // break;
//     continue;
//   }

//   console.log(i);
// }







// for (let i = 0; i < 3; i++) {
//   // console.log(`${i}.0`);

//   for (let j = 1; j <= 3; j++) {
//     // console.log( i + "." + j) 
//     console.log(`${i}.${j}`);   
//   }
  
// }



// *
// **
// ***
// ****
// *****
// let result = '';
// const length = 5;

// for (let i = 0; i < length; i++) {
  
//   for (let j = 0; j <= i; j++) {
//     result += '*';    
//   }
  
//   result += '\n';
// }
// console.log(result);


/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */


/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
  } else {
      console.log('error');
      i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB); */


// const rade = 80;
// const job = 40;
// let time = 11;

// if ((11-2)*5 >= 40) {
//   console.log('i done');
//   console.log(`price ${rade * job} dollar`);
// } else{
//   console.log('i not done')
// }


// const depositUSD = 12000;
// const vklad = 7;
// const srok = 2 * 12;
// const result = depositUSD * (1 + vklad/100/12)**srok;
// console.log(result);

// if (result > 13500) {
//   console.log('yeah');
//   console.log(result - 13500);
// } else{
//   console.log('no');
// }



// const role = 'dev';

// switch (role) {
//   case 'manager':  // role === 'manager';
//     console.log('sotrudnik');
//     break;
//   case 'admin':
//     console.log('sotrudnik');
//     break;
//   case 'ceo':
//     console.log('sotrudnik');
//     break;
//   case 'dev':
//     console.log('sotrudnik');
//     break;

//   default:
//     console.log('ne sotrudnik');
//     break;
// }




// const budget = 1000;
// const tel = 900;

// const massage =  budget > tel ? 'I can buy tel' : 'I dont buy tel';
// console.log(massage);

// console.log(`Can I buy tel?  ${budget > tel ? 'yeah!' : 'nope'}`);






// const massage = prompt('5 + or - 5 = ?');

// if (Number(massage) === 10) {
//   alert('you are humen');
// } else if (massage === 'humen') {
//   alert('you are humen');
// } else{
//   alert('welcome Mr Robot');
// }

// if (massage === 'humen') {
//   console.log('yeah, humen');
// } else{
//   switch (Number(massage)) {
//     case 10:
//     case 0:
//       console.log('yeah, humen');
//       break;
  
//     default:
//       console.log('no, robot');
//       break;
//   }
// }




// const balance = 100;
// const bounusBalance = 1000;
// const isBanned = false;
// const isExist = false;
// const isSelling = true;

// const conditions = (balance >= 100 || bounusBalance >= 1000) && !isBanned && !isExist && isSelling ;

// if (conditions) {
//   console.log('he can buy this game!');
// } else{
//   console.log('he dont buy this game!');
// }
// /* or */
// console.log(`he ${conditions ? 'can' : 'dont'} buy this game`);






// function logName (name, lastName) {
//   console.log(`my name is ${name} ${lastName}`);
// }
// logName('atajan', 'atabegov');


// function vklad (depositUSD, time, prosent) {
//   let result = depositUSD * (1 + prosent/100/12)**time;
//   return result;
// }
// const vklad1 = vklad(10000, 48, 7);
// const vklad2 = vklad(12000, 24, 7);
// console.log(vklad1);
// console.log(vklad2);



// function stepen(num) {
//   // const result =  num * num;
//   // return result;
//   return num * num;
// }
// console.log(stepen(5));

// const stepen2 = function (num) {
//   return num * num;
// }
// console.log(stepen2(6));

// const stepen3 = num => num * num;
// console.log(stepen3(7));

// const dis = (a , b , c) => b*b - (4*a*c);
// console.log( dis(2,10,-2) );

// function D(a, b, c) {
//   const d = b*b - (4*a*c);
//   return `D = ${d}, x1 = ${(-b + (d**(1/2))) / a}, x2 = ${(-b - (d**(1/2))) / a};`
// }
// console.log(D(4,-13,9));



// const numToPower = (num, power) => num ** power;
// console.log( numToPower(100,3) );


/* znacheniya po umolchaniyu */
// function toPower(num, power) {
//   power = power ?? 2;
//   return num ** power;
// }
//or
// function toPower(num, power = 2) {
//   return num ** power;
// }
// console.log(toPower(5));


// function canAccessWebsite (age) {
//   if (age < 18) {
//     return 'nope';
//   }
//   return 'yeah';
// }
// console.log(canAccessWebsite(15));

// const canAccessWebsite2 = age => age < 18 ? 'nope' : 'yeah';
// console.log(canAccessWebsite2(19));







// function canBuy(money, age, job = 0,) {
//   if ((money >= 2000) || (money >= 1500 && job > 0) || (money >= 1400 && job > 0 && age >= 24)) {
//     return console.log('yeah');
//   } else{
//     return console.log('nope');
//   }
// }

// canBuy(1500, 23);



// /* mozhet li chelovek kupit towar */
// function complateCredit(age, job=false) {
//   switch (true) {
//     case age > 24 && job:
//       return 500;
//     case age > 24:
//       return 100;
  
//     default:
//       return 0;
//   }
// }

// function canBuy(price, money, age, job=false) {
//   const creditMoney = complateCredit(age, job);
//   if (price <= money + creditMoney) {
//     console.log('yeah');
//   } else{
//     console.log('nope');
//   }
// }

// canBuy(2000, 21000);







/* arrows */

// const roles = ['admin', 'user', 'superUser'];
// console.log(roles);
// console.log(roles[1]);
// console.log(roles.length);
// console.log(roles[roles.length-1]);

// console.log(roles.at(0));
// console.log(roles.at(-1));

// /* or */
// const users = new Array('vasya', 'anya', 'katya');
// console.log(users);

// const age = [2022-2002, 22 > 10 ? 'yeah' : 'no'];
// console.log(age);


// const students = ['anya', 'vasya', 'katya'];
// console.log(students);
// console.log(students.length);

// students[2] = 'kristina';
// console.log(students);
// students[5] = 'meret';
// console.log(students);
// console.log(students.length);


// const el = students.push('myrat');
// console.log(students);
// console.log(el); // method push() and unshift() return arrow length

// const el2 = students.unshift('men');
// console.log(el2);
// console.log(students);


// const el3 = students.pop();
// console.log(el3);  // method pop() and shift() return deleted element from arrow
// console.log(students);

// const el4 = students.shift();
// console.log(el4);
// console.log(students);






// const students = ['anya', 'vasya', 'katya', 'vasya'];

// const indexElArrow = students.indexOf('vasya');
// console.log(indexElArrow);


// if(indexElArrow >= 0){
//   console.log('dostup yest');
// } else{
//   console.log('dostup net');
// }  


// const elArrow = students.includes('vasya');
// console.log(elArrow);

// if (elArrow) {
//   console.log('dostup yest');
// } else{
//   console.log('dostup net');
// } 



// const teachers = ['meret', 'gozel'];
// const students = ['anya', 'vasya', 'katya', 'vasya'];
// console.log(students);

// const res = students.slice(0, 3);
// console.log(res);  // slice() с первого индекса до ук. индекса создает новый массив и не мод. исходный массив

// const res2 = students.splice(0, 2);
// console.log(res2); // splice() оздает новый массив и мод. исходный массив
// console.log(students);

// const res3 = students.reverse();
// console.log(res3);

// const res4 = students.concat(teachers);
// console.log(res4);



// const url = 'user/lk/vasya';
// const res = url.split('/');
// console.log(res);
// const res2 = res.join('---');
// console.log(res2);

// const text = 'tut bolshoi text naprimer aydaly';
// console.log(text);
// const arrowFromText = text.split(' ');
// console.log(arrowFromText);

// const urlFromArrow = arrowFromText.join('/');
// console.log(urlFromArrow);






// const tasks = ['html', 'css', 'js'];

// function add(task) {
//   tasks.push(task);
// }

// function remove(task) {
//   const index = tasks.indexOf(task);
//   if (index === -1) {
//     return;
//   }
//   return tasks.splice(index, 1);
// }

// function prioritet(task){
//   const result = remove(task);
//   if (result) {
//     tasks.unshift(result[0]);
//   }
// }

// add('scss'); 
// console.log(tasks);

// remove('css');
// console.log(tasks);

// prioritet('js');
// console.log(tasks);







// const userData = ['anton', 'zimin', 18, 'moskow'];
// const [name, _, age, sity] = userData;
// console.log(name, age, sity);





// const nums = [1,2,3,4,5,6,7,8,9];
// const [one, two, ...others] = nums;
// console.log(one, two, others);




// const url = 'https://atabegov.info/lk/settings/name';

// function urlParser(url) {
//   const [protokoll, _, domen,  ...path] = url.split('/');
//   console.log(`protokoll: ${protokoll}`);
//   console.log(`domen: ${domen}`);
//   console.log(`path: ${path.join('/')}`);
// }

// urlParser(url);
// urlParser('https://drugoi.me/news/news-title');



// for (let i=1; i<10; i++){
//   console.log(`my balance ${i}$`);
// }



// const tasks = ['html', 'css', 'js'];
// for (let i = 0; i < tasks.length; i++) {
//   console.log(tasks[i]); 
// }
// for (let i = 0; i < tasks.length; i++) {
//   if (tasks[i] === 'css') {
//     continue;
//   }
//   console.log(tasks[i]); 
// }
// for (let i = 0; i < tasks.length; i++) {
//   if (tasks[i] === 'css') {
//     break;
//   }
//   console.log(tasks[i]); 
// }





// const arrow = ['html', 'css', 'js'];
// const newArr = [];
// for (let i = arrow.length - 1; i >= 0; i--) {
//   // console.log(arrow[i]); 
//   newArr.push(arrow[i]);
//   // console.log(newArr);
// }
// console.log(newArr.join(' '));
// /* or */
// console.log(arrow.reverse().join(' '));



// const nums = [[1,3,5,7,9], [0,2,4,6,8]];

// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < nums[i].length; j++) {
//     console.log(nums[i][j]);
//   }
// }



// const nums = [1,2,3,4,5,6,7,8,9];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === 4) {
//     break;
//   }
//   console.log(nums[i]);
// }

// let i = 0;
// while (nums[i] < 5 && i < nums.length) {
//   console.log(nums[i]);
//   i++;
// }


// let j = 0;
// do {
//   console.log(j);
//   j++
// } while (j < 10);




// const teh = ['html', 'css', 'js'];

// for (const element of teh) {
//   console.log(element);
// }
// for (const index in teh) {
//   console.log(index);
// }




// const op = [1000, -700, 500, -300, 1200];
// const startBalance = 100;


// function getBalance(operations, startBalance) {
//   let balance = startBalance;
//   for (const element of operations) {
//     balance = balance + element; 

//     if(balance<0){
//       console.log('bankrot');
//       break;
//     }
//   }
//   return console.log(balance);
// }
// getBalance(op, startBalance);
// getBalance([1,-302,3,5], 5);









// function vyshegogo poryadaka callback

// function plus(a,b) {
//   return a+b;
// }
// function minus(a,b) {
//   return a-b;
// }
// function power(a,b) {
//   return a**b;
// }

// function calc(a,b, fn) {
//   const result = fn(a,b);
//   return result;
// }
// console.log( calc(3,5, plus));
// console.log( calc(3,5, minus));
// console.log( calc(3,5, power));




// function power(pow){
//   return function (num) {
//     return num**pow;
//   }
// }
/* or */
// const powerOfNumber = power => number => number**power;

// const powerOftwo = power(2)(5);
// console.log(powerOftwo);

// const powerOfNumber = power(5)(4);
// console.log(powerOfNumber);

// const powerOfNumber = power => number => number**power;
// console.log(powerOfNumber(2)(5));

// const power = pow => num => num**pow;
// console.log(power(3)(5));




// const score = [10, 15, 20, 25, 30];

// for (const [i, el] of score.entries()) {
//   console.log(`${i + 1} raund: ${el} scores`);
// }

// score.forEach((element, index) => {
//   console.log(`${index + 1} raund: ${element} scores`);
// });


///* map() */
// const tranInUSD = [10, 15, 20, 25, 30];
// const tranInRUB = [];

// tranInUSD.forEach(element => {
//   tranInRUB.push(element * 60);
// });
// console.log(tranInRUB);

// for (const iterator of tranInUSD) {
//   tranInRUB.push(iterator * 60);
// }
// console.log(tranInRUB);


// const tranInRUB2 = tranInUSD.map( element =>  element*60 );
// console.log(tranInRUB2);





///* filter() */

// const operations = [10, -30, 50, 40, -20];

// const posOperations = [];
// operations.forEach(element => {
//   if (element > 0) {
//     posOperations.push(element);
//   }
// });
// console.log(posOperations);

// const posOperations2 = [];
// for (const iterator of operations) {
//   if (iterator > 0) {
//     posOperations2.push(iterator);
//   }
// }
// console.log(posOperations2);

// const posOperationsMap = operations.filter(operation => operation > 0);
// console.log(posOperationsMap);

// /*  join funciton  */
// const posOperations3 = operations.filter(operation => {
//   return operation > 0;
// }).map(operation => operation *60)
// console.log(posOperations3);
// /* or */
// const posOperations4 = operations.filter(operation => operation > 0).map(operation => operation * 60);
// console.log(posOperations4);



// const prices = [[100, 200], [200, 120], [200, 350]];

// const posPrices = prices.map(price => {
//   return price[1] - price[0];
// }).filter(posPrice => posPrice > 0)
// /* or */
// const posPrices2 = prices.map(price => price[1]-price[0]).filter(posPrice => posPrice > 0);

// console.log(posPrices);
// console.log(posPrices2);



/* reduce() */
// const operations = [50, -20, -10, 10, 30];

// const finalBalance = operations.reduce((balance, transition) =>{
//   return balance += transition;
// }, 0);
// console.log(finalBalance);

// /* or  */
// let res = 0;
// for (const iterator of operations) {
//   res += iterator;
// }
// console.log(res);

// const finBal = operations.reduce((bal, trans) =>{
//   return bal += trans;
// }, 0);
// console.log(finBal);



// const array = [50, 10, 30, 20, 10];

// const srZnacheniya = array.reduce((res, el, index) => {
//   if (index != array.length - 1) {
//     return res += el;
//   } else{
//     return (res += el) / array.length;
//   }
// }, 0);
// console.log(srZnacheniya);




// const arr = [1,2,3,4,5,6,7];

// // for (const iterator of arr) {
// //   if(iterator > 5){
// //     let findEl = iterator;
// //     return console.log(findEl);
// //   }
// // }

// const findEl = arr.find(el => el > 3);
// console.log(findEl);

// const findIndex = arr.findIndex(el => el > 3);
// console.log(findIndex);


// const arr = [1,2,3,4,5,6,7];

// // function search(elSearch, arr) {
// //   const findEl = arr.find(el => el === elSearch);
// //   findEl === undefined ? console.log(`false`) : console.log(`el kot vy ishite vot: ${findEl}`);
// // }
// // search(5, arr);

// /* or  */
// console.log(arr.some(el => el === 9));


/* flat() and flatMap() */
// const prices = [[20, 30], [40, 50], [60, [70, 80, 90]]];

// const res = prices.flat(2);
// console.log(res);

// const res2 = prices.flatMap(el => el.concat(' -- '));
// console.log(res2);


/* sort()  */

// const users = ['vasya', 'meret', 'w', 'anya', 'katya'];
// const userSort = users.sort();
// console.log(userSort);

// const operations = [300, 100, -100, -400, -200, 500, 250];

// const strSort = operations.sort();
// console.log(strSort);  // сортирует как строку (сначала символ -, потом цифр 1 и так далее.). когда числа сортируем надо быть ократным

// // < 0, то сохраняем порядок a-b, если > 0 то меняем b-a;
// const numSort = operations.sort((a, b) =>{
//   if (a > b) {
//     return 1;
//   } 
//   if(a < b) {
//     return -1;
//   }
// });
// console.log(numSort);
// /* or */
// const numSort2 = operations.sort((a, b) => a - b );
// console.log(numSort2);


/* new Array() */

// const arr1 = new Array(1, 2, 3, 4, 5);
// console.log(arr1);

// const arr2 = new Array(5); //пустой массив из 5 ти элеметов
// console.log(arr2);

// const arr3 = Array.from({length: 100}, (el, i) => i + 1);
// console.log(arr3);



// const str = 'Atajan Atabegov';

// console.log(str.includes('j'));
// console.log(str.startsWith('A'));
// console.log(str.endsWith('v'));

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.replace('A', 'a'));
// console.log(str.replaceAll('A', 'a'));



// const str = 'Atajan Atabegov Myradovich';

// const arrToStr = str.split(' ');
// console.log(arrToStr);

// const [firstName, lastName, fatherName] = str.split(' ');
// console.log(firstName);
// console.log(lastName);
// console.log(fatherName);

// const arr = ['i', 'love', 'js'];
// const strToArr = arr.join(' - ');
// console.log(strToArr);





// const mas = 'i love js';
// const modMas = mas.padStart(100, '*');
// console.log(modMas);
// const modMas2 = mas.padEnd(100, '*');
// console.log(modMas2);
// const repMas = mas.repeat(10);
// console.log(repMas);


// const cardNum = '1234123412341234';
// const pasCardNum = cardNum.slice(-4).padStart(16, '*');
// console.log(pasCardNum);




/* object */

// const user = {
//   name: 'Myrat',
//   lastName: 'Amanov',
//   age: 28,
//   skills: ['coding', 'cooking'],
//   eduBasic: 'school 16',
//   eduPro: 'vspu',
// };

// console.log(user);
// console.log(user.skills);
// console.log(user.skills[0]);
// console.log(user['skills']);

// const level = 'Pro';
// console.log(user['edu' + level]);

// user.sity = 'moskov';
// console.log(user);

// user['hobby'] = 'f1';
// console.log(user);


// const users = [
//   {name: 'men', age: 24},
//   {name: 'sen', age: 19},
//   {name: 'ol', age: 15},
//   {name: 'biz', age: 50},
// ];
// const sortAge = users.sort((a, b) => {
//   return a.age - b.age;
// });

// console.log(sortAge);



// /* переобразования обьектов */
// const users = [
//   {
//     name: 'men',
//     lastName: 'biz',
//     age: 24,
//     skills: ['coding', 'cooking'],
//   },
//   {
//     name: 'sen',
//     lastName: 'siz',
//     age: 30,
//     skills: ['cooking'],
//   }
// ];
// console.log(users);

// const newUsers = users.map(user => {
//   return{
//     fullName: `${user.name} ${user.lastName}`,
//     skillsNum: user.skills.length
//   };
// });
// console.log(newUsers);




// const user = {
//   name: 'at',
//   lastName: 'familiya',
//   age: 24,
//   getFullName: function() {
//     return this.name + ' ' + this.lastName;
//   },
//   getAge: function(){
//     return `men ${this.age} yasymda`;
//   }
// };

// console.log(user.getFullName());
// console.log(user.getAge());




// const wallet = {
//   balance: 0,
//   operations: [],

//   plusOperations: function(sum, what){
//     this.balance += sum;
//     this.operations.push({sum, what});
//     return this.balance;
//   },

//   minusOperations: function(sum, what) {
//     if (this.balance < sum) {
//       console.log(`balance menshe chem summa kot vy hotite potratit. bash bal: ${this.balance}, a vy pyt potratit ${sum}`);
//       return false;
//     }
//     this.balance -= sum;
//     this.operations.push({sum: -sum, what});
//     return this.balance;
//   },

//   getOperationsLenght: function(){
//     return this.operations.length;
//   }
// };

// console.log(wallet.plusOperations(1000, 'zp'));
// console.log(wallet.plusOperations(1000, 'zp'));
// console.log(wallet.minusOperations(3000, 'notebook'));
// console.log(wallet.plusOperations(1000, 'zp'));
// console.log(wallet.minusOperations(1000, 'remont'));
// console.log(wallet.getOperationsLenght());
// console.log(wallet.operations);





// const cities = {
//   msk: {
//     temp: 25,
//     ploshad: 200
//   },
//   spb: {
//     temp: 20,
//     ploshad: 150
//   }
// };

// let sumTemp = 0;
// let sumCities = Object.keys(cities).length;

// // for (const key in cities) {
// //   sumTemp += cities[key].temp;
// // }
// // console.log(sumTemp / sumCities);

// for (const key of Object.keys(cities)) {
//   sumTemp += cities[key].temp;
// }
// console.log(sumTemp / sumCities);





