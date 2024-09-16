

const fs=require("fs");
console.log("Start");


fs.readFile("f1.txt",(err,data)=>{
    if(err){
        console.log("An error occured : "+err);
        return;
    }else{
        console.log("File read sucessfully: "+data);
    }
})

    // setTimeout(function(){
    //     fs.readFile("f1.txt",(err,data)=>{
    //         if(err){
    //             console.log("An error occured : "+err);
    //             return;
    //         }else{
    //             console.log("File read sucessfully: "+data);
    //         }
    //     })
    // },5000)


console.log("End");