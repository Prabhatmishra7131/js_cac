// Dates

let myDate = new Date();
// console.log(myDate.toString());


// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());



let myDecideDate = new Date(2024,4,23)           //This type of explicit decl counts starting months i.e. Jan from 0
let myNewDecidedDate = new Date([2024,4,23])     //This type of explicit decl counts starting months i.e. Jan from 1
// console.log(myDecideDate.toDateString());
// console.log(myNewDecidedDate.toDateString());


let myDecidedDate = new Date(2024,4,23,5,3,7)    //Declaration alongwith time 
//console.log(myDecidedDate.toLocaleString());



let myCreatedDate = new Date("2024-01-09");    //Again month interpretation statred from '1' when used YY-MM-DD(ex)
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);                     //Time duration from 1st Jan 1971 till now
// console.log(myCreatedDate.getTime());         //Time duration from 1st Jan 1971 till the date tha I created

console.log(Math.floor(Date.now()/1000));        //Converted miliseconds into seconds



let gettingDateStuff = new Date();
console.log(gettingDateStuff.getDate());        // Getting todays Date
console.log(gettingDateStuff.getDay());         // Getting todays Day (Sunday is '0')
console.log(gettingDateStuff.getMonth()+1);     // Getting current Month

gettingDateStuff.toLocaleString('default',{     //Beauty of toLocaleString Method to specify as per needed by you
    weekday: "long"
});

