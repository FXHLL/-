const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/picture/*',(req,res) => {
    if(req.query.path !== 'default.png'){
        setTimeout(() => {
            res.sendFile(path.resolve(__dirname,'../static',req.query.path))
        },200) 
    } else {
        res.sendFile(path.resolve(__dirname,'../static',req.query.path))
    }
    
})


module.exports = router