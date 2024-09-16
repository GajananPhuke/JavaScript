// let myArray=[1,2,3,4,5,6,7,8,9];
// console.log(myArray);

// By Using for loop print myArray
// for(let i=0;i<myArray.length;i++){
//     console.log(myArray[i]+" ");
// }
let myArray=[1,2,3,4,5,6,7,8,9];

// function area(array){ // area=3.14 *r*r
//     let result=[];
//     for(let i=0;i<array.length;i++){
//         result.push(3.14*array[i]*array[i]);
//     }
//     return result;
// }
//         function circomfurance(array){ // area=3.14 *r*r
//             let result=[];
//             for(let i=0;i<array.length;i++){
//                 result.push(2*3.14*array[i]);
//             }
//             return result;
//         }
//         function diameter(array){ // area=3.14 *r*r
//             let result=[];
//             for(let i=0;i<array.length;i++){
//                 result.push(2*array[i]);
//             }
//             return result;
//         }

// // let Finamlarea1=area(myArray);
// // document.write(Finamlarea1);

// // let finalCircumference=circomfurance(myArray);
// // document.write(finalCircumference);
// let FinalDiameter=circomfurance(myArray);
// document.write(FinalDiameter);


// By using call_back Function 

function callBack(array,logic){
    let result=[];
    for(let i=0;i<array.length;i++){
        result.push(logic(array[i]));
    }
    return result;
}

function calculateAreaLogic(radius){
    return 3.14*radius*radius;
}
function calculateDiameterLogic(radius){
    return 2*radius;
}

function calculateCircomfuranceLogic(radius){
    return 2*3.14*radius;
}
// let Finamlarea1=callBack(myArray,calculateAreaLogic);
// document.write(Finamlarea1);

// let FinalDiameter=callBack(myArray,calculateDiameterLogic);
// document.write(FinalDiameter);

let finalCircumference=callBack(myArray,calculateCircomfuranceLogic);
document.write(finalCircumference);
