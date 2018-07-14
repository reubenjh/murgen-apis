const path = require('path')
const express = require('express')

const haikuRoutes = require('./routes/haiku')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/haiku', haikuRoutes)

module.exports = server
