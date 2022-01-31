
//------------professional JS chapter1-3 Start---------
//chapter 3

/*function test() {
	 message = "hello world!";// global vairible
}
test();
console.log(message);*/




/*function foo() {
console.log(age);
var age = 26;
}
foo(); // undefined


function foo() {
var age;
console.log(age);
}
foo(); // undefined
*/





/*var name;
var name;
let age;
let age; // SyntaxError; identifier 'age' has already been declared

var name;
let name; // SyntaxError
let age;
var age; // SyntaxError*/




/*var name = 'Matt';
console.log(window.name); // 'Matt'
let age = 26;
console.log(window.age); // undefined
console.log(window);*/




/*const myTimeout = setTimeout(myGreeting, 5000);
function myGreeting() {
  document
  .getElementById("demo")
  .innerHTML = "Happy Birthday!"
}*/





/*for (var i = 0; i < 5; ++i) {
setTimeout(() => console.log(i), 2000)
}
// You might expect this to console.log 0, 1, 2, 3, 4
// It will actually console.log 5, 5, 5, 5, 5

for (let i = 0; i < 5; ++i) {
setTimeout(() => console.log(i), 0)
}
// console.logs 0, 1, 2, 3, 4*/





/*for (var i = 0; i < 5; ++i) {
console.log(i);
setTimeout(() => console.log(i), 0);
}
console.log(i);*/





/*setTimeout(() => console.log("a"), 0);
for (var i = 0; i < 1000; i++) {
	console.log(i);
}
//"b" doesn't waiting the result "a", 
//even if the timeout is 0
*/





// console.log(typeof null);





/*let a = "b";
console.log(a.length);*/

/*let lang = "Java";
lang = lang + "Script";
console.log(lang);*/





/*let pageHTML = `
<div>
  <a href="#">
  <span>Jake</span>
  </a>
</div>`;
console.log(pageHTML);*/





/*
// This template literal has 25 spaces following the line return character
let myTemplateLiteral = `first line
                         second line`;
console.log(myTemplateLiteral);
console.log(myTemplateLiteral.length); // 47
// This template literal begins with a line return character
let secondTemplateLiteral = `
first line
second line`;
console.log(secondTemplateLiteral);
console.log(secondTemplateLiteral[0] === '\n'); // true
// This template literal has no unexpected whitespace characters
let thirdTemplateLiteral = `first line
second line`;
console.log(thirdTemplateLiteral);
console.log(thirdTemplateLiteral[0]);
// first line
// second line*/






/*let person = "Javascript"
let a = "I love you" + person;
console.log(a);

let b = `I love you ${person}`;
console.log(b);

let value = 5;
let exponent = 'second';
// Formerly, interpolation was accomplished as follows:
let interpolatedString =
value + ' to the ' + exponent + ' power is ' + (value * value);
// The same thing accomplished with template literals:
let interpolatedTemplateLiteral =
`${ value } to the ${ exponent } power is ${ value * value }`;
console.log(interpolatedString); // 5 to the second power is 25
console.log(interpolatedTemplateLiteral); // 5 to the second power is 25*/






/*console.log(`Hello, ${ `World` }!`); // Hello, World!

let foo = { toString: () => 'World' };
console.log(`Hello, ${ foo }!`); // Hello, World!
*/





/*let text = "Hello world!";
let result = text.slice(0, 5);

document.getElementById("demo").innerHTML = result;

let text = "Hello world!"; 
let result = text.slice(3);

document.getElementById("demo").innerHTML = result;*/






/*function capitalize(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

let a = capitalize("hello");
console.log(a);*/


/*let stringA = "abcdefg";

function pyramid(string) {
  let stringTemp = "";
  for(let i = 0; i < stringA.length; i++) {
    
    stringTemp += string[i];
    console.log(stringTemp);
  }
}
pyramid(stringA);*/






/*let a = 6;
let b = 9;
function T(strings, aValExpression, bValExpression, sumExpression) {
console.log(strings);
console.log(aValExpression);
console.log(bValExpression);
console.log(sumExpression);
// return 'foobar';
}
// let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
let taggedResult = T`${ a } + ${ b } = ${ a + b }`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15
//console.log(untaggedResult); // "6 + 9 = 15"
//console.log(taggedResult); // "foobar"*/

/*let a = "Hello";
let b = "javascript";
let c = fun`${a}, ${b}!!!`;

function fun(s, a, b){
  // console.log(b);
  let d = a;
  a = b;
  b = d;
  return b;
}
console.log(c);*/





/*const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);
//myFunction(numbers[0]);
document.getElementById("demo").innerHTML = newArr;

function myFunction(num) {
  return num * 10;
}*/





/*const numbers = [65, 44, 12, 4];
const newArr = 
numbers.map((num) => num *10);
//myFunction(numbers[0]);
document.getElementById("demo").innerHTML = newArr;

// function myFunction(num) {
//   return num * 10;
// }
*/




/*let a = 6;
let b = 9;
function zipTag(strings, ...expressions) {
return strings[0] +
expressions.map((e, i) => `${e}${strings[i + 1]}`)
.join('');
}
// let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
let taggedResult = zipTag`${ a } + ${ b } = ${ a + b }`;
// console.log(untaggedResult); // "6 + 9 = 15"
console.log(taggedResult); // "6 + 9 = 15"
console.log();*/



/*function printRaw(strings) {
  console.log('Actual characters:');
  for (const string of strings) {
    console.log(string);
  }
  console.log('Escaped characters;');
  for (const rawString of strings.raw) {
    console.log(rawString);
  }
}
printRaw`\u00A9${ 'and' }\n`;
// Actual characters:
// ©
// (newline)
// Escaped characters:
// \u00A9
// \n*/




/*let fuel = "fuel tank capacity";
let car = {["name"]: "volvo", color: "white"};
car.weight = 40;
car["seat number"] = 8;
car[fuel] = 10;

console.log(car.name);*/





/*const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: true
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42*/






/*let s1 = Symbol('foo'),
s2 = Symbol('bar'),
s3 = Symbol('baz'),
s4 = Symbol('qux');
let o = {
[s1]: 'foo val'
};
// Also valid: o[s1] = 'foo val';
console.log(o);
// {Symbol{foo}: foo val}

Object.defineProperty(o, s2, {value: 'bar val'});
console.log(o);
// {Symbol{foo}: foo val, Symbol(bar): bar val}
Object.defineProperties(o, {
[s3]: {value: 'baz val'},
[s4]: {value: 'qux val'}
});
console.log(o);
// {Symbol{foo}: foo val, Symbol(bar): bar val,
// Symbol{baz}: baz val, Symbol(qux): qux val}
*/




/*let s1 = Symbol('foo'),
s2 = Symbol('bar');
let o = {
[s1]: 'foo val',
[s2]: 'bar val',
baz: 'baz val',
qux: 'qux val'
};
console.log(Object.getOwnPropertySymbols(o));
// [Symbol(foo), Symbol(bar)]
console.log(Object.getOwnPropertyNames(o));
// ["baz", "qux"]
console.log(Object.getOwnPropertyDescriptors(o));
// {baz: {...}, qux: {...}, Symbol(foo): {...}, Symbol(bar): {...}}
console.log(Reflect.ownKeys(o));
// ["baz", "qux", Symbol(foo), Symbol(bar)]*/


/*const array1 = [5, 12, 8, 39, 40];

const found = array1.find(element => element > 20);

console.log(found);
// expected output: 12
*/

/*let o = {
[Symbol('foo')]: 'foo val',
[Symbol('bar')]: 'bar val'
};
console.log(o);
// {Symbol(foo): "foo val", Symbol(bar): "bar val"}
let barSymbol = Object.getOwnPropertySymbols(o)
.find((symbol) => symbol.toString().match(/bar/));
console.log(barSymbol);
// Symbol(bar)*/

//------------professional JS chapter1-3 END---------

//-------------heiMa JS basic Start-----------------
/*
// note: if(==) convert type only 
// for compare in if but not in statement
var a = '3';
if(a == 3) {
  console.log(a);
  console.log(typeof a);
}*/




//console.log(1 && 4 && 2 + 3);




/*// print regular triangle stars
var stars = '';
var num = prompt("Please enter the line's no.");
for(let j = 0; j < num; j++) {
  for(let i = 0; i < j+1; i++) {
    stars += '☆';
  }
  stars += '\n';
}
console.log(stars);*/


/*//1x1=1 1x2=2 2x2=4
var str = '';
for(let j = 1; j <= 9; j++) {
  for (let i = 1; i <= j; i++) {
  str += i + 'x' + j + '=' + j*i +'\t';
  }
  str += '\n';
}

console.log(str);*/




/*//assignment 1: average from 1 to 100
let maxNo = 100;
let sum = 0;
let average = 0;
for (let i = 1; i <= maxNo; i++) {
  sum += i;
}
average = sum / maxNo;
console.log(average);
console.log(sum);*/


/*// assignment 2: sum of even between 1-100
let maxNo = 100;
let sumEven = 0;
for (let i = 1; i <= maxNo; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  }
}
console.log(sumEven);*/

/*// assignment 3: sum of multiples of 7 within 100
let sumX7 = 0;
let maxNo = 100;
for (let i = 1; i <= maxNo; i++) {
  if (i % 7 == 0) {
    sumX7 += i;
  }
}
console.log(sumX7);*/


/*//assignment 4: 4 rows by 5 columns stars
let rows = 8;
let columns = 3;
let stars = '';
for (let j = 1; j <= rows; j++) {
  for (let i = 1; i <= columns; i++) {
    stars += '☆';
  }
  stars += '\n';
}

console.log(stars);*/




/*//assignment 5: 4 rows regular triangle stars
let rows = 8;
let stars = '';
let regularTriangle = false;
let iScope = 0;


for (let j = 1; j <= rows; j++) {
  if(regularTriangle) {
    iScope = j;
  } else {
    iScope = rows - j + 1;
  } 
    for (let i = 1; i <= iScope; i++) {
      stars += '☆';
    }
  stars += '\n';
}

console.log(stars);*/


/*// assignment 6: 9x9 multiplication table
let rows = 9;
let columns = 9;
let Xstring = '';
for (let j = 1; j <= rows; j++) {
  for (let i = 1; i <= j; i++) {
    Xstring += i + 'x' + j + '=' + i * j + '\t';
  }
  Xstring += '\n';
}
console.log(Xstring);*/



/*// assignment 7: receive user name and password, 
// if user name = admin and password = 123456
// then alert login successful
// else continue to enter 
let userName = '';
let userPassword = '';
while (userName !== 'admin' || 
  userPassword !== '123456') {
  userName = prompt('Please enter your name: ');
  userPassword = prompt('Please enter your password');
} 
alert('You have login successfully!');*/




/*// assignment 8: sum within 100, 
// except the number with the units digit is 3
let sum = 0;
let maxNo = 100;
for (let i = 1; i <= maxNo; i++) {
  if (i % 10 == 3) {
    continue;
  }
  sum += i;
}
console.log(sum); // 4570 */

/*let sum = 0;
let maxNo = 100;
for (let i = 1; i <= maxNo; i++) {
  if (i % 10 !== 3) {
    sum += i;
  }
  
}
console.log(sum);// 4570*/





/*//ATM 
let currentBalance = 100;
let amount = 0;
let serviceNo = 0;
let quitBoolean = true;
while(quitBoolean) {
  switch (serviceNo) {
  case '1': depositCash(); serviceStart(); break;
  case '2': withdrewCash(); serviceStart(); break;
  case '3': checkBalance(); serviceStart(); break;
  case '4': quit(); break;
  default: serviceStart();
  }
}

function serviceStart () {
  serviceNo = prompt(
  ` Please choose the service No.: 
  1. Deposit Cash
  2. Withdraw Cash
  3. Check Balance
  4. Quit
  `);
}
function depositCash () {
  amount = prompt('How much would you deposit?') - 0;
  currentBalance += amount;
}

function withdrewCash () {
  amount = parseInt(prompt('How much would you withdraw?'));
  currentBalance -= amount;
}

function checkBalance () {
  alert('Your balance is:' + currentBalance);
}

function quit () {
  alert('You have already quit the service.' );
  quitBoolean = false;
}*/



/*//bubble sort
function bubbleSort (DataArray, largerBoolean) {
  let arr = DataArray;
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length -1 - j; i++) {
      if(largerBoolean){
        if(arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        }
      } else {
        if(arr[i] < arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        }
      }
    }
  }
}
let arr = [3,9,6,4,7,2,1];
bubbleSort(arr, false);
console.log(arr);*/



/*//bubble sort [debug error]
let arr = [5, 4, 3, 2, 1];
for (let j = 0; j < arr.length - 1; j++) {
  for (let i = 0; i < arr.length -1 - j; i++) {
    if(arr[i] > arr[i+1]) {
      exchangeData();
    }
  }
}
console.log(arr); // Uncaught ReferenceError: i is not defined
function exchangeData () {
  let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
}*/




/*// simple calculator
let num1 = 0;
let operator = '';
let num2 = 0;
let quitBoolean = false;


function operateTwoNumber (number1, number2, operator4) {
  switch (operator4){
    case '+': return number1 + number2; break;
    case '-': return number1 - number2; break;
    case 'x': return number1 * number2; break;
    case '/': return number1 / number2; break;
    default: start();
  }
}
function start() {
  num1 = parseFloat(prompt('Please enter the 1st number: '));
  operator = prompt(
  `Please enter the operator: 
  (+  -  x  /)`);
  num2 = parseFloat(prompt('Please enter the 2nd number: '));

}

function quit() {
  
  let quitInput = prompt('Would you quit? Y / N (or any key)');
  if((quitInput =='Y')||(quitInput =='y')) {
    quitBoolean = true;
  } else {
    quitBoolean = false;
  }
}

while(!quitBoolean) {
  let result = 0;
  start();
  result = operateTwoNumber (num1, num2, operator);
  alert(result);
  quit();

}*/



/*//find the largest number
let quitBoolean = false;
while(!quitBoolean) {
  let num1 = parseFloat(prompt('1st No.:'));
  let num2 = parseFloat(prompt('2nd No.:'));
  let num3 = parseFloat(prompt('3rd No.:'));
  let temp = 0;
  temp = num1 > num2? num1:num2;
  temp = temp > num3? temp:num3;
  alert('The largest number is: ' + temp);
  quit();
}

function quit() {
  
  let quitInput = prompt('Would you quit? Y / N (or any key)');
  if((quitInput =='Y')||(quitInput =='y')) {
    quitBoolean = true;
  } else {
    quitBoolean = false;
  }
}*/



/*//check if it's a prime number
let quitBoolean = false;
while(!quitBoolean) {
  let num = parseFloat(prompt('Enter No.:'));
  for(let i = 1; i < num; i++) {

    if(i > 1 && num % i === 0) {
      alert(num + ' isn\'t a prime number.');
      break;
    }
    else if (i === num-1) {
      alert(num + ' is a prime number.');
      break; 
    }

  }
}*/



/*// create a object literal
let puppy1 = {
  name: 'coco',
  type: 'alaska',
  age: 5,
  color: 'brown',
  bark: function () {},
  showfilm: function() {}
};

console.log(puppy1);*/


/*
// create object method in different ways
function bark() {return 'wang!'}
function showfilm () {console.log('hahahaha') }
let puppy1 = {
  name: 'coco',
  type: 'alaska',
  age: 5,
  color: 'brown',
  skill1: bark (),
  skill2: showfilm() // without return, undefined
};

console.log(puppy1);*/


/*function bark() {return 'wang!'}
function showfilm () {console.log('hahahaha') }
let puppy1 = {
  name: 'coco',
  type: 'alaska',
  age: 5,
  color: 'brown',
  skills: {skill1: bark(), skill2: showfilm()}
    // without return, undefined
};

console.log(puppy1);*/



/*let puppy1 = {
  name: 'coco',
  type: 'alaska',
  age: 5,
  color: 'brown',
  skills: {
    bark: function() {console.log('wang!') }, 
    showfilm: function() {return 'miao!'}
    // without return, undefined
  }  
};
puppy1.age = 10;
puppy1.skills.attack = function () {};
// attention: no parenthesis in function identifier

console.log(puppy1);
console.log(puppy1.name);
console.log(puppy1.skills.bark());
console.log(puppy1.skills.showfilm());
// attention: with parenthesis when invoking function
*/







/*let puppy1 = new Object();
puppy1.name = 'coco';
puppy1['type'] = 'alaska';
puppy1.age = 5;
puppy1['color'] = 'brown';
puppy1.skills = new Object();
// sub object should be declared.
puppy1.skills.bark = 
  function() {console.log('wang!')};
puppy1.skills.showfilm = 
  function() {return 'miao!'};
puppy1.skills.attack = function (strength) {
  console.log(strength*2);
}

puppy1.skills.attack(4);
console.log(puppy1);
console.log(puppy1.skills.bark());
console.log(puppy1.skills.showfilm());*/


/*function Puppys(name, attack) {
  this.name = name;
  this.type = type;
  this.attack = function (strength) {
    console.log(strength);
    return strength;
  };
}
let puppy1 = new Puppys('coco');
puppy1.attack('medium');
console.log(puppy1);*/

/*function playGame(Dimension) {
  return Dimension;
}

let computer1 = {
  color:'silver',
  'weight (g)': 400,
  brand: 'thinkpad',
  watchMovie: function (movieTitle) {
    return movieTitle;},
  playWhat: playGame(3),
  typeCode: function () {},
  trade: function buy(item) {return item;}
};

console.log(computer1);
console.log(computer1.color);
console.log(computer1.playWhat);
console.log(computer1.watchMovie('triangle'));
console.log(computer1.trade('guitar'));*/



/*
//create constructor function 
function playGame(Dimension) {
  return Dimension;
}

function computers (color, weight, brand) {
  this.color = color,
  this['weight (g)'] = weight,
  this.brand = brand,
  this.watchMovie = function (movieTitle) {
    return movieTitle;},
  this.playWhat = playGame(3),
  this.typeCode = function () {},
  this.trade = function buy(item) {return item;}
};

let computer1 = new computers('silver', 30, 'acer');

console.log(computer1);
// console.log(computer1.color);
console.log(computer1.playWhat);
console.log(computer1.trade('book'));
// console.log(computer1.watchMovie('triangle'));
// console.log(computer1.trade('guitar'));*/


/*// swap the front and back elements in an array
let arr = [1, 4, 2, 5, 6];
function swapArray(arr) {
  let arrNew = [];
  console.log(arrNew);
  // attention: show the result as if console is behind for cycle
  for(let i = 0; i < arr.length; i++) {
    arrNew[i] = arr[arr.length-1-i];
  }
  return arrNew;
}
arr = swapArray(arr);
console.log(arr);*/



/*
// attention: empty array and console result
let arrNew = [];
console.log(arrNew);
console.log(arrNew[0]);
// console.log(arrNew);
arrNew[0] = 8;*/



/*//create own object bubble sort 
let HyBubbleSort = {
  larger: function () {
            let arr = arguments;
            for(i = 0; i < arguments.length; i++) { 
            // keep or remove: same result
              arr[i] = arguments[i];
            }
            console.log(arr);
            for (let j = 0; j < arr.length - 1; j++) {
              for (let i = 0; i < arr.length -1 - j; i++) {
                if(arr[i] > arr[i+1]) { // > -> larger
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                }
              }
            }
            return arr;    
          },
  smaller: function () {
            let arr = arguments;
            for (let j = 0; j < arr.length - 1; j++) {
              for (let i = 0; i < arr.length -1 - j; i++) {
                if(arr[i] < arr[i+1]) { // < -> smaller
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                }
              }
            }
            return arr;
          }
};
console.log(HyBubbleSort.larger(2,3,1,7,4,5));
console.log(HyBubbleSort.smaller(2,3,1,7,4,5));*/

/*function bubbleSort (DataArray, largerBoolean) {
  let arr = DataArray;
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length -1 - j; i++) {
      if(largerBoolean){
        if(arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        }
      } else {
        if(arr[i] < arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        }
      }
    }
  }
}
let arr = [3,9,6,4,7,2,1];
bubbleSort(arr, false);
console.log(arr);*/




/*
//built-in object method Math
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
  //The maximum is inclusive and the minimum is inclusive
}
console.log(getRandomIntInclusive(1, 100));
console.log(Math.random());
console.log(Math.max(4,2,6,8));
console.log(Math.abs(-3.5));
console.log(Math.floor(3.6));
console.log(Math.ceil(3.6));
console.log(Math.round(3.6));*/



/*
// built-in constructor function Date()
console.log(new Date());
console.log(new Date(2022,0,24,9,42,1));
// Mon Jan 24 2022 09:42:01 GMT-0500 (北美东部标准时间)
console.log(new Date('2022-1-24 9:44:8'));


console.log(new Date().getFullYear());


let date = new Date();
console.log(date.getFullYear());*/




/*
// create time format: HyDate()
function HyDate(){
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let dates = date.getDate();
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours<10? '0'+hours:hours;
  minutes = minutes<10? '0'+minutes:minutes;
  seconds = seconds<10? '0'+seconds:seconds;
  let arrDay = 
  ['Sunday', 'Monday', 
  'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'];
  let formatTime = 
  `Today is: 
  ${year}-${month+1}-${dates} ${arrDay[day]}
  ${hours}:${minutes}:${seconds}`;
  return formatTime;
}
console.log(HyDate());*/




/*console.log(new Date().valueOf());
console.log(+new Date());
console.log(Date.now());*/



/*
//return object function HyCountDown(time)
function HyCountDown(time) {
  let timeStamp = Date.now();
  let timeInput = +new Date(time);
  let timeLeft = (timeInput - timeStamp)/1000;
  let obj = {};
  // console.log(timeInput);
  d = Math.floor(timeLeft/60/60/24);
  hours = Math.floor(timeLeft/60/60%24);
  minutes = Math.floor(timeLeft/60%60);
  seconds = Math.floor(timeLeft%60)
  
  hours = hours<10? '0'+hours:hours;
  minutes = minutes<10? '0'+minutes:minutes;
  seconds = seconds<10? '0'+seconds:seconds;
  obj.d = d;
  obj.hours = hours;
  obj.minutes = minutes;
  obj.seconds = seconds;

  return obj;
}
console.log(HyCountDown('2022-2-1 0:0:0').d);*/


/*
//return object by constructor function HyCountDown(time)
function HyCountDown(time) {
  let timeStamp = Date.now();
  let timeInput = +new Date(time);
  let timeLeft = (timeInput - timeStamp)/1000;
  // let obj = {};
  // console.log(timeInput);
  d = Math.floor(timeLeft/60/60/24);
  hours = Math.floor(timeLeft/60/60%24);
  minutes = Math.floor(timeLeft/60%60);
  seconds = Math.floor(timeLeft%60)
  
  hours = hours<10? '0'+hours:hours;
  minutes = minutes<10? '0'+minutes:minutes;
  seconds = seconds<10? '0'+seconds:seconds;
  this.d = d;
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;


}
// console.log(HyCountDown('2022-2-1 0:0:0'));
let countDownNY = 
new HyCountDown('2022-2-1 0:0:0');

console.log(countDownNY);*/


// compare the differents method to build 
// your own libaray
// eg. find the max and min in an array
/*let arrEg = [3,2,4,6,8];
//1. function 
function HyFindXL(arr) {
  let max = arr[0];
  let min = arr[0];
  let obj = {};
  for(let i = 1; i < arr.length; i++) {
    max = arr[i]>max? arr[i]:max;
    min = arr[i]<min? arr[i]:min;
  }
  obj.max = max;
  obj.min = min;
  return obj;
}
console.log(HyFindXL(arrEg));
console.log(HyFindXL(arrEg).max);
// note: HyFindXL(arrEg) indicates a return from
// a Function (HyFindXL) with the argument (arrEg)
// .max indicates the return data type is object
*/

/*//2. constructor function 
let arrEg = [3,2,4,6,8];
function HyFindXL(arr) {
  let max = arr[0];
  let min = arr[0];
  let obj = {};
  for(let i = 1; i < arr.length; i++) {
    max = arr[i]>max? arr[i]:max;
    min = arr[i]<min? arr[i]:min;
  }
  this.max = max;
  this.min = min;
}
let findXL = new HyFindXL(arrEg);
console.log(findXL);
console.log(findXL.max);
// new indicates an instantiation of 
// a constructor function */



/*//3. object 
let HyFindXL = {
  findMax: function (arr) {
    let max = arr[0];
    let obj = {};
    for(let i = 1; i < arr.length; i++) {
      max = arr[i]>max? arr[i]:max;
    }
    return max;
  },
  findMin: function (arr) {
    let min = arr[0];
    let obj = {};
    for(let i = 1; i < arr.length; i++) {
      min = arr[i]<min? arr[i]:min;
    }
    return min;
  }
};
let arrEg = [3,2,4,6,8];
console.log(HyFindXL.findMax(arrEg));*/



/*//detect whether it's an array
arr = [];
obj = {};
console.log(arr instanceof Array);
console.log(obj instanceof Object);
console.log(Array.isArray(arr));*/

/*// remove the max and min 
let p1 = 1, p2 = 2, p3 = 3, p4 = 4, p5 = 5;
let arr = [];
arr.push(p1,p2,p3);
arr.unshift(p4,p5);
console.log(arr);
let findXL = new HycFindXL(arr);
let maxIndex = arr.indexOf(findXL.maxValue);
arr.splice(maxIndex, 1);
findXL = new HycFindXL(arr);
let minIndex = arr.indexOf(findXL.minValue);
arr.splice(minIndex, 1); 
//splice(int1,int2): 1 ->
//remove int2 elements fromthe start index int1
console.log(arr);*/




/*
// array method: .reverse .sort
let arr = [6,3,8,7,4];
// console.log(arr.reverse());
// console.log(arr);
// console.log(arr.sort());

// arr.sort((a, b) => b-a);
// arr.sort(function(a,b) {return a-b;});

console.log(arr);*/



/*// unique elements
function HyMakeUnique(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let arr = [3, 4, 6, 1, 3, 7, 3, 1];
console.log(HyMakeUnique(arr));*/


// array convert to string
/*let arr = ['L','o','\040','v','e'];
let newStr = arr.toString();
console.log(newStr);
newStr = arr.join('&');
console.log(newStr);
newStr = arr.join(' ');
console.log(newStr);
newStr = arr.join('');
console.log(newStr);
newStr = arr.join();
console.log(newStr);

let arr1 = ['I', '\040', 'Love', '\040', 'You'];
newStr = arr1.join('');
console.log(newStr);*/



/*////string indexOf
let str = 'abcdefcg';
console.log(str.length);
console.log(str.indexOf('c'));
console.log(str.indexOf('c',3));*/



/*// find index and frequency of occurrence
// of a given character in a str

function HyFindChar(str, char) {
  let index = [];
  let frequency = 0;
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(char, i) === -1) {
      break;
    } else {
      index.push(str.indexOf(char, i));
      i = str.indexOf(char, i);
    }
  }
  this.frequency = index.length;
  this.index = index;
// attention: return can also be used as usuall 
//with new-this, but this cannot be invoked
}

console.log(new HyFindChar('abcddceefc', 'c'));*/




/*// return char as index of string
let str = 'I Love You';
console.log(str.charAt(2));
console.log(str.charCodeAt(1));
console.log(str[3]);*/
/*// remove the repeated char to form a new string
function HyMakeStrUnique(str){
  let strUnique = str[0];
  for(let i = 1; i < str.length; i++) {
    if(strUnique.indexOf(str[i]) === -1) {
      strUnique += str[i];
    }
  }
  return strUnique;
}*/





// method 1: 
/*function HyFindMostChar1(str) {
  let unique = HyMakeStrUnique(str);
  let charMost = '';
  let freq = 0;
  let arr = [];
  for(let i = 0; i < unique.length; i++) {
    let findChar = new HyFindChar(str, unique[i]);
    if(freq < findChar.frequency) {
      freq = findChar.frequency;
      charMost = unique.charAt(i);
    }
    arr.push(charMost, freq);
   return arr;
  }
}
let str = 'ggdegraeeew';
console.log(HyFindMostChar1(str));*/

/*// a property doesn't exist in an object,
// if(undefined) means false
let obj = {};
console.log(obj.a); 
if(obj.a) {
  console.log('true');
} else {
  console.log('false');
}*/




/*function HyListStrCharAndFreq(str) {
  let obj = {};
  for(let i = 0; i < str.length; i++) {
    if(obj[str.charAt(i)]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  } 
  return obj;
}
// method 2:
function HyFindMostChar2(str) {
  let obj = HyListStrCharAndFreq(str);
  console.log(obj);
  let value = 0;
  let propMost = '';
  let arr = [];
  for(let prop in obj) {
    if(obj[prop] > value) {
      value = obj[prop];
      propMost = prop;
    }
  }
  arr.push(propMost, value);
  return arr;
}
let str = 'ggdegreaeeew';
console.log(HyFindMostChar2(str));*/



/*// string operations
let str1 = 'Loving';
let str2 = 'You';
let str3 = '!!!';
strDemo = str1.concat(' ',str2,str3);
console.log(strDemo);// loving you!!!
console.log(strDemo.substr(2, 3));// vin
console.log(strDemo);// loving you!!!

console.log(strDemo.slice(1,4)); // ovi
console.log(strDemo.substring(1,4)); // ovi
console.log(strDemo.replace('!','.')); // loving you.!!
console.log(strDemo.replace('!!!','...')); // loving you...

// replace all in a string
while(strDemo.indexOf('o') !== -1) {
  strDemo = strDemo.replace('o', '♡');
}
console.log(strDemo);

console.log(strDemo.toUpperCase()); //L♡VING Y♡U!!!
console.log(strDemo); // L♡ving Y♡u!!!
console.log(strDemo.toLowerCase()); //L♡VING Y♡U!!!
*/





/*// array operations
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let arr3 = [2, 3, 5];
let arrDemo = arr1.concat(arr2, arr3);
console.log(arrDemo); //[1, 3, 5, 2, 4, 6, 2, 3, 5]

console.log(arrDemo.slice(2,4)); //[5, 2]
console.log(arrDemo); 
console.log(arrDemo.splice(2,4)); //[5, 2, 4, 6]
console.log(arrDemo); //[1, 3, 2, 3, 5]*/





























//-------------heiMa JS basic END-----------------