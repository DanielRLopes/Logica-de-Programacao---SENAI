const readlineSync = require("readline-sync");

const jogoDaVelha = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];

console.table(jogoDaVelha);

playerUm = "X";
playerDois = "O";

let i = 0;
let vencedor = false;
let marcadorX = "";
let marcadorO = "";
let marcar = [["", "", ""], ["", "", ""], ["", "", ""]];

while (true) {
  const escolhaLinha = readlineSync.questionInt(
    `Escolha a linha entre (0 e 2): `
  );
  const escolhaColuna = readlineSync.questionInt(
    `Escolha a coluna entre (0 e 2): `
  );
  if (
    escolhaColuna < 0 ||
    escolhaColuna > 2 ||
    escolhaLinha < 0 ||
    escolhaLinha > 2
  ) {
    console.log(`
Opcao invalida! Tente novamente.`);
    continue;
  }

  if (jogoDaVelha[escolhaLinha][escolhaColuna] !== "-") {
    console.log(`
Nao e possivel SOBREPOR! Tente novamente. `);
    continue;
  } else {
    if (i % 2 === 0) {
      jogoDaVelha[escolhaLinha][escolhaColuna] = playerUm;
      console.table(jogoDaVelha);
    } else {
      jogoDaVelha[escolhaLinha][escolhaColuna] = playerDois;
      console.table(jogoDaVelha);
    }
  }

  /* - Pegar array vazio; - Identificar String diferente de "-"; Se tiver uma sequencia desse mesmo string = vencedor? */

  for (let i = 0; i < jogoDaVelha.length; i++) {
    for (let j = 0; j < jogoDaVelha[i].length; j++) {
      if (jogoDaVelha[i][j] !== "-") {
        if (jogoDaVelha[i][j] === "X") {
          marcar[i] = jogoDaVelha[i];
          console.log(marcar);
        }
        if (jogoDaVelha[i][j] === "O") {
          marcar[i] = jogoDaVelha[i];
          console.log(marcar);
        }
      }
    }
  }

  i++;
  if (i > 8) {
    console.log(`Jogo da Velha`);
    break;
  }
}
