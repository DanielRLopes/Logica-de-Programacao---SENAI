console.log(`
    - - - ACESSAR E ALTERAR ELEMENTOS DO ARRAY - - -
`);

const frutas = ["maca", "banana", "laranja", "uva"];
console.log(frutas[0], ",", frutas[1]);
frutas[1] = "abacaxi";
console.log(frutas);

console.log(`
    - - - FIM  - - -
`);

console.log(`
    - - - CRIAR ARRAY POR SELEÇÃO - - -
`);

const letras1 = ["a", "b", "c", "d", "e", "f"];
const letras2 = [letras1[0], letras1[2], letras1[5]];
const letras3 = [letras1[4], letras1[5]];
console.log(letras1, ",", letras2, ",", letras3);

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - Batata? - - -
`);

const letrasNovas = ["a", "b", "c", "d", "e", "t"];
let retornoBatata = [
    letrasNovas[1],
    letrasNovas[0],
    letrasNovas[5],
    letrasNovas[0],
    letrasNovas[5],
    letrasNovas[0]
];

console.log(retornoBatata);

console.log(`
    - - - FIM  - - -
`);

console.log(`
    - - - OBJETOS: ACESSAR E ADICIONAR PROPRIEDADES - - -
`);

const pessoa = { nome: "Junin", idade: 22, cidade: "Porto Alegre" };
console.log(pessoa.nome, ",", pessoa.cidade);
pessoa.curso = "Programação";
console.table(pessoa);

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - OBJETOS ANINHADOS E ARRAYS DENTRO DE OBJETO - - -
`);


const perfil = {
    usuario: "Ana",
    dados: { nome: "Ana Julia", idade: 19 },
    interesses: ["Música", "Mapa Mental", "ASSEMBLY"]
};
console.log(perfil.dados.nome, ",", perfil.interesses[1]);
perfil.interesses[0] = "Arte";
console.log(perfil);

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - CRIAR CATÁLOGO: ARRAY DE OBJETOS E OBJETO INDEXADO - - -
`);

const arrayProdutos = [
    {
        id: 0, nome: ("Maça"), preco: 0.50
    },
    {
        id: 1, nome: ("Uva"), preco: 1.50
    },
    {
        id: 2, nome: ("Abacaxi"), preco: 10.50
    }
]

const objetoCatalogo = {
    id: arrayProdutos[0].id, produto: arrayProdutos[0].nome
}
console.log(objetoCatalogo)

console.log(`
    - - - FIM - - -
`)

