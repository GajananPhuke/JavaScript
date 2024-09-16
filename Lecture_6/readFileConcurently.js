console.log("Hii, I am reading file concurently ");

console.log("Start");
const fs =require("fs");

const readFile1 = fs.promises.readFile("f1.txt");
const readFile2 = fs.promises.readFile("f2.txt");
const readFile3 = fs.promises.readFile("f3.txt");

readFile1
.then((res)=>{
    console.log("File 1 Data "+res);
})
.catch((err)=>{
    console.log("Unable to read the file "+err);
})

readFile2
.then((res)=>{
    console.log("File 2 Data "+res);
})
.catch((err)=>{
    console.log("Unable to read the file "+err);
})

readFile3
.then((res)=>{
    console.log("File 3 Data "+res);
})
.catch((err)=>{
    console.log("Unable to read the file "+err);
})


console.log("End");