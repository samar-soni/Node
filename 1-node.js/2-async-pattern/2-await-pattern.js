const {readFile,writeFile} = require('fs').promises;
// const util = require('util'); 
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);





const start = async()=>{
    try{
        const first =await readFile('./content/first.txt','utf8');
        const second =await readFile('./content/second.txt','utf8');
        // const second =await getText('./content/second.txt');
        await writeFile('./content/result-async.txt',`THIS IS AWESOME : ${first} ${second}`,{flag :'a'})
        console.log(first,second);
    }catch(error){
        console.log(error)
    }
}
start();    

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((err) => console.log(err)) 




// //Ye thoda sa smjhna hai
// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 // console.log(err)
//                 reject(err)
//                 return;
//             }
//             // console.log(data);
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }