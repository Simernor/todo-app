console.log("jscript-initialized");

function addInitialTodos(x, y){
    addTodoItem(x, y);

}

function onformSubmit(){
    const inputTitle = document.querySelector("input[name='todo-title']");
    const inputText = document.querySelector("input[name='todo-text']");
    addTodoItem(inputTitle.value, inputText.value);
}

function addTodoItem(title, text){
    const targetElement = document.getElementById("todo-container");
    
    const newTodoItem = document.createElement("div");
    const newTodoTitle = document.createElement("h2");
    const newTodoDate = document.createElement("span");
    const newTodoText = document.createElement("p");
    const newButtonRemove = document.createElement("button");

    newTodoTitle.innerText = title;
    newTodoDate.innerText = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
    newTodoText.innerText = text;
    newButtonRemove.innerText = "Remove";

    const determineCardColor = `card-color-${Math.floor(Math.random() * 3 + 1)}`
    newTodoItem.classList.add("todo-item", determineCardColor);
    newButtonRemove.classList.add("btn-remove-todo");

    newButtonRemove.addEventListener("click", function(){
        newTodoItem.remove();
    });
    newTodoItem.appendChild(newButtonRemove);

    newTodoItem.append(newTodoTitle, newTodoText, newTodoDate, newButtonRemove)

    targetElement.appendChild(newTodoItem);
}