const express = require('express')

const routes = express.Router()

const EmployeeController = require('./controllers/EmployeeController')


routes.get('/users', EmployeeController.index)
routes.get('/create', EmployeeController.create)


module.exports = routes;