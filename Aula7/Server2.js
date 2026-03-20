import http from 'node:http'

const server = http.createServer((request, response) => {
    const { url } = request

    // Configurando o Header para aceitar acentos e HTML
    response.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (url === '/') {
        response.writeHead(200)
        response.end(`
            <h1>Bem-vindo ao Portal</h1>
            <p>Escolha um dos caminhos abaixo:</p>
            <ul>
                <li><a href="/perfil">Ver Perfil do Aluno</a></li>
                <li><a href="/notas">Ver Boletim</a></li>
            </ul>
        `)
    } 
    else if (url === '/perfil') {
        response.writeHead(200)
        response.end(`
            <h1>Perfil do Aluno</h1>
            <p><strong>Nome:</strong> Usuário Techers</p>
            <p><strong>Turma:</strong> Backend 2026</p>
            <br>
            <a href="/">Voltar para Home</a>
        `)
    } 
    else if (url === '/notas') {
        response.writeHead(200)
        response.end(`
            <h1>Notas Finais</h1>
            <table border="1">
                <tr><th>Matéria</th><th>Nota</th></tr>
                <tr><td>Matemática</td><td>10.0</td></tr>
                <tr><td>Lógica de Programação</td><td>9.5</td></tr>
                <tr><td>Node.js</td><td>8.0</td></tr>
            </table>
            <br>
            <a href="/">Voltar para Home</a>
        `)
    } 
    else {
        // Rota de Erro (404)
        response.writeHead(404)
        response.end(`
            <h1 style="color: red;">404 - Página não encontrada</h1>
            <p>Ops! Parece que você entrou no Mundo Invertido.</p>
            <a href="/">Sair daqui</a>
        `)
    }
})


const PORT = 3000

server.listen(PORT, () => {
    console.log(`Servidor rodando lindamente em http://localhost:${PORT}`)
})

// Tratamento básico para o erro que você teve (porta ocupada)
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n[ERRO]: A porta ${PORT} já está sendo usada por outro processo!`)
        console.error(`Feche o terminal antigo ou use: Stop-Process -Name node -Force no PowerShell.\n`)
    }
})