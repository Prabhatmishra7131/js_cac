const myArray = [1,2,3,4,5]
for (const num of myArray) {
    // console.log(num);
}


const greetings = "Hello Everyone"
for (const greet of greetings) {
    // console.log(greet);
}


//Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('Fr',"FRANCE")
map.set('IN',"INDIA")
console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'EvilDead',
    'game3': 'Maxphyn'
}
for (const [key,value] of myObj) {          //This is non-iterable
    console.log(key,':-',value);
}