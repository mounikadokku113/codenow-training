var text1=document.querySelector('#text1')
var btn1=document.querySelector('#btn1')

var text2=document.querySelector('#text2')
var btn2=document.querySelector('#btn2')

var text3=document.querySelector('#text3')
var btn3=document.querySelector('#btn3')

btn1.addEventListener('click',()=>{
    text1.innerHTML='JavaScript is Interested'
    text1.style.background='blue'
})

btn2.addEventListener('click',()=>{
    text2.textContent='This is the end'
    text2.style.background='purple'
})

btn3.addEventListener('click',()=>{
    text3.innerHTML='Never look back'
    text3.style.background='green'
})