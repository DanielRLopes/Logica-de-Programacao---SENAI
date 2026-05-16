// ============================================================
//   ATIVIDADE 08 – Estruturas de Controle (Switch / Case)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Switch simples com número
// ------------------------------------------------------------
// a) Declare "planeta" com valor 3.
// b) Usando switch/case, exiba o nome do planeta do Sistema Solar
//    correspondente ao número (1 = Mercúrio, 2 = Vênus,
//    3 = Terra, 4 = Marte, 5 = Júpiter, 6 = Saturno,
//    7 = Urano, 8 = Netuno).
// c) No default, exiba: "Planeta não encontrado."

// → Seu código aqui:

const readlineSync = require("readline-sync");

let planeta = 3;

switch (planeta) {
	case 1:
		console.log(`Mercurio`);
		break;
	case 2:
		console.log(`Venus`);
		break;
	case 3:
		console.log(`Terra`);
		break;
	case 4:
		console.log(`Marte`);
		break;
	case 5:
		console.log(`Jupiter`);
		break;
	case 6:
		console.log(`Saturno`);
		break;
	case 7:
		console.log(`Urano`);
		break;
	case 8:
		console.log(`Netuno`);
		break;
	default:
		console.log(`Planeta nao encontrado!`);
		break;
}

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Switch com string
// ------------------------------------------------------------
// a) Declare "direcao" com valor "norte".
// b) Usando switch/case, exiba a mensagem correspondente:
//    - "norte"  → "Seguindo para o Norte ↑"
//    - "sul"    → "Seguindo para o Sul ↓"
//    - "leste"  → "Seguindo para o Leste →"
//    - "oeste"  → "Seguindo para o Oeste ←"
//    - default  → "Direção desconhecida."

// → Seu código aqui:

let direcao = "Norte";

switch (direcao) {
	case "Norte":
		console.log(`Seguindo para o Norte! `);
		break;
	case "Sul":
		console.log(`Seguindo para o Sul!`);
		break;
	case "Leste":
		console.log(`Seguindo para o Leste!`);
		break;
	case "Oeste":
		console.log(`Seguindo para o Oeste!`);
		break;
	default:
		console.log(`Direcao desconhecida.`);
		break;
}
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Fall-through(cascata) intencional
// ------------------------------------------------------------
// a) Declare "tipoVeiculo" com valor "moto".
// b) Usando fall-through (cases sem break), classifique:
//    - "bicicleta" ou "moto" ou "carro"  → "Veículo leve"
//    - "caminhao" ou "onibus"             → "Veículo pesado"
//    - default                            → "Tipo desconhecido."
// c) Exiba a categoria com template literal.

// → Seu código aqui:

let tipoVeiculo = "Moto";

switch (tipoVeiculo) {
	case "Moto":
	case "Bicicleta":
	case "Carro":
		console.log(`Veiculo leve`);
		break;
	case "Caminhao":
	case "Onibus":
		console.log(`Veiculo pesado`);
		break;
	default:
		console.log(`Tipo desconhecido.`);
		break;
}

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Switch com input (número)
// ------------------------------------------------------------
// a) Exiba o menu de turnos para o usuário:
//    1 – Manhã | 2 – Tarde | 3 – Noite
// b) Peça ao usuário que escolha um turno (questionInt()).
// c) Com switch/case, exiba a saudação correspondente:
//    - 1 → "Bom dia! Turno da manhã."
//    - 2 → "Boa tarde! Turno da tarde."
//    - 3 → "Boa noite! Turno da noite."
//    - default → "Opção inválida."

// → Seu código aqui:

/*Decidi usar a funcao keyInSelect Pois visualmente para selecionar BLOQUEIA campos indesejados;*/
const visualTurnos = ["1- Manha", "2- Tarde", "3- Noite"];

let escolhaTurno = readlineSync.keyInSelect(visualTurnos, `Escolha o Turno:`);

switch (escolhaTurno) {
	case 0:
		console.log(`Bom dia! Turno da manha.`);
		break;
	case 1:
		console.log(`Boa tarde! Turno da tarde.`);
		break;
	case 2:
		console.log(`Boa noite! Turno da noite!`);
		break;
	case -1 /*OPCAO 0 DO keyInSelect CAIRIA PARA O DEFAULT pois OPCAO 0 de SAIR é -1 o indice do keyInSelect do array */:
		break;
	default:
		console.log(`Opcao invalida`);
		break;
}
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Switch com input (string)
// ------------------------------------------------------------
// a) Pergunte ao usuário qual é a estação do ano favorita dele
//    (question()): "verao", "outono", "inverno" ou "primavera".
// b) Com switch/case, exiba uma descrição curta da estação:
//    - "verao"     → "Dias quentes e férias!"
//    - "outono"    → "Folhas caindo e temperaturas amenas."
//    - "inverno"   → "Frio, cobertores e chocolate quente."
//    - "primavera" → "Flores, calor e renovação."
//    - default     → "Estação não reconhecida."

// → Seu código aqui:

const estacoes = ["Verao", "Outuno", "Inverno", "Primavera"];

let escolherEstacao = readlineSync.keyInSelect(
	estacoes,
	`Qual sua estacao favorita: `,
);

switch (escolherEstacao) {
	case 0:
		console.log(`Dias quentes e ferias!`);
		break;
	case 1:
		console.log(`Folhas caindo e temperatura amenas.`);
		break;
	case 2:
		console.log(`Frio, cobertores e chocolate quente.`);
		break;
	case 3:
		console.log(`Flores, calor e renovaocao.`);
		break;
	case -1:
		break;
	default:
		console.log(`Estacao nao reconhecida`);
		break;
}
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Dias da semana com fall-through
// ------------------------------------------------------------
// a) Pergunte ao usuário um número de 1 a 7 (questionInt()).
// b) Usando fall-through intencional:
//    - 1 a 5  → exiba: "Dia útil"
//    - 6 ou 7 → exiba: "Final de semana"
//    - default → "Número inválido"

// → Seu código aqui:

let numberRandom = readlineSync.questionInt(`Insira um mumero de 1 a 7: `);

switch (numberRandom) {
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		console.log(`Dia util!`);
		break;
	case 6:
	case 7:
		console.log(`Final de semana. `);
		break;

	default:
		console.log(`Numero invalido!`);
		break;
}

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 7 – Switch com objeto
// ------------------------------------------------------------
// a) Crie um objeto "produto" com as propriedades, perguntando ao usuário:
//    - nome
//    - categoria: número de 1 a 4 | 1 – Eletrônico | 2 – Vestuário | 3 – Alimento | 4 – Livro
//    - preco
// b) Com switch/case na categoria:
//    - 1 → adicione ao objeto: descricaoCategoria: "Eletrônico" e garantia: "12 meses"
//    - 2 → adicione ao objeto: descricaoCategoria: "Vestuário" e garantia: "Troca em 30 dias"
//    - 3 → adicione ao objeto: descricaoCategoria: "Alimento" e garantia: "Ver validade"
//    - 4 → adicione ao objeto: descricaoCategoria: "Livro" e garantia: "Sem garantia"
//    - default → adicione ao objeto: descricaoCategoria: "Categoria invalida" e garantia: "Sem garantia". Também exiba no console: "Categoria inválida."
// c) Exiba o objeto com console.table().

// → Seu código aqui:

const categoriaProduto = [
	"1 - Eletronico",
	"2 - Vestuario",
	"3 - Alimento",
	"4 - Livro",
];

const produto = {
	nome: readlineSync.question("Nome:"),
	categoria: readlineSync.keyInSelect(
		categoriaProduto,
		`Escolha a categoria: `,
	),
	preco: readlineSync.questionFloat(`Insira o preco desejavel:`),
};

switch (produto.categoria) {
	case 0:
		produto.descricaoCategoria = "Eletronico";
		produto.garantia = "12 meses";
		break;
	case 1:
		produto.descricaoCategoria = "Vestuario";
		produto.garantia = "Troca em 30 dias";
		break;
	case 2:
		produto.descricaoCategoria = "Alimento";
		produto.garantia = "Ver validade";
		break;
	case 3:
		produto.descricaoCategoria = "Livro";
		produto.garantia = "Sem garantia";
		break;
	case -1:
		break;
	default:
		produto.descricaoCategoria = "Categoria invalida";
		produto.garantia = "Sem garantia";
		console.log(`Categoria invalida`);
		break;
}

console.table(produto);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 8 – Conversor de nota para conceito e cor
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome
//    - Nota de 0 a 10 (questionInt()).
// b) Descubra o conceito de acordo com a nota, utilizando switch/case e adicione ao objeto o conceito e a mensagem correspondente.
//    - 10 ou 9  → conceito: "A", mensagem: "Excelente!"
//    - 8 ou 7   → conceito: "B", mensagem: "Muito bom!"
//    - 6 ou 5   → conceito: "C", mensagem: "Suficiente."
//    - 4 ou 3   → conceito: "D", mensagem: "Em recuperação."
//    - 2, 1 ou 0 → conceito: "F", mensagem: "Reprovado."
//    - default  → "Nota inválida."
// c) Exiba: "<nome> – Nota: <nota> | Conceito: <conceito> | <mensagem>"

// → Seu código aqui:

const nome = readlineSync.question(`Nome de usuario: `);
const nota = readlineSync.questionInt(`Insira nota (0 a 10): `);

const usuario = {
	nome: nome,
	nota: nota,
};

switch (usuario.nota) {
	case 10:
	case 9:
		usuario.conceito = "A";
		usuario.mensagem = "Excelente!";
		break;
	case 8:
	case 7:
		usuario.conceito = "B";
		usuario.mensagem = "Muito Bom!";
		break;
	case 6:
	case 5:
		usuario.conceito = "C";
		usuario.mensagem = "Suficiente.";
		break;
	case 4:
	case 3:
		usuario.conceito = "D";
		usuario.mensagem = "Em recuperacao.";
		break;
	case 2:
	case 1:
	case 0:
		usuario.conceito = "F";
		usuario.mensagem = "Reprovado.";
		break;
	default:
		console.log(`Nota invalida`);
		break;
}

console.log(
	`${usuario.nome} - Nota: ${usuario.nota} | Conceito: ${usuario.conceito} | Mensagem: ${usuario.mensagem}`,
);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 9 – Calculadora com switch
// ------------------------------------------------------------
// a) Pergunte ao usuário dois números (questionFloat()).
// b) Exiba o menu de operações:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão | 5 – Resto
// c) Peça ao usuário que escolha uma operação (questionInt()).
// d) Com switch/case, calcule e exiba o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Se a operação for 4 (divisão) e o divisor for 0, exiba:
//    "Erro: divisão por zero não é permitida."
//    No default, exiba: "Operação inválida."

// → Seu código aqui:

const n1 = readlineSync.questionFloat(`Insira o 1 numero: `);

const n2 = readlineSync.questionFloat(`Insira o 2 numero: `);

const menuOperacoes = [
	"1 - Soma",
	"2 - Subtracao",
	"3 - Multiplicacao",
	"4 - Divisao",
];

const indiceOperacao = readlineSync.keyInSelect(
	menuOperacoes,
	`Escolha a operacao: `,
);

switch (indiceOperacao) {
	case 0:
		console.log(`${n1} + ${n2} = Resultado: ${n1 + n2}`);
		break;
	case 1:
		console.log(`${n1} - ${n2} = Resultado: ${n1 - n2}`);
		break;
	case 2:
		console.log(`${n1} * ${n2} = Resultado: ${n1 * n2}`);
		break;
	case 3:
		if (n2 === 0) {
			console.log(`Erro: divisão por zero não é permitida.`);
		} else {
			console.log(`${n1} / ${n2} = Resultado: ${n1 / n2}`);
		}
		break;
	case -1:
		console.log(`Operacao Cancelada!`);
		break;

	default:
		console.log(`Operacao invalida. `);
		break;
}

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de loja completo
// ------------------------------------------------------------
// a) Crie um objeto "loja" com:
//    - nome: "TechShop"
//    - saldo: 0
// b) Exiba o menu:
//    1 – Ver produtos | 2 – Comprar | 3 – Ver carrinho | 4 – Sair
// c) Peça ao usuário uma opção (questionInt()).
// d) Com switch/case:
//    - 1 → exiba uma lista fixa de 3 produtos com preços usando console.table()
//          (ex: [{ produto: "Mouse", preco: 89.90 }, ...])
//    - 2 → pergunte qual produto e o preço (question + questionFloat),
//          adicione ao saldo e exiba: "Produto adicionado ao carrinho."
//    - 3 → exiba: "Total no carrinho: R$ <saldo>"
//    - 4 → exiba: "Obrigado por visitar a TechShop!"
//    - default → exiba: "Opção inválida."

// → Seu código aqui:

const _loja = {
	nome: "TechShop",
	saldo: 0,
};

const menuOpcoes = [
	"1 - Ver Produtos",
	"2 - Comprar",
	"3 - Ver Carrinho",
	"4 - Sair",
];

const indiceMenu = readlineSync.keyInSelect(
	menuOpcoes,
	`Escolha alguma opcao do menu: `,
);

switch (indiceMenu) {
	case 0: {
		const listaFixa = [
			{ produto: "Mouse", preco: 89.0 },
			{ produto: "Teclado", preco: 150 },
			{ produto: "Monitor", preco: 1250 },
		];
		console.table(listaFixa);
		break;
	}
	case 1: {
		const _escolhaProduto = readlineSync.question(`Qual produto desejado: `);
		const _preco = readlineSync.questionFloat(
			`Qual valor considera no produto: `,
		);
		console.log(`Pronto adicionado ao carrinho!`);
		break;
	}
	case 2:
		console.log(`Total no carrinho: R$${preco}`);
		break;
	case 3:
		console.log(`Obrigado por visitar a TechShop!`);
		break;
	case -1:
		console.log(`Operacao Cancelada!`);
		break;

	default:
		console.log(`Opcao Invalida!`);
		break;
}

console.log("_______________________________");
