const input = document.getElementById("input")
const plus = document.getElementById("plus")
const list = document.querySelector(".list")
const ul = document.querySelector(".ul")
const refresh = document.getElementById("refresh")
const music = document.getElementById("background-music")
let li;

music.autoplay = true
music.volume = 0.3
music.loop = true


plus.addEventListener("click", ()=>{
    music.play()
    if (input.value.trim().length !== 0) {
    li = document.createElement("li")
    li.classList.add("li")
    ul.appendChild(li)
    li.innerHTML = `<input type="checkbox" id="checkbox"> ${input.value} <span id="delete"><i class="fa-solid fa-trash-can"></i></span> `
    input.value = ""
    }
})

ul.addEventListener("click", (e)=>{
    if (e.target.className == "fa-solid fa-trash-can") {
        e.target.parentElement.parentElement.remove()
        e.stopPropagation
    } else if (e.target.id == "checkbox") {
        (e.target.checked)
            ? e.target.parentElement.style.textDecoration = "line-through"
            : e.target.parentElement.style.textDecoration = "" 
    }
})

refresh.addEventListener("click", ()=>{
    window.location.reload()
})

input.addEventListener("keydown", (event)=>{
    if (event.code==="Enter" || event.code==="numpadEnter") {
        plus.click()
        music.play()
    }
})







