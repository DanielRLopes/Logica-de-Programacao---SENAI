/* 
Desafio 5: O Sistema de Notas com "Early Return"
**Objetivo:** Praticar Validação Antecipada e Fluxo Limpo.

1. Peça o **nome** do aluno e **duas notas**.
2. **REGRA FAIL FAST:** Se alguma nota for menor que 0 ou maior que 10, exiba o erro IMEDIATAMENTE e use `return` ou encerre o script. Não pergunte a segunda nota se a primeira estiver errada!
3. Se as notas forem válidas, calcule a média.
4. Classifique:
    - Média >= 7: "Aprovado"
    - Média < 7: "Recuperação"
5. **Higiene de Código:** Não use um `else` gigante. Faça a validação no topo e o código principal solto abaixo.
*/

let readlineSync = require("readline-sync");
const nomeDoAluno = readlineSync.question(`
    Nome:`);
const notaDoAluno1 = readlineSync.questionFloat(`
    Nota 1:`);
if (notaDoAluno1 < 0 || notaDoAluno1 > 10) {
  console.log(`ERRO: Nota 1 invalida`);
  process.exit();
}
const notaDoAluno2 = readlineSync.questionFloat(`
    Nota 2:`);
if (notaDoAluno2 < 0 || notaDoAluno2 > 10) {
  console.log(`ERRO: Nota 1 invalida`);
  process.exit();
}

const mediaNotas = (notaDoAluno1 + notaDoAluno2) / 2;
if (mediaNotas >= 7) {
  console.log("APROVADO!");
} else {
  console.log("REPROVADO!");
}

console.log(`
    Média final: ${mediaNotas}
    `);
