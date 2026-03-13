/*const item = { nome: "Poção", qtd: 5 };

const textoSalvar = JSON.stringify(item) 

const objetoCarregado = JSON.parse(textoSalvar) 
const fs = require('fs').promises; 

await fs.writeFile('teste.txt', "Conteudo do arquivo") */


//import fs from 'fs/promisses'

//const CAMINHO_ARQUIVO = './inventario.js'


//async function lerBanco(){
//  try{
//    const dados = await fs.readFile(CAMINHO_ARQUIVO, 'utf-8')
//    return JSON.parse(dados)
//  } catch (erro){
//    return []
//  }
//}


//async function salvarBanco(lista){
//  const texto = JSON.stringify(lista, null, 2);
//  await fs.writeFile(CAMINHO_ARQUIVO, texto)
//}

//const item = { nome: "Poção", qtd: 5};


async function adicionar(nome, categoria, qtd){
  const inventario = await lerBanco();
  const novoItem = {
    id: Data.now(),
    nome,
    categoria,
    qtd
  };

  inventario.push(novoItem)
  await salvarBanco(inventario)
  corsole.log(`Item ${nome} adicionado ao inventario`)
}

async function listarItens() {
  const inventario = await lerBanco()

  if(inventario.length === 0){
    console.log("Inventario vazio")
  } else {
    console.table(inventario)
  }
}

async function removerItem(id) {
    const inventario = await lerBanco()

    const novaLista = inventario.filter(item => item.id !== id)

    await salvarBanco(novaLista)
    console.log(`Item com id: ${id} removido`)
}

async function iniciar() {
    console.log("Iniciando Gerenciador de inventário")

    await adicionar("Espada de Diamante", "Armas", 1)
    
    await adicionar("poção de cura", "Consumiveis", 5)

    console.log("\nEstado Atual do Incentario:")
    await listarItens()
}

iniciar()