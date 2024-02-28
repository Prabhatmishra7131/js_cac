const accountOwner = "Prabhat"
const demo_repo = 13



// New syntax for string interpolation, always devs should use this


console.log(accountOwner+demo_repo);
console.log(`Hello my name is ${accountOwner} and my repo count is ${demo_repo}`);


// Slicing-dicing operations on strings-


const demo_string_decls = String('Prabhat Mishra')
console.log(demo_string_decls);

console.log(typeof(accountOwner));
console.log(accountOwner[0]);
console.log(typeof(demo_string_decls));
console.log(demo_string_decls[10]);

console.log(demo_string_decls.__proto__);
console.log(demo_string_decls.toUpperCase());
console.log(demo_string_decls.length);
console.log(demo_string_decls.charAt(8)); //gives char at a given index
console.log(demo_string_decls.indexOf('t'));


const new_demo_string = "Prabhat-Mishra-ECE1"
const modf_new_string = new_demo_string.substring(0,9)   //Last index is exclusive
console.log(modf_new_string);
console.log(new_demo_string.length);



// Trimming methods on strings--


const slice_demo_string = "Prabhat"
const sliced_str = slice_demo_string.slice(-13,7);
console.log(slice_demo_string);
console.log(sliced_str);

const trim_demo_str = "    Prabhat Mishra    ECE-1  "
console.log(trim_demo_str);
const trimmed_str = trim_demo_str.trim()
console.log((trimmed_str));
console.log(trim_demo_str.trimEnd());
console.log(trim_demo_str.trimStart());

 
//  Split example-

const spli_demo_str =  new_demo_string.split('-')
console.log(spli_demo_str);