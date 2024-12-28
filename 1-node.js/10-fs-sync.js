const fs = require('fs');
// const readFileSync = fs.readFileSync;
// console.log(fs);

const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
// console.log(first);
const second = readFileSync('./content/second.txt','utf8');
// console.log(second);

// writeFileSync('./content/first.txt','this strinnf is written by this ppiece of the code');
writeFileSync('./content/newFilecreated',`This is the combination of the first and second : ${first}, ${second}`,{flag : 'a'});


// console.log(readFileSync);

//Synchronous 