const express = require('express')
const router = express.Router()

router.use(function(req, res, next){
    console.log('Time: ', new Date())
    next()
})

router.get('/', (req, res) => {
    res.send('home page for my first router')
})

module.exports = router
