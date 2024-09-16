/* async/await is a modern JavaScript syntax feature that simplifies writing asynchronous code, making it more readable and easier to debug. 
   Introduced in ES2017, it builds upon promises, providing a cleaner, more elegant syntax for working with asynchronous operations.
*/

const { rejects } = require("assert");
const { resolve } = require("path");



// Why Async/Await?
// Asynchronous operations are fundamental in JavaScript for non-blocking operations, such as fetching data from a server or reading files.
// While promises significantly improved asynchronous code readability, async/await further simplifies the syntax, allowing developers to write code that looks synchronous while executing asynchronously.


// An async function returns a promise, automatically wrapping non-promise values in a promise.

// Async funcction bydefault return promises illustrate following example 
// async function fetchData() {
//     let data = 10;
//     let data1=11;
//     if(data===data1){
//         return resolve("resolved");
//     }else{
//         return rejects("Serever is down");
//     }
//     // return data;
// }

// const dataPromise = fetchData();

// dataPromise
// .then((res)=>{// handle only resolve opertion
//     console.log("Promise has been resolved with value "+res);
// })
// .catch((err)=>{// handle only reject opertion 
//     console.log("Somthing went wrong :"+err);
// })





// Async code with promises 

// const p = new Promise(function(resolve , reject){
//     // return console.log("Promise has been resolved");
//     let a =10;
//     let b = 10;
//     setTimeout(function(){
//         if(a===b){
//             resolve("resolved");
//         }else{
//             reject("serever is down");
//         }
        
//     },5000)
// })

// p
// .then((res)=>{
//     console.log("Promise has been "+res);
// })
// .catch((err)=>{
//     console.log("Somthing went wrong :"+err);
// })


// By passing Argument delay 
// function My_Async_Await(delay){
//     return new Promise(function(resolve , reject){
//         // return console.log("Promise has been resolved");
//         let a =10;
//         let b = 10;
//         if(a==b){
//             setTimeout(function(){
//                 resolve("resolved");
//             },delay);
//         }else{
//             reject("serever is down");
//         }
       
//     });
    
// }



// // Code with Async/await function 
// // This function will return promises 
// // behind the since await will behave same as like as promises 
// console.log("Before await function");
// async function async_await(delay){
//     try{
//         const val = await My_Async_Await(delay);// it always return resolved 
//         console.log("Promise has been "+val +` in ${delay/1000} second`);
//     }catch(err){
//         console.log("Somthing went wrong : "+err);
//     }
// }
// let delay = 2000;
// async_await(delay);

// console.log("After await function");