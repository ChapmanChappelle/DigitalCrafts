const express = require('express')
const app = express()
const session = require('express-session')
const adminRouter = require('./routes/admin')

// LOGGING MIDDLEWARE 
function loggingMiddleware(req,res, next) {
    console.log("LOGGING MIDDLEWARE")
    next() // continue with the original request 
}

//app.use(loggingMiddleware)

app.use(express.urlencoded())
// initialize the session 
app.use(session({
    secret: 'USEASECUREKEYHERE',
    resave: false,
    saveUninitialized: true
  }))

// all routes going to /admin will be handled by adminRouter 
app.use('/admin',authenticate,adminRouter)

let users = [
    {username: 'johndoe', password: 'password'}, 
    {username: 'marydoe', password: 'password'}
] 

const mustacheExpress = require('mustache-express')

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

// registration page action 
app.get('/register',(req,res) => {
    res.render('register')
})

// register user POST action 
app.post('/register', (req,res) => {
    const username = req.body.username
    const password = req.body.password 

    let user = {username: username, password: password}
    // check if the user has already been registered. You can use the username to *find* the existing user in the users array 
    users.push(user)

    res.redirect('/login')
})

// show the login page 
app.get('/login',(req,res) => {
    res.render('login')
})

// login POST route 
app.post('/login',(req, res) => {
    const username = req.body.username 
    const password = req.body.password 

    // check if the username and password matches of a user in the users array 
    
   const persistedUser = users.find(user => {
        return user.username == username && user.password == password
    })

    if(persistedUser) {
        // put something in the session to indicate that the user is 
        // logged in 
        if(req.session) {
            // don't put sensitive data into the session 
            req.session.isAuthenticated = true 
            req.session.username = username 
            //req.session.foo = username 
            res.redirect('/profile')
        }


    } else {
        // tell the user that username or password is incorrect
        res.render('login',{message: 'Username or password is incorrect'})
    }

})

// ADMIN PAGES

// authentication middleware 
// ONE REFACTORING you can do is to move the authenticate function 
// into a separate authenticate.js file 
function authenticate(req,res,next) {
    if(req.session) {
        if(req.session.username) {
            // continue with the original request 
            next()                                     
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }
}


/* MOVED INTO adminRouter 
app.get('/admin',authenticate,(req,res) => {

    res.render('admin')


    if(req.session) {
        if(req.session.username) {
            // user is logged in 
            res.render('admin')
        } else {
            // not logged in 
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }   
})  */

/* MOVED INTO adminRouter 
app.get('/admin/revenue',authenticate, (req,res) => {

    res.render('revenue')

    if(req.session) {
        if(req.session.username) {
            res.render('revenue')
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    } 
   
}) */



// profile page 
app.get('/profile',(req,res) => {
    console.log(req.session.username)
    console.log(req.session.isAuthenticated)
    res.render('profile')
})


// ACTIVITY 1 - COUNTER APP USING SESSION 

app.get('/counter',(req,res) => {

    if(req.session) {
        req.session.counterValue = 0 
    }

    res.render('counter')
})

app.post('/counter',(req,res) => {

    if(req.session) {
        req.session.counterValue += 1 
    }

    res.render('counter',{counterValue: req.session.counterValue})
})


app.listen(3000,() => {
    console.log('Server is running...')
})