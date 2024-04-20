const myNums = [1,2,3]

const myTotal = myNums.reduce(function(accumulator,currentValue){
    // console.log(`Accumuator: ${accumulator} and Current value is: ${currentValue}`);
    // return accumulator+currentValue;
},0)
// console.log("Sum is:",myTotal);


const myNewTotal = myNums.reduce((acc,currVal)=>acc+currVal , 0)
// console.log("Sum is:",myNewTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);