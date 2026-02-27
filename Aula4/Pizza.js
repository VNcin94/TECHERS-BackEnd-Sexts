function assarPizza(numero, resultado){

return new Promise((resolve, reject) => {

console.log(`Começando a assar pizza ${numero}`);

setTimeout(() => {

const deuCerto = resultado;

if (deuCerto){


console.log(`Pizza ${numero} Pronta!`)
resolve(`Dados Da Pizza ${numero}`)

} else{

reject(`Pizzza ${numero} Deu ruim!`)

}


}, 1000);

});

}

console.log("Iniciando pedido!")

assarPizza(1, true)
    .then((resultado1) => {

console.log(resultado1)
return assarPizza(2)
    })

    .then((resultado2) => {

console.log(resultado2)
return assarPizza(3, false)
    })

    .then((resultado3) => {

console.log(resultado3)
console.log("Todas as pizzas foram feitas!")
    })

.catch((erro) => {
    console.error("Deu muito ruim no meio do caminho!")
})

.finally(() =>{

console.log("Deu certin tua pizza, a cozinha fechou")

})