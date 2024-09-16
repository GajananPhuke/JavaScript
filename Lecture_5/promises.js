// document.write("Welcom to java script");

console.log("Start");

const MyPromise = new Promise(function(resolve, reject){

    setTimeout(()=>{
        let a=5;
        let b=6;
        if(a==b){
            resolve("I am under resolved promise");
        }else{
            reject("I am under reject  promise")
        }
    },10000)
})

MyPromise
.then((res)=>{
    console.log("RESOLVED :) "+res);
    document.write("RESOLVED :) "+res);
})
.catch((err)=>{
    console.log("REJECTED :( "+err);
    document.write("REJECTED :( "+err);
})
.finally(()=>{
    console.log("API call was made to fetch user details");
    // document.write("API call was made to fetch user details");
})
console.log("End");
