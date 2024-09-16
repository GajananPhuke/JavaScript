// we have a problem that we are at a coffee shop and the now the coffee shop only has coffee we cannot order for any other drink ,
// it will reject if any other drink is ordered and if s coffee is ordered it will be accepted then it will be processed then it will be serverd and at the end we will recieve a bill.





function placedOrder(beverage){
    return new Promise((resolve, reject)=>{
        if(beverage=="coffee"){
            resolve("Order of coffee has been placed ");
        }else{
            reject("Order out-of the menue it has been rejected ");
        }
    })
}
// If order is coffee then proccess for placed order
function processOrder(orderPlaced){
    return new Promise((resolve, reject)=>{
        resolve(`${orderPlaced}and processed`);
    })
}
// If order has been proccessed make it genrate Bill

function generateBill(billGenerate){
    return new Promise((resolve,rejects)=>{
        resolve(`${billGenerate} and bill generated 2000 rupees`);
        // rejects("Machine is faulty");
    })
}

// By using .then, .catch method to consume promises 
// const order = "coffee";
// placedOrder(order)
// .then((orderStatus)=>{
//     // console.log(orderStatus);
//     return processOrder(orderStatus);
// })
// .then((orderIsproccessed)=>{
//     // console.log(orderIsproccessed);
//     return generateBill(orderIsproccessed);
// })
// .then((billGenerated)=>{
//     console.log(billGenerated);
// })
// .catch((err)=>{
//     console.log("Somthing went wrong : "+err);
// })


// By using Async/await function consume promises 

async function serveOrder() {
    try{
        const orderStatus = await placedOrder("coffee");
        const orderProcessed =await processOrder(orderStatus);
        const billGenerated = await generateBill(orderProcessed);
        console.log(orderProcessed);
    
    }catch(err){
        console.log("Something went wrong ",err);
    }  
}
// calling serverOrder function 
serveOrder();
























































// Example to underStand Flow of callBack String chaining 
// function a (){

//     return new Promise((function(resolve,reject){

//         setTimeout(()=>{
//             resolve("Hii");
//         },1000)

//     }))
// }


// a()
// .then((data)=>{
//     console.log(data);
//     return "Bye";// call back to a() function through .then method : o/p --> Hii
// })
// .then((data)=>{
//     console.log(data);
//     return "Sie";  // call back to a() function through .then method : o/p --> Hii ,Bye
// })
//  .then((data)=>{
//      console.log(data);  // call back to a() function through .then method : o/p --> Hii ,Bye, sie
// })
