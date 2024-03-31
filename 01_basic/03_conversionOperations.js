// Number conversion

let score = "hii"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true = 1
// false = 0


// String conversion

let num = 33;

let stringNum1 = String(num);
let stringNum2 = num.toString()
let stringNum3 = num + '';
let stringNum4 = num + '5'; // '335' 

// console.log(stringNum3);
// console.log(typeof stringNum3);

// Integer Conversion 

let floatNum = 3.14
let intNum = parseInt(floatNum);
let intNum2 =  Math.floor(floatNum)

// console.log(intNum); 3
// console.log(intNum2); 3

// Boolean conversion 

let isLoggedIn = undefined

let boolean = Boolean(isLoggedIn);

// console.log(typeof boolean);
// console.log(boolean);

// Array conversion 

let str = 'Ankit';
let arr1 = Array.from(str);
let arr2 = [...str]

// console.log(arr1);
// console.log(arr2);


// ****************************************** Operators in JS ***************************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power
// console.log(2/3);
// console.log(2%3); // modules (give remainder)

let str1 = "hello";
let str2 = " ankit";

let str3 = str1 + str2;
// console.log(str3);

// string plus number concadenation

// console.log(1 + "2"); // type of string ("12")
// console.log("1" + 2); // type of string ("12")
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"

// console.log(+true);
console.log(typeof(+"44"));
// console.log(+"");

// Increment operator

let gameCounter1 = 100;
let gameCounter2 = 100;
let test1 = gameCounter1++;
let test2 = ++gameCounter2;
console.log(`gameCounter1 : ${gameCounter1}`);
console.log(`gameCounter2 : ${gameCounter2}`);
console.log(test1);
console.log(test2);

// Pre-increment(++x): The pre-increment operator (++) increases the value of a variable by 1 before using its value.
// Post-increment(x++): The post-increment operator (++) first use the value then increase it by 1.


