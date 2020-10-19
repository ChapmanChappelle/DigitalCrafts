const express = require('express')
const app = express()

app.get('/',(req,res) => {
   res.send("Hello World")
})

app.get('/digital-crafts/cohort/:year',(req,res) => {
   let year = req.params.year 
   console.log(year)
   res.send(`I study at Digital Crafts cohort ${year}`)
})

app.listen(3000, () => {
   console.log("Server is running....")
})