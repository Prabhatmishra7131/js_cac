//Arrays

const myArray = [1,2,4,5,6,"Prabhat",true]         
// Array in JavaScript creates shallow copies(properties share the same referene point)
// Deep copy: Properties don't share the same reference point

// console.log(myArray[5]);



const namedArray = ["eazyE","MnM","IceCube","Jcole","Afro"]
const myArray2 = new Array(23,21,45,89,57)

// console.log(myArray2);

// myArray2.push(99)                         //Adding a value at last
// console.log(myArray2);                    
// myArray2.pop()                            //Poping a value from last
// console.log(myArray2);


// myArray.unshift(87)                         //Had to shift all values which is resource intensive (time nd calc)
// console.log(myArray);
// myArray.shift()                             //Pop offs 1st value
// console.log(myArray);

// console.log(myArray.includes("prabhat"));  //Returns Boolean result
// console.log(myArray.indexOf(true));


const newMyArray = myArray.join()
// console.log(myArray);
// console.log(newMyArray);
// console.log(typeof(newMyArray));



//**********************************Slice ------- Splice************************************//

const sliceArray = [1,3,5,6,9]
console.log("A- Original Array ",sliceArray);
const newSliceArray = sliceArray.slice(1,4)
console.log("B- Array Upon Slicing ",newSliceArray);


const newSpliceArray = sliceArray.splice(1,4)                     // Splicing Manipulates the original Arrays
console.log("C- Array Upon splicing ",newSpliceArray);

console.log("D- Original Array After Splicing ",sliceArray);