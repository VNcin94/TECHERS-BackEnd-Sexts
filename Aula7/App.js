// import http, { request } from 'node:http'
// const server = http.createServer((request, response) =>{
//     // aqui acontece a magica
// });
// // ou
// const server1 = http.createServer();
// server1.on('request', (request, response) => {
// });
// server.listen(8080)
// const { method, url, headers} = request
// const userAgent = headers['user-agent']
import http from 'node:http'
const PORT = 2000
const server = http.createServer((request, response) => {
    // 1 - identificacao
    console.log(`Recebi uma requisição ${request.method} para ${request.url}`)
    // 2 - idioma comum
    response.setHeader('Content-type', 'text/html; charset=utf-8')
    //3 - confirmacao de recebimento
    response.writeHead(200)
    // 4 - o conteudo
    response.write('<h1>Olá Mundo!</h1>')
    response.write('<p>Este é o meu primeiro servidor Node.js</p>')
    response.end()
});
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});