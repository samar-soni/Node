const http = require('http')
const server = http.createServer((req,res)=>{
    // const i = 0;
    // console.log(i);
    // i++;
    console.log('request event');
    res.end();
})

server.listen(5000, ()=>{
    console.log('Server is running on Port : 5000 ....')    
})