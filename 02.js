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
    meuArray.pop(); meuArray.shift();
console.log(meuArray)
    meuArray.unshift(20); meuArray.push(undefined)