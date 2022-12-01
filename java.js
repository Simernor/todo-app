console.log("jscript-initialized");

function addTodoItem(){

    const targetElement = document.getElementById("todo-container");
    const newTodoItem = document.createElement("div");
    newTodoItem.classList.add("todo-item");

    const newTodoTitle = document.createElement("h2");
    newTodoTitle.innerText = "Todo title";
    newTodoItem.appendChild(newTodoTitle);

    const newTodoText = document.createElement("p");
    newTodoText.innerText = "Something to do";
    newTodoItem.appendChild(newTodoText);

    const newButtonRemove = document.createElement("button");
    newButtonRemove.innerText = "Remove";
    newButtonRemove.classList.add("btn-remove-todo");
    newButtonRemove.addEventListener("click", function(){
        newTodoItem.remove();
    });
    newTodoItem.appendChild(newButtonRemove);

    targetElement.appendChild(newTodoItem);

}