const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    ts: "TypeScript"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const langArray = ['rb','js','cpp','py','java']
for (const key in langArray) {
    // console.log(key);
    console.log(langArray[key]);
}