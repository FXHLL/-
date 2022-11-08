const express = require('express')
const router = express.Router()

router.get('picture',(req,res) => {
    res.attachment()
})