const express = require('express')
const router0 = require('./router/index')
const router1 = require('./router/static')
const router2 = require('./router/data')
const app = express()

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
//   res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
//   next()
// })
app.use('/',router0)
app.use('/static', router1)
app.use('/getData', router2)
app.listen(3000, function () {
  console.log('3000端口正在监听')
})