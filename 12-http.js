//Here we are going to learn about HTTP module
const http = require('http');
//now we are going to create server
//create server means in which local host our code will run
const server = http.createServer((req,res)=>{
    //abhi we will focus on response not on request
    // console.log(req);
    if(req.url === '/'){
        res.end('Welcome to the / page which is my home page')
    }
    if(req.url === '/about'){
        res.end("here is our short History");
    }
    if(req.url === '/contact'){
        // res.end("here is our short History Samar ");
        res.end("through the given number you can contact me");
    }
    res.end(`
        <h1>Oops<h1>
        <p>We cant able to find the page which you are looking for</p>
        <a href = '/'>back Home</a>
        `);
    //  res.write("Welcome to our homePage .");
    //  res.write("I am Samar Soni");
    //  // at the end you need to end the respose for your code to run
    // //  res.end("I am learning node Js")
    // res.end()

})
//in which server our code will learn
server.listen(5000)