// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        // console.log("Month is January");
        break;
    case 2:
        // console.log("Month is February");
        break;
    case 3:
        // console.log("Month is March");
        break;
    case 4:
        // console.log("Month is April");
        break;
    case 5:
        // console.log("Month is May");
        break;

    default:
        // console.log("Not a valid month");
        break;
}


const monthString = "feb"
switch (monthString) {
    case "jan":
        // console.log("Month is January");
        break;
    case 'feb':
        // console.log("Month is February");
        break;
    case "march":
        // console.log("Month is March");
        break;
    case "apr":
        // console.log("Month is April");
        break;
    case "may":
        // console.log("Month is May");
        break;

    default:
        // console.log("Not a valid month");
        break;
}


const userMail = "Prabhat@xyz.in"
if (userMail) {
    // console.log("User has a valid vendor mail address");
}
else{
    // console.log("User has invalid mail");
}


// Falsy Values
// '0', '-0', NULL, Undefined, BigInt 0n, NaN, false

// Truthy Values
// "0", 'false',  " ", { }, [ ], function(){}, 

if (userMail.length===7) {
    // console.log("Short Length user mail");
}
else{
    // console.log("Long length mail");
}


const emptyObj = { }
if (Object.keys(emptyObj).length===0) {
    // console.log("It's an empty object");
}
else{
    // console.log("Not an empty object");
}


// false == 0 -> O/p is true
// false == ' ' -> O/p is true
// 0  == ' ' -> O/p is true



//Nullish Coalescing Operator (??): NULL Undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 29
val1 = null ?? 69 ?? 57
// val1 = undefined ?? 29 ?? 38

console.log("Value is:",val1);

//Ternary Operator

const coldCoffeePrice =  100;
coldCoffeePrice >=70 ? console.log("God Damnnn!!!"):console.log("Reasonable");
