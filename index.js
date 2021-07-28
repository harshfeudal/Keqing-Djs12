require('dotenv').config()

require('./bot')

const http = require('http')
const server = http.createServer((req, res) => {
	res.writeHead(200)
	res.end('ok')
})
server.listen(3000)
