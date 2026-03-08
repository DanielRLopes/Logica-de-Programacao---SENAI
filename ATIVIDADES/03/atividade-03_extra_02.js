/*
Desafio 2: O Scanner de Usuário (Array de Objetos)
**Objetivo:** Praticar a inserção de dados estruturados em listas.

- Crie um array vazio chamado `listaDeAlunos`.
- Capture o nome e a nota de **2 alunos** usando `readline-sync`.
- Para cada aluno, crie um objeto e use o método `.push()` para colocá-lo na lista.
- **Dica de Eficiência:** Ao final, exiba o nome do **segundo aluno** acessando diretamente a posição `[1]` da lista.
*/
let readlineSync = require("readline-sync");

const listaDeAlunos = [];
const nomeDoPrimeiroAluno = readlineSync.question(`
    Nome do primeiro aluno: `);
const notaDoPrimeiroAluno = readlineSync.questionInt(`
    Nota do primeiro aluno: `);

const objetoPrimeiroAluno = {
  [nomeDoPrimeiroAluno]: notaDoPrimeiroAluno,
};

const nomeDoSegundoAluno = readlineSync.question(`
    Nome do segundo aluno: `);
const notaDoSegundoAluno = readlineSync.questionInt(`
    Nota do segundo aluno: `);
const objetoSegundoAluno = {
  [nomeDoSegundoAluno]: notaDoSegundoAluno,
};

listaDeAlunos.push(objetoPrimeiroAluno);
listaDeAlunos.push(objetoSegundoAluno);
console.log(`
  ${listaDeAlunos[1][nomeDoSegundoAluno]}
  `);
console.table([listaDeAlunos]);
