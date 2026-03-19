/*
Desafio 4: O Carrinho de Compras Inteligente
**Objetivo:** Praticar Acumuladores e ID Incremental.

1. Crie um array vazio chamado `carrinho`.
2. Capture o nome e o preço de **3 produtos**.
3. Para cada produto, gere um `id` automático: `id: carrinho.length + 1`.
4. Guarde cada um no formato: `{ id, nome, preco }`.
5. **Diferencial de Qualidade:** Ao final, mostre o objeto inteiro via `console.table`.
6. **Extra:** Tente somar os 3 preços e mostrar o "Total da Compra".

*/

let readlineSycn = require("readline-sync");
const carrinho = [];
let totalCompra = 0;

const nomeDoPrimeiroProduto = readlineSycn.question(`
    Nome do primeiro produto: `);
let ehNomeInvalido =
  nomeDoPrimeiroProduto.length < 2 || nomeDoPrimeiroProduto.length <= 1;
if (ehNomeInvalido) {
  console.log(`
        ERRO: Produto Invalido
        `);
} else {
  const precoDoPrimeiroProduto = readlineSycn.questionInt(`
    Preco do primeiro produto: `);
  let ehNumeroInvalido =
    !Number.isNaN(precoDoPrimeiroProduto) && precoDoPrimeiroProduto <= 0;
  if (ehNumeroInvalido) {
    console.log(`
        ERRO: Numero invalido
        `);
  } else {
    // idContador é um IDs Auto-Incremental (Identificadores únicos que crescem sozinhos)
    const objetoProdutos1 = {
      id: carrinho.length + 1,
      nome: nomeDoPrimeiroProduto,
      preco: precoDoPrimeiroProduto,
    };
    carrinho.push(objetoProdutos1);
    totalCompra += precoDoPrimeiroProduto;
  }
}

const nomeDoSegundoProduto = readlineSycn.question(`
    Nome do segundo produto:`);
ehNomeInvalido =
  nomeDoSegundoProduto.length < 2 || nomeDoSegundoProduto.length <= 1;
if (ehNomeInvalido) {
  console.log(`
    ERRO: Produto invalido
    `);
} else {
  const precoDoSegundoProduto = readlineSycn.questionInt(`
    Preco do segundo produto:`);
  const ehNumeroInvalido =
    !Number.isNaN(precoDoSegundoProduto) && precoDoSegundoProduto <= 0;
  if (ehNumeroInvalido) {
    console.log(`
      ERRO: Numero invalido
      `);
  } else {
    const objetoProdutos2 = {
      id: carrinho.length + 1,
      nome: nomeDoSegundoProduto,
      preco: precoDoSegundoProduto,
    };
    carrinho.push(objetoProdutos2);
    totalCompra += precoDoSegundoProduto;
  }
}

const nomeDoTerceiroProduto = readlineSycn.question(`
    Nome do terceiro produto:`);

ehNomeInvalido =
  nomeDoTerceiroProduto.length < 2 || nomeDoTerceiroProduto.length <= 1;

if (ehNomeInvalido) {
  console.log(`
    ERRO: Produto invalido
    `);
} else {
  const precoDoTerceiroProduto = readlineSycn.questionInt(`
    Preco do terceiro produto`);
  ehNumeroInvalido =
    !Number.isNaN(precoDoTerceiroProduto) && precoDoTerceiroProduto <= 0;
  if (ehNumeroInvalido) {
    console.log(`
        ERRO: Numero invalido
        `);
  } else {
    const objetoProdutos3 = {
      id: carrinho.length + 1,
      nome: nomeDoTerceiroProduto,
      preco: precoDoTerceiroProduto,
    };
    carrinho.push(objetoProdutos3);
    totalCompra += precoDoTerceiroProduto;
  }
}

console.table(carrinho);
console.log(`
  Preco total: ${totalCompra}`);

/* 
CTRL D PARA SELECIONAR VARIAVEL E DEPOIS APENAS () RAPIDAMENTE
ALT SETA MOVER
SHIFT ALT A OU CTRL ;
*/
