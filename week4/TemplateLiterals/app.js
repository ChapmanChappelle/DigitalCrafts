// template literals
/*
let title = "Clean dishes"

function removeButtonClick() {
    console.lof("remove button clicked caalled...")
}

let ul = `<ul>
            <li>
            <label>${title}</label>
            <button onclick='removeButtonClick()'>Remove</button>
            </li>
            </ul>`

document.body.innerHTML = ul;

let fullName = firstName + " " + lastName
let fullName = '${firstName}, ${lastName}'

*/

/*
let firstNameTxt = document.getElementById("firstNameTxt")
let lastNameTxt = document.getElementById("lastNameTxt")
let submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", function () {

    // create full name
    let fullNameTxt = document.createElement("p")
    let first = firstNameTxt.value
    let last = lastNameTxt.value
    let fullName = `${last}, ${first}`
    document.body.innerHTML = fullName
})
*/

// LOOPS INFO FROM posts.js AND PUTS IT IN AN UL LIST
let postsUL = document.getElementById("postsUL")

for (let i = 0; i < posts.length; i++) {
  let post = posts[i]

  postsItem = `
            <li>
                <b>${post.title}</b>
                <p>${post.body}</p>
            </li>`
  postsUL.insertAdjacentHTML("afterbegin", postsItem)

}
