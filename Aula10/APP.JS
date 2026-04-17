import http from 'node:http'
import fs from 'node:fs/promises'


const server = http.createServer(async (request, response) => {
  if (request.url === '/' && request.method === 'GET') {

    const templateHtml = await fs.readFile('./index.html', 'utf-8')

    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.writeHead(200)
    response.end(templateHtml)
  }

  else if(request.url.endsWith('.gif')){
    const arquivo = await fs.readFile('.' + request.url)

      response.setHeader('X-Content-Type-Options', 'nosniff')
  response.setHeader('Content-Type', 'image/gif')
    response.writeHead(200)
    response.end(arquivo)
     
}

else if (request.url.endsWith('.css')) {
  const arquivo = await fs.readFile('.' + request.url)


  
  response.setHeader('X-Content-Type-Options', 'nosniff')
  response.setHeader('Content-Type', 'text/css')
  response.writeHead(200)
  response.end(arquivo)
}
else if(request.url.endsWith('.png')){
    const arquivo = await fs.readFile('.' + request.url)

      response.setHeader('X-Content-Type-Options', 'nosniff')
  response.setHeader('Content-Type', 'image/png')
    response.writeHead(200)
    response.end(arquivo)
}
else {
    response.writeHead(404);
    response.end('Recurso inexistente');
}
});

server.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"))