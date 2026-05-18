// // ============================================================
// //   DESAFIOS (para quem já terminou a atividade 09) – For
// // ============================================================
// // Instruções: resolva cada desafio no espaço indicado.
// // ============================================================

// const readlineSync = require("readline-sync");

// // ------------------------------------------------------------
// // DESAFIO 1 – Progressão de saldo bancário
// // ------------------------------------------------------------
// // Um investimento rende juros compostos mensais.
// //
// // a) Pergunte ao usuário:
// //    - Saldo inicial (questionFloat())
// //    - Taxa de juros mensal em % (questionFloat()) — ex: 1.5
// //    - Número de meses
// // b) Usando um for, calcule e exiba mês a mês:
// //    "Mês 1:  R$ <saldo>"
// //    "Mês 2:  R$ <saldo>"
// //    ...
// //    A fórmula de juros compostos é:
// //    saldo = saldo * (1 + taxa / 100)
// // c) Ao final, exiba o saldo total e o lucro obtido (saldo final - saldo inicial).
// // d) Armazene cada mês como objeto { mes, saldo } em um array e exiba com console.table().

// // → Seu código aqui:

// let saldoInicial = readlineSync.questionInt(`Insira seu saldo inicial: `);

// const saldoOriginal = saldoInicial;

// const taxaJurosMensal = readlineSync.questionFloat(
// 	`Insira a taxa de juros mensal em % (Ex: 1.5): `,
// );

// const numMeses = readlineSync.questionInt(`Numero de meses de investimento: `);

// console.log(``);

// const arrayConta = [];

// for (let i = 0; i < numMeses; i++) {
// 	saldoInicial = saldoInicial * (1 + taxaJurosMensal / 100);

// 	console.log(`Mes ${i + 1}: R$${saldoInicial.toFixed(2)}`);

// 	const objetoTempo = {
// 		mes: i + 1,
// 		saldo: Number(saldoInicial.toFixed(2)),
// 	};

// 	arrayConta.push(objetoTempo);
// }

// console.log(``);

// const lucro = saldoInicial - saldoOriginal;

// console.log(`LUCRO OBTIDO: R$${lucro.toFixed(2)}`);

// console.table(arrayConta);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // DESAFIO 2 – Cadastro e relatório de alunos
// // ------------------------------------------------------------
// // a) Pergunte ao usuário quantos alunos serão cadastrados.
// // b) Usando um for, colete de cada aluno:
// //    - Nome (question())
// //    - Nota 1, Nota 2 e Nota 3 (questionFloat() para cada)
// // c) Calcule a média de cada aluno e armazene como objeto:
// //    { nome, notas, media, situacao }
// //    A situação deve ser:
// //      "Aprovado"    → média >= 7
// //      "Recuperação" → média >= 5 e < 7
// //      "Reprovado"   → média < 5
// // d) Após coletar todos, percorra o array e exiba o relatório:
// //    "<nome> | Média: <media> | <situacao>"
// // e) Exiba:
// //    - Média geral da turma
// //    - Nome do aluno com maior média
// //    - Nome do aluno com menor média
// //    - Quantidade de aprovados, em recuperação e reprovados
// // f) Exiba o array com console.table().

// // → Seu código aqui:

// const qtdUsuarios = readlineSync.questionInt(
// 	`Quantos alunos serao cadastrados: `,
// );

// const arrAlunos = [];
// let alunoNome = "";
// let alunoNota1 = 0;
// let alunoNota2 = 0;
// let alunoNota3 = 0;

// for (let i = 0; i < qtdUsuarios; i++) {
// 	alunoNome = readlineSync.question(`
//     Insira o Nome do ${i + 1} aluno(a): `);

// 	console.log(``);

// 	alunoNota1 = readlineSync.questionFloat(`
//     Insira a 1 nota: `);

// 	alunoNota2 = readlineSync.questionFloat(`
//     Insira a 2 nota: `);

// 	alunoNota3 = readlineSync.questionFloat(`
//     Insira a 3 nota: `);

// 	const objetoAluno = {
// 		alunoNome,
// 		alunoNota1,
// 		alunoNota2,
// 		alunoNota3,
// 	};

// 	arrAlunos.push(objetoAluno);
// }

// let somaMedias = 0;
// let mediaGeral = 0;

// let maiorMedia = 0;
// let menorMedia = 10;

// let alunoMaiorMedia = "";
// let alunoMenorMedia = "";

// let aprovados = 0;
// let recuperacao = 0;
// let reprovados = 0;

// console.log(``);

// for (let i = 0; i < arrAlunos.length; i++) {
// 	let somaAlunos =
// 		arrAlunos[i].alunoNota1 + arrAlunos[i].alunoNota2 + arrAlunos[i].alunoNota3;

// 	let mediaAluno = somaAlunos / 3;

// 	somaMedias += mediaAluno;

// 	let situacao = "";

// 	if (mediaAluno >= 7) {
// 		situacao = "Aprovado";
// 		aprovados++;
// 	} else if (mediaAluno >= 5) {
// 		situacao = "Recuperacao";
// 		recuperacao++;
// 	} else {
// 		situacao = "Reprovado";
// 		reprovados++;
// 	}

// 	if (mediaAluno > maiorMedia) {
// 		maiorMedia = mediaAluno;
// 		alunoMaiorMedia = arrAlunos[i].alunoNome;
// 	}

// 	if (mediaAluno < menorMedia) {
// 		menorMedia = mediaAluno;
// 		alunoMenorMedia = arrAlunos[i].alunoNome;
// 	}

// 	console.log(
// 		`${arrAlunos[i].alunoNome} | Media: ${mediaAluno.toFixed(2)} | ${situacao}`,
// 	);
// }

// mediaGeral = somaMedias / arrAlunos.length;

// console.log(`
// --------------------------------
// Media geral da turma: ${mediaGeral.toFixed(2)}

// Aluno com maior media: ${alunoMaiorMedia}
// Maior media: ${maiorMedia.toFixed(2)}

// Aluno com menor media: ${alunoMenorMedia}
// Menor media: ${menorMedia.toFixed(2)}

// Aprovados: ${aprovados}
// Recuperacao: ${recuperacao}
// Reprovados: ${reprovados}
// --------------------------------
// `);

// console.table(arrAlunos);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // DESAFIO 3 – Jogo de adivinhar o número
// // ------------------------------------------------------------
// // O programa sorteia um número de 1 a 100 e o usuário tem no máximo 7 tentativas para adivinhar.
// //
// // a) Gere um número aleatório
// //    Para gerar um número aleatório, utilize a função Math.random()
// // b) Usando um for:
// //    - Peça ao usuário um palpite.
// //    - Se errar: exiba "Muito alto!" ou "Muito baixo!" conforme o caso.
// //    - Informe quantas tentativas restam: "Tentativas restantes: <restantes>"
// //    - Se acertar: exiba "Parabéns! Acertou em <i> tentativa(s)!"
// // c) Se o usuário esgotar as tentativas sem acertar, exiba:
// //    "Game over! O número era <secreto>."
// // d) Ao final, exiba um resumo:
// //    - Número secreto
// //    - Número de tentativas usadas
// //    - Resultado: "Vitória" ou "Derrota"

// // → Seu código aqui:

// const numeroRandom = Math.floor(Math.random() * 100) + 1;

// const maxTentativas = 7;

// let resultado = "Derrota";
// let tentativasUsadas = 0;

// for (let i = 0; i < maxTentativas; i++) {
// 	const palpite = readlineSync.questionInt(`
// - - - BEM VINDO(A) - -
// - NUMERO SORTEADO ENTRE 1 A 100
// - TENTE ACERTA-LO!
// - ESCOLHA: `);

// 	tentativasUsadas++;

// 	if (palpite > numeroRandom) {
// 		console.log(`
// Muito Alto!
// Tentativas restantes: ${maxTentativas - (i + 1)}
// `);
// 	} else if (palpite < numeroRandom) {
// 		console.log(`
// Muito Baixo!
// Tentativas restantes: ${maxTentativas - (i + 1)}
// `);
// 	} else {
// 		console.log(`
// PARABENS! Acertou em ${tentativasUsadas} tentativa(s)!
// `);

// 		resultado = "Vitoria";
// 		break;
// 	}

// 	if (i === maxTentativas - 1) {
// 		console.log(`
// GAME OVER!
// O numero secreto era: ${numeroRandom}
// `);
// 	}
// }

// console.log(`
// -----------------------------
// NUMERO SECRETO: ${numeroRandom}
// NUMERO DE TENTATIVAS: ${tentativasUsadas}
// RESULTADO: ${resultado}
// -----------------------------
// `);

// console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 4 – Análise de vendas mensais
// ------------------------------------------------------------
// a) Declare o array de vendas mensais (Jan a Dez):
//    const vendas = [12500, 9800, 15200, 11000, 13750, 8900,
//                    17300, 14600, 10200, 16800, 19500, 22000];
// b) Usando fors, calcule e exiba:
//    - Total de vendas no ano
//    - Média mensal
//    - Mês com maior venda (nome do mês e valor)
//    - Mês com menor venda (nome do mês e valor)
//    - Quantos meses ficaram acima da média
//    - Quantos meses ficaram abaixo da média
// c) Exiba um relatório mês a mês indicando se ficou acima ou abaixo da média:
//    "Janeiro:   R$ 12.500,00 – Abaixo da média"
//    "Fevereiro: R$  9.800,00 – Abaixo da média"
//    ...
//    Dica: use um array com os nomes dos meses para exibir o nome correto.
// d) Exiba o array de objetos { mes, venda, situacao } com console.table().

// → Seu código aqui:

const vendas = [
	2500, 9800, 15200, 11000, 13750, 8900, 17300, 14600, 10200, 16800, 19500,
	22000,
];

const meses = [
	"Janeiro",
	"Fevereiro",
	"Marco",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outrubro",
	"Novembro",
	"Dezembro",
];

let soma = 0;
let mediaMensal = 0;

const arrRelatorio = [];

for (let i = 0; i < vendas.length; i++) {
	soma += vendas[i];
	mediaMensal = soma / 12;
}

console.log(`
  Total venda anual: ${soma}

  Media Mensal: ${mediaMensal.toFixed(2)}`);

console.log(``);

let maiorValor = vendas[0];
let mesIndiceMaior = 0;
let menorValor = vendas[0];
let mesIndiceMenor = 0;

for (let i = 0; i < vendas.length; i++) {
	if (maiorValor < vendas[i]) {
		maiorValor = vendas[i];
		mesIndiceMaior = i;
	}
	if (menorValor > vendas[i]) {
		menorValor = vendas[i];
		mesIndiceMenor = i;
	}
}

console.log(
	`  Mes com maior valor de vendas: ${meses[mesIndiceMaior]} | Valor: ${maiorValor}

  Mes com menor valor de vendas: ${meses[mesIndiceMenor]} | Valor: ${menorValor}`,
);

for (let i = 0; i < vendas.length; i++) {
	if (mediaMensal > vendas[i]) {
		console.log(`Abaixo da media: ${meses[i]} | R$${vendas[i]}`);
	}
	if (mediaMensal < vendas[i]) {
		console.log(`Acima da media: ${meses[i]} | R$${vendas[i]}`);
	}
}

console.log("_______________________________");
