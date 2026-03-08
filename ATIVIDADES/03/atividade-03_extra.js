// ESTUDO EM CASA SEXTA-FEIRA A DOMINGO COMECO : 07/03/2026
/*
Desafio 1: O Organizador de Inventário (Objeto Dinâmico)
**Objetivo:** Praticar chaves dinâmicas e validação.

- Peça ao usuário o **nome** de um produto e o **preço**.
- Crie um objeto chamado `estoque`.
- Use o nome do produto como a **chave** do objeto e o preço como o **valor**.
- **Regra de Qualidade:** Se o usuário deixar o nome vazio, exiba uma mensagem de erro: 
- "ERRO: O nome do produto não pode ser vazio." e não adicione ao objeto.
*/

let readlineSync = require("readline-sync");
const nomeDoProduto = readlineSync.question(`
    Nome do produto: `);
const ehNomeInvalido = nomeDoProduto.length <= 2;

if (ehNomeInvalido) {
  console.log(`
        ERRO: Nome do produto inexistente.
        `);
} else {
  const valorDoProduto = readlineSync.questionInt(`
        Valor do produto: `);
  const ehNumeroPreco = !Number.isNaN(valorDoProduto) && valorDoProduto > 0;
  if (!ehNumeroPreco) {
    console.log(`
        ERRO: Valor do produto invalido.
        `);
  } else {
    const objetoEstoque = {
      [nomeDoProduto]: valorDoProduto,
    };

    console.table([objetoEstoque]);
  }
}
