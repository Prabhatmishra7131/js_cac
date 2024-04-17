/////////////*****Array.isArray, Array.from, Array.of, .push, concat, .flat ***********************///////////


const marvelHeros = ["Thor","IronMan","SpiderMan"]
const dcHeros = ["Batman","SuperMan","Flash"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)               //Concat returns a whole new array
// console.log(allHeros);


const all_new_heros = [...marvelHeros,...dcHeros]             //Spread (Spread like spilled glass water)
// console.log(all_new_heros);

const chainedArrays = [1,2,3,[6,3,2],[9,6,7,[2,5]]]
const new_recursive_array = chainedArrays.flat(Infinity);     // Flats solves all chained arrays till provided depth
// console.log(new_recursive_array);


// console.log(Array.isArray("Prabhat"));
// console.log(Array.from("Prabhat"));
// console.log(Array.from({userName:"Prabhat"}));         //Interesting Case for interviews


let score1=9;
let score2=9.2;
let score3=6.8;
let score4=8.4;
let score5=8.8;
console.log(Array.of(score1,score2,score3,score4,score5));