/* 
DESAFIO 2 – Dois amigos
*/

let readlineSync = require("readline-sync");
// Config básica
let nomeString;
let idadeint;
let cidadeString;

nomeString = readlineSync.question(`
    Digite seu nome :`);
idadeint = readlineSync.questionInt(`
    Digite sua idade :`);
cidadeString = readlineSync.question(`
    Digite sua cidade :`);

let grupoPessoas0 = {
  nome: nomeString,
  idade: idadeint,
  cidade: cidadeString
};

nomeString = readlineSync.question(`
    Digite seu nome :`);
idadeint = readlineSync.questionInt(`
    Digite sua idade :`);
cidadeString = readlineSync.question(`
    Digite sua cidade :`);

let grupoPessoas1 = {
  nome: nomeString,
  idade: idadeint,
  cidade: cidadeString
};

const arrAmigos = [];
arrAmigos.push(grupoPessoas0, grupoPessoas1);
console.table(arrAmigos);
