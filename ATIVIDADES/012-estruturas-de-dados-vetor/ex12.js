// ============================================================
//   ATIVIDADE 12 – Estruturas de Dados: Vetor (Array)
// ============================================================

// Dica: Faça os exercícios utilizando funções de array,
//       mas também tente resolver os desafios sem essas funções

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo e exibindo um vetor
// ------------------------------------------------------------
// a) Declare um vetor com 5 cidades de sua escolha.
// b) Exiba a lista de cidades utilizando for().
// c) Exiba a primeira e a última cidade; a última utilizando .length.
// d) Exiba a quantidade total de cidades.

// → Seu código aqui:

const city = ["Jaragua do Sul", "Guaramirin", "Belo Horizonte", "Maconholandia", "Batolandia"]


for (let i = 0; i < city.length; i++) {
    console.log(`${city[i]}`)
}
console.log(``)
console.log(`1° ${city[0]} | Ultima: ${city[4]}
Total de cidades: ${city.length}`)
console.log(``)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Soma e média
// ------------------------------------------------------------
// a) Utilizando o vetor:
const numeros = [12, 7, 25, 3, 18, 9, 31, 14];
// b) Calcule a SOMA de todos os números.
// c) Calcule a MÉDIA (soma / quantidade).
// d) Exiba: "Soma: <soma> | Média: <média>" (use toFixed(2) na média).

// → Seu código aqui:

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

let media = soma / 8
console.log(``)
console.log(`Soma: ${soma} | Media ${media.toFixed(2)}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor
// ------------------------------------------------------------
// a) Utilizando o vetor:
const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];
// b) Encontre a MAIOR e a MENOR temperatura.
// c) Exiba: "Maior: <maior>°C | Menor: <menor>°C"

// → Seu código aqui:
console.log(``)
let maiorTemp = temperaturas[0]
let menorTemp = temperaturas[0]


for (let i = 0; i < temperaturas.length; i++) {
    if (maiorTemp < temperaturas[i]) {
        maiorTemp = temperaturas[i]
    }
    if (menorTemp > temperaturas[i]) {
        menorTemp = temperaturas[i]
    }
}
console.log(``)
console.log(`Maior: ${maiorTemp}°C | Menor: ${menorTemp}°C`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Pares e ímpares
// ------------------------------------------------------------
// a) Utilizando o vetor:
const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];
// b) Conte quantos números são pares e quantos são ímpares.
// c) Crie dois vetores: paresVetor[] e imparesVetor[], e adicione os números em cada um.
// d) Exiba:
//    "Pares (<qtd>): <paresVetor>"
//    "Ímpares (<qtd>): <imparesVetor>"

// → Seu código aqui:

const paresVetor = []
const imparesVetor = []

for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 === 0) {
        paresVetor.push(listaNumeros[i])
    } else {
        imparesVetor.push(listaNumeros[i])
    }
}

for (let i = 0; i < paresVetor.length; i++) {
    console.log(`Par ${i}: ${paresVetor[i]}`)
}

for (let i = 0; i < imparesVetor.length; i++) {
    console.log(`Impar ${i}: ${imparesVetor[i]}`)
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Inversão de vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
const vetorOriginal = ["A", "B", "C", "D", "E"];
// b) Usando for(), crie um novo vetor 'vetorInvertido' com os elementos em ordem reversa.
// c) Exiba ambos os vetores:
//    "Original:  <original>"
//    "Invertido: <invertido>"
// d) Inverta o vetorOriginal, mas utilizando função de array,
//    salve o resultado em vetorInvertido2 e exiba o resultado.

// → Seu código aqui:
console.log(``)
let vetorInvertido = null;
for (let i = 0; i < vetorOriginal.length; i++) {
    vetorInvertido = vetorOriginal.reverse()
}

console.log(`Original: ${vetorOriginal}
Invertido: ${vetorInvertido}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Cadastro dinâmico
// ------------------------------------------------------------
// a) Crie um vetor vazio para produtos;
// b) Pergunte ao usuário quantos produtos deseja cadastrar.
// c) Usando for(), peça o nome de cada produto e adicione ao vetor.
// d) Ao final, também utilizando for() exiba o vetor completo e a mensagem:
//    "<qtd> produtos cadastrados."

// → Seu código aqui:
const readlineSync = require("readline-sync")

const vetor = [];

const produtoCadastro = readlineSync.question(`Quantos produtos deseja cadastrar: `)

let nomeProduto = null;

for (let i = 0; i < produtoCadastro; i++) {
    nomeProduto = readlineSync.question(`Nome do Produto: `)
    vetor.push(nomeProduto)
}

for (let i = 0; i < vetor.length; i++) {
    console.log(`${i} | Produto: ${vetor[i]}`)
}


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Busca em vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"]
// b) Pergunte ao usuário o nome de um aluno.
// c) Usando for e break, verifique se o nome existe na lista.
//    - Se existir: "<nome> está matriculado(a) (índice <i>)."
//    - Se não:     "<nome> não foi encontrado(a)."

// → Seu código aqui:

let nomeAluno = readlineSync.question(`Insira nome de um aluno: `)

for (let i = 0; i < alunos.length; i++) {
    if (nomeAluno === alunos[i]) {
        console.log(`${nomeAluno} esta matriculado(a) ${i}`)
        break;
    } else {
        console.log(`${nomeAluno} nao foi encontrado(a). `)
        break;
    }
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Vetor de objetos
// ------------------------------------------------------------
// a) Utilizando o vetor:
const livros = [
    { titulo: "Dom Casmurro", paginas: 256 },
    { titulo: "O Cortiço", paginas: 304 },
    { titulo: "Memórias Póstumas", paginas: 208 },
    { titulo: "Capitães da Areia", paginas: 280 },
];
// b) Exiba a lista com console.table().
// c) Usando for, calcule:
//    - Total de páginas de todos os livros.
//    - Média de páginas por livro.
// d) Exiba o título do livro com MAIS páginas.

// → Seu código aqui:

console.table(livros)
let totalPaginas = 0;
let mediaPaginaLivro = 0;

for (let i = 0; i < livros.length; i++) {
    totalPaginas += livros[i].paginas
}
console.log(totalPaginas)
for (let i = 0; i < livros.length; i++) {
    totalPaginas = 0
    totalPaginas += livros[i].paginas
    mediaPaginaLivro += totalPaginas / 4
}
console.log(mediaPaginaLivro)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Filtro com push
// ------------------------------------------------------------
// a) Utilizando o vetor:
const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8];
// b) Usando for, separe o vetor acima em dois vetores:
//    - menores[]: pessoas com idade < 18
//    - adultos[]: pessoas com idade >= 18
// c) Exiba:
//    "Menores (<qtd>): <menores>"
//    "Adultos (<qtd>): <adultos>"

// → Seu código aqui:

const menores = []
const adultos = []

for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        menores.push(idades[i])
    } else if (idades[i] >= 18) {
        adultos.push(idades[i])
    }
}

for (let i = 0; i < menores.length; i++) {
    console.log(`Menores ${i}: ${menores[i]}`)
}

for (let i = 0; i < adultos.length; i++) {
    console.log(`Adultos ${i}: ${adultos[i]}`)
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de notas
// ------------------------------------------------------------
// a) Crie um vetor vazio para notas;
// b) Usando do...while e switch, exiba o menu:
//    1 - Adicionar nota
//    2 - Listar notas
//    3 - Estatísticas
//    4 - Remover última
//    5 - Limpar todas
//    0 - Sair
// c) Realize as funções escolhidas até o usuário escolher 0.
// d) Ao sair: "Encerrando. Total de notas registradas: <qtd>"

// → Seu código aqui:


console.log("_______________________________");