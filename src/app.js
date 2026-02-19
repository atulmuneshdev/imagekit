const express = require('express')

const connectDB = require('./DB connection/config')
const imagerouter = require('./router/post.route')

require('dotenv/config')

const app = express()
connectDB()

app.use(express.json())

app.use('/api/post', imagerouter)

module.exports = app