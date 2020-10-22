
const express = require('express')
const router = express.Router() 

// /admin 
router.get('/',(req,res) => {
    res.render('admin')
})

// /admin/revenue 
router.get('/revenue',(req,res) => {
    res.render('revenue')
})

// /admin/dashboard 



module.exports = router 