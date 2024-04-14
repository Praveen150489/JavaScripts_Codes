let score = "33";
let result = 44;

console.log(typeof(score));
//console.log(typeof score);

console.log(typeof(result));
//console.log(typeof result);

let numScore = Number(score);
console.log(typeof(numScore));

let strResult = String(result);
console.log(typeof(strResult));

let str = "abc";
console.log(str,typeof(str));

// if you want to convert the above string into number, but above str is not into 100% number,
// then it will convert into some default number value like that => NaN
let newNum = Number(str);
console.log(newNum);     // output => NaN
console.log(typeof(newNum)); // type => number

let num = null;
console.log(typeof(num));
let numVal = Number(null);
console.log(typeof(numVal));
console.log(numVal);

let num1 = undefined;
console.log(typeof num1);
let numVal1 = Number(num1);
console.log(typeof numVal1);
console.log(numVal1);

let num2 = true;
console.log(typeof num2);
let numVal2 = Number(num2);
console.log(typeof numVal2);
console.log(numVal2);

// short Notes for conversions:-
// input => output , type after conversion
// "33" => 33 , number
// "33abc" => NaN (Not a Number) , number
// "abc" => NaN , number
// null => 0 , number
// undefined => NaN , number
// true/false => 1/0 , number

// convert from number to boolean:-
let login = 1;
console.log(login, typeof(login));
let booleanLogin = Boolean(login);
console.log(booleanLogin, typeof(booleanLogin));

// convert from string to boolean:-
let login1 = "";
console.log(login1, typeof(login1));
let booleanLogin1 = Boolean(login1);
console.log(booleanLogin1, typeof(booleanLogin1));

let login2 = "Praveen";
console.log(login2, typeof(login2));
let booleanLogin2 = Boolean(login2);
console.log(booleanLogin2, typeof(booleanLogin2));

// Notes:-
// 1 or greater than 1 => true
// 0 => false
// "" => false
// "Praveen" => true