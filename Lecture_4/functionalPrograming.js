// Call-Back Function 

// These function that can be passed to another function as argument 

let a=1;
function parent(cb){
    console.log("hey,I am parent function "+a);
    a++;
    cb();
}

function child1(){
    console.log("Hi, I am child-1 coll-back function");
}
function child2(){
    console.log("Hi, I am child-2 coll-back function");
}
function child3(){
    console.log("Hi, I am child-3 coll-back function");
}

parent(child1);
parent(child2);
parent(child3);
