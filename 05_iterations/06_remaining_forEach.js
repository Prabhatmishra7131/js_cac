const coding = ["cpp", "js", "python", "goLang", "ts"];

//Non-returning Nature of for Each loop

const retValue = coding.forEach( function (item) {
    // console.log(item);
    return item;              //Will still give Undefined (Can't return values even explicitly)
})
// console.log(retValue);


const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const retNums = myNumbers.filter((num)=>num>4)

const retNums = myNumbers.filter((num)=>{
    return num>4
})
// console.log(retNums);



const newNums = []

myNumbers.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
    }
})
// console.log(newNums);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);