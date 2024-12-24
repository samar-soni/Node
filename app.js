const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err) {
        console.log(err);
        return;
    }
    // console.log(result );
    const first = result;
    readFile('./content/second.txt','utf8',(err,data) =>{
        if(err) {
            console.log(err);
            return;
        }
        // console.log(data);
        const second = data;
        writeFile('./content/result-async.txt',`the data is ${first},'SamarSOni'${second}`,(err,result =>{
            if(err) {
                console.log(err);
                return;
            }
            console.log(result);
        }));
    })
})
 