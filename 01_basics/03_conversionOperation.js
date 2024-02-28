let score = "Prabhat"

console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
//  true => 1, false => 0
// undefines => NaN
// string => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// let isLoggedInString = "prabhat"
// let booleanIsLoggedInString = Boolean(isLoggedInString);
// console.log(booleanIsLoggedInString);

let isLoggedInString = ""
let booleanIsLoggedInString = Boolean(isLoggedInString);
console.log(booleanIsLoggedInString);

// *************      number to string    **************
let someNumber = 33
let someNumberString = String(someNumber)
console.log(someNumberString);
console.log(typeof(someNumberString));



// ******************** Operations ********************* //
let value = 33
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2/2)
// console.log(2*2)
// console.log(2**2)
// console.log(2%2)

let str1 = "Hello "
let str2 = "Prabhat"
let str3 = str1+str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2)

// console.log(+true)
// console.log(+"")

let gameCounter = 0
gameCounter++
console.log(gameCounter)