// // ============================================================
// //   ATIVIDADE 09 – Estruturas de Controle (Repetição - For)
// // ============================================================

// // ------------------------------------------------------------
// // EXERCÍCIO 1 – Contagem simples
// // ------------------------------------------------------------
// // a) Usando um for, exiba no console os números de 5 a 12, um por linha.
// //    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// // b) Ao final, exiba: "Contagem concluída!"

// // → Seu código aqui:

// for (let i = 5; i <= 12; i++) {
// 	console.log(`
// Contagem Simples: ${i}`);
// }

// console.log(`
// Contagem Concluida!`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 2 – Contagem decrescente
// // ------------------------------------------------------------
// // a) Usando um for, exiba os números de 10 até 3 em ordem decrescente.
// //    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// // b) Ao final, exiba: "Lançamento! 🚀"

// // → Seu código aqui:

// for (let i = 10; i >= 3; i--) {
// 	console.log(`
// Contagem Decrescente: ${i}`);
// }

// console.log(`
// Lancamento!`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 3 – Números pares
// // ------------------------------------------------------------
// // a) Usando um for com passo 2, exiba todos os números pares de 0 a 30.
// // b) Ao final, exiba quantos números pares foram exibidos.

// // → Seu código aqui:

// let quantidade = null;

// for (let i = 0; i <= 30; i += 2) {
// 	console.log(`${i}`);
// 	quantidade++;
// }
// console.log(`
// Quantidade de numero pares: ${quantidade}`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 4 – Tabuada
// // ------------------------------------------------------------
// // a) Peça ao usuário um número inteiro (questionInt()).
// // b) Exiba a tabuada desse número de 1 a 10 no formato:
// //    "<número> x <i> = <resultado>"

// // → Seu código aqui:

// const readlineSync = require("readline-sync");

// let numberInt = readlineSync.questionInt(`
// Insira um numero: `);

// for (let i = 1; i <= 10; i++) {
// 	console.log(`
// ${numberInt} x ${i} = ${numberInt * i}`);
// }

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 5 – Soma acumulada
// // ------------------------------------------------------------
// // a) Peça ao usuário um número inteiro positivo N (questionInt()).
// // b) Usando um for, calcule a soma de todos os inteiros de 1 até N.
// // c) Exiba: "A soma de 1 até <N> é <soma>"

// // → Seu código aqui:

// numberInt = readlineSync.questionInt(`
// Insira um numero inteiro positivo N: `);

// let soma = null;

// for (let i = 1; i <= numberInt; i++) {
// 	soma += i;
// }

// console.log(`
// A soma de 1 ate ${numberInt} e ${soma}`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 6 – Fatorial
// // ------------------------------------------------------------
// // a) Peça ao usuário um número inteiro de 1 a 10 (questionInt()).
// // b) Calcule o fatorial desse número usando um for.
// //    Fatorial de N (N!) = 1 × 2 × 3 × ... × N
// //    Exemplo: 5! = 1 × 2 × 3 × 4 × 5 = 120
// // c) Exiba: "<N>! = <resultado>"

// // → Seu código aqui:

// numberInt = readlineSync.questionInt(`
// Insira um numero de 1 a 10: `);

// let multiplicar = 1;

// for (let i = 1; i <= numberInt; i++) {
// 	multiplicar *= i;
// }

// console.log(`
// ${numberInt}! = ${multiplicar}`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 7 – Percorrendo um array
// // ------------------------------------------------------------
// // a) Utilizando o array:
// const cidades = [
// 	"São Paulo",
// 	"Rio de Janeiro",
// 	"Curitiba",
// 	"Salvador",
// 	"Fortaleza",
// ];
// // b) Utilizando de um for, exiba cada cidade com seu índice no formato:
// //    "[<indice>] - <Cidade>"
// // c) Ao final, exiba: "Total de cidades: <quantidade>"

// // → Seu código aqui:

// for (let i = 0; i < cidades.length; i++) {
// 	console.log(`
// Indice: ${i} | Cidade: ${cidades[i]}`);
// }
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 8 – Maior e menor valor
// // ------------------------------------------------------------
// // a) Declare o array:
// //    const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
// // b) Usando um for, encontre o maior e o menor valor do array.
// // c) Exiba:
// //    "Maior temperatura: <maior>°C"
// //    "Menor temperatura: <menor>°C"

// // → Seu código aqui:

// const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];

// let maiorTemperatura = temperaturas[0];
// let menorTemperatura = temperaturas[0];

// for (let i = 0; i < temperaturas.length; i++) {
// 	if (temperaturas[i] > maiorTemperatura) {
// 		maiorTemperatura = temperaturas[i];
// 	}
// 	if (temperaturas[i] < menorTemperatura) {
// 		menorTemperatura = temperaturas[i];
// 	}
// }

// console.log(`
// Maior temperatura: ${maiorTemperatura}°C`);

// console.log(`
// Menor temperatura: ${menorTemperatura}°C`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 9 – Contando com condição
// // ------------------------------------------------------------
// // a) Utilizando do array:
// const idades = [12, 25, 17, 34, 15, 42, 16, 29, 8, 19];
// // b) Usando um for, conte:
// //    - Quantas pessoas são menores de idade (< 18)
// //    - Quantas são maiores de idade (>= 18)
// // c) Exiba os dois totais.

// // → Seu código aqui:

// let contadorMaior = 0;
// let contadorMenor = 0;

// for (let i = 0; i < idades.length; i++) {
// 	if (idades[i] < 18) {
// 		contadorMaior++;
// 	}
// 	if (idades[i] >= 18) {
// 		contadorMenor++;
// 	}
// }

// console.log(`
// ${contadorMaior} | ${contadorMenor}`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 10 – Média com array
// // ------------------------------------------------------------
// // a) Utilizando do array:
// const salarios = [1800, 3200, 950, 4500, 2100, 1500, 7800, 2900];
// // b) Usando um for, calcule a média salarial.
// // c) Exiba a média no formato: "Média salarial: R$ <media>"
// // d) Usando outro for, exiba cada salário e se está acima ou abaixo da média:
// //    "R$ 1800,00 – Abaixo da média"
// //    "R$ 3200,00 – Acima da média"

// // → Seu código aqui:

// soma = null;

// let mediaSalario = null;

// for (let i = 0; i < salarios.length; i++) {
// 	soma += salarios[i];
// }

// mediaSalario = soma / salarios.length;
// console.log(`
// Media Salarial: R$${mediaSalario}`);

// for (let i = 0; i < salarios.length; i++) {
// 	let somaAlternativa = null;

// 	somaAlternativa += salarios[i];

// 	if (somaAlternativa > mediaSalario) {
// 		console.log(`
//       R$${somaAlternativa} | Acima da media`);
// 	} else if (somaAlternativa < mediaSalario) {
// 		console.log(`
//       R$${somaAlternativa} | Abaixo da media`);
// 	}
// }

// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 11 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Calcule a média das notas da turma e armazene em uma variável 'media'.
// e) Percorra o array e para cada aluno exiba no console:
//    "<nome>: <nota> – <situação>"
//    A situação deve ser:
//      "Aprovado"    → nota >= 7
//      "Recuperação" → nota >= 5 e < 7
//      "Reprovado"   → nota < 5
// f) Ao final, exiba a média da turma no formato:
//    "Média da turma: <media>"
// g) Exiba o array 'turma' com console.table().

// → Seu código aqui:

const readlineSync = require("readline-sync");

let nomeAluno = null;
let notaAluno1 = null;
let notaAluno2 = null;
let notaAluno3 = null;

const turma = [];

for (let i = 0; i <= 2; i++) {
	nomeAluno = readlineSync.question(`Insira o nome do ${i + 1} aluno(a): `);
	console.log(``);
	notaAluno1 = readlineSync.questionFloat(
		`Insira a ${i + 1} nota do ${nomeAluno}: `,
	);
	notaAluno2 = readlineSync.questionFloat(
		`Insira a ${i + 1} nota do ${nomeAluno}: `,
	);
	notaAluno3 = readlineSync.questionFloat(
		`Insira a ${i + 1} nota do ${nomeAluno}: `,
	);
	console.log(``);
	const objetoAluno = {
		nomeAluno,
		notaAluno1,
		notaAluno2,
		notaAluno3,
	};
	turma.push(objetoAluno);
}

console.table(turma);

const n1 = turma[0].notaAluno1 + turma[0].notaAluno2 + turma[0].notaAluno3;
const n2 = turma[1].notaAluno1 + turma[1].notaAluno2 + turma[1].notaAluno3;
const n3 = turma[2].notaAluno1 + turma[2].notaAluno2 + turma[2].notaAluno3;

const media = (n1 + n2 + n3) / 3;

for (let i = 0; i < turma.length; i++) {
	const somaNotas =
		turma[i].notaAluno1 + turma[i].notaAluno2 + turma[i].notaAluno3;

	const mediaAluno = somaNotas / 3;

	if (mediaAluno >= 7) {
		const situacao = "Aprovado";
		console.log(`
    ${turma[i].nomeAluno} - Notas: ${turma[i].notaAluno1} - ${turma[i].notaAluno2} - ${turma[i].notaAluno3} - ${situacao}`);
	} else if (mediaAluno >= 5 && mediaAluno < 7) {
		const situacao = "Recuperacao";
		console.log(`
    ${turma[i].nomeAluno} - Notas: ${turma[i].notaAluno1} - ${turma[i].notaAluno2} - ${turma[i].notaAluno3} - ${situacao}`);
	} else if (mediaAluno < 5) {
		const situacao = "Reprovado";
		console.log(`
    ${turma[i].nomeAluno} - Notas: ${turma[i].notaAluno1} - ${turma[i].notaAluno2} - ${turma[i].notaAluno3} - ${situacao}`);
	}
}

console.log(`
  Media da turma: ${media.toFixed(0)}`);

console.table(turma);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 12 – Coletando dados com for e input
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos produtos quer cadastrar (questionInt()).
// b) Usando um for, colete de cada produto:
//    - nome (question())
//    - preco (questionFloat())
// c) Armazene cada produto como objeto em um array 'estoque'.
// d) Após o cadastro, percorra o array e exiba cada produto no formato:
//    "<nome>: R$ <preco>"
// e) Exiba o produto mais caro e o mais barato.
// f) Exiba o array com console.table().

// → Seu código aqui:

const qtdCadastro = readlineSync.questionInt(`
  Quantos produtos deseja cadastrar: `);

const arryEstoque = [];

for (let i = 0; i < qtdCadastro; i++) {
	const nomeProduto = readlineSync.question(`
    Insira o nome do Produto: `);
	const precoProduto = readlineSync.questionFloat(`
    Insira o preco do produto: `);

	const produtos = {
		nomeProduto,
		precoProduto,
	};

	arryEstoque.push(produtos);
}

let valorMin = null;
let valorMax = null;
let valor = [];

for (let i = 0; i < arryEstoque.length; i++) {
	valor += arryEstoque[i].precoProduto;
	valorMin = Math.min(...valor);
	valorMax = Math.max(...valor);
	console.log(``);
	console.log(
		`${arryEstoque[i].nomeProduto}: R$ ${arryEstoque[i].precoProduto}`,
	);
}

console.log(
	`Produto mais Barato: ${valorMin} | Produto mais Caro: ${valorMax}`,
);

console.table(arryEstoque);
// e) Exiba o produto mais caro e o mais barato.

console.log("_______________________________");
