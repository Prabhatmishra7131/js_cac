// var c = 300;

let a = 540;
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("a of 'IF' scope",a);
}

// var c = 190;
// console.log(a);
// console.log(b);
// console.log(a);


function one() {
    const userName = "Prabhat";

    function two() {
        const websiteName = "YouTube";
        console.log(userName);
    }
    // console.log(websiteName);
    two();
}
// one();

// if (true) {
    const userName = "Prabhat";
    if(userName === "Prabhat")
    {
        const websiteName = "Drive.google.co"
        console.log(`Hello ${userName}`);
        console.log("You may use",websiteName);
    }
    // console.log(websiteName);
// }
// console.log(userName);


console.log(addOne(3));
function addOne(num) {
    return num+1
}

console.log(addTwo(56));
const resultOfTwoAdd = function addTwo(num) {
    return num+2
}