const readlineSync = require("readline-sync");

// ------------------------------------------------------------
// DESAFIO 1 – Carrinho de compras
// ------------------------------------------------------------
// a) Peça ao usuário o nome e preço de 3 produtos.
// b) Crie um objeto "carrinho" contendo:
//    - produtos (array com os 3 produtos)
// c) Cada produto deve ser um objeto com:
//    nome
//    preco
//
// d) Calcule:
//    - valorTotal
//    - valorMedio dos produtos
//
// e) Exiba o carrinho com console.table().
// f) Exiba também:
//
// "O carrinho possui < X > produtos.
// Valor total: X
// Valor médio dos produtos: X"

// → Seu código aqui:

let nomeProduto;
let precoProduto;
nomeProduto = readlineSync.question(`
    Insira o Nome do Produto que deseja:`);

precoProduto = readlineSync.questionFloat(`
    Insira o Valor do produto:`);

let nomeProduto0
let precoProduto0
nomeProduto0 = readlineSync.question(`
    Insira o Nome do Produto que deseja:`);

precoProduto0 = readlineSync.questionFloat(`
    Insira o Valor do produto:`);

let nomeProduto1
let precoProduto1
nomeProduto1 = readlineSync.question(`
    Insira o Nome do Produto que deseja:`);

precoProduto1 = readlineSync.questionFloat(`
    Insira o Valor do produto:`);


const carrinho = {
    produtos: [
        produto0 = {
            nome: nomeProduto, preco: precoProduto
        },
        produto1 = {
            nome: nomeProduto0, preco: precoProduto0
        },
        produto2 = {
            nome: nomeProduto1, preco: precoProduto1
        }
    ]
};

const valorTotal = carrinho.produtos[0].preco + carrinho.produtos[1].preco + carrinho.produtos[2].preco
console.log(valorTotal)
const valorMedia = (carrinho.produtos[0].preco + carrinho.produtos[1].preco + carrinho.produtos[2].preco) / carrinho.produtos.length
console.log(valorMedia)
console.table(carrinho)
console.log(`
    O carrinho possui ${carrinho.produtos.length} produtos.
    Valor total: ${valorTotal}
    Valor medio dos produtos: ${valorMedia}
`)
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Controle de despesas
// ------------------------------------------------------------
// a) Peça ao usuário os valores de 4 despesas:
//    aluguel
//    internet
//    energia
//    alimentação
//
// b) Crie um objeto "despesas" com essas propriedades.
//
// c) Crie um array chamado "listaDespesas" contendo
//    todos os valores.
//
// d) Calcule:
//    - total de despesas
//    - média das despesas
//    - quanto sobra se o salário for 5000.
//
// e) Exiba:
//
// "Total de despesas: X"
// "Média de despesas: X"
// "Dinheiro restante: X"

// → Seu código aqui:

let valorAluguel
let valorInternet
let valorEnergia
let valorAlimentacao

valorAluguel = readlineSync.questionFloat(`
    Insira o Valor do Aluguel:`)
valorInternet = readlineSync.questionFloat(`
    Insira o Valor da Interent:`)
valorEnergia = readlineSync.questionFloat(`
    Insira o Valor da Energia:`)
valorAlimentacao = readlineSync.questionFloat(`
    Insira o Valor da Alimentacao:`)

const despesas = {
    aluguel: valorAluguel,
    internet: valorInternet,
    energia: valorEnergia,
    alimentacao: valorAlimentacao,
    listaDespesas: [
        valorAluguel,
        valorInternet,
        valorEnergia,
        valorAlimentacao
    ]
}

const valorTotalDespesas = despesas.listaDespesas[0] + despesas.listaDespesas[1] + despesas.listaDespesas[2] + despesas.listaDespesas[3]

console.log(`
    ${valorTotalDespesas}
`)

const valorMediaDespesas = (despesas.listaDespesas[0] + despesas.listaDespesas[1] + despesas.listaDespesas[2] + despesas.listaDespesas[3]) / despesas.listaDespesas.length
console.log(valorMediaDespesas)
console.log("_______________________________");