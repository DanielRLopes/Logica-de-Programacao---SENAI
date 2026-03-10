/* 
DESAFIO 2 – Dois amigos
*/

let readlineSync = require("readline-sync");
// Config básica
let nomeString;
let idadeint;
let cidadeString;
let estadoString;
let rua;

nomeString = readlineSync.question(`
    Digite seu nome :`);
idadeint = readlineSync.questionInt(`
    Digite sua idade :`);
cidadeString = readlineSync.question(`
    Digite sua cidade :`);
estadoString = readlineSync.question(`
    Digite seu estado :`);
rua = readlineSync.question(`
    Digite sua rua :`);

const pessoa0 = {
  nome: nomeString,
  idade: idadeint,
  enderecoCompleto: {
    cidade: cidadeString,
    estado: estadoString,
    rua: rua
  }
};

nomeString = readlineSync.question(`
    Digite seu nome :`);
idadeint = readlineSync.questionInt(`
    Digite sua idade :`);
cidadeString = readlineSync.question(`
    Digite sua cidade :`);
estadoString = readlineSync.question(`
    Digite seu estado :`);
rua = readlineSync.question(`
    Digite sua rua :`);

const pessoa1 = {
  nome: nomeString,
  idade: idadeint,
  enderecoCompleto: {
    cidade: cidadeString,
    estado: estadoString,
    rua: rua
  }
};

const arrAmigos = [];
arrAmigos.push(pessoa0, pessoa1);
console.table(arrAmigos);

console.table([
  { nome: arrAmigos[1].nome, idade: arrAmigos[1].idade },
  { enderecoCompleto: arrAmigos[1].enderecoCompleto },
  { nome: arrAmigos[0].nome, rua: arrAmigos[0].enderecoCompleto.rua }
]);
