// document.write("Welcom");

// import fs module to read file
// const fs =require("fs");
const fs = require("fs");

console.log("Before");

fs.readFile('f1.txt',(err,data)=>{
    if(err){
        console.log("An error occured: "+err);
        return;
    }else{
        console.log("This is file 1 data: "+data);
    }
})

fs.readFile('f2.txt',(err,data)=>{
    if(err){
        console.log("An error occured: "+err);
        return;
    }else{
        console.log("This is file 2 data: "+data);
    }
        
})

fs.readFile('f3.txt',(err,data)=>{
    if(err){
        console.log("An error occured: "+err);
        return;
    }else{
        console.log("This is file 3 data: "+data);
    }
})

console.log("End");


