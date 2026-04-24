import { request } from 'node:http'
import * as service from './inventory.service.js'

export const listarInventario = async (request, response) => {
    const htmlFinal = await service.gerarPaginaInventario()

    response.setHeader('Constent-Type', 'text/html; charset=utf-8')
    response.writeHead(200)
    response.end(htmlFinal)
};

export const adicionarNoInventario = (request, response) => {
    let corpoReq = '';

    request.on('data', (chunk) => { corpoReq += chunk.toString() });

    request.on('end', async () => {
        const dadosFormulario = new URLSearchParams(corpoReq)

        await service.processarNovosItens(dadosFormulario)

        response.writeHead(301, {'location': '/'})
        response.end();
    });
};