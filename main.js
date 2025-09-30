const input = document.querySelector("#name")
const add = document.querySelector("#add")
const main = document.querySelector("#main")

const colors = ["#f0adb0","#f5c2ab","#fae0ad"," #c6d7b2","#c4def0"]

add.addEventListener("click",e=>{
    e.preventDefault()
    const newTask = document.createElement("div")
    let color = 0
    newTask.classList.add("listblock")
    newTask.innerHTML += `<p>${input.value}</p>`
    newTask.style.backgroundColor = colors[color]
    main.appendChild(newTask)

    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.addEventListener("change",event=>{
        if(checkbox.checked) {
            const hr = newTask.firstChild
            hr.style.width = "98%"
        } else {
            const hr = newTask.firstChild
            hr.style.width = "0"
        }
    })
    newTask.prepend(checkbox)

    const optionsdiv = document.createElement("div")
    optionsdiv.classList.add("options")
    newTask.append(optionsdiv)

    const upbutton = document.createElement("i")
    upbutton.className+="fa-solid fa-caret-up fa-2xl"
    optionsdiv.append(upbutton)

    const downbutton = document.createElement("i")
    downbutton.className+="fa-solid fa-caret-down fa-2xl"
    optionsdiv.append(downbutton)

    const colorsButton = document.createElement("i")
    colorsButton.className+="fa-solid fa-palette fa-2xl"
    optionsdiv.append(colorsButton)

    const trashbutton = document.createElement("i")
    trashbutton.className+="fa-solid fa-trash-can fa-2xl"
    optionsdiv.append(trashbutton)

    upbutton.addEventListener("click",event=>{
        if(newTask.previousSibling && newTask.previousSibling.tagName=="DIV") {
            newTask.parentNode.insertBefore(newTask,newTask.previousSibling)
        }
    })
    downbutton.addEventListener("click",event=>{
        if(newTask.nextSibling && newTask.nextSibling.tagName=="DIV") {
            newTask.parentNode.insertBefore(newTask,newTask.nextSibling.nextSibling)
        }
    })

    colorsButton.addEventListener("click",event=>{
        color++
        if(color>=colors.length) color = 0;
        if(newTask.style.backgroundColor!="lightgray") newTask.style.backgroundColor = colors[color]
    })

    const deleteTask = (event) => {
        if(newTask.style.backgroundColor == "lightgray") {
            const animate = newTask.animate([
                {transform:"scale(1)"},
                {transform:"scale(0)"}
            ],{
                duration: 500,
                easing: "ease-in-out"
            })
            animate.addEventListener("finish",()=>{newTask.remove()})
        } else {
            newTask.style.backgroundColor = "lightgray"
            const animate = newTask.animate([
                {transform:"translate(0, 0) rotate(0)"},
                {transform:"translate(5px, 5px) rotate(1deg)"},
                {transform:"translate(0, 0) rotate(0)"},
                {transform:"translate(-5px, 5px) rotate(-1deg)"},
                {transform:"translate(0, 0) rotate(0)"}
            ],{
                duration: 250,
                iterations:Infinity
            })
            setTimeout(() => {
                newTask.style.backgroundColor = colors[color]
                animate.cancel()
            }, 3000);
        }
    }

    trashbutton.addEventListener("click",deleteTask)
    newTask.addEventListener("mousedown",event =>{
        if(event.button==1) {
            deleteTask(event)
        }
    })

    newTask.prepend(document.createElement("hr"))

})