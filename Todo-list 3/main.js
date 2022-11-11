let addTasksBtn = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let listBtn = document.querySelectorAll("#lista");
let finishedTasks = document.getElementById("finished-container");

listBtn.forEach((element) => {
  element.addEventListener("click", function () {
    finishedTasks.append(element);
    element.style.backgroundColor = "green";
  });
  element.addEventListener("dblclick", function () {
    element.remove();
  });
});

addTasksBtn.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.innerText = inputField.value;
  toDoContainer.append(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    finishedTasks.append(paragraph);
    paragraph.style.backgroundColor = "green";
  });
  paragraph.addEventListener("dblclick", function () {
    paragraph.remove();
  });
});
