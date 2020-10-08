let addDataButton = document.getElementById("addDataButton")
let moviesList = document.getElementById("moviesList")
let movieNameTextField = document.getElementById("movieNameTextField")
let movieYearTextField = document.getElementById("movieYearTextField")
let addMovieButton = document.getElementById("addMovieButton")

addMovieButton.addEventListener("click", () => {
   let name = movieNameTextField.value
   let year = movieYearTextField.value

   saveDataToFirebase(name, year)
})

addDataButton.addEventListener("click", function () {
   saveDataToFirebase()
})

function saveDataToFirebase(name, year) {
   // write something to firestore database
   db.collection("movies")
      .add({
         name: name,
         year: year,
      })
      .then(function (docRef) {
         getAllMovies()
      })
      .catch(function (error) {
         console.log(error)
      })
}

function deleteMovie(documentId) {
   // delete the movie based on the documentId
   db.collection("movies")
      .doc(documentId)
      .delete()
      .then(function () {
         // fetch all movies again
         getAllMovies()
      })
      .catch(function (error) {})
}

function getAllMovies() {
   // reset the movieList
   moviesList.innerHTML = ""

   db.collection("movies")
      .get()
      .then((snapshot) => {
         snapshot.forEach((doc) => {
            let data = doc.data()
            let movieItem = `<li>
            <label>${data.name} - ${data.year}</label>
            <button onclick="deleteMovie('${doc.id}')">Delete</button>
            </li>`
            moviesList.insertAdjacentHTML("beforeend", movieItem)
         })
      })
}

getAllMovies()

/*
Walmart 
   - Eggs 
   - Bread 

Fiesta
 - Fish 
 - Meat
 */
