

function assarPizzaCaos(numero) {
    setTimeout(() => {
        console.log(`Pizza ${numero} pronta!` );
    }, 0);
} 
function prepararPedido(){
    console.log("Iniciando pedido...");
    for(let i = 1; i <= 3; i++){
       assarPizzaCaos(i); 
    }
    console.log("Pedido finalisado!")
}
prepararPedido();
// promises
// resolve reject
// resolve(valor): der certo
// reject(erro): der erro
const myPromise = new Promise((resolve, reject) => {
    const sucesso = true;
    if(sucesso){
        resolve('Operação com sucersso!');
    } else {
        reject('Algo deu erro!');
    }
});