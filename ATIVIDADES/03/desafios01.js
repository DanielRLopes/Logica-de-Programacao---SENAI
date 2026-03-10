let readlineSync = require("readline-sync");

/* 
DESAFIO 01 CADASTRO COMPLETO
*/

let nomeString = readlineSync.question(`Seu nome :`);
let idadeInt = readlineSync.questionInt(`Sua idade :`);
const profissaoString = readlineSync.question(`Sua profissao :`);
const cidadeString = readlineSync.question(`Cidade que mora :`);
const gostaDeJS = readlineSync.keyInYN(`Gosta de JavaScript ?`);
const listaDeComidaFavoritaString = readlineSync.question(
  `Lista de comida favorita (Separe por virgula) :`
);
const listaComida = listaDeComidaFavoritaString.split(",");

const listaDePessoasMordaria = [nomeString, idadeInt];

const cadastro = {
  nome: nomeString,
  idade: idadeInt,
  profissao: profissaoString,
  cidade: cidadeString,
  ehGosta: gostaDeJS,
  comidaFavorita: listaComida,
  moradiaConjunto: listaDePessoasMordaria
};
// exibição
console.table(cadastro);
console.log(`
    Nome: ${nomeString} | Idade: ${idadeInt} anos. | Profissao: ${profissaoString} em ${cidadeString} .
    Gosta de JS: ${gostaDeJS ? "Gosta demais" : "Odeia"}
`);
