const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function autenticarUsuario(email, senha){

await esperar(1000);

if(email === "aluno@escola.com" && senha === "1234"){

console.log("Usuário autenticado")

return {nome: "Vinicin", id: 1};

}else{

throw "Email e/ou senha incorretos"

}

}

async function buscaFavoritos(id) {

await esperar(1500)

console.log("buscando lista de favoritos")

return ["Stranger Things", "Dexter", "Breaking Bad", "Fallout"]

}

async function recomendarFavoritos(favoritos){

await esperar(500)

console.log("Gerando recomendações baseada em: " + favoritos[0])

return "It: Welcome to Derry"

}

async function carregarInterface(){

console.log("Carregando sistema de streaming")

try {

const usuario = await autenticarUsuario("aluno@escola.com", "1234");

const favoritos = await buscaFavoritos(usuario.id);

const recomendacao = await recomendarFavoritos(favoritos);

console.log("Filme recomendado:", recomendacao);

} catch (erro) {

console.log("Erro:", erro);

} finally {

console.log("Sessão encerrada.");

}

}

carregarInterface();


