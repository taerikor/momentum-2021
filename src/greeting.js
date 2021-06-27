const greeting = document.querySelector(".greeting")
const form = greeting.querySelector(".js-form")
const input = greeting.querySelector(".js-input")
const text = greeting.querySelector(".js-text")
const button = greeting.querySelector(".js-button")
const textBox = greeting.querySelector(".name_container")
const errorText = greeting.querySelector(".js-errorText")

const NAME_LS = 'name'
const HIDDEN_CN = 'hidden'


function toggleGreeting(){
    input.classList.toggle(HIDDEN_CN)
    textBox.classList.toggle(HIDDEN_CN)
    if(!errorText.classList.contains(HIDDEN_CN)){
        errorText.classList.add(HIDDEN_CN)
    }
}

function paintName(){
    const currentName = localStorage.getItem(NAME_LS);
    text.innerHTML = `Hello, ${currentName}!`;
    toggleGreeting();
}

function handleButtonClick(){
    localStorage.removeItem(NAME_LS);
    toggleGreeting();
}

function handleFormSubmit(event){
    event.preventDefault();
    if(input.value !== ""){
        localStorage.setItem(NAME_LS,input.value);
        paintName();
    }
    else {
        errorText.classList.remove(HIDDEN_CN);
    }
    input.value = "";
    
}


if(localStorage.getItem(NAME_LS)){
    paintName();
}

button.addEventListener('click', handleButtonClick)
form.addEventListener('submit', handleFormSubmit)