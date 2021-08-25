const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}))
server.use(router)

server.use(jsonServer.bodyParser)
server.listen(8000, () => {
  console.log('JSON Server is running on port 8000')
})
