/* 
DESAFIO 4 – Perfil de jogador
*/
let readlineSync = require("readline-sync");

const userApelido = readlineSync.question(`
    Qual seu apelido ?`);
const userJogoFavorito = readlineSync.question(`
    Jogo Favorito ?`);
const userHorasTotaisJogadas = readlineSync.questionFloat(`
    Quantas horas totais voce ja jogou, aproximadamente ?`);
const jogaEmTime = readlineSync.keyInYN(`
    Joga em time ?`);

const perfil = {
  apelido: userApelido,
  jogoFavorito: userJogoFavorito,
  horasTotaisJogadas: userHorasTotaisJogadas,
  jogaEmTime: jogaEmTime
};
console.table(perfil);
console.warn(
  "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."
);
