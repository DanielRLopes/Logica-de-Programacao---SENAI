/* 
Desafio 6: Validador de Acesso de Segurança
**Objetivo:** Praticar Operadores Lógicos complexos (`&&`, `||`, `!`).

1. Peça ao usuário: **Idade**, **Tem Autorização (s/n)** e **É VIP (s/n)**.
2. Regra de Entrada: O usuário só pode entrar se:
    - (For maior de 18 anos **OU** tiver autorização dos pais) **E** o local não estiver lotado (assuma que lotação é `false` fixo por enquanto).
3. **Desafio:** Se ele for **VIP**, ele entra independente da idade ou autorização.
4. Exiba: "Acesso Permitido" ou "Acesso Negado".
5. **Nomes Semânticos:** Use `podeEntrar`, `ehMaiorDeIdade`, `temAutorizacao`.

*/

let readlineSync = require("readline-sync");

const idadeUsuario = readlineSync.questionInt(`
    Idade: `);
const ehMaiorDeIdade = idadeUsuario >= 18;

const temAutorizacao = readlineSync.keyInYN(`Tem autorizacao: `);

const usuarioEVip = readlineSync.keyInYN(`E VIP?`);

const estahLotado = false;
const podeEntrar =
  ((ehMaiorDeIdade || temAutorizacao) && !estahLotado) || usuarioEVip;

/* 
Aqui temos 2 caminhos exemplo via IF:
if (podeEntrar) {
    console.log("Acesso Liberado")
} else {
    console.log("Acesso Negado")
    }
*/

console.log(`
    ${podeEntrar} ? "Acesso Permitido" : "Acesso Negado")
    `);
