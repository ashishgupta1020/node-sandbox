const express = require('express')
const router = require('./first_router')
const app = express()

app.get('/', 
(req, res, next) => {
    console.log('Time: ', new Date().toUTCString())
    next()
},
(req, res) => {
    res.send('Hello, World!')
})
app.use('/first_router', router)
app.listen(8082, () => console.log("Express app listening on port 8082"))
