const {readFile} = require('fs');
console.log('started the first Task')
//check for the file path
//it is synchrnous javascript method
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result)
    console.log('completed Task')
})
console.log('starting next Task')