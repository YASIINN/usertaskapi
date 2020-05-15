const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const route = require('./router/index')
const cors = require('cors')
const sequelize = require('./database/db')
const relations = require('./database/relations')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors())

app.use("/api/todo", route.todo)
app.use("/api/user", route.user)

module.exports = app
