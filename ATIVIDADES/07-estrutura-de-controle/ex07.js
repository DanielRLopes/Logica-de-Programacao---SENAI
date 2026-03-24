// // ============================================================
// //   ATIVIDADE 07 – Estruturas de Controle (If / Else)
// // ============================================================
// // Instruções: resolva cada exercício no espaço indicado.
// // Use console.log() para exibir os resultados.
// // Lembre-se de instalar o pacote antes de executar:
// //     npm install readline-sync
// // Para executar:
// //     node atividade-07.js
// //
// // Dica: Ao terminar um exercício, comente-o. Assim os dados
// //       não serão solicitados novamente.
// // ============================================================

// // ------------------------------------------------------------
// // EXERCÍCIO 1 – If simples
// // ------------------------------------------------------------
// // a) Declare "pontos" com valor 120.
// // b) Se "pontos" for maior que 100, exiba: "Nível alcançado!".
// //    Mas se "pontos" for maior que 200, exiba somente: "Nível máximo alcançado!"

// // → Seu código aqui:
const readlineSync = require("readline-sync");

// let pontos = 120;
// if (pontos > 100) {
//   console.log(`Nivel alcancado!`);
// } else if (pontos > 200) {
//   console.log(`Nivel maximo alcancado!`);
// }
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 2 – If / Else
// // ------------------------------------------------------------
// // a) Declare "hora" com o valor 14 (representando 14h).
// // b) Se hora for menor que 12, exiba: "Bom dia!".
// // c) Se hora for menor que 18, exiba: "Boa tarde!".
// // d) Senão, exiba: "Boa noite!"

// // → Seu código aqui:

// let hora = 14;
// if (hora < 14) {
//   console.log(`Bom dia!`);
// } else if (hora < 18) {
//   console.log(`Boa tarde!`);
// } else {
//   console.log(`Boa noite!`);
// }

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 3 – If / Else com input
// // ------------------------------------------------------------
// // a) Pergunte ao usuário sua idade usando questionInt().
// // b) Se a idade for maior ou igual a 18, exiba: "Adulto".
// //    Se a idade for menor que 12, exiba: "Criança".
// //    Senão, exiba: "Jovem".

// // → Seu código aqui:
// let userAge = readlineSync.questionInt(`Insira a sua idade:`);
// const ehMaiorOuMenor =
//   userAge >= 18 ? "Adulto" : userAge < 12 ? "Criança" : "Jovem";
// console.log(ehMaiorOuMenor);
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 4 – If / Else If / Else
// // ------------------------------------------------------------
// // a) Declare "notaAluno" com valor 6.8.
// // b) Em uma variável "status", usando if/else if/else, armazene:
// //    - nota >= 9     → "Aprovado com mérito"
// //    - nota >= 7     → "Aprovado"
// //    - nota >= 5     → "Recuperação"
// //    - abaixo de 5   → "Reprovado"
// // c) AO final, exiba a nota e a situação com template literal.

// // → Seu código aqui:

// /*
// A)
// */
// let notaAluno = 6.8;
// let status = "";

// /*
// B)
// */
// if (notaAluno >= 9) {
//   status = "Aprovado com mérito";
// } else if (notaAluno >= 7) {
//   status = "Aprovado";
// } else if (notaAluno >= 5) {
//   status = "Recuperação";
// } else {
//   status = "Reprovado";
// }

// console.log(`
//     Nota: ${notaAluno} - Situação: ${status}
//     `);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 5 – If / Else If / Else com input
// // ------------------------------------------------------------
// // a) Pergunte ao usuário a temperatura atual (questionFloat()).
// // b) Classifique e exiba usando if/else if/else:
// //    - temperatura < 10           → "Muito frio"
// //    - temperatura >= 10 e < 18   → "Frio"
// //    - temperatura >= 18 e <= 25  → "Agradável"
// //    - temperatura > 25 e <= 35   → "Quente"
// //    - temperatura > 35           → "Muito quente"

// // → Seu código aqui:

// let temperaturaAtual = readlineSync.questionFloat(
//   `Insira a temperatura ATUAL:`,
// );

// if (temperaturaAtual < 10) console.log("Muito frio");
// else if (temperaturaAtual >= 10 && temperaturaAtual < 18) console.log("Frio");
// else if (temperaturaAtual >= 18 && temperaturaAtual <= 25)
//   console.log("Agradavel");
// else if (temperaturaAtual > 25 && temperaturaAtual <= 35) console.log("Quente");
// else console.log("Muito quente");

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 6 – If aninhado
// // ------------------------------------------------------------
// // a) Pergunte ao usuário e armazene as informações em um objeto:
// //    - Nome (question()).
// //    - Se possui ingresso (keyInYN()).
// //    - Sua idade (questionInt()).
// // b) Se NÃO possui ingresso → exiba: "<Nome>, dirija-se à bilheteria."
// //    Se possui ingresso:
// //      - idade < 18  → "Meia-entrada: menor de idade."
// //      - idade >= 60 → "Meia-entrada: melhor idade."
// //      - caso contrário → "Entrada inteira."

// // → Seu código aqui:

// let userName = readlineSync.question(`
//     Insira seu nome:`);
// let temIngresso = readlineSync.keyInYN(`
//     Tem ingresso?
//     `);
// userAge = readlineSync.questionInt(`
//     Insira sua Idade:`);
// if (!temIngresso) {
//   console.log(`${userName}, Dirija-se a bilheteria`);
// } else {
//   if (userAge < 18) {
//     console.log(`Meia-entrada: menor de idade`);
//   } else if (userAge >= 60) {
//     console.log(`Meia-entrada: melhor idade`);
//   } else {
//     console.log(`Entrada inteira`);
//   }
// }

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 7 – If com operadores lógicos (&&)
// // ------------------------------------------------------------
// // a) Pergunte ao usuário:
// //    - Nome (question()).
// //    - Idade (questionInt()).
// //    - Se possui habilitação (keyInYN()).
// // b) Armazene os dados em um objeto chamado "motorista".
// // c) Para alugar um carro, o motorista precisa ter 21 anos ou mais E possuir habilitação.
// //    - Se pode alugar → exiba: "<nome>, você pode alugar o veículo."
// //    - Senão          → exiba: "<nome>, você não atende aos requisitos."

// // → Seu código aqui:

// userName = readlineSync.question(`Insira seu Nome:`);
// userAge = readlineSync.questionInt(`Insira sua Idade:`);
// let temHabilitacao = readlineSync.keyInYN(`
//     Possui habilitacao?
//     `);
// const motorista = {
//   nome: userName,
//   idade: userAge,
//   habilitacao: temHabilitacao,
// };

// if (userAge >= 21 && temHabilitacao) {
//   console.log(`${userName}, voce pode alugar o veiculo`);
// } else {
//   console.log(`${userName}, voce nao atende os requisitos`);
// }
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 8 – If com operadores lógicos (||)
// // ------------------------------------------------------------
// // a) Pergunte ao usuário:
// //    - Se é estudante.
// //    - Se é idoso, com 60 anos ou mais.
// // b) Se é estudante OU idoso → exiba: "Desconto de 50% aplicado!"
// //    Senão → exiba: "Sem desconto. Preço cheio."

// // → Seu código aqui:

// let userEstudante = readlineSync.keyInYN(`
//     É estudante?
//     `);
// let ehIdoso = readlineSync.keyInYN(`
//     E idoso, com 60 ou mais? `);
// const temDesconto =
//   userEstudante || ehIdoso
//     ? "Desconto 50% aplicado"
//     : "Sem desconto. Preco cheio.";
// console.log(temDesconto);
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 9 – Sistema de notas completo
// // ------------------------------------------------------------
// // a) Pergunte ao usuário:
// //    - Nome do aluno.
// //    - Nota da prova 1.
// //    - Nota da prova 2.
// // b) Armazene os dados em um objeto "aluno" e calcule a média
// //    (média = (prova1 + prova2) / 2). Adicione a média ao objeto.
// // c) Classifique e exiba com if/else if/else:
// //    - média >= 7  → "Aprovado"
// //    - média >= 5  → "Em recuperação"
// //    - abaixo de 5 → "Reprovado"
// // d) Exiba o objeto "aluno" com console.table().
// // e) Exiba uma mensagem final: "<nome>: <situação> (média: <média>)"

// // → Seu código aqui:

// let aluno1 = readlineSync.question(`Insira seu Nome:`);
// let notaProva1 = readlineSync.questionFloat(`Nota Prova 1: `);
// let notaProva2 = readlineSync.questionFloat(`Nota Prova 2: `);

// const aluno = {
//   aluno: aluno1,
//   nota1: notaProva1,
//   nota2: notaProva2,
// };

// aluno.media = (notaProva1 + notaProva2) / 2;
// if (
//   aluno.media >= 7
//     ? "Aprovado"
//     : aluno.media >= 5
//       ? "Em Recuperacao"
//       : "Reprovado"
// )
//   console.table(aluno);
// console.log(`
//     ${aluno.aluno}: Situacao media: ${aluno.media}
//     `);
// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 10 – Calculadora interativa
// ------------------------------------------------------------
// a) Peça ao usuário dois números usando questionFloat().
// b) Peça ao usuário que escolha uma operação digitando um número:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão
//    Use questionInt() para capturar a escolha.
// c) Armazene os dois números, o número referente à escolha e o símbolo referente à escolha
//    em um objeto 'calculo' com as propriedades:
//    numeroA, numeroB, operacao, simbolo.
// d) Com base na escolha, calcule o resultado usando if/else if, else.
//    Dica: se a operação for divisão e o segundo número for 0, exiba um aviso de erro.
// e) Exiba no console o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Exemplo: "10 + 3 = 13"
// f) Realize testes para verificar se a calculadora está funcionando corretamente.
// g) Chame o professor para realizar alguns testes 🫡

// → Seu código aqui:

let userNumbers1 = readlineSync.questionFloat(`Insira um Numero: `);
let userNumbers2 = readlineSync.questionFloat(`Insira outro Numero: `);
const userOpcao = readlineSync.questionInt(`
        Escolha uma das opcoes abaixo digitando o numero da opcao:
    1 - Soma | 2 - Subtração | 3 - Multiplicação | 4 - Divisão :`);

/* 
VERIFICAÇÃO SE A OPÇÃO ESTÁ válida
*/
if (
  userOpcao === 0 ||
  userOpcao === "" ||
  (userOpcao >= 5 && userOpcao <= 200)
) {
  console.log(`Opcao invalida!`);
  process.exit(0);
}

const calculo = {
  numeroA: userNumbers1,
  numeroB: userNumbers2,
  operacao: userOpcao,
  simbolo: "",
};

if (userOpcao === 1) {
  console.log(
    `Soma: ${calculo.numeroA} + ${calculo.numeroB} RESULTADO: ${calculo.numeroA + calculo.numeroB}`,
  );
} else {
  if (userOpcao === 2) {
    console.log(
      `Subtracao: ${calculo.numeroA} - ${calculo.numeroB} RESULTADO: ${calculo.numeroA - calculo.numeroB}`,
    );
  } else if (userOpcao === 3) {
    console.log(
      `Multiplicacao: ${calculo.numeroA} * ${calculo.numeroB} RESULTADO: ${calculo.numeroA * calculo.numeroB}`,
    );
  } else {
    console.log(
      `Divisao: ${calculo.numeroA} / ${calculo.numeroB} RESULTADO: ${calculo.numeroA / calculo.numeroB}`,
    );
  }
}
console.log("_______________________________");
