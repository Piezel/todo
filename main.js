const input = document.querySelector("#name")
const add = document.querySelector("#add")
const main = document.querySelector("#main")

const colors = ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff"]

add.addEventListener("click",e=>{
    const newTask = document.createElement("div")
    newTask.classList.add("listblock")
    main.appendChild(newTask)
})