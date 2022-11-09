const express = require('express')
const router = express.Router()

router.get('/picture',(req,res) => {
    console.log('传参',req)
    res.attachment(`./static/${req.params.path}`)
})

module.exports = router