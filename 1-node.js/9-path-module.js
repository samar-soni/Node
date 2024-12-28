//path module will do things of path of a file system
const path = require('path');


//path.sep will print a '/' 
console.log(path.sep);

//it will create a file path of the given set of folder
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);


//it gives the base name of the given path "Which is usually the last file name of the system";
console.log(path.basename(filePath));


//resolve is used to add the all the fragaments of the path

//__dirname is used to resolve the name of the current module. it does not contain the name of the given name of the file where as __filename does contain the name of the given file name
const absolute = path.resolve(__dirname,'./content','subfolder','test.txt');
console.log(absolute); 








