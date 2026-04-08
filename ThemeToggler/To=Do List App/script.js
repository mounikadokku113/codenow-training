var task= document.querySelector("#task")
var btn = document.querySelector("#btn")
var tasklist = document.querySelector("#tasklist")

btn.addEventListener('click',()=>{
    let tmp=task.value
    if(tmp){
        let liEle=document.createElement('li')
        liEle.innerHTML=tmp
        liEle.addEventListener('click',()=>{
            liEle.classList.toggle('completed')
        })
        tasklist.appendChild(liEle)
        task.value=''
    }
})