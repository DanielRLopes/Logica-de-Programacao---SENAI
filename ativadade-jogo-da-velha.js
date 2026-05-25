const readlineSync = require("readline-sync");

const jogoDaVelha = [
	["-", "-", "-"],
	["-", "-", "-"],
	["-", "-", "-"],
];

console.table(jogoDaVelha);

const playerUm = "X";
const playerDois = "O";

let i = 0;

while (true) {
	const escolhaLinha = readlineSync.questionInt(
		`Escolha a linha entre (0 e 2): `,
	);
	const escolhaColuna = readlineSync.questionInt(
		`Escolha a coluna entre (0 e 2): `,
	);

	if (
		escolhaColuna < 0 ||
		escolhaColuna > 2 ||
		escolhaLinha < 0 ||
		escolhaLinha > 2
	) {
		console.log(`\nOpcao invalida! Tente novamente.`);
		continue;
	}

	if (jogoDaVelha[escolhaLinha][escolhaColuna] !== "-") {
		console.log(`\nNao e possivel SOBREPOR! Tente novamente. `);
		continue;
	} else {
		if (i % 2 === 0) {
			jogoDaVelha[escolhaLinha][escolhaColuna] = playerUm;
		} else {
			jogoDaVelha[escolhaLinha][escolhaColuna] = playerDois;
		}
		console.table(jogoDaVelha);
	}

	// --- VERIFICAÇÃO DE VENCEDOR (Direto no laço de repetição) ---
	let vencedor = null;

	// 1. Verificar linhas (se há 3 iguais na horizontal)
	for (let r = 0; r < 3; r++) {
		if (
			jogoDaVelha[r][0] !== "-" &&
			jogoDaVelha[r][0] === jogoDaVelha[r][1] &&
			jogoDaVelha[r][1] === jogoDaVelha[r][2]
		) {
			vencedor = jogoDaVelha[r][0];
		}
	}

	// 2. Verificar colunas (se há 3 iguais na vertical)
	for (let c = 0; c < 3; c++) {
		if (
			jogoDaVelha[0][c] !== "-" &&
			jogoDaVelha[0][c] === jogoDaVelha[1][c] &&
			jogoDaVelha[1][c] === jogoDaVelha[2][c]
		) {
			vencedor = jogoDaVelha[0][c];
		}
	}

	// 3. Verificar diagonal principal (superior esquerdo para inferior direito)
	if (
		jogoDaVelha[0][0] !== "-" &&
		jogoDaVelha[0][0] === jogoDaVelha[1][1] &&
		jogoDaVelha[1][1] === jogoDaVelha[2][2]
	) {
		vencedor = jogoDaVelha[0][0];
	}

	// 4. Verificar diagonal secundária (superior direito para inferior esquerdo)
	if (
		jogoDaVelha[0][2] !== "-" &&
		jogoDaVelha[0][2] === jogoDaVelha[1][1] &&
		jogoDaVelha[1][1] === jogoDaVelha[2][0]
	) {
		vencedor = jogoDaVelha[0][2];
	}

	// Se a variável 'vencedor' deixou de ser null, alguém ganhou
	if (vencedor !== null) {
		console.log(`\nParabens! O jogador "${vencedor}" venceu o jogo!`);
		break;
	}

	i++;

	// O jogo possui no máximo 9 turnos (de 0 a 8)
	if (i === 9) {
		console.log(`\nDeu velha! O jogo terminou empatado.`);
		break;
	}
}
