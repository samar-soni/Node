//We are going to learn about the modules in node
//common js = every file is module (by default)
//Modules : Encapsulated Code (only share minimum data)

//Module is used only to seperate the files and bunch of code in the different files



// const laila = "Laila";
// const majnu = "Majnu";


// const sayhi = (name)=>{
//     console.log(`Say hi ${name}`);
// }

// //order of code does not matter in the Set timeout Interval

// sayhi("Samar");
// setTimeout(()=>{
//     sayhi(laila);
// },2000)

// sayhi("Soni");

// setTimeout(()=>{
//     sayhi(majnu);
// },3000)

//important thing is how will you access the module
//./ is used when we  need to import our own module

const names = require('./4-names');
// console.log(names);

const sayhi = require('./5-utils');
// console.log(sayHi);

//while exporting anything through the module section the console.log("") of the module file also gets exported

const data = require('./6-aleternative-flavors');
// console.log(data.singlePerson.name);


//if we are fetching the module which is exporting it should not be assinned any const value
require('./7-mind-grenade');
// addNum();

// sayhi("Susan");
// sayhi(data.singlePerson.name)
// sayhi(names.john);
// sayhi(names.peter);