const express = require('express')
const router = express()

router.get('/picData',(req,res) => {
  console.log('传参',req)
  let arr = []
  for(let i=0;i<50;i++){
    arr.push('goods1.png')
    arr.push('goods2.png')
    arr.push('goods3.png')
  }
  res.send(arr)
})

module.exports = router