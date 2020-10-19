
// sudo npm install --global nodemon

const express = require('express')
const app = express() 
const cors = require('cors')

// array to store all movies 
let movies = [{
    title: 'Lord of the Rings', 
    year: '2019'
},
{
    title: 'Batman', 
    year: '2019'
}
] 


// MIDDLEWARE

// enable CORS 
app.use(cors())
// Telling Express how to parse JSON body 
app.use(express.json())


// localhost:3000, www.google.com 
app.get('/',(req,res) => {
    res.send('Hello World')
})

app.get('/hshshahjsdakjsdaksda',(req,res) => {
    res.send('Some URL')
})

app.get('/movie',(req,res) => {
    let movie = { name: 'Spiderman', year: '2010', poster: 'some poster' }
    res.json(movie)
})

/*
app.get('/movies',(req, res) => {

    let movies = [
        {name: 'Spiderman', year: 2020}, 
        {name: 'Batman', year: 2016}, 
        {name: 'Superman', year: 2015}
    ]

    let response = { Search: movies, totalResults: movies.length, Response: true }

    res.json(response)

})*/


// /movies/action 
// /movies/scifi 
// /movies/kids 
// /movies/:genre 

app.get('/movies/:genre',(req,res) => {

    console.log(req.params.genre) 

    console.log('Movies Genre Route')
    res.send('Movies Genre')
})

// /movies/genre/comedy/year/1990
// /movies/genre/action/year/2010
// /movies/genre/scifi/year/2018

// movies/comedy/2013 
// movies/action/2015 
// movies/fiction/2017 
app.get('/movies/:genre/:year',(req,res) => {
    let genre = req.params.genre 
    let year = req.params.year 
    console.log(genre)
    console.log(year)
    res.json('movies')
})

// localhost:3000/digital-crafts/cohort/2020
app.get('/digital-crafts/cohort/:year',(req,res) => {
    let year = req.params.year
    res.send(`I study at DigitalCrafts ${year} Cohort`) 
})

// /movies/action 
/*
app.get('/movies/action',(req,res) => {

    let movies = [
        {title: 'Action Movie 1'}, 
        {title: 'Action Movie 2'}
    ]

    res.json(movies)
})

// /movies/scifi
app.get('/movies/scifi',(req,res) => {

    let movies = [
        {title: 'Scifi Movie 1'}, 
        {title: 'Scifi Movie 2'}
    ]

    res.json(movies)
})

// /movies/kids 
app.get('/movies/kids',(req,res) => {

    let movies = [
        {title: 'Kids Movie 1'}, 
        {title: 'Kids Movie 2'}
    ]

    res.json(movies)
}) */


// localhost:3000 (localhost = 127.0.0.1)


app.get('/movies',(req,res) => {
    res.json(movies)
})

app.delete('/movies',(req,res) => {

})

// /movies 
// create a new movie 
// title: String 
// year: String 
app.post('/movies',(req,res) => {

    let title = req.body.title 
    let year = req.body.year 
    let movie = {title: title, year: year}
    movies.push(movie)
    res.json({success: true})
})


// starting the server on PORT 3000
app.listen(3000, () => {
    console.log('Server is running...')
}) 
