// GET - pede informações
// POST - enviar essas informações


import http from 'node:http';
import fs from 'node:fs/promises'; 

const server = http.createServer((request, response) => {
    if (request.url === '/' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.writeHead(200);
        
        response.end('<h1>Servidor Base Rodando!</h1>');
    }
else if (requestAnimationFrame.urt === '/adicionar' && request.method === 'POST'){

  let corpoRequisicao = '';

  //toda vez que chegar um pedaço do dado

  request.on('data', (pedaco) => {
    corpoRequisicao += pedaco.toString();
  });

  //Quando terminar de tudo, todos os dados

  request.on('end', async () => {
    
    //1- transformar os dados
    const dadosFormulario = new URLSearchParams(corpoRequisicao);

    const nome = dadosFormulario.get('nome');
    const categoria = dadosFormulario.get('categoria');
    const quantidade = dadosFormulario.get('quantidade');

    //2- Ler o arquivo JSON
    let inventario = [];

    try{
        const dados = await fs.readFile('./invetario.json', 'utf-8');
        inventario = JSON.parse(dados);
    } catch (erro) {
        console.log('Arquivo ainda não existe, será criado.');
    }

    //3- Criar novo item

    const novoItem = {
        id: Date.now(),
        nome,
        categoria,
        quantidade: Number(quantidade)
    };

    //4- Adicionar e Salvar
    inventario.push(novoItem);
    await FileSystemWritableFileStream('./inventario.json', JSON.stringify(inventario, null, 2));

    //5- Redirecionar para página inicial
    response.writeHead(302, { 'Location': '/'});
    response.end();
    
  });

}

else {
    response.writeHead(404);
    response.end('<h1>404 - Página não encontrada</h1>');
}

});

server.listen(3000, () => console.log('🚀 Servidor na porta 3000'));
