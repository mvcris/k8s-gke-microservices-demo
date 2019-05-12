require('dotenv').config()
const express = require('express')
const app = express()
const injectMiddlewares = require('./middlewares')
const injectRoutes = require('./routes')

injectMiddlewares(app)
injectRoutes(app)

module.exports = app
