// // 

// const fs = require('fs');

// // Specify the file path
// const filePath = './content/big.txt';

// // Create a read stream
// const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

// // Handle the 'data' event to read chunks of data
// readStream.on('data', (chunk) => {
//     console.log('Received chunk:');
//     console.log(chunk);
// });

// // Handle the 'error' event for any file read errors
// readStream.on('error', (err) => {
//     console.error('Error reading file:', err);
// });

// // Handle the 'end' event to know when the stream is finished
// readStream.on('end', () => {
//     console.log('Finished reading file.');
// });

const {createReadStream} = require('fs');
// const { result } = require('lodash');
// const stream = createReadStream('./content/big.txt','utf8');
const stream = createReadStream('./content/big.txt','utf8');

//at a time it transfer data of 64KB
// const stream = createReadStream('./content/big.txt','utf8');
// const stream = createReadStream('./content/big.txt',{highWaterMark:50000});
// it helps you to decide how much data point you will transfer in one chunk



stream.on('data',(result)=>{
    console.log(result);

})
stream.on('error',(err)=>{
    if(err){
        console.log(err);
        return;
    }
})
