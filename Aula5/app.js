function assarPizza(numero){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(numero === 4){
                reject("O forno quebrou na quarta pizza!")
            } else {
                console.log(`Pizza ${numero} pronta!`)
                resolve(`Dados da Pizza ${numero}`)
            }
        }, 1000);
    });
}

async function prepararPedido() {
  console.log("Iniciando os pedidos com Async")

  try {
    for(let i = 1; i <= 3; i++){
      console.log(`Aguardando a pizza ${i}`)

      const resultado = await assarPizza(i)

      console.log(resultado)
    }

    console.log("Pedido finalizado!")
  } catch (erro) {
    console.error(erro)
  } finally {
    console.log("Limpando a cozinha!")
  }
}

prepararPedido()