import http from 'node:http'

const server = http.createServer((request, response) => {
  const { url, method } = request

  response.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (url === '/') {
    response.writeHead(200)
    response.end('<h1>Bem vindo a home!!</h1><p>Tente acessar /aula ou /projetos</p>')
  }

  else if(url === '/aula'){
  response.writeHead(200)
  response.end('<h1>Pagina de Aula</h1><p>Hoje estamos aprendendo sobre http</p>')
}
else if (url === '/projetos'){
  response.writeHead(200)
  response.end('<h1>Pagina de Projetos</h1><p>Servidor node integrado com sucesso</p>')
}
else{
  response.writeHead(404)
  response.end('<h1>404 - pagina nao encontrada</h1>')
}
});

