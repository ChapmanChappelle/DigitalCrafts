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

    //console.log("AT THE START OF FUNCTION")

    // any function will always returns an array 
    db.any('SELECT user_id, last_name, first_name, age FROM users;')
    .then(users => {
       // console.log("FETCHED USERS")
        res.render('index',{users: users})
    })

    //console.log("AT THE END OF FUNCTION")
})

app.post('/delete-user',(req,res) => {

    const userId = req.body.userId 

    db.none('DELETE FROM users WHERE user_id = $1;',[userId])
        .then(() => {
            res.redirect('/')
        })

})

app.post('/create-user',(req,res) => {

    const firstName = req.body.firstName 
    const lastName = req.body.lastName 
    const age = parseInt(req.body.age) // convert age from string to integer 

    /* INSERT INTO users(first_name, last_name, age) VALUES('George', 'Doe', 45);  */

    db.none('INSERT INTO users(first_name, last_name, age) VALUES($1,$2,$3)',[firstName, lastName, age])
    .then(() => {
        // do something after inserted successfully! 
        res.redirect('/')
    })

})  


app.listen(3000, () => {
    console.log('Server is running...')
})