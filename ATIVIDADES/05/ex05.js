const readlineSync = require("readline-sync")

// // ------------------------------------------------------------
// // EXERCÍCIO 1 – Comparando com == e ===
// // ------------------------------------------------------------
// // Para cada par de valores abaixo, declare duas variáveis e exiba:
// //   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
// //   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
// //
// // Pares de valores:
// //   1) 10 e 10
// //   2) 10 e "10"
// //   3) 0 e false
// //   4) null e undefined
// //   5) "JS" e "JS"

// // → Seu código aqui:

// let arrValores = [
//     10,
//     10,
//     0,
//     false,
//     null,
//     undefined,
//     "JS",
//     "JS"
// ]

// console.log(`
//     RESULTADO ESTRITAMENTE IGUAL === 
//     - - - - - - - - - - - - - - - - - - - - - - -
//     ${arrValores[0]} == ${arrValores[1]}: RESULTADO: ${arrValores[0] == arrValores[1]}
//     ${arrValores[2]} == ${arrValores[3]}: RESULTADO: ${arrValores[2] == arrValores[3]}
//     ${arrValores[4]} == ${arrValores[5]}: RESULTADO: ${arrValores[4] == arrValores[5]}
//     ${arrValores[6]} == ${arrValores[7]}: RESULTADO: ${arrValores[6] == arrValores[7]}
//     - - - - - - - - - - - - - - - - - - - - - - -
// `)
// console.log(`
//     RESULTADO ESTRITAMENTE IGUAL === 
//     - - - - - - - - - - - - - - - - - - - - - - -
//     ${arrValores[0]} == ${arrValores[1]}: RESULTADO: ${arrValores[0] == arrValores[1]}
//     ${arrValores[2]} == ${arrValores[3]}: RESULTADO: ${arrValores[2] == arrValores[3]}
//     ${arrValores[4]} == ${arrValores[5]}: RESULTADO: ${arrValores[4] == arrValores[5]}
//     ${arrValores[6]} == ${arrValores[7]}: RESULTADO: ${arrValores[6] == arrValores[7]}
//     - - - - - - - - - - - - - - - - - - - - - - -
// `)
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 2 – Comparando com != e !==
// // ------------------------------------------------------------
// // Para cada par de valores abaixo, exiba:
// //   a) O resultado de != : "<a> != <b> → <resultado>"
// //   b) O resultado de !== : "<a> !== <b> → <resultado>"
// //
// // Pares de valores:
// //   1) 5 e 5
// //   2) 5 e "5"
// //   3) 7 e 3
// //   4) true e 1

// // → Seu código aqui:

// arrValores = [
//     5,
//     5,
//     5,
//     "5",
//     7,
//     3,
//     true,
//     1
// ]
// // != (diferente com coerção de tipo) 
// // [verifica o valor mas ignora o tipo do dado (string, number, boolean, etc)]
// console.log(`
//     RESULTADO DESIGUALDADE DIFERENTE COM COESAO !=

//     - - - - - - - - - - - - - - - - - - - - - - -
//     ${arrValores[0]} != ${arrValores[1]}: RESULTADO: ${arrValores[0] != arrValores[1]}
//     ${arrValores[2]} != ${arrValores[3]}: RESULTADO: ${arrValores[2] != arrValores[3]}
//     ${arrValores[4]} != ${arrValores[5]}: RESULTADO: ${arrValores[4] != arrValores[5]}
//     ${arrValores[6]} != ${arrValores[7]}: RESULTADO: ${arrValores[6] != arrValores[7]}
//     - - - - - - - - - - - - - - - - - - - - - - -
// `)

// console.log(`
//     RESULTADO ESTRITAMENTE DIFERENTE !==

//     - - - - - - - - - - - - - - - - - - - - - - -
//     ${arrValores[0]} !== ${arrValores[1]}: RESULTADO: ${arrValores[0] !== arrValores[1]}
//     ${arrValores[2]} !== ${arrValores[3]}: RESULTADO: ${arrValores[2] !== arrValores[3]}
//     ${arrValores[4]} !== ${arrValores[5]}: RESULTADO: ${arrValores[4] !== arrValores[5]}
//     ${arrValores[6]} !== ${arrValores[7]}: RESULTADO: ${arrValores[6] !== arrValores[7]}
//     - - - - - - - - - - - - - - - - - - - - - - -
// `)

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 3 – Maior, menor e igual
// // ------------------------------------------------------------
// // a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// // b) Calcule e armazene em variáveis (booleanas) os resultados de:
// //    - salarioA > salarioB
// //    - salarioA < salarioB
// //    - salarioA >= salarioB
// //    - salarioA <= salarioB
// //    - salarioA === salarioB
// // c) Exiba cada resultado com template literal e verificação ternária no formato:
// //    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// // → Seu código aqui:

// let salarioA = 3500
// let salarioB = 4200
// let vericacao
// vericacao = salarioA > salarioB
// console.log(vericacao)
// vericacao = salarioA < salarioB
// console.log(vericacao)
// vericacao = salarioA >= salarioB
// console.log(vericacao)
// vericacao = salarioA <= salarioB
// console.log(vericacao)
// vericacao = salarioA === salarioB
// console.log(vericacao)

// console.log(`
//     Salario A: ${salarioA} > SalarioB ${salarioB}: resultado: ${salarioA > salarioB}
// `)
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 4 – Armazenando resultados em variáveis
// // ------------------------------------------------------------
// // a) Declare "estoque" com valor 0.
// // b) Armazene em "temEstoque" o resultado de: estoque > 0
// // c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// // d) Declare "temperatura" com valor 36.5.
// // e) Armazene em "febre" o resultado de: temperatura >= 37.6
// // f) Exiba cada variável usando template literal.

// // → Seu código aqui:

// let estoque = 0
// let temEstoque = estoque > 0
// let estoqueZerado = estoque === 0
// let temperatura = 36.5
// let febre = temperatura >= 37.6
// console.log(`
//     Estoque: ${estoque}
//     temEstoque: ${temEstoque}
//     estoqueZerado: ${estoqueZerado}
//     temperatura: ${temperatura}
//     febre: ${febre}
//     `)

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 5 – Comparações com input do usuário
// // ------------------------------------------------------------
// // a) Peça ao usuário dois números.
// // b) Armazene em variáveis o resultado das seguintes comparações:
// //    - num1 > num2
// //    - num1 < num2
// //    - num1 === num2
// //    - num1 >= num2
// // c) Exiba cada resultado com template literal.

// // → Seu código aqui:

// const userValor0 = readlineSync.questionFloat(`
//     Insira um numero:`)
// const userValor1 = readlineSync.questionFloat(`
//     Insira outro numero:`)
// console.log(`
//     MAIOR: ${userValor0}, ${userValor1} RESULTADO: ${userValor0 > userValor1}
//     MENOR: ${userValor0}, ${userValor1} RESULTADO: ${userValor0 < userValor1}
//     MAIOR IGUAL: ${userValor0}, ${userValor1} RESULTADO: ${userValor0 >= userValor1}
//     MENOR IGUAL: ${userValor0}, ${userValor1} RESULTADO: ${userValor0 <= userValor1}
//     ESTRITAMENTE IGUAL: ${userValor0}, ${userValor1} RESULTADO: ${userValor0 === userValor1}
// `)
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 6 – Verificação de preço
// // ------------------------------------------------------------
// // a) Peça ao usuário o preço de um produto.
// // b) Defina uma constante "precoMaximo" com valor 100.
// // c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// // d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// // e) Exiba no console:
// //    "Preço informado: R$ <preco>"
// //    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
// //    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// // → Seu código aqui:

// const userProdutoValor = readlineSync.questionFloat(`
//     Insira o Valor de um Produto:`)
// const precoMaximo = userProdutoValor === 100
// const estaDentroDoOrcamento = userProdutoValor <= precoMaximo
// const esteItemEhCaro = userProdutoValor > precoMaximo

// console.log(`
//     Preço informado: R$ ${userProdutoValor}
//     Dentro do orçamento:  ${(precoMaximo <= estaDentroDoOrcamento ? "Sim" : "Nao")}
//     Item caro: ${(precoMaximo >= esteItemEhCaro ? "Sim" : "Nao")}
//     `)

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 7 – Comparando notas
// // ------------------------------------------------------------
// // a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// // b) Armazene os resultados das comparações:
// //    - idadePessoa1 > idadePessoa2
// //    - idadePessoa1 === idadePessoa2
// //    - idadePessoa1 >= 18 (maior de idade)
// //    - idadePessoa2 >= 18 (maior de idade)
// // c) Exiba todos os resultados com template literal e verificação ternária.
// //    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// // d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// // → Seu código aqui:

// let userName = readlineSync.question(`
//     Insira seu Nome:`)
// let userAge = readlineSync.questionInt(`
//     Insira sua Idade:`)
// let userName0 = readlineSync.question(`
//     Insira seu Nome`)
// let userAge0 = readlineSync.questionInt(`
//     Insira sua Idade:`)

// const cadastro = [
//     {
//         nome: userName, idade: userAge
//     },
//     {
//         nome: userName0, idade: userAge0
//     }
// ]

// console.log(`
//     Nome da ${cadastro[0].nome} e ${cadastro[0].idade} e ela e ${cadastro[0].idade >= 18 ? "maior de idade" : "menor de idade"}
//     `)

// console.log(`
//     Nome da ${cadastro[1].nome} e ${cadastro[1].idade} e ela e ${cadastro[1].idade >= 21 ? "mais velha" : "menos velha"}
//     `)
// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:

const alunos = []
let alunosNotas1
let alunosNotas2
let alunosNotas3
userName = readlineSync.question(`
    Insira o nome do Aluno(a):`)
alunosNotas1 = readlineSync.questionFloat(`
    Insira a nota do Aluno(a):`)
alunosNotas2 = readlineSync.questionFloat(`
    Insira a nota do Aluno(a):`)
alunosNotas3 = readlineSync.questionFloat(`
    Insira a nota do Aluno(a):`)
alunos.push(
    {
        Nome: userName, notas: [
            alunosNotas1,
            alunosNotas2,
            alunosNotas3
        ]
    }
)
console.table(alunos)
userName = readlineSync.question(`
    Insira o nome do Aluno(a):`)
alunosNotas1 = readlineSync.questionFloat(`
    Insira a nota do Aluno(a):`)
alunosNotas2 = readlineSync.questionFloat(`
    Insira a nota do Aluno(a):`)
alunosNotas3 = readlineSync.questionFloat(`
    Insira a nota do Aluno(a):`)
alunos.push(
    {
        Nome: userName, notas: [
            alunosNotas1,
            alunosNotas2,
            alunosNotas3
        ]
    }
)
console.table(alunos)

const alunosSomaNotas1 = alunos[0].notas[0] + alunos[0].notas[1] + alunos[0].notas[2]
const alunosMediaNotas1 = alunosSomaNotas1 / alunos[0].notas.length

const alunosSomaNotas2 = alunos[1].notas[0] + alunos[0].notas[1] + alunos[1].notas[2]
const alunosMediaNotas2 = alunosSomaNotas2 / alunos[1].notas.length

console.log(`
    Maior media entre: ${alunos[0].Nome} || ${alunos[1].Nome}
    O RESULTADO: ${alunosMediaNotas1 >= alunosMediaNotas2 ? alunos[0].Nome : alunos[1].Nome}
    `)
console
console.log("_______________________________");