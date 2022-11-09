const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/picture/*',(req,res) => {
    console.log('传参',req.query)
    if(req.query.path !== 'default.png'){
        setTimeout(() => {
            res.sendFile(path.resolve(__dirname,'../static',req.query.path))
        },500) 
    } else {
        res.sendFile(path.resolve(__dirname,'../static',req.query.path))
    }
    
})


module.exports = router