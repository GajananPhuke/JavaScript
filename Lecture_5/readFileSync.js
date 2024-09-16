


const fs=require('fs');

console.log("Start");

let data=fs.readFileSync('f1.txt');

console.log("This is read file 1 : "+data);

console.log("End");