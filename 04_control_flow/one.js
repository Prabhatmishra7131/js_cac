const temperature = 42;
if (temperature < 50) {
//   console.log("Temperature is less than 50");
} else {
//   console.log("Temperature is greater than 50");
}


const score = 200;
if (score>100) {
    const power = "fly";
    // console.log(`User power is: ${power}`);
}
// console.log(`User power is: ${power}`);


const balance = 1000;
// if(balance>500) console.log("TestCase passed"), console.log("2nd test case passed");   //Bad Practice(Implicit Scope)

const isLoggedIn = true;
const debitCardAvail = true;
const loggedInFromGoogle = false;
const loggedInFromGmail = true;


if (isLoggedIn && debitCardAvail) {
    // console.log("This user is allowed to purchase course");
}
if (loggedInFromGmail || loggedInFromGoogle) {
    console.log("The user successfully logged in thru vendors");
}

