// We are going to learn about OS Module
//Module matlab Fetching data from different files and folders

//OS is s bulitin Module

const os = require('os');
// console.log(os);
// you can either get acess of whole os Module or you can take access of whichever any property or attributes you want


//Info about current user
const user = os.userInfo();
// console.log(user);

//uptime of the system
const uptime = os.uptime();
console.log(uptime);
// setTimeout(()=>{
//     console.log(uptime);
// },3000)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);