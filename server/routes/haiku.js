const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/', (req, res) => {
  request
    .get('https://icanhazdadjoke.com/')
    .set('Accept', 'application/json')
    .then(haiku => {
      res.json({haiku})
    })
})

module.exports = router
