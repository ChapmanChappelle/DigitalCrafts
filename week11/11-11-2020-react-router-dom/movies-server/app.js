
const express = require('express')
const app = express() 
const cors = require('cors')

app.use(cors()) // enable CORS 
app.use(express.json()) // body parser 

let movies = [] // In your case you should have a database 

movies.push({title: 'Batman', year: 2010, poster: 'https://images-na.ssl-images-amazon.com/images/I/61qghiSZAIL._AC_SL1050_.jpg'})
movies.push({title: 'Spiderman', year: 2009, poster: 'https://images-na.ssl-images-amazon.com/images/I/519Vb6XKnkL.jpg'})

app.post('/movies',(req,res) => {

    const title = req.body.title 
    const year = req.body.year 
    const poster = req.body.poster 

    let movie = {title: title, year: year, poster: poster}

    movies.push(movie)

    res.json({success: true})
})


app.get('/movies',(req,res) => {

    res.json(movies)

})


app.listen(8080,() => {
    console.log('Server is running...')
})