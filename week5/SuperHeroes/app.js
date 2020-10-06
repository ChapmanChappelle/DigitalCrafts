let request = new XMLHttpRequest()
let container = document.getElementById("container")
let searchBox = document.getElementById("searchBox")
let searchTxt = document.getElementById("searchTxt")
let searchBtn = document.getElementById("searchBtn")

request.addEventListener("load", function () {
  let result = JSON.parse(this.responseText)

  let writeMovies = result.Search.map((movie) => {
    let movieItem = `
        <p>${movie.Title}</p>
        <p>${movie.Year}</p>
        <img src="${movie.Poster}"></img>
      `
    return movieItem
  })

  container.insertAdjacentHTML("beforeend", writeMovies.join(""))
})

// grabs the user input to change the xhr link and reload the page
searchBtn.addEventListener("click", function () {
  container.innerHTML = " "
  let userInput = searchTxt.value
  console.log(userInput)
  let link = `http://www.omdbapi.com/?s=${userInput}&apikey=8525251b`
  console.log(link)
  request.open("GET", link)
  request.send()
})
