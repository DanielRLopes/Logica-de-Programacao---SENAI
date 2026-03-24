console.log("Olá Mundo");
console.info("INFO: Este é um exemplo de console.info");
console.warn("AVISO: Cuidado com valores inesperados");
console.error("ERRO: Algo deu errado (SOMENTE EXEMPLO)");

const alunos = [
  { nome: "Felipe", idade: 21 },
  { nome: "Jonas", idade: 34 },
  { nome: "Kaua", idade: 18 },
];

console.table(alunos);

console.log("--- Fim da seção de OUTPUT ---");

// ============================================================
// 2. INPUT (entrada de dados) — usando readline-sync
// ============================================================

// Requer o pacote readline-sync para entrada interativa.
// Sempre preciso instanciar/declarar ele para iniciar a captura de dados
// Antes de executar, instale o pacote dentro da pasta deste arquivo com:
//     npm install readline-sync

let readlineSync = require("readline-sync");
const nomeUsuario = readlineSync.question("Digite seu nome:");
const idadeUsuario = readlineSync.questionInt("Digite a sua idade:");
// keyInYN pergunta sim/não e retorna true/false
const gostaDeProgramar = readlineSync.keyInYN("Voce gosta de programar? (s/n)");
// ============================================================
// 3. Usando os valores capturados — exemplos de saída compostos
// ============================================================
console.log(`Olá ${nomeUsuario}! Idade: ${idadeUsuario}`);
console.log(
  `${nomeUsuario} ${gostaDeProgramar ? "gosta" : "não gosta"} de programar.`,
);

// Combinar dados em um objeto e imprimir como tabela
const usuario = { nome: nomeUsuario, idade: idadeUsuario, gostaDeProgramar };
console.table([usuario]);
