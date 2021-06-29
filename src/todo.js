const todo_container = document.querySelector("#todo")
const todoList = todo_container.querySelector("#todoList")
const todoInput = todo_container.querySelector("input")
const todoForm = todo_container.querySelector("form")

const TODO_LS = 'todo'
let todoObj = [];

function handleDeleteBtn(event){
   const li = event.target.parentElement;
   li.remove();
  const newTodo = todoObj.filter(todo => todo.id !== parseInt(li.id))
  todoObj = newTodo;
  saveTodo();
}

function paintTodo(data){
    const getList = document.createElement('li')
    getList.id = data.id;
    const getText = document.createElement('span')
    getText.innerText = data.text;
    getList.appendChild(getText)
    const getButton = document.createElement('button')
    getButton.innerText = 'DEL'
    getList.appendChild(getButton)
    getButton.addEventListener("click",handleDeleteBtn)
    todoList.appendChild(getList)
    
}

function saveTodo(){
    localStorage.setItem(TODO_LS,JSON.stringify(todoObj))

}

function handleFormSubmit(event){
    event.preventDefault();
    const text = todoInput.value;
    const newTodo = {
        id: Date.now(),
        text
    }
    todoInput.value = ""
    todoObj.push(newTodo)
    saveTodo();
    paintTodo(newTodo);

    
}
const currentTodo = localStorage.getItem(TODO_LS)

if(currentTodo !== null){
    const parsedTodo = JSON.parse(currentTodo)
    todoObj = parsedTodo;
    parsedTodo.map(todo => paintTodo(todo))
}

todoForm.addEventListener("submit", handleFormSubmit)