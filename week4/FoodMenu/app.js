let dishesUL = document.getElementById("dishesUL")
let appBtn = document.getElementById("appBtn")
let entreeBtn = document.getElementById("entreeBtn")
let dessertBtn = document.getElementById("dessertBtn")

//displaying food function
displayDishes = function (course) {
    for (let i = 0; i < dishes.length; i++) {
        let dish = dishes[i]

        dishItem = `
            <li>
                <b>${dish.title}</b>
                <p>${dish.description}</p>
                <p>${dish.price}</p>
                <img src="${dish.imageURL}"></img>
            </li>`
    dishesUL.insertAdjacentHTML("afterend", dishItem)
    }
}

// clearing list function
emptyList = function () {
        
  var ul = document.querySelector("#dishesDiv")
  var listLength = ul.children.length
  for (i = 0; i < listLength; i++) {
    ul.removeChild(ul.children[0])
  }
}
displayDishes()

// button filters
appBtn.addEventListener("click", function () {
    emptyList()
    displayDishes()
})
entreeBtn.addEventListener("click", function () {
    emptyList()
})
dessertBtn.addEventListener("click", function () {
    emptyList()
})