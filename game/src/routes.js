const healthRoutes = require('./app/routes/health')

module.exports = app => {
  app.use('/games', healthRoutes)
}
