// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:

const readlineSync = require("readline-sync")

const cardapio = [
    { numero: 1, nome: "Frango Grelhado", preco: 32.00 },
    { numero: 2, nome: "File ao Molho", preco: 45.00 },
    { numero: 3, nome: "Massa Italiana", preco: 28.00 },
    { numero: 4, nome: "Salada Caesar", preco: 22.00 },
    { numero: 5, nome: "Spá do Dia", preco: 18.00 },
]

const bebidas = [
    {}
]

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:

let valorConverter = readlineSync.questionFloat(`Qual valor a se converter: `)

const tipoConversao = [
    "1 - Km para Milhas",
    "2 - Milhas para Km",
    "3 - Celcius para Fahrenheit",
    "4 - Fahrenheit para Celcius",
    "5 - Kg para Libras",
    "6 - Libras para Kg"
]

let selecionarConversao = readlineSync.keyInSelect(tipoConversao, `Selecione o tipo da conversao: `)

const conversaoObjeto = {
    valorOriginal: valorConverter,
    unidadeOriginal: null,
    resultado: null,
    unidadeResultado: null
}

switch (selecionarConversao) {
    case 0:
        console.log(`Km para Milhas: ${valorConverter * 0.621371}`)
        conversaoObjeto.resultado = valorConverter * 0.621371
        conversaoObjeto.unidadeOriginal = "Km"
        conversaoObjeto.unidadeResultado = "Milhas"

        break;
    case 1:
        console.log(`Milhas para Km: ${valorConverter * 1.60934}`)
        conversaoObjeto.resultado = valorConverter * 1.60934
        conversaoObjeto.unidadeOriginal = "Milhas"
        conversaoObjeto.unidadeResultado = "Km"
        break;
    case 2:
        console.log(`Celcius para Fahrenheit: ${(valorConverter * 9 / 5) + 32}`)
        conversaoObjeto.resultado = (valorConverter * 9 / 5) + 32
        conversaoObjeto.unidadeOriginal = "Celcius"
        conversaoObjeto.unidadeResultado = "Fahrenheit"
        break;
    case 3:
        console.log(`Fahrenheit para Celcius: ${(valorConverter - 32) * 5 / 9}`)
        conversaoObjeto.resultado = (valorConverter * 9 / 5) + 32
        conversaoObjeto.unidadeOriginal = "Celcius"
        conversaoObjeto.unidadeResultado = "Fahrenheit"
        break;
    case 4:
        console.log(`Kg para Libras: ${valorConverter * 2.20462}`)
        conversaoObjeto.resultado = valorConverter * 2.20462
        conversaoObjeto.unidadeOriginal = "Kg"
        conversaoObjeto.unidadeResultado = "Libras"
        break;
    case 5:
        console.log(`Libras ´para Kg: ${valorConverter / 2.20462}`)
        conversaoObjeto.resultado = valorConverter / 2.20462
        conversaoObjeto.unidadeOriginal = "Libras"
        conversaoObjeto.unidadeResultado = "Kg"
        break;
    case -1:
        break;
    default:
        console.log(`Tipo de conversao invalida!`)
        break;
}

console.table(conversaoObjeto)

console.log(`${conversaoObjeto.valorOriginal}${conversaoObjeto.unidadeOriginal} = ${conversaoObjeto.resultado}${conversaoObjeto.unidadeResultado}`)

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:

const jogada = ["pedra", "papel", "tesoura"];

const computador = jogada[Math.floor(Math.random() * 3)];

const usuarioJogada = [
    "1 - Pedra",
    "2 - Papel",
    "3 - Tesoura"
]

let indiceSelecionado = readlineSync.keyInSelect(usuarioJogada, `Qual sua jogada: `)

console.log(`Voce: ${indiceSelecionado} | Computador: ${computador}`)



console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 5 – TÁXI OU APP?
// ------------------------------------------------------------
// O usuário informa a distância em km e o horário (dia ou noite).
// O programa calcula o preço estimado no táxi e em um app de corridas
// e recomenda a opção mais barata.
//
// Tabela:
//   Táxi: R$5 bandeirada + R$3/km (noite: R$4/km)
//   App:  R$2 taxa fixa  + R$2/km (noite: R$2.50/km)

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 6 – CRIE SEU PERSONAGEM DE RPG
// ------------------------------------------------------------
// O usuário responde 3 ou mais perguntas de multipla escolha (crie outras se quiser)
//  ex: prefere magia ou força?
//      prefere ataque ou defesa?
//      prefere floresta ou cidade?
//      prefere dia ou noite?
//      prefere furtividade ou agressividade?
//      prefere ataque a distância ou corpo a corpo?
// Com base nas respostas, o programa revela uma classe de personagem
// (guerreiro, mago, arqueiro, ladino, etc).
//
// Você pode criar um sistema de atribuição de pontos para cada resposta
// e determinar a classe final com base na pontuação total,
// ou simplesmente fazer verificações diretas. Use a criatividade para resolver este desafio.

const criarPersonagemObjeto = {
    atributos: {
        atributosFisicos: {
            forca: null,
            destreza: null,
            constituicao: null
        },
        atributosMentais: {
            inteligencia: null,
            sabedoria: null,
            carisma: null
        }
    },
    racasPerguntas: {
        
    }
}
