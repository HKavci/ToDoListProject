const input = document.getElementById("input")
const plus = document.getElementById("plus")
const list = document.querySelector(".list")
const ul = document.querySelector(".ul")
let li;



plus.addEventListener("click", ()=>{
    if (input.value.trim().length !== 0) {
    li = document.createElement("li")
    li.classList.add("li")
    ul.appendChild(li)
    li.innerHTML = `<input type="checkbox" id="checkbox"> ${input.value} <button id="delete"><i class="fa-solid fa-trash"></i></button> `
    input.value = ""
    }
})

ul.addEventListener("click", (e)=>{
    if (e.target.className == "fa-solid fa-trash") {
        e.target.parentElement.parentElement.remove()
        e.stopPropagation
    }
})

input.addEventListener("keydown", (event)=>{
    if (event.code==="Enter" || event.code==="numpadEnter") {
        plus.click()
    }
})

