console.log(`
  - - - CRIANDO OBJETO - - -
`);

const aluno = {
  nome: "Daniel",
  idade: 18,
  curso: "ADS"
};

console.log(aluno.nome);

console.log(`
  - - - ANINHAMENTO E ACESSO - - -
`);

aluno.endereco = {
  cidade: "Jaraguá do Sul",
  cep: 757512 - 70
};

console.log(aluno.endereco.cidade);

console.log(`
  - - - HABILIDADES (ARRAY DENTRO DE OBJECT) - - -
`);

aluno.habilidades = ["PYTHON", "JAVASCRIPT", "IA"];
console.log(aluno.habilidades[0]);

console.log(`
  - - - NOTAS E MÉDIAS - - -
`);

aluno.notas = [10, 1, 5];
console.log(`${aluno.nome} : ${aluno.notas}`);

console.log(`
  - - - OBJETOS ANINHADOS E ALTERAÇÕES - - -
`);

aluno.responsavel = {
  nome: "Jonas",
  parentesco: "irmão"
};

console.log(aluno.responsavel.nome);
aluno.responsavel.nome = "Fernando";
console.log(aluno.responsavel);
console.log(aluno);

console.log(`
  - - - LISTA DE ALUNOS - - -
`);

const listaDeAluno = [aluno];
const alunosNovos = {
  Aluno0: {
    nome: "Rafael",
    idade: 21,
    curso: "Molde de Roupa"
  },
  Aluno1: {
    nome: "Marco",
    idade: 23,
    curso: "Markdown"
  }
};

listaDeAluno.push(alunosNovos);
console.log(listaDeAluno);

console.log(`
  - - - FIM - - -
`);

console.log(`
  - - - OBJETO DE ARRAYS - - -
`);

const listaAlunos = [
  { nome: "Kael", idade: 23, notas: [9, 2, 10] },
  { nome: "Marcos", idade: 17, notas: [1, 4, 10] },
  { nome: "Felipe", idade: 14, notas: [3, 6, 5] }
];
console.log(`
  NOME: ${listaAlunos[0].nome} , NOTAS: ${listaAlunos[0].notas}
  NOME: ${listaAlunos[1].nome} , NOTAS: ${listaAlunos[1].notas}
  NOME: ${listaAlunos[2].nome} , NOTAS: ${listaAlunos[2].notas}
`);

console.log(`
  - - - fIM - - -
`);
