
function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("T");

}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(vak1,val2,...num1) {
    return num1
}
// console.log(calculateCartPrice(200,300,190,5430,2303));


const testUser = {
    userName: "Prabhat",
    userAge: 21
}

function onboardingUser(anyObject) {
    console.log(`User ${anyObject.userName} having age ${anyObject.userAge} has successfully onboarded`);
}
// onboardingUser(testUser)

// onboardingUser({
//     userName: "Ananya",
//     userAge: 21
// })

const myNewArray = [243,542,4242,324]
function returnsArrayValue(anyArray) {
    return anyArray[2]
}
// console.log(returnsArrayValue([100,332,534,4321]));
console.log(returnsArrayValue(myNewArray));