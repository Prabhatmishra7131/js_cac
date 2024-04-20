const coding = ["cpp", "js", "python", "goLang", "ts"];

// coding.forEach( function (item) {
//     console.log(item);
// })

coding.forEach((item) => {
  // console.log(item);
});

function printItem(item) {
  console.log(item);
}

// coding.forEach(printItem)

coding.forEach(function (item, index, array) {
  // console.log(item,index,array);
});

const myCoding = [
  {
    languageName: "CPP",
    languageFileName: "driverCPP",
  },
  {
    languageName: "JavaScript",
    languageFileName: "driverJS",
  },
  {
    languageName: "TypeScript",
    languageFileName: "driverTS",
  },
];

myCoding.forEach((item) => {
  console.log(
    `Language file name for ${item.languageName} is ${item.languageFileName}`
  );
});
