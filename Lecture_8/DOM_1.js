
console.log("Gajanan");
// let btn = document.getElementById('btn-1');
// console.log(btn);

let btn = document.querySelector('#btn-1');
console.log(btn);


btn.addEventListener('click',function(e){
    // console.log("Button clicked");

    // Create new element 
    let divElement = document.createElement('h1')
    // console.log(divElement);
    divElement.innerText = "Hello";
    console.log(divElement);

    // Manupulate DOM on divElement 
    const body = document.querySelector('body');
    body.appendChild(divElement);
});


