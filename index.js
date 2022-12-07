require('dotenv').config({ path: __dirname + '/config/.env' })
require('./config/db')
const express = require('express')
const taskRoute = require('./routers/task')

const app = express()
app.use(express.json())
app.use(taskRoute)

const port = process.env.PORT || 3002

app.listen(port, () => {
    console.log("Task Running on =>  http://localhost:", process.env.PORT);
})