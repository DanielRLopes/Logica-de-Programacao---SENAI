const readlineSync = require("readline-sync");

// // ------------------------------------------------------------
// // EXERCÍCIO 1 – Operações básicas
// // ------------------------------------------------------------
// // Declare duas variáveis: "num1" com valor 18 e "num2" com valor 5.
// // Calcule e exiba no console, usando template literal, o cálculo e o resultado:
// //    Exemplo: console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// // a) A soma dos dois números.
// // b) A subtração (num1 - num2).
// // c) A multiplicação.
// // d) A divisão (use toFixed() para limitar o resultado a 2 casas decimais).
// // e) O resto da divisão (módulo %).
// // f) num1 elevado a num2 (potência).

// // → Seu código aqui:

// let num1 = 18;
// let num2 = 5;
// console.log(`
//     Cálculo: SOMA ${num1} + ${num2} = ${num1 + num2}
// `);
// console.log(`
//     Cálculo: SUBTRACAO ${num1} - ${num2} = ${num1 - num2}
// `);
// console.log(`
//     Cálculo: MULTIPLICACAO ${num1} * ${num2} = ${num1.toFixed(2) *
//   num2.toFixed(2)}
// `);
// console.log(`
//     Cálculo: DIVISAO NUMERO 1 ELEVADO A NUMERO 2 ${num1} / ${num2} = ${num1.toFixed(
//   2
// ) / num2.toFixed(2)}
// `);

// console.log(`
//     Cálculo: RESTO DA DIVISAO ${num1} % ${num2} = ${num1.toFixed(2) %
//   num2.toFixed(2)}
// `);

// console.log(`
//     Cálculo: POTENCIA ${num1} ** ${num2} = ${num1.toFixed(2) ** num2.toFixed(2)}
// `);
// console.log("_______________________________");
// // ------------------------------------------------------------
// // EXERCÍCIO 2 – Área e perímetro
// // ------------------------------------------------------------
// // a) Declare as variáveis "largura" (valor 8) e "altura" (valor 5).
// // b) Calcule a área do retângulo (largura * altura) e armazene em "area".
// // c) Calcule o perímetro (2 * largura + 2 * altura) e armazene em "perimetro".
// // d) Exiba no console usando template literal:
// //    "Retângulo | Largura: <largura> | Altura: <altura> | Área: <area> | Perímetro: <perimetro>"

// // → Seu código aqui:
// let largura = 8;
// let altura = 5;

// let area = largura * altura;
// let perimetro = 2 * largura + 2 * altura;

// console.log(`
//     Retângulo | Largura: ${largura} | Altura: ${altura} | Área: ${area} | Perímetro: ${perimetro}"
// `);
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 3 – Calculando desconto
// // ------------------------------------------------------------
// // a) Declare a variável "precoOriginal" com o valor 250.
// // b) Declare a variável "percentualDesconto" com o valor 15 (representa 15%).
// // c) Calcule o valor do desconto e armazene em "valorDesconto".
// //    Dica: valorDesconto = precoOriginal * (percentualDesconto / 100)
// // d) Calcule o preço final (precoOriginal - valorDesconto) e armazene em "precoFinal".
// // e) Exiba no console usando template literal:
// //    "Preço original: R$ <precoOriginal> | Desconto: R$ <valorDesconto> | Preço final: R$ <precoFinal>"
// //    Use toFixed(2) nos valores em reais.

// // → Seu código aqui:

// let precoOriginal = 250;

// let percentualDesconto = 15;
// let valorDesconto = precoOriginal * (percentualDesconto / 100);
// precoFinal = precoOriginal - valorDesconto;
// console.log(`
//     Preço original: R$ ${precoOriginal.toFixed(
//       2
//     )} | Desconto: R$ ${valorDesconto.toFixed(
//   2
// )} | Preço final: R$ ${precoFinal.toFixed(2)}
// `);
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 4 – Operadores de atribuição composta
// // ------------------------------------------------------------
// // a) Declare uma variável "pontos" com o valor 100.
// // b) Some 50 pontos usando +=. Exiba o resultado.
// // c) Subtraia 30 pontos usando -=. Exiba o resultado.
// // d) Multiplique por 2 usando *=. Exiba o resultado.
// // e) Divida por 4 usando /=. Exiba o resultado.
// // f) Para cada operação, use template literal:
// //    "Pontos após <tipo da operação>: <valor>"

// // → Seu código aqui:

// let pontos = 100;
// console.log(`Pontos após += :  ${(pontos += 50)}`);
// console.log(`Pontos após -= :${(pontos -= 30)}`);
// console.log(`Pontos após *= :${(pontos *= 2)}`);
// console.log(`Pontos após /= :${(pontos /= 4)}`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 5 – Incremento e decremento
// // ------------------------------------------------------------
// // a) Declare uma variável "vidas" com valor 3.
// // b) Exiba o valor atual com console.log().
// // c) Use ++ para incrementar "vidas" duas vezes, exibindo após cada incremento.
// // d) Use -- para decrementar "vidas" uma vez, exibindo o resultado.
// // e) Declare uma variável "nivel" com valor 1.
// // f) Incremente "nivel" três vezes usando ++nivel (prefixo) e exiba cada resultado.

// // → Seu código aqui:

// let vidas = 3;
// console.log(`Vidas: ${vidas}`);
// vidas++;
// console.log(`Vidas incrementadas: ${vidas}`);
// vidas++;
// console.log(`Vidas incrementadas: ${vidas}`);
// vidas--;
// console.log(`Vidas decrementadas: ${vidas}`);

// let nivel = 1;
// ++nivel;
// console.log(`Niveis: ${nivel}`);
// ++nivel;
// console.log(`Niveis: ${nivel}`);
// ++nivel;
// console.log(`Niveis: ${nivel}`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 6 – Funções matemáticas (Math)
// // ------------------------------------------------------------
// // a) Declare "nota" com o valor 7.3.
// // b) Exiba o resultado de Math.round(nota), Math.floor(nota) e Math.ceil(nota).
// //    Use template literal para identificar cada um.
// // c) Declare "temperatura" com o valor -12.5.
// // d) Exiba o valor absoluto usando Math.abs(temperatura).
// // e) Use Math.max() para encontrar o maior entre: 42, 17, 89, 5, 63. Exiba o resultado.
// // f) Use Math.min() para encontrar o menor entre 42, 17, 89, 5, 63. Exiba o resultado.

// // → Seu código aqui:

// let nota = 7.3;
// /*
// MathRound() Arredonda o número inteiro MAIS PRÓXIMO
// MathFloor() Arredonda para baixo e CEIL para cima
// */
// console.log(`
//         MATHROUND - ${Math.round(nota)} | MATHFLOOR - ${Math.floor(
//   nota
// )} | MATHCEIL -  ${Math.ceil(nota)}
// `);

// let temperatura = -12.5;
// /*
// Math.abs Transforma números negativos em positivos e mantém os positivos, removendo o sinal.
// */
// console.log(`
//     Valor absoluto: ${Math.abs(temperatura)}
// `);
// /*
// Math.MAX Retorna o maior número dentre os argumentos fornecidos
// */
// console.log(`
//     ${Math.max(42, 17, 89, 5, 63)}
// `);
// /*
// Math.MIN Retorna o MENOR número dentre os argumentos fornecidos
// */
// console.log(`
//     ${Math.min(42, 17, 89, 5, 63)}
// `);
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 7 – Média de notas
// // ------------------------------------------------------------
// // a) Peça ao usuário 3 notas (use questionFloat()).
// // b) Calcule a média aritmética das 3 notas.
// // c) Exiba no console:
// //    "Nota 1: <n1> | Nota 2: <n2> | Nota 3: <n3>"
// //    "Média: <media>" (com 2 casas decimais usando toFixed(2))

// // → Seu código aqui:

// const nota1 = readlineSync.questionFloat(`
//     Insira sua primeira nota:`);

// const nota2 = readlineSync.questionFloat(`
//     Insira sua segunda nota:`);

// const nota3 = readlineSync.questionFloat(`
//     Insira sua terceira nota:`);
// const media = (nota1 + nota2 + nota3) / 3;

// console.log(`
//     Nota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3}
//     Média: ${media.toFixed(2)}
// `);
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 8 – Calculadora de troco
// // ------------------------------------------------------------
// // a) Peça ao usuário o valor total da compra (questionFloat()).
// // b) Peça ao usuário o valor entregue pelo cliente (informando que deve ser maior que o valor da compra) (questionFloat()).
// // c) Calcule o troco (valorEntregue - totalCompra).
// // d) Exiba no console:
// //    "Total da compra:  R$ <total>"
// //    "Valor entregue:   R$ <entregue>"
// //    "Troco:            R$ <troco>"
// //    Use toFixed(2) em todos os valores.

// // → Seu código aqui:

// const userTotalCompra = readlineSync.questionFloat(`
//     Insira o total da compra:`);
// const userClienteTotal = readlineSync.questionFloat(`
//     Insira o total entregue pelo cliente, deve ser maior que o valor da compra:`);
// const troco = userClienteTotal - userTotalCompra;

// console.log(`
//     Total da compra:  R$ ${userTotalCompra.toFixed(2)}
//     Valor entregue:   R$ ${userClienteTotal.toFixed(2)}
//     Troco:            R$ ${troco.toFixed(2)}
// `);
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 9 – Valor total de listas
// // ------------------------------------------------------------
// // a) Dada uma lista de preços, calcule e exiba o total.
// let precos = [29.9, 49.99, 15.75, 99.9];
// // b) Dada uma lista de notas, calcule e exiba a média.
// let notas = [7.5, 8.2, 6.5, 9.0];
// // c) Dada uma lista de idades, exiba a maior e a menor idade utilizando das funções Math().
// let idades = [15, 22, 30, 18, 25];

// // → Seu código aqui:

// const soma = precos.reduce((acc, valorTotal) => acc + valorTotal, 0);
// console.log(soma.toFixed(2));

// const medias = soma / notas.length;
// console.log(medias);

// let ehMaiorDeIdade = Math.max(...idades);
// let ehMenorDeidade = Math.min(...idades);
// console.log(`
//     Maior idade: ${ehMaiorDeIdade} | Menor idade: ${ehMenorDeidade}
// `);
// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 10 – Trabalhando com objetos
// ------------------------------------------------------------
// Dado o objeto turma:
let turma = {
  aluno1: {
    nome: "Joao",
    notas: []
  },
  aluno2: {
    nome: "Maria",
    notas: []
  },
  aluno3: {
    nome: "Pedro",
    notas: []
  }
};
// a) Sem alterar o objeto (utilize somente push), peça para o usuário 3 notas para cada aluno, indicando a quem pertencerá cada nota
// b) Calcule a média de notas de cada aluno e exiba no console, indicando a quem pertence cada média
// c) Exiba a média geral da turma
// d) Exiba a nota mais alta e a mais baixa de cada aluno
// e) Exiba a nota mais alta e a mais baixa da turma

// → Seu código aqui:

let notaAlunos;
notaAlunos = readlineSync.questionFloat(`
    Insira a primeira nota do ${turma.aluno1.nome}:`);

turma.aluno1.notas.push(notaAlunos);

notaAlunos = readlineSync.questionFloat(`
    Insira a segunda nota do ${turma.aluno1.nome}:`);

turma.aluno1.notas.push(notaAlunos);

notaAlunos = readlineSync.questionFloat(`
    Insira a terceira nota do ${turma.aluno1.nome}:`);

turma.aluno1.notas.push(notaAlunos);
console.log(turma);

notaAlunos = readlineSync.questionFloat(`
    Insira a primeira nota do ${turma.aluno2.nome}:`);

turma.aluno2.notas.push(notaAlunos);

notaAlunos = readlineSync.questionFloat(`
    Insira a segunda nota do ${turma.aluno2.nome}:`);

turma.aluno2.notas.push(notaAlunos);

notaAlunos = readlineSync.questionFloat(`
    Insira a terceira nota do ${turma.aluno2.nome}:`);

turma.aluno2.notas.push(notaAlunos);
console.log(turma);

notaAlunos = readlineSync.questionFloat(`
    Insira a primeira nota do ${turma.aluno3.nome}:`);

turma.aluno3.notas.push(notaAlunos);

notaAlunos = readlineSync.questionFloat(`
    Insira a segunda nota do ${turma.aluno3.nome}:`);

turma.aluno3.notas.push(notaAlunos);

notaAlunos = readlineSync.questionFloat(`
    Insira a terceira nota do ${turma.aluno3.nome}:`);

turma.aluno3.notas.push(notaAlunos);
console.log(turma);

let mediasTurma =
  (turma.aluno1.notas[0] + turma.aluno1.notas[1] + turma.aluno1.notas[2]) / 3;
console.log(`
    Media do ${turma.aluno1.nome} = ${mediasTurma}
`);

mediasTurma =
  (turma.aluno2.notas[0] + turma.aluno2.notas[1] + turma.aluno2.notas[2]) / 3;
console.log(`
    Media do ${turma.aluno2.nome} = ${mediasTurma}
`);
mediasTurma =
  (turma.aluno3.notas[0] + turma.aluno3.notas[1] + turma.aluno3.notas[2]) / 3;
console.log(`
    Media do ${turma.aluno3.nome} = ${mediasTurma}
`);

console.log("_______________________________");
