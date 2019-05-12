const server = require('./server')

server.listen(process.env.PORT | 3000, () =>
  console.log(`Servidor online na porta ${process.env.PORT}`)
)
