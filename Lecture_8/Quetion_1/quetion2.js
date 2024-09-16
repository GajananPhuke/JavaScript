

const red = document.querySelector('.red');
red.addEventListener('click',(e)=>{
    // console.log("Hey , i am red");
        let container = document.querySelector('div');

        container.classList.remove('blue1');
        container.classList.remove('green1');

        container.classList.add('red1')
        // console.log(container.classList);
    
    
});
const blue = document.querySelector('.blue');
blue.addEventListener('click',()=>{
    // console.log("Hey , i am blue");

    let container = document.querySelector('div');

    container.classList.remove('red1');
    container.classList.remove('green1');

    container.classList.add('blue1')
    // console.log(container.classList);
});
const green = document.querySelector('.green');


green.addEventListener('click',()=>{
    console.log("Hey , i am green");
    let container = document.querySelector('div');

    container.classList.remove('blue1');

    container.classList.add('green1')
    // console.log(container.classList);
});





