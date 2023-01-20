const input = document.getElementById("input");
const plus = document.getElementById("plus");
const list = document.querySelector(".list");
const ul = document.querySelector(".ul");
const refresh = document.getElementById("refresh");
const music = document.getElementById("background-music");

music.autoplay = true
music.volume = 0.3
music.loop = true

//Local storage dan veri alımı
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

window.addEventListener("load", () => {
    music.play()
    getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
    todoList.forEach((todo)=> {
        createTodo(todo)
    })
};

plus.addEventListener("click", (e) => {
    music.play()
    if (input.value.trim().length !== 0) {
          const newTodo = {
          id: new Date().getTime(), //anlık milisaniye, uniq id için
          status: false,
          text: input.value,
      };
      createTodo(newTodo);
      todoList.push(newTodo)
      localStorage.setItem("todoList", JSON.stringify(todoList))
}
});

const createTodo = (newTodo) => {
    const {id, status, text} = newTodo //Object destructuring
    const li = document.createElement("li") //creating li element
    li.setAttribute("id", id)
    li.classList.add("li")
    li.innerHTML = `<input type="checkbox" id="checkbox"></input> ${text} <i class="fa-solid fa-trash-can"></i>`
    ul.appendChild(li)
    input.value = ""
}

ul.addEventListener("click", (e) => {
    music.play()
    const idAttr = e.target.parentElement.getAttribute("id")
    if (e.target.className == "fa-solid fa-trash-can") {
    e.target.parentElement.remove();
    e.stopPropagation;
    todoList = todoList.filter((todo)=> todo.id != idAttr)
    localStorage.setItem("todoList", JSON.stringify(todoList))
} else if (e.target.id == "checkbox") {
    e.target.checked
    ? (e.target.parentElement.style.textDecoration = "line-through")
    : (e.target.parentElement.style.textDecoration = "");
    todoList.map((todo)=>{
        if (todo.id == idAttr) {todo.status = !todo.status}
    })
    localStorage.setItem("todoList", JSON.stringify(todoList)) //Burada sorun var. çözülecek !!!!!!!!!!!!!!!!!!!!!
} 
});

refresh.addEventListener("click", () => {
    window.location.reload();
});

input.addEventListener("keydown", (event) => {
    if (event.code === "Enter" || event.code === "numpadEnter") {
        plus.click();
        music.play()
    }
});


