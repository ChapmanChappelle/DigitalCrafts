// getting html objects
let firstNameTextBox = document.getElementById("fistNameTextBox")
let lastNameTextBox = document.getElementById("lastNameTextBox")
let submitButton = document.getElementById("submitButton")
let fullNameParagraph = document.getElementById("fullNameParagraph")

submitButton.addEventListener("click", function () {
    // get the value of the textboxes    
    let firstName = firstNameTextBox.value
    let lastName = lastNameTextBox.value
    // put txtbox stuff in paragraph
    fullNameParagraph.innerHTML = lastName + ", " + firstName


})

