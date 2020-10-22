const express = require('express')
const app = express()

app.use(express.urlencoded())

const mustacheExpress = require('mustache-express')

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

let movies = [
    {name: 'Movie1', movieId: 1, genre: 'action'}, 
    {name: 'Movie2', movieId: 2, genre: 'kids'}, 
    {name: 'Movie3', movieId: 3, genre: 'action'}
] 

let details = [
    {movieId: 1, director: 'Director Name', year: 2020, rating: 8.9}, 
    {movieId: 2, director: 'Director Name 2', year: 2019, rating: 9}
]

app.get('/movies',(req,res) => {
    res.render('movies',{movies: movies})
})

app.post('/movies/search',(req,res) => {
    let genre = req.body.genre
    const filteredMovies = movies.filter(movie => {
        return movie.genre == genre 
    })
    
    res.render('movies',{movies: filteredMovies})
})

app.get('/movies/:movieId',(req,res) => {
    const movieId = req.params.movieId 

    const movieDetails = details.find((movie) => {
        return movie.movieId == movieId 
    })

    console.log(movieDetails)
    res.render('movie-details',movieDetails)
})



app.listen(3000,() => {
    console.log('Server is running...')
})