import http from 'node:http'
import { roteador } from './src/routers.js'

const port = 3000

const server = http.createServer(roteador)

server.listen(port, () => console.log('Servidor rodando em: http://localhost:' + port))