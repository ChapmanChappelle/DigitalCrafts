// NPM INSTALL NODEMON
// NPM INSTALL MUSTACHE-EXPRESS
const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const PORT = 3000
// setting up Express to use Mustache Express as template pages
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"))
// the pages are located in views directory
app.set("views", "./views")
//setting up view engine
app.set('view engine', 'mustache');
const VIEWS_PATH = path.join(__dirname,"/views")
// for parsing form submitted data
app.use(express.urlencoded())
// to use js for client side
app.use(express.static("js"))
// to use styling
app.use(express.static("css"))

// pages and stuff
app.get("/page",(req,res) => {
   res.render("page")
})

// run page
app.listen(PORT,() => {
   console.log('Server is running...')
})