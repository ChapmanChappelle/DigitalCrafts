// NPM INSTALL NODE
// NPM INSTALL NODEMON
// NPM INSTALL MUSTACHE-EXPRESS
const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const PORT = 3000
// setting up Express to use Mustache Express as template pages
app.engine("mustache", mustacheExpress())
// the pages are located in views directory
app.set("views", "./views")
//setting up view engine
app.set('view engine', 'mustache');
// for parsing form submitted data
app.use(express.urlencoded())

// pages and stuff
app.get("/page",(req,res) => {
   res.render("page")
})



// run page
app.listen(PORT,() => {
   console.log('Server is running...')
})