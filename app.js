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
app.use("/api/tech", route.tech)
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
});
module.exports = app
