const form = document.querySelector(".greeting .js-form")
const input = document.querySelector(".greeting .js-input")
const text = document.querySelector(".greeting .js-text")
const button = document.querySelector(".greeting .js-button")
const textBox = document.querySelector(".greeting .name_container")
const errorText = document.querySelector(".greeting .js-errorText")

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