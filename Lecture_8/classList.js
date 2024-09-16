


// const divClass = document.querySelector('div');

// console.log(divClass.classList);

// divClass.classList.add("Highlight");

// console.log(divClass.classList);



// const para = document.querySelector('p');

// para.addEventListener('click', function(e){
//     const element =e.currentTarget;
//     console.log(e.detail);// it will return no. of user clicked button cound 
//     if(e.detail===1){
//         element.classList.remove('white');
//         element.classList.remove('green');
//     }
//     const color = element.getAttribute('data-color1');

//     element.classList.add(color);
//     console.log(element);
// })

// para.addEventListener('dblclick', function(e){
//         const element =e.currentTarget;
//         const color = element.getAttribute('data-color2');
//         element.classList.add(color);
// })
// para.addEventListener('click', function(e){
//     const element =e.currentTarget;
//     if(e.detail===3){
        
//         console.log(e.detail);
//         const color = element.getAttribute('data-color3');
    
//         element.classList.add(color);
//     }
   
// })
const container = document.querySelector('body');

container.addEventListener('click', function(e){
    
    if(e.detail===1){

        e.target.style.backgroundColor="red"
    }else if(e.detail===2){

        e.target.style.backgroundColor="green"
    }
    if(e.detail===3){
      
        e.target.style.backgroundColor="initial"
    }
   
});