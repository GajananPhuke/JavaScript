

const fs=require("fs");

console.log("Start");

fs.readFile('f1.txt',cb1);

function cb1(err,data){
    if(err){
        console.log("An error occured: "+err);
        return;
    }
    else{
        console.log("File Read Successfully: "+data);
    }
    fs.readFile("f2.txt",cb2);
}
function cb2(err,data){
    if(err){
        console.log("An error occured: "+err);
        return;
    }
    else{
        console.log("File Read Successfully: "+data);
    }
    fs.readFile("f3.txt",cb3);
}
function cb3(err,data){
    if(err){
        console.log("An error occured: "+err);
        return;
    }
    else{
        console.log("File Read Successfully: "+data);
    }
}

console.log("End");