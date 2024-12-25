// // var http = require('http');
// // var fs = require('fs');
// // const { result } = require('lodash');
// // const server = http.createServer();

// // server.on(function(req,res){
// //     // const text = fs.readFileSync('./content/big.txt','utf8');
// //     // res.end(text);

// //     const fileStream = fs.createReadStream('./content/big.txt','utf8');
// //     fileStream.on('data',(result)=>{

// //         console.log(result);
// //     })

// // .listen(5000);


// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     // Read the file using a read stream
//     const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    
//     // Pipe the file content directly to the response
//     fileStream.on('open', () => {
//         fileStream.pipe(res); // Sends data directly to the response
//     });

//     // Handle errors during streaming
//     fileStream.on('error', (err) => {
//         console.error('Error reading file:', err);
//         res.statusCode = 500;
//         res.end('Error reading file');
//     });
// });

// server.listen(5000, () => {
//     console.log('Server is running on http://localhost:5000');
// });


var http = require('http');
var fs = require('fs');
http
.createServer(function(req,res){
    const fileStream = fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',(data)=>{
        // console.log(data);
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        // console.log(err);
        res.end(err);
    })


})

.listen(5000)