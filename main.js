const input = document.querySelector(".footer__input");
const button = document.querySelector(".footer__button");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  createTodo(text);
  input.value = "";
  input.focus();
}

function createTodo(text) {
  const todoItem = document.createElement("li");
  todoItem.setAttribute("class", "todo__row");

  const todoIcon = document.createElement("i");
  todoIcon.setAttribute("class", "far fa-circle todo__icon");
  todoIcon.addEventListener("click", () => {
    todoIcon.classList.remove("far");
    todoIcon.classList.add("fas");

    const doneItems = document.querySelector(".done__items");
    todoItems.removeChild(todoItem);
    doneItems.appendChild(todoItem);

    delIcon.addEventListener("click", () => {
      doneItems.removeChild(todoItem);
    });
  });

  const todoContent = document.createElement("span");
  todoContent.setAttribute("class", "todo__content");
  todoContent.innerText = text;

  const delIcon = document.createElement("i");
  delIcon.setAttribute("class", "far fa-trash-alt del__icon");
  delIcon.addEventListener("click", () => {
    todoItems.removeChild(todoItem);
  });

  todoItem.appendChild(todoIcon);
  todoItem.appendChild(todoContent);
  todoItem.appendChild(delIcon);

  const todoItems = document.querySelector(".todo__items");
  todoItems.appendChild(todoItem);
}

button.addEventListener("click", () => {
  onAdd();
});
