
let moviesDiv = document.getElementById("moviesDiv")
let movieDetailsDiv = document.getElementById("movieDetailsDiv")

function getAllMovies(completion) {

    let moviesUrl = "http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa"
    let request = new XMLHttpRequest()

    request.onload = function () {

        movies = JSON.parse(this.responseText)
        completion(movies)

    }

    request.open('GET', moviesUrl)
    request.send()
}


getAllMovies((movies) => {
    displayMovies(movies)
})

function showMovieDetails(imdbId) {
   let request = new XMLHttpRequest() 
   request.open('GET',`http://www.omdbapi.com/?i=${imdbId}&apikey=564727fa`)

   request.onload = function() {
       let details = JSON.parse(this.responseText)
       let detailsItem = `<div>
                    <p>${details.Actors}</p>
                    <p>${details.Plot}</p>
       </div>`

       movieDetailsDiv.innerHTML = detailsItem
   } 

   request.send() 
}

function displayMovies(movies) {

    let movieItems = movies.Search.map((movie) => {
        return `<div>
        <p><a href="#" onclick="showMovieDetails('${movie.imdbID}')">${movie.Title}</a></p>
        <img src=${movie.Poster} />
        <button onclick="showMovieDetails('${movie.imdbID}')">Show Details</button>
        </div>`
    })

    moviesDiv.insertAdjacentHTML('beforeend', movieItems.join(''))
}

getAllMovies((movies) => {
    displayMovies(movies)
})


