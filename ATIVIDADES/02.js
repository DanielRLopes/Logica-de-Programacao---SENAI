console.log(`
    - - - CRIANDO E ACESSANDO ARRAYS - - -
`);

let cores = ["Amarelo", "Vermelho", "Azul", "Roxo"];

console.log(`
${cores[0]} , ${cores[3]}
`);

console.log(`
    - - - MÉTODOS BÁSICOS - - -
`);
cores.push("Branco");
cores.shift(); //   shift+() para remover do início
console.log(`
${cores} 
${cores.length}
`);

console.log(`
    - - - NÚMEROS - - -
`);

const Numbers = [0, 1, 2, 3, 4];

console.log(`${Numbers} : ${Numbers.length}`);

console.log(`
    - - - TODOS OS TIPOS - - -
`);

let todoTipo = ["Verdade", 777, null, true, undefined];
console.log(`${todoTipo} : ${todoTipo.length}`);

console.log(`
    - - - MUDANDO A LISTA - - -
`);

const meuArray = [20, 21, "Kael", "Zaozao", true, false, null, undefined];
console.log(meuArray);
meuArray.pop();
meuArray.shift();
console.log(meuArray);
meuArray.unshift(20);
meuArray.push(undefined);

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - IndexOf, Includes - - -
`);

const nomes = ["Ana", "Bruno", "Carolina", "Daniel", "Eduardo"];
console.log(nomes.indexOf("Carolina")); // Procura o valor e te entrega a POSIÇÃO do valor
console.log(nomes.includes("Francisco")); // INCLUDES procura o valor e retorna TRUE se achou e FALSE se não existe

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - SLICE , CONCAT - - -
`);

const letras1 = ["a", "b", "c", "d", "e"];
const letras2 = ["f", "g"];
const CONCAT = letras1.concat(letras2)
console.log("Resultado do CONCAT:", CONCAT);  // Pega o array e junta com outro array
const SLICE = (CONCAT.slice(1, 4)) // É usado para extrair uma cópia de uma parte de um array ou string, sem modificar o original.
console.log(SLICE)

console.log(`
    - - - FIM - - -
`)

console.log(`
    - - - ARRAYS ANINHADOS - - -
`)

const arrMatriz = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]
console.log(arrMatriz)
const arrMatrizPLana = arrMatriz.flat()
console.log(arrMatrizPLana)