// Primitive 

// 7 types: string
// null
// undefined
// symbol
// number
// boolean
// bigint

const exmpl_num = 27
const exmpl_num2 = 27.02
const isLoggedIn = true
const user_one = "Name"
const outSideTemp = null
let userMail;
const id = Symbol('123')
const diff_id = Symbol('123')
console.log(id == diff_id)  //false
const big_int_exmpl = 123123123242321323123233123231232132n //**IMP:  typeof(bigint) is undefined



// Refrence type (Non-type)

// arrays
// objects
// functions


const prog_langs = ["CPP","Java","python","JavaScript"]   //typeof(array): object
console.log(prog_langs)

let demo_object = {
    'Username': "Prabhat",
    'UserId': 270702,
    'UserAge': 21
}
console.log(demo_object)

const demo_func = function RandomDisplayFunction()
{
    console.log("Fisrt actual function I'm executing")
}

demo_func();

console.table([typeof(prog_langs),typeof(demo_func),typeof(demo_object)])

// generally jitne bhi hai non-primitive datatypes, unka type "function hi bola jata hai", but function itself ka display : function hota hai, but usually function object bola jaata hai