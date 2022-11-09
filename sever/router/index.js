const express = require('express')
const path = require('path')
const router = express()

router.get('/',function(req,res){
  res.sendFile(path.resolve(__dirname,'../../index.html'))
})
router.get('/xml.js',function(req,res){
  res.sendFile(path.resolve(__dirname,'../../xml.js'))
})
module.exports = router