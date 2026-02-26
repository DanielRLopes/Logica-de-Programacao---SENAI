console.log("--- Exercício 01 ---");
var meu_nome = "Daniel";
var nao_usar_var =
    "Var é uma definição de variável ANTIGA do JavaScript. Não recomendada para versões atuais, var é usada em sistemas legados com versões mais antigas do JavaScript";
let minha_idade = 18;
const ano_nascimento = 2007;

console.log(`
    Meu nome é ${meu_nome}! eu tenho ${minha_idade} anos!
    Meu ano de nascimento é de ${ano_nascimento},
    Porque não usar var? Bem... ${nao_usar_var}
`);

console.log("--- Exercício 02 ---");

const cidade = "Jaraguá do Sul";
const pais = "Brasil";
let fraseMoradia = `Eu moro em ${cidade}, no ${pais}.`;
console.log(fraseMoradia);

console.log("--- Exercício 03 ---");

let maior_de_idade = true;
let tem_cnh = false;

console.log({ maior_de_idade }, typeof maior_de_idade);
console.log({ tem_cnh }, typeof tem_cnh);
console.log("--- Exercício 04 ---");

let apelido;
let endereco_atual = null;
console.log({ apelido }, typeof apelido);
console.log({ endereco_atual }, typeof endereco_atual);
// typeof retorna object pois é uma regra do JavaScript

console.log("--- Exercício 05 ---")
// Number
// String
// boolean
// undefined
// null
// Number

let x_numbers = 42
let x_texto = "texto"
let x_verdadeiro = true
let x_indefinido
let x_null = null
let x_numbers2 = 3.14

console.log({x_numbers}, typeof x_numbers)
console.log({x_texto}, typeof x_texto)
console.log({x_verdadeiro}, typeof x_verdadeiro)
console.log({x_indefinido}, typeof x_indefinido)
console.log({x_numbers2}, typeof x_numbers2)

console.log("--- Exercício 06 ---")
const nome_unico = "Daniel"
let idade = 18
let altura = 1.67 
const cidade_unica = "Jaraguá do Sul"
let estudandoJS = true 

console.log(`
    Olá! Tudo certo? Meu nome é ${nome_unico}! tenho atualmente ${idade} anos, moro em ${cidade_unica}.
    Meço ${altura}m e estou atualmente estudando JavaScript: ${estudandoJS}
`)
