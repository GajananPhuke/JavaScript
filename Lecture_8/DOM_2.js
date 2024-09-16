


const btn = document.querySelector('#btn-1');
btn.addEventListener('click',function(){
    console.log("Button is clicked");
    const divElement = document.createElement('div')
    const para = document.createElement('p')
    para.innerText = "I Am Paragraph";
    divElement.appendChild(para);
    // console.log(divElement);

    // add it on DOM
    const body = document.querySelector('body');
    // console.log(body);
    body.appendChild(divElement);
})