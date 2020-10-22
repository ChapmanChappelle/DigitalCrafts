//setup
const express = require('express')
const app = express()
const session = require('express-session')
const mustacheExpress = require('mustache-express')
const counterRouter = require('./routes/counter')
app.engine('mustache', mustacheExpress())
app.set('views','./views')
app.set('view engine', 'mustache')


// counter page
app.get('/counter', (req,res) => {
   res.render('counter')
})

app.post('/counter', (req,res) => {

})
// counter page











app.listen(3000, () => {
   console.log("Server is running.....")
})