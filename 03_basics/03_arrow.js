const user = {
    userName: "Prabhat",
    subscriptionPrice: 999,
    welcomeMessage: function (userName) {
        console.log(`Hello ${this.userName}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Prabhat Mishra"
// user.welcomeMessage()

// console.log(this);                                   //Give output as empty braces

function understandingThis() {
    let userName = "Prabhat Mishra"
    // console.log(this);                               //All arch, runtime and huge ass stuff printed
    console.log(this.userName);                         //Gives output as undefined
}

const outPutwConst = function understandingThis() {
    let userName = "Prabhat Mishra"
    // console.log(this);                               //All arch, runtime and huge ass stuff printed
    console.log(this.userName);                         //Gives output as undefined
}

// understandingThis();
// outPutwConst()                                         //Gives output as undefined       



const outputArrowFunc = () => {
    let userName = "Prabhat Mishra"
    console.log(this);                               //Gives Output as empty braces
    console.log(this.userName);                         //Gives output as undefined
}

// outputArrowFunc()


const addTwoNumbers = (number1,number2) => {
    return number1+number2
}
// console.log(addTwoNumbers(3,9));

// const implicitReturnArrowFunc = (num1,num2) => num1+num2 
const implicitReturnArrowFunc = (num1,num2) => (num1+num2)             //So much used for React

// const returnObjectArrow = () => { userName: "Prabhat Mishra"}          //Gives output as undefined
const returnObjectArrow = () => ({ userName: "Prabhat Mishra"})           //Gives proper return as an object
// console.log(implicitReturnArrowFunc(2,4));
console.log(returnObjectArrow());