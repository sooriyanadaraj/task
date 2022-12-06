require('dotenv').config({ path: __dirname + '/config/.env' })
require('./config/db')
const express = require('express')
const taskRoute = require('./route')

const app = express()
app.use(express.json())
app.use(taskRoute)

const port = process.env.PORT || 3002

const server = app.listen(port, () => {
    console.log("Task Running on : localhost", process.env.PORT);
})