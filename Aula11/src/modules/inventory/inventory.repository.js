import fs from 'node:fs/promises';
import { stringify } from 'node:querystring';

const CAMINHO_ARQUIVO = './inventario.json'

export const buscarItens = async () => {
    const conteudo = await fs.readFile(CAMINHO_ARQUIVO, 'utf-8')
    return JSON.parse(conteudo)
};

export const salvarNovoItem = async (novoItem) => {
    const inventario = await buscarItens();
    inventario.push(novoItem)
    await fs.writeFile(CAMINHO_ARQUIVO, JSON.stringify(inventario, null, 2))
    return novoItem;
};