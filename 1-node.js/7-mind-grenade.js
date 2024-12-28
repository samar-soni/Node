const num1 = 5;
const num2 = 10;

//take a note of the sayHi syntax and addNum syntax for exporting the data

const addNum = (() => {
    console.log(`Adding nums we get ${num1 + num2}`);
})
// 
// addNum();


module.export = addNum();