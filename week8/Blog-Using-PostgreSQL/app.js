const express = require('express')
const app = express() 
// initialize pg-promise library
const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/chapmanchappelle'
// initialize pg promise by using a connection string 
// pgp(...) returns an object which contains functions to interact with the database 
const db = pgp(connectionString)
const mustacheExpress = require('mustache-express')
app.use(express.urlencoded())
// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress())
// the pages are located in views directory
app.set('views','./views')
// extension will be .mustache
app.set('view engine','mustache')


app.get('/',(req,res) => {
    db.any('SELECT post_id, title, body, date_created, is_published FROM blog_posts;')
    .then(blog_posts => {
        res.render('index',{blog_posts: blog_posts})
    })
})

app.post('/delete-post',(req,res) => {
    const post_id = req.body.post_idd 
    db.none('DELETE FROM blog_posts WHERE user_id = $1;',[post_id])
    .then(() => {
        res.redirect('/')
    })
})

app.post('/create-post',(req,res) => {
    const title = req.body.title 
    const body = req.body.body
    db.none('INSERT INTO blog_posts(title, body) VALUES($1,$2)',[title, body])
    .then(() => {
        // do something after inserted successfully! 
        res.redirect('/')
    })
})  


app.listen(3000, () => {
    console.log('Server is running...')
})