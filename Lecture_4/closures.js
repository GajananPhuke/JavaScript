

function grandParent(){
    let a=5;                 // parent() closure a=5;
    function parent(){
        let b=9;               // child() closure b=9;
        function child(){
            let c=10;           
            return a+b+c;       // 5+9+10=
        }
        return child;
    }
    return parent;
}


let p1=grandParent();// function Invoking to grandParent
let c1=p1();           // function Invoking to parent
let ans=c1();           // function Invoking to child
console.log(ans);       // printing ans on consol




/* In JavaScript, a closure is a function that "remembers" the environment (scope) in which it was created, even after that environment has finished executing. 
This allows the function to access variables from an outer function's scope even after the outer function has returned. */



/* A closure is a feature in JavaScript where an inner function has access to the variables and scope of its outer function even after the outer function has finished executing.
 This allows the inner function to "remember" and use those variables, creating a persistent scope that can be referenced later. */
 