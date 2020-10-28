
const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const models = require('./models')
const { Op } = require("sequelize");

app.use(express.urlencoded())

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress())
// the pages are located in views directory
app.set('views','./views')
// extension will be .mustache
app.set('view engine','mustache')

/*
let movie = models.Movie.build({
    title: 'Spiderman', 
    description: 'This is a spiderman movie', 
    rating: 7
})

movie.save().then((savedMovie) => {
    console.log(savedMovie)
}) */

app.post('/update-movie',(req,res) => {

    const movieId = req.body.movieId 

    // check for the user data 


    const title = req.body.title 
    const description = req.body.description 
    const rating = parseInt(req.body.rating) 


    models.Movie.update({
        title: title, 
        description: description, 
        rating: rating
    },{
        where: {
            id: movieId 
        }
    }).then(updatedMovie => {
        console.log(updatedMovie)
        res.redirect('/movies')
    })

})

app.post('/delete-movie',(req,res) => {

    const movieId = req.body.movieId 

    models.Movie.destroy({
        where: {
            id: movieId
        }
    }).then(deletedMovie => {
        console.log(deletedMovie)
        res.render('movies') 
    })

})

app.get('/movies/:movieId',(req,res) => {

    const movieId = req.params.movieId 

    models.Movie.findByPk(movieId).then(movie => {
        console.log(movie)
        res.render('movie-detail',movie.dataValues)
    })

})

app.get('/movies',(req,res) => {
    models.Movie.findAll({
        where: {
            rating: {
                [Op.gt]: 7 // rating greater than 7
            }
        }
    }).then(movies => {
        console.log(movies)
        res.render('movies',{movies: movies})
    })
})

app.post('/create-movie',(req,res) => {

    const title = req.body.title 
    const description = req.body.description 
    const rating = parseInt(req.body.rating) 

    // building the Movie object 
    let movie = models.Movie.build({
        title: title, 
        description: description, 
        rating: rating
    })

    // saving the movie to the database 
    movie.save().then((savedMovie) => {
        res.render('confirm', savedMovie.dataValues)
    }).catch((error) => {
        res.render('error')
    })
        
})


app.listen(3000,() => {
    console.log('Server is running...')
})