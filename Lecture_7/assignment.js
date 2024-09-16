function DividFun(a,b){
    return new Promise((resolve, reject)=>{
        if(b!=0){
            const div = a/b;
            resolve(div);
        }else{
            reject("Division by zero is not allowed.");
        }
    });
}

function divide(a, b) {
        async function DividFun(a,b){
        try{
            const result = await divide();
            console.log("Result:",result);
        }catch(error){
            console.error("An error occurred:", error);
        }
    }
   
}
let a = 10 ;
let b = 2 ;
divide(a,b);