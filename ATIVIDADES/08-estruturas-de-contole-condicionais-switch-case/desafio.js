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

// const readlineSync = require("readline-sync");

// const cardapio = [
//   { id: 1, nome: "Frango Grelhado", preco: 32.0 },
//   { id: 2, nome: "File ao Molho", preco: 45.0 },
//   { id: 3, nome: "Massa Italiana", preco: 28.0 },
//   { id: 4, nome: "Salada Caesar", preco: 22.0 },
//   { id: 5, nome: "Sopa do Dia", preco: 18.0 },
// ];

// const bebidas = [
//   { id: 1, nome: "Suco Natural", preco: 9.0 },
//   { id: 2, nome: "Refrigerante", preco: 7.0 },
//   { id: 3, nome: "Agua", preco: 4.0 },
//   { id: 4, nome: "Sem Bebida", preco: 0.0 },
// ];

// let userName = readlineSync.question("Insira seu nome completo: ");

// let pratoDesejado = readlineSync.questionInt("Numero do prato desejado: ");

// let bebidaDesejada = readlineSync.questionInt("Numero da bebida desejada: ");

// /*VARIAVEIS PARA GUARDAR*/
// let pratoSelecionado;
// let bebidaSelecionada;

// switch (pratoDesejado) {
//   case 1:
//     pratoSelecionado = cardapio[0];
//     break;

//   case 2:
//     pratoSelecionado = cardapio[1];
//     break;

//   case 3:
//     pratoSelecionado = cardapio[2];
//     break;

//   case 4:
//     pratoSelecionado = cardapio[3];
//     break;

//   case 5:
//     pratoSelecionado = cardapio[4];
//     break;

//   default:
//     console.log("Prato invalido!");

//     pratoSelecionado = {
//       nome: "Item invalido",
//       preco: 0,
//     };
// }

// // ======================================================
// // SWITCH DA BEBIDA
// // ======================================================

// switch (bebidaDesejada) {
//   case 1:
//     bebidaSelecionada = bebidas[0];
//     break;

//   case 2:
//     bebidaSelecionada = bebidas[1];
//     break;

//   case 3:
//     bebidaSelecionada = bebidas[2];
//     break;

//   case 4:
//     bebidaSelecionada = bebidas[3];
//     break;

//   default:
//     console.log("Bebida invalida!");

//     bebidaSelecionada = {
//       nome: "Item invalido",
//       preco: 0,
//     };
// }

// const pedido = {
//   nomeCliente: userName,

//   nomePrato: pratoSelecionado.nome,
//   precoPrato: pratoSelecionado.preco,

//   nomeBebida: bebidaSelecionada.nome,
//   precoBebida: bebidaSelecionada.preco,

//   total: pratoSelecionado.preco + bebidaSelecionada.preco,
// };

// const pagarPix = readlineSync.keyInYN("Vai pagar no PIX?");

// if (pagarPix) {
//   pedido.total = pedido.total * 0.9;
// }

// console.table(pedido);

// console.log(`
// ========= RECIBO =========

// Cliente: ${pedido.nomeCliente}

// Prato: ${pedido.nomePrato}
// Preco prato: R$ ${pedido.precoPrato}

// Bebida: ${pedido.nomeBebida}
// Preco bebida: R$ ${pedido.precoBebida}

// TOTAL: R$ ${pedido.total.toFixed(2)}

// ==========================
// `);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // DESAFIO 2 – Conversor de unidades
// // ------------------------------------------------------------
// // a) Pergunte ao usuário:
// //    - O valor a converter (questionFloat()).
// //    - O tipo de conversão (questionInt()):
// //      1 – Km para Milhas
// //      2 – Milhas para Km
// //      3 – Celsius para Fahrenheit
// //      4 – Fahrenheit para Celsius
// //      5 – Kg para Libras
// //      6 – Libras para Kg
// // b) Com switch/case, aplique a fórmula correta:
// //    - Km → Milhas:         valor * 0.621371
// //    - Milhas → Km:         valor * 1.60934
// //    - Celsius → Fahrenheit: (valor * 9/5) + 32
// //    - Fahrenheit → Celsius: (valor - 32) * 5/9
// //    - Kg → Libras:         valor * 2.20462
// //    - Libras → Kg:         valor / 2.20462
// //    - default: "Tipo de conversão inválido."
// // c) Armazene a conversão em um objeto:
// //    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// // d) Exiba o objeto com console.table().
// // e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// // → Seu código aqui:

// let valorConverter = readlineSync.questionFloat(`Qual valor a se converter: `);

// const tipoConversao = [
//   "1 - Km para Milhas",
//   "2 - Milhas para Km",
//   "3 - Celcius para Fahrenheit",
//   "4 - Fahrenheit para Celcius",
//   "5 - Kg para Libras",
//   "6 - Libras para Kg",
// ];

// let selecionarConversao = readlineSync.keyInSelect(
//   tipoConversao,
//   `Selecione o tipo da conversao: `,
// );

// const conversaoObjeto = {
//   valorOriginal: valorConverter,
//   unidadeOriginal: null,
//   resultado: null,
//   unidadeResultado: null,
// };

// switch (selecionarConversao) {
//   case 0:
//     console.log(`Km para Milhas: ${valorConverter * 0.621371}`);
//     conversaoObjeto.resultado = valorConverter * 0.621371;
//     conversaoObjeto.unidadeOriginal = "Km";
//     conversaoObjeto.unidadeResultado = "Milhas";

//     break;
//   case 1:
//     console.log(`Milhas para Km: ${valorConverter * 1.60934}`);
//     conversaoObjeto.resultado = valorConverter * 1.60934;
//     conversaoObjeto.unidadeOriginal = "Milhas";
//     conversaoObjeto.unidadeResultado = "Km";
//     break;
//   case 2:
//     console.log(`Celcius para Fahrenheit: ${(valorConverter * 9) / 5 + 32}`);
//     conversaoObjeto.resultado = (valorConverter * 9) / 5 + 32;
//     conversaoObjeto.unidadeOriginal = "Celcius";
//     conversaoObjeto.unidadeResultado = "Fahrenheit";
//     break;
//   case 3:
//     console.log(`Fahrenheit para Celcius: ${((valorConverter - 32) * 5) / 9}`);
//     conversaoObjeto.resultado = (valorConverter * 9) / 5 + 32;
//     conversaoObjeto.unidadeOriginal = "Celcius";
//     conversaoObjeto.unidadeResultado = "Fahrenheit";
//     break;
//   case 4:
//     console.log(`Kg para Libras: ${valorConverter * 2.20462}`);
//     conversaoObjeto.resultado = valorConverter * 2.20462;
//     conversaoObjeto.unidadeOriginal = "Kg";
//     conversaoObjeto.unidadeResultado = "Libras";
//     break;
//   case 5:
//     console.log(`Libras ´para Kg: ${valorConverter / 2.20462}`);
//     conversaoObjeto.resultado = valorConverter / 2.20462;
//     conversaoObjeto.unidadeOriginal = "Libras";
//     conversaoObjeto.unidadeResultado = "Kg";
//     break;
//   case -1:
//     break;
//   default:
//     console.log(`Tipo de conversao invalida!`);
//     break;
// }

// console.table(conversaoObjeto);

// console.log(
//   `${conversaoObjeto.valorOriginal}${conversaoObjeto.unidadeOriginal} = ${conversaoObjeto.resultado}${conversaoObjeto.unidadeResultado}`,
// );

// console.log("_______________________________");

// // ------------------------------------------------------------
// // DESAFIO 3 – Jogo de pedra, papel e tesoura
// // ------------------------------------------------------------
// // a) Gere a jogada do computador aleatoriamente:
// //    const jogada = ["pedra", "papel", "tesoura"];
// //    const computador = jogada[Math.floor(Math.random() * 3)];
// // b) Pergunte ao usuário sua jogada - questionInt():
// //    1 – Pedra | 2 – Papel | 3 – Tesoura
// //    Para opções inválidas, exiba "Jogada inválida." e encerre.
// // c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// // d) Determine o vencedor ou empate com switch/case aninhado ou combinando
// //    switch com if/else
// // e) Exiba o resultado final.

// // → Seu código aqui:

// const jogadas = ["Pedra", "Papel", "Tesoura"];

// let pontosJogador = 0;
// let pontosComputador = 0;

// // ==========================
// // RODADA 1
// // ==========================

// let computador = jogadas[Math.floor(Math.random() * 3)];

// let userJogada = readlineSync.questionInt(`
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura

// Escolha: `);

// let jogadaUsuario = null;

// switch (userJogada) {
//   case 1:
//     jogadaUsuario = "Pedra";
//     break;

//   case 2:
//     jogadaUsuario = "Papel";
//     break;

//   case 3:
//     jogadaUsuario = "Tesoura";
//     break;

//   default:
//     console.log("Jogada invalida.");
// }

// switch (jogadaUsuario) {
//   case "Pedra":
//     if (computador === "Pedra") {
//       console.log("Empate!");
//     } else if (computador === "Papel") {
//       pontosComputador += 1;
//     } else {
//       pontosJogador += 1;
//     }
//     break;

//   case "Papel":
//     if (computador === "Papel") {
//       console.log("Empate!");
//     } else if (computador === "Pedra") {
//       pontosJogador += 1;
//     } else {
//       pontosComputador += 1;
//     }
//     break;

//   case "Tesoura":
//     if (computador === "Tesoura") {
//       console.log("Empate!");
//     } else if (computador === "Papel") {
//       pontosJogador += 1;
//     } else {
//       pontosComputador += 1;
//     }
//     break;
// }

// console.log(`
// RODADA 1

// COMPUTADOR: ${computador}
// JOGADOR: ${jogadaUsuario}

// PLACAR:

// JOGADOR: ${pontosJogador}
// COMPUTADOR: ${pontosComputador}
// `);

// // ==========================
// // RODADA 2
// // ==========================

// computador = jogadas[Math.floor(Math.random() * 3)];

// userJogada = readlineSync.questionInt(`
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura

// Escolha: `);

// switch (userJogada) {
//   case 1:
//     jogadaUsuario = "Pedra";
//     break;

//   case 2:
//     jogadaUsuario = "Papel";
//     break;

//   case 3:
//     jogadaUsuario = "Tesoura";
//     break;

//   default:
//     console.log("Jogada invalida.");
// }

// switch (jogadaUsuario) {
//   case "Pedra":
//     if (computador === "Pedra") {
//       console.log("Empate!");
//     } else if (computador === "Papel") {
//       pontosComputador += 1;
//     } else {
//       pontosJogador += 1;
//     }
//     break;

//   case "Papel":
//     if (computador === "Papel") {
//       console.log("Empate!");
//     } else if (computador === "Pedra") {
//       pontosJogador += 1;
//     } else {
//       pontosComputador += 1;
//     }
//     break;

//   case "Tesoura":
//     if (computador === "Tesoura") {
//       console.log("Empate!");
//     } else if (computador === "Papel") {
//       pontosJogador += 1;
//     } else {
//       pontosComputador += 1;
//     }
//     break;
// }

// console.log(`
// RODADA 2

// COMPUTADOR: ${computador}
// JOGADOR: ${jogadaUsuario}

// PLACAR:

// JOGADOR: ${pontosJogador}
// COMPUTADOR: ${pontosComputador}
// `);

// // ==========================
// // RODADA 3
// // ==========================

// computador = jogadas[Math.floor(Math.random() * 3)];

// userJogada = readlineSync.questionInt(`
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura

// Escolha: `);

// switch (userJogada) {
//   case 1:
//     jogadaUsuario = "Pedra";
//     break;

//   case 2:
//     jogadaUsuario = "Papel";
//     break;

//   case 3:
//     jogadaUsuario = "Tesoura";
//     break;

//   default:
//     console.log("Jogada invalida.");
// }

// switch (jogadaUsuario) {
//   case "Pedra":
//     if (computador === "Pedra") {
//       console.log("Empate!");
//     } else if (computador === "Papel") {
//       pontosComputador += 1;
//     } else {
//       pontosJogador += 1;
//     }
//     break;

//   case "Papel":
//     if (computador === "Papel") {
//       console.log("Empate!");
//     } else if (computador === "Pedra") {
//       pontosJogador += 1;
//     } else {
//       pontosComputador += 1;
//     }
//     break;

//   case "Tesoura":
//     if (computador === "Tesoura") {
//       console.log("Empate!");
//     } else if (computador === "Papel") {
//       pontosJogador += 1;
//     } else {
//       pontosComputador += 1;
//     }
//     break;
// }

// console.log(`
// RODADA 3

// COMPUTADOR: ${computador}
// JOGADOR: ${jogadaUsuario}

// PLACAR:

// JOGADOR: ${pontosJogador}
// COMPUTADOR: ${pontosComputador}
// `);

// if (pontosJogador > pontosComputador) {
//   console.log(`
// VOCE GANHOU O JOGO!
// `);
// } else if (pontosComputador > pontosJogador) {
//   console.log(`
// COMPUTADOR GANHOU O JOGO!
// `);
// } else {
//   console.log(`
// O JOGO TERMINOU EMPATADO!
// `);
// }

// console.log("_______________________________");

// // ------------------------------------------------------------
// // DESAFIO 4 – Sistema de suporte técnico
// // ------------------------------------------------------------
// // Um sistema de atendimento automatizado funciona por menus.
// //
// // Menu principal (questionInt()):
// //   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
// //
// // Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
// //   1 – Sem conexão
// //   2 – Conexão lenta
// //   3 – Wi-Fi não aparece
// //
// // Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
// //   1 – Sem sinal
// //   2 – Imagem ruim
// //   3 – Canais sumidos
// //
// // Para cada sub-opção, exiba uma mensagem de orientação específica.
// // Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// // Para a opção 0, exiba "Atendimento encerrado."
// // No default, exiba "Opção inválida."
// //
// // a) Implemente o fluxo acima usando switch/case no menu principal
// //    e switch/case nos sub-menus, com if/else se necessário.
// // b) Exiba todas as mensagens com template literal.

// // → Seu código aqui:

// let usuarioEscolha = null;

// const menuPrincipal = readlineSync.questionInt(`
// 1 - Internet
// 2 - TV
// 3 - Telefone
// 4 - Falar com atendente
// 0 - Encerrar

// Escolha:`);

// const subMenuAtendente = readlineSync.questionInt(`
// Por favor aguarde na linha. `);

// switch (menuPrincipal) {
//   case 0:
//     console.log(`Atendimento encerrado.`);
//     break;
//   case 1:
//     const subMenuInternet = readlineSync.questionInt(`
// 1 - Sem conexao
// 2 - Conexao lenta
// 3 - Wi-fi nao aparece

// Escolha: `);
//     break;
//   case 2:
//     const subMenuTv = readlineSync.questionInt(`
// 1 - Sem sinal
// 2 - Imagem ruim
// 3 - Canais sumidos

// Escolha:`);
//     break;
//   case 3:
//     console.log(`
// Por favor aguarda na linha. `);
//     break;
//   case 4:
//     console.log(`
// Por favor aguarde na linha. `);
//     break;

//   default:
//     console.log(`Opcao invalida!`);
// }
// console.log("_______________________________");

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

// const readlineSync = require("readline-sync");

// const distanciaPercorrer = readlineSync.questionFloat(`
// Qual distancia deseja percorrer (Em Km): `);

// const ehNoite = readlineSync.keyInYN(`
// Esta de noite: `);

// let taxaTaxi = 5;
// let taxiKm = 3 * distanciaPercorrer;
// let taxaApp = 2;
// let appKm = 2 * distanciaPercorrer;

// if (ehNoite === true) {
//   taxiKm = 4 * distanciaPercorrer;
//   appKm = 2.5 * distanciaPercorrer;
//   const comparacao = taxaTaxi + taxiKm > appKm;

//   if (comparacao === true) {
//     console.log(`
// Recomendacao:
// APP - R$${appKm + taxaApp}`);
//   } else {
//     console.log(`
// Recomendacao:
// TAXI - R$${taxiKm + taxaTaxi}`);
//   }
// } else {
//   const comparacao = taxaTaxi + taxiKm > appKm;
//   if (comparacao === true) {
//     console.log(`
// Recomendacao:
// APP - R$${appKm + taxaApp}`);
//   } else {
//     console.log(`
// Recomendacao:
// TAXI - R$${taxiKm + taxaTaxi}`);
//   }
// }

// console.log("_______________________________");

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

const readlineSync = require("readline-sync");

const atributoPersonagem = {
	atributos: {
		forca: 0,
		destreza: 0,
		constituicao: 0,
		inteligencia: 0,
		sabedoria: 0,
		carisma: 0,
	},
};

const querRolar = readlineSync.keyInYN(`Deseja rolar seus atributos: `);
console.log(``); //Apenas para pular espaço no terminal.

let salvarAtributo = null;

switch (querRolar) {
	case true: {
		console.log(" - ATRIBUTOS PADROES - ");

		for (const atributo in atributoPersonagem.atributos) {
			console.log(` ${atributo}: ${atributoPersonagem.atributos[atributo]}`);
		}

		console.log(``);

		for (const atributo in atributoPersonagem.atributos) {
			const dado1 = Math.floor(Math.random() * 6) + 1;
			const dado2 = Math.floor(Math.random() * 6) + 1;
			const dado3 = Math.floor(Math.random() * 6) + 1;
			const dado4 = Math.floor(Math.random() * 6) + 1;

			const dados = [dado1, dado2, dado3, dado4];

			const menorValorDados = Math.min(...dados);

			const dadoSoma = dado1 + dado2 + dado3 + dado4 - menorValorDados;

			salvarAtributo = atributoPersonagem.atributos[atributo] + dadoSoma;

			atributoPersonagem.atributos[atributo] = dadoSoma;

			console.log(salvarAtributo);
		}

		console.log(`
- - - ATRIBUTOS ATUALIZADOS - - -`);
		console.table(atributoPersonagem.atributos);

		console.log(``);
		console.log(`
- - - ESCOLHA DE CLASSE - - -`);
		const escolherClasse = [
			"1 - CURTA DISTANCIA | Prioriza: Forca, Constituicao",
			"2 - LONGA DISTANCIA | Prioriza: Destreza",
			"4 - VERSATIL | Prioriza: Destreza, Carisma, Inteligencia",
			"5 - SUPORTE | Prioriza: Sabedoria, Carisma, Inteligencia",
		];

		const ehQualClasse = readlineSync.keyInSelect(
			escolherClasse,
			`Escolha umas das opcoes acima para prosseguir: `,
		);

		switch (ehQualClasse) {
			case -1:
				console.log(`Obrigado por chegar ate aqui!`);
				break;
			case 0: {
				const escolherClasse = [
					"1 - Guerreiro | Foco: Forca e Constituicao",
					"2 - Barbaro | Foco: Forca e Constituicao",
					"3 - Paladino | Foco: Forca e Carisma",
				];

				const qualClasse = readlineSync.keyInSelect(
					escolherClasse,
					`Escolha a classe que desejar: `,
				);

				let salvarClasse = null;

				if (qualClasse === 0) {
					salvarClasse = "Guerreiro";
					console.log(`Classe escolhida: Guerreiro`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				} else if (qualClasse === 1) {
					salvarClasse = "Barbaro";
					console.log(`Classe escolhida: Barbaro`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				} else if (qualClasse === 2) {
					salvarClasse = "Paladino";
					console.log(`Classe escolhida: Paladino`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				}

				break;
			}
			case 1: {
				const escolherClasse = [
					"1 - Ranger | Foco: Destreza e Sabedoria",
					"2 - Arqueiro | Foco: Destreza",
				];

				const qualClasse = readlineSync.keyInSelect(
					escolherClasse,
					`Escolha a classe que desejar: `,
				);

				let salvarClasse = null;

				if (qualClasse === 0) {
					salvarClasse = "Ranger";
					console.log(`Classe escolhida: Ranger`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				} else if (qualClasse === 1) {
					salvarClasse = "Arqueiro";
					console.log(`Classe escolhida: Arqueiro`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				}

				break;
			}
			case 2: {
				const escolherClasse = [
					"1 - Ladino | Foco: Destreza",
					"2 - Bardo | Foco: Carisma",
					"3 - Bruxo | Foco: Carisma",
				];

				const qualClasse = readlineSync.keyInSelect(
					escolherClasse,
					`Escolha a classe que desejar: `,
				);

				let salvarClasse = null;

				if (qualClasse === 0) {
					salvarClasse = "Ladino";
					console.log(`Classe escolhida: Ladino`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				} else if (qualClasse === 1) {
					salvarClasse = "Bardo";
					console.log(`Classe escolhida: Bardo`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				} else if (qualClasse === 2) {
					salvarClasse = "Bruxo";
					console.log(`Classe escolhida: Bruxo`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				}

				break;
			}

			case 3: {
				const escolherClasse = [
					"1 - Clerigo | Foco: Sabedoria",
					"2 - Druida | Foco: Sabedoria",
					"3 - Mago | Foco: Inteligencia",
				];

				const qualClasse = readlineSync.keyInSelect(
					escolherClasse,
					`Escolha a classe que desejar: `,
				);

				let salvarClasse = null;

				if (qualClasse === 0) {
					salvarClasse = "Clerigo";
					console.log(`Classe escolhida: Clerigo`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				} else if (qualClasse === 1) {
					salvarClasse = "Druida";
					console.log(`Classe escolhida: Druida`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				} else if (qualClasse === 2) {
					salvarClasse = "Mago";
					console.log(`Classe escolhida: Mago`);
					console.log(``);
					console.table(atributoPersonagem.atributos);
					atributoPersonagem.classe = salvarClasse;
				}

				break;
			}
			default:
				console.log(`Nao sei como voce chegou aqui mas, parabens!`);
				break;
		}
		break;
	}

	case false:
		console.log(`
Ate mais! `);
		break;

	default:
		console.log(`Escolha Invalida!  `);
		break;
}
