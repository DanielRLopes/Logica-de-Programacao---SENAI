/* 
DESAFIO 3 – Pedido de restaurante
*/

let readlineSync = require("readline-sync");

console.info(`
    INFO: Agora você vai montar um pedido!
`);

console.log(`
    = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
                MENU DE PREPARACAO DE CARDAPIO 
    = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =             

    OPÇÕES ABAIXO = = = = = = = = = = = = = = = = = = = = = = =
    
    ENTRADAS:

    (1) - BATATAS FRITAS - R$35 - 
    (2) - BALDE DE FRITAS - R$55 -

    PRATOS PRINCIPAIS:

    (1) - MACARRONADA ITALINA - R$ 67 -
    (2) - CARNE DA CASA - R$ 100 -
    (3) - FEIJOADA - R$ 50 - 

    SOBREMESSAS:

    (1) - MUSSI - R$ 30 -
    (2) - NUTELLA - R$ 50 -
    (3) - SORVETES - R$ 37 -

    BEBIDAS:

    (1) - CAFE ESPECIAL
    (2) - VINHO
    (3) - CHOPE
    (4) - REFRIGERANTE
`);
const cardapioEntrada = readlineSync.question(`
    Escolha uma Entrada (1 a 2) OU nome completo da opcao!
    Digite aqui:`);
const cardapioPratoPrincipal = readlineSync.question(`
    Escolha o Prato Principal (1 a 3) OU nome completo da opcao!
    Digite aqui:`);
const cardapioSobremessa = readlineSync.question(`
    Escolha a Sobremessa (1 a 3) OU nome completo da opcao!
    Digite aqui:`);
const cardapioBebida0 = readlineSync.question(`
    Escolha uma Bebida (1 a 4) OU nome completo da opcao!
    Digite aqui a 1 bebida:`);
const cardapioBebida1 = readlineSync.question(`
    Escolha uma Bebida (1 a 4) OU nome completo da opcao!
    Digite aqui a 2 bebida:`);

const pedido = {
  entrada: cardapioEntrada,
  pratoPrincipal: cardapioPratoPrincipal,
  sobremessa: cardapioSobremessa,
  listaBebidas: [cardapioBebida0, cardapioBebida1]
};

console.table(pedido);
console.log(`
    Seu pedido: Entrada: ${cardapioEntrada}, Prato Principal: ${cardapioPratoPrincipal}, Sobremessa: ${cardapioSobremessa}, Bebida 1: ${cardapioBebida0}, Bebida 2: ${cardapioBebida1}. Bom apetite!
`);
