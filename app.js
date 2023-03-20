"use strict";

window.addEventListener("load", initApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() {
  console.log("Start");

  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
  console.log("Added item");

  if (newToDo.value) {
    newToDo.placeholder = "Enter a new item";
    const listItem = /*html*/ `
        <li>
            <span>${newToDo.value}</span>
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        </li>
    `;
    list.insertAdjacentHTML("beforeend", listItem);

    list
      .querySelector("li:last-child .delete-btn")
      .addEventListener("click", removeToDo);
    list
      .querySelector("li:last-child .edit-btn")
      .addEventListener("click", editToDo);
  } else {
    newToDo.placeholder = "Must not be empty";
  }
  newToDo.value = "";
}

// function addToDo() {
//
//   const listItem = document.createElement("li");
//   const listText = document.createElement("span");
//   const listBtn = document.createElement("button");

//   listBtn.textContent = "Delete";
//   listText.textContent = newToDo.value;

//   listItem.appendChild(listText);
//   listItem.appendChild(listBtn);

//   list.appendChild(listItem);
//   newToDo.value = "";

//   listBtn.addEventListener("click", removeToDo);

//   console.log(listItem);
//   console.log(listText);
//   console.log(listBtn);
// }

function editToDo() {
  console.log("Edit item");
}

function removeToDo() {
  console.log("Removed item");
  this.parentNode.remove();
}
