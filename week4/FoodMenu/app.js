
let dishesListDiv = document.getElementById("dishesListDiv")
let courseTitle = document.getElementById("courseTitle")

// buttons
let fullButton = document.getElementById("fullMenuButton")
let starterButton = document.getElementById("fullStartersButton")
let entreeButton = document.getElementById("fullEntreesButton")
let dessertButton = document.getElementById("fullDessertsButton")

let getDishes = (course) => {
  if (course === "Full Menu") {
    return dishes
  } else {
    return dishes.filter((dish) => dish.course === course)
  }
}

let writeCourseToDOM = (course) => {
  let displayDishes = getDishes(course)

  let mapDishes = displayDishes.map((dish) => {
    let dishDiv = `<div class="courseDiv">
                        <div class="courseImg">
                            <img src="${dish.imageURL}" />
                        </div>
                        <div class="courseTitleDescrip">
                            <h2>${dish.title}</h2>
                            <p>${dish.description}</p>
                        </div>
                        <div class="coursePrice">
                            <p>\$${dish.price}</p>
                        </div>
                    </div>`
    return dishDiv
  })

  // Update the course title
  courseTitle.innerHTML = course
  // Write courses down
  dishesListDiv.innerHTML = mapDishes.join("")
}

writeCourseToDOM("Full Menu")

// (Full Button)
fullButton.addEventListener("click", function () {
  writeCourseToDOM("Full Menu")
})

// (Starter Button)
starterButton.addEventListener("click", function () {
  writeCourseToDOM("Starters")
})

// (Entree Button)
entreeButton.addEventListener("click", function () {
  writeCourseToDOM("Entrees")
})

// (Dessert Button)
dessertButton.addEventListener("click", function () {
  writeCourseToDOM("Desserts")
})