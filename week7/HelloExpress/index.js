const express = require('express')
const app = express()

app.get('/',(req,res) => {
   res.send("Hello World")
})


app.get('/names', (req,res) => {
   let names = { firstName: "John", lastName: "Doe"}
   res.json(names)

   let response = {Search: names, totalResults: names.length, Response: true}

   res.json(response)
})

app.listen(3000, () => {
   console.log("Server is running....")
})