// Singleton -- Objects Made by constructors will also be Singletons and by any other ways, won't be singleton

//Object Literals


const mySym = Symbol("key1");

const jscriptUser = {
    userName: "Prabhat",
    "full Name": "Prabhat Mishra",
    [mySym]: "myKey1",
    userAge: 21,
    userLocation: "Delhi",
    userMail: "prabhat@xyz.com",
    isLoggedIn: false,
    lastLogInDays: ["Saturday","Sunday"]
}

// console.log(jscriptUser.userMail);
// console.log(jscriptUser["userMail"]);
// console.log(jscriptUser["full Name"]);

// console.log(jscriptUser[mySym]);                               //Important interview question for symbols
// console.log(typeof(jscriptUser[mySym]));

jscriptUser.userMail = "Prabhat@hottmail.com";
// console.log(jscriptUser);
// Object.freeze(jscriptUser);                                   //Freezes the editing/overRiding of key-value pairs
jscriptUser.userMail = "Prabhat@schat.com"
// console.log(jscriptUser);

jscriptUser.greetings = function(){
    console.log("Hello normie JS user");
}

// console.log(jscriptUser.greetings);              
// op: [Function (anonymous)] i.e. Function return ni aaya hai, function ka reference aaya hai

console.log(jscriptUser.greetings());
// op: Hello normie JS user \n undefined

jscriptUser.greetings2 = function(){
    console.log(`Hello normie JS user, ${this.userName}`);
}
console.log(jscriptUser.greetings2());