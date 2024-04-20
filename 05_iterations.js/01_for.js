// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (index==5) {
//         console.log("We got 5 foes");
//     }
//     console.log(index);
//}



for (let i = 0; i <= 10; i++){
    // console.log(`Outer loop value is ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop Value is:${j} and outer loop value is:${i}`);

        // console.log(i + '*' + j + ' = ' + i*j);
    }
}


//Break and Continue

for (let i = 0; i <10 ; i++) {
    if (i==5) {
        // console.log("Damnn!! Detected 5");
        break;
    }
    // console.log(`Value of i is: ${i}`);
    
}

for (let i = 0; i <10 ; i++) {
    if (i==5) {
        console.log("Damnn!! Detected 5");
        continue;
    }
    console.log(`Value of i is: ${i}`);
    
}