

const titleTextBox = document.getElementById('titleTextBox')
const yearTextBox = document.getElementById('yearTextBox')
const saveMoveButton = document.getElementById('addMovieButton')

saveMoveButton.addEventListener('click', () => {
    let title = titleTextBox.value
    let year = yearTextBox.value

    fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            year: year
        })
    }).then(response => response.json())
        .then(result => {
            if (result.success) {
                // fetch all the movies again
                populateAllMovies() 
            }
        })

})

const moviesList = document.getElementById('moviesList')

function populateAllMovies() {

    // clear the ul innerHTML 
    moviesList.innerHTML = ''

    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(movies => {
            let movieItems = movies.map((movie) => {
                return `<li>${movie.title}</li>`
            })

            moviesList.insertAdjacentHTML('beforeend', movieItems.join(''))
        })
}

populateAllMovies() 

