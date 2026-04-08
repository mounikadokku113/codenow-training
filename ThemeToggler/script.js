var container = document.querySelector('#container')
var icon = document.querySelector('#icon')
var btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    if(container.classList.contains('dark')){
        container.classList.remove('dark')
        container.classList.add('light')

        btn.innerHTML='OFF'
        icon.classList.remove("ri-lightbulb-line")
        icon.classList.add("ri-lightbulb-flash-fill")
    }else{
        container.classList.remove('light')
        container.classList.add('dark')

        btn.innerHTML='ON'
        icon.classList.remove("ri-lightbulb-flash-fill")
        icon.classList.add("ri-lightbulb-line")
    }
})