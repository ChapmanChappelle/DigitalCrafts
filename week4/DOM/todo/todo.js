let taskNameTxtBox = document.getElementById("taskNameTxtBox")
let saveBtn = document.getElementById("saveBtn")
let tasksUL = document.getElementById("taskUL")
let completedUL = document.getElementById("completedUL")

saveBtn.addEventListener("click", function () {
  //create a li element
  let li = document.createElement("li")
  //create a label
  let lbl = document.createElement("label")
  // adding checkbox
  // also added checkbox
  let checkBox = document.createElement("input")
  checkBox.type = "checkbox"
  checkBox.id = "check"
  checkBox.checked = false
  checkBox.addEventListener("click", function () {
    completedUL.appendChild(this.parentElement)
  })
  // adding button
  let removeBtn = document.createElement("button")
  removeBtn.id = "removeBtn"
  removeBtn.innerHTML = "Remove"
  removeBtn.addEventListener("click", function () {
    let parent = this.parentElement.parentElement
    parent.removeChild(this.parentElement)
  })
  // change the inner html to reflect the value from textbox
  taskName = taskNameTxtBox.value
  lbl.innerHTML = taskName

  // adding stuff to li
  li.appendChild(checkBox)
  li.appendChild(lbl)
  li.appendChild(removeBtn)

  //putting li into ul element
  tasksUL.appendChild(li)

  // clearing the txt box
  taskNameTxtBox.value = " "
})
