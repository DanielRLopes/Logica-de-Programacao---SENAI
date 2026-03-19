/*
Desafio 3: Calculadora de IMC com Lógica de Decisão
**Objetivo:** Praticar condicionais e legibilidade.

- Peça o **peso** e a **altura**.
- Calcule o IMC: `peso / (altura * altura)`.
- Use `if / else if / else` para classificar:
    - Menor que 18.5: "Abaixo do peso"
    - Entre 18.5 e 24.9: "Peso normal"
    - Maior ou igual a 25: "Sobrepeso"
- **Boas Práticas:** Use nomes claros para as variáveis, como `pesoUsuario`, `alturaUsuario` e `imcCalculado`.
*/

let readlineSync = require("readline-sync");
const pesoUsuario = readlineSync.questionFloat(`
    Digite seu peso:`);
const alturaUsuario = readlineSync.questionFloat(`
    Digite sua altura:`);
const imcCalculado = pesoUsuario / (alturaUsuario * alturaUsuario);

if (imcCalculado < 18.5) {
  console.log(`
        Abaixo do peso.`);
} else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
  console.log(`
        Peso normal.`);
} else {
  console.log(`
        Sobrepeso.
        `);
}
