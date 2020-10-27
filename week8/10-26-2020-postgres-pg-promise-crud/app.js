const express = require('express')
const app = express() 
// initialize pg-promise library
const pgp = require('pg-promise')()
var bcrypt = require('bcryptjs');

const connectionString = 'postgres://localhost:5432/mydatabase'

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


app.get('/dashboard',async (req,res) => {

    let result = await db.any('SELECT users.user_id,first_name, last_name, age, street, city, state FROM users JOIN addresses ON users.user_id = addresses.user_id')

    let users = formatUsersAndAddressesForDisplay(result)
    
    console.log(users)

    res.render('dashboard', {usersAddresses: users})
})

function formatUsersAndAddressesForDisplay(list) {

    let users = [] 

    list.forEach((item) => {
        if(users.length == 0) {
            let user = {userId: item.user_id,firstName: item.first_name,
                 lastName: item.last_name,addresses: [{city: item.city, street: item.street}]}
            users.push(user)
        } else {
            let user = users.find(user => user.userId == item.user_id)
            if(user) {
                user.addresses.push({city: item.city, street: item.street})
            } else {
                let user = {userId: item.user_id,firstName: item.first_name,
                    lastName: item.last_name,addresses: [{city: item.city, street: item.street}]}
               users.push(user)
            }
        }
    })

    return users 

}

app.post('/delete-user',(req,res) => {

    const userId = req.body.userId 

    db.none('DELETE FROM users WHERE user_id = $1;',[userId])
        .then(() => {
            res.redirect('/')
        })

})


app.post('/register',(req,res) => {

    const username = req.body.username 
    const password = req.body.password 

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            db.none('INSERT INTO registrations(username, password) VALUES($1,$2)',[username, hash])
            .then(() => {
                res.redirect('/dashboard')
            })
        })
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