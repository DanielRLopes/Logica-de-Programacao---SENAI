/* 
DESAFIO 5 – Comparador de dados
*/
let readlineSync = require("readline-sync");

let userName;
let userCidadeFavorita;

userName = readlineSync.question(`
    Nome do usuario :`);
userCidadeFavorita = readlineSync.question(`
    Sua cidade favorita :`);

const user01 = {
  nome: userName,
  cidade: userCidadeFavorita
};

userName = readlineSync.question(`
    Nome do usuario :`);
userCidadeFavorita = readlineSync.question(`
    Sua cidade favorita :`);

const user02 = {
  nome: userName,
  cidade: userCidadeFavorita
};

userName = readlineSync.question(`
    Nome do usuario :`);
userCidadeFavorita = readlineSync.question(`
    Sua cidade favorita :`);

const user03 = {
  nome: userName,
  cidade: userCidadeFavorita
};

console.table(user01);
const arrViajantes = [];
arrViajantes.push(user01, user02, user03);
console.table(arrViajantes);

console.info(`
    INFO: Quantos viajantes estão na lista: ${arrViajantes.length}
`);
console.log(`
    ${arrViajantes[1].cidade}
`);

console.log(`
    ${arrViajantes[0].nome}
`);
