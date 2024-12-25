// const server = require('http').createServer();
//We are always needed to setup our code a synchrnously
const http = require('http');
const server  = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home page')
    }
    if(req.url === '/About'){
        //The Problem arises due to blocking code
        for(let i = 0; i< 10; i++){
            for(let j =0; j  < 10; j++){
                console.log(`${i}  ${j}`);
                // res.end('${i}')
            }
        }
        res.end('About page')
    }
    else {
        res.end('Error Page')
    }
})

server.listen(5000,()=>{
    console.log('Server Listening on port 5000....')
})
// console.log(server);
