// ============================================================
//   TÓPICO 09 – LOOPS (FOR, WHILE, DO...WHILE)
// ============================================================
// Instruções:
// - Leia a teoria com atenção
// - Estude os exemplos
// - Resolva os exercícios no espaço indicado
// - Use apenas loops (sem funções nos exercícios)
// ============================================================

// ============================================================
//   TÓPICO 09 – LOOPS (FOR, WHILE, DO...WHILE)
// ============================================================
// Instruções:
// - Leia a teoria com atenção
// - Estude os exemplos
// - Resolva os exercícios no espaço indicado
// - Use apenas loops (sem funções nos exercícios)
// ============================================================

const readlineSync = require("readline-sync");

// ============================================================
// 📖 TEORIA – LOOPS / ITERAÇÃO
// ============================================================

/*
O QUE É?
--------
Loop é uma estrutura que REPETE um bloco de código várias vezes.
Também chamado de "iteração" ou "repetição".

QUANDO USAR?
------------
✅ Percorrer arrays (listas)
✅ Repetir até atingir uma condição
✅ Contar, somar, acumular valores
✅ Processar cada item de uma coleção

TIPOS DE LOOPS EM JAVASCRIPT:
-----------------------------
1. for - quando sabe QUANTAS vezes repetir
2. while - quando depende de uma CONDIÇÃO
3. do...while - igual while, mas executa PELO MENOS 1 vez
4. for...of - percorre arrays diretamente (mais moderno)
5. for...in - percorre propriedades de objetos
*/

// ============================================================
// 1️⃣ FOR - REPETIÇÃO COM CONTROLE TOTAL
// ============================================================

/*
SINTAXE:
--------
for (inicializacao; condicao; incremento) {
    // código a ser repetido
}

PARTES DO FOR:
--------------
1. inicializacao: cria variável de controle (ex: let i = 0)
2. condicao: enquanto for true, continua (ex: i < 10)
3. incremento: atualiza variável após cada volta (ex: i++)

FLUXO DE EXECUÇÃO:
------------------
1. Executa inicializacao (só uma vez, no início)
2. Verifica condicao
3. Se condicao = true → executa bloco de código
4. Executa incremento
5. Volta para passo 2
6. Se condicao = false → sai do loop

EXEMPLO 1 – Contar de 0 a 4:
----------------------------
for (let i = 0; i < 4; i++) {
    console.log(`i = ${i}`)
}
// Saída: 0, 1, 2, 3

⚠️ POR QUE NÃO CHEGA EM 4?
--------------------------
A condição é i < 4 (menor que 4)
Quando i = 4, a condição é falsa → loop para

EXEMPLO 2 – Percorrer Array:
----------------------------
const cores = ["Vermelho", "Azul", "Verde", "Amarelo"]
for (let i = 0; i < cores.length; i++) {
    console.log(`[${i}] = ${cores[i]}`)
}

💡 POR QUE i < cores.length?
---------------------------
Arrays começam em 0!
Se array tem 4 elementos, índices são: 0, 1, 2, 3
i < 4 garante que não vai tentar acessar índice 4 (não existe)

EXEMPLO 3 – Contar de Trás pra Frente:
--------------------------------------
for (let i = 5; i >= 0; i--) {
    console.log(i)
}
// 5, 4, 3, 2, 1, 0

EXEMPLO 4 – Incremento Personalizado:
-------------------------------------
for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}
// 0, 2, 4, 6, 8, 10

EXEMPLO 5 – Loop Aninhado (for dentro de for):
----------------------------------------------
for (let i = 1; i <= 3; i++) {
    console.log(`Tabuada do ${i}:`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

EXEMPLO 6 – Percorrer Matriz:
-----------------------------
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`matriz[${i}][${j}] = ${matriz[i][j]}`)
    }
}
*/

// ============================================================
// 2️⃣ WHILE - REPETIÇÃO COM CONDIÇÃO
// ============================================================

/*
SINTAXE:
--------
while (condicao) {
    // código a ser repetido
    // ATUALIZE A CONDIÇÃO DENTRO DO LOOP!
}

FLUXO:
------
1. Verifica condicao
2. Se true → executa bloco
3. Volta para passo 1
4. Se false → sai do loop

⚠️ CUIDADO COM LOOP INFINITO!
-----------------------------
Se a condição NUNCA virar false, o loop roda para sempre!
Sempre atualize a variável da condição dentro do while.

EXEMPLO 1 – Contador Simples:
-----------------------------
let contador = 0
while (contador < 5) {
    console.log(`Contador: ${contador}`)
    contador++
}
// 0, 1, 2, 3, 4

EXEMPLO 2 – Percorrer Array:
----------------------------
const frutas = ["Maçã", "Banana", "Uva", "Laranja"]
let indice = 0
while (indice < frutas.length) {
    console.log(frutas[indice])
    indice++
}

EXEMPLO 3 – Somar Até Ultrapassar Valor:
----------------------------------------
let soma = 0
let numero = 1
while (soma <= 15) {
    soma += numero
    console.log(`Adicionado ${numero}, soma = ${soma}`)
    numero++
}

QUANDO USAR WHILE AO INVÉS DE FOR?
----------------------------------
- Quando NÃO sabe quantas vezes vai repetir
- Quando depende de uma condição externa
- Quando espera por algo (input do usuário, resposta de API, etc.)
*/

// ============================================================
// 3️⃣ DO...WHILE - EXECUTA PELO MENOS UMA VEZ
// ============================================================

/*
SINTAXE:
--------
do {
    // código executado
} while (condicao)

DIFERENÇA DO WHILE:
-------------------
- while: verifica ANTES de executar
- do...while: executa UMA vez, depois verifica

FLUXO:
------
1. Executa bloco (pelo menos 1 vez)
2. Verifica condicao
3. Se true → volta para passo 1
4. Se false → sai do loop

EXEMPLO 1 – Menu que Sempre Aparece:
------------------------------------
let opcao
do {
    console.log("=== MENU ===")
    console.log("1 - Opção A")
    console.log("2 - Opção B")
    console.log("0 - Sair")
    opcao = 0
} while (opcao !== 0)

EXEMPLO 2 – Pedir Senha:
------------------------
let senha
let tentativas = 0
do {
    console.log(`Tentativa ${tentativas + 1}`)
    tentativas++
    senha = "1234"
} while (senha !== "1234" && tentativas < 3)

QUANDO USAR DO...WHILE?
-----------------------
- Quando quer garantir que execute pelo menos 1 vez
- Menus interativos
- Validação de input (pede, verifica, pede de novo se errado)
*/

// ============================================================
// 4️⃣ FOR...OF - PERCORRER ARRAYS DIRETAMENTE
// ============================================================

/*
SINTAXE:
--------
for (variavel of array) {
    // usa variavel
}

VANTAGEM:
---------
- Não precisa de índice
- Mais limpo e legível
- Menos propenso a erros

EXEMPLO 1 – Percorrer Array:
----------------------------
const animais = ["Cachorro", "Gato", "Pássaro", "Peixe"]
for (const animal of animais) {
    console.log(animal)
}

EXEMPLO 2 – Com Índice (usando entries):
----------------------------------------
for (const [indice, animal] of animais.entries()) {
    console.log(`[${indice}] = ${animal}`)
}

EXEMPLO 3 – String Também é Iterável:
-------------------------------------
const palavraExemplo = "JavaScript"
for (const letra of palavraExemplo) {
    console.log(letra)
}
*/

// ============================================================
// 🛠️ COMANDOS DE CONTROLE
// ============================================================

/*
BREAK - SAI DO LOOP IMEDIATAMENTE
---------------------------------
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Parou no 5!")
        break
    }
    console.log(i)
}

CONTINUE - PULA PARA PRÓXIMA ITERAÇÃO
-------------------------------------
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Pulou o 2!")
        continue
    }
    console.log(i)
}
// 0, 1, (pula 2), 3, 4
*/

// ============================================================
// 💡 DICAS IMPORTANTES
// ============================================================

/*
1. FOR é melhor quando sabe quantas vezes repetir
2. WHILE é melhor quando depende de condição
3. DO...WHILE garante pelo menos 1 execução
4. FOR...OF é mais limpo para percorrer arrays
5. SEMPRE atualize a condição no while (evita loop infinito)
6. Use break para sair antecipadamente
7. Use continue para pular iterações
8. Arrays começam em 0! i < array.length, não i <= array.length

⚡ QUAL USAR?
------------
Percorrer array → for...of (mais limpo) ou for tradicional
Repetir N vezes → for
Repetir até condição → while
Executar 1 vez e verificar → do...while
*/

// ------------------------------------------------------------
// EXERCÍCIO 1 – Contar de 1 a 10
// ------------------------------------------------------------
// Use um loop FOR para imprimir números de 1 a 10

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem Regressiva
// ------------------------------------------------------------
// Use FOR para contar de 10 até 0
// Imprima cada número

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Somar 1 a 100
// ------------------------------------------------------------
// Use FOR para somar todos os números de 1 a 100
// Armazene em variável 'soma' e imprima resultado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Tabuada do 5
// ------------------------------------------------------------
// Use FOR para imprimir tabuada do 5 (5x1 até 5x10)
// Formato: "5 x 1 = 5"

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Percorrer Array de Números
// ------------------------------------------------------------
const numeros = [10, 20, 30, 40, 50];
// Use FOR para imprimir cada número do array

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Imprimir Pares de 0 a 20
// ------------------------------------------------------------
// Use FOR com incremento de 2 em 2
// Imprima: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 7 – Imprimir Ímpares de 1 a 19
// ------------------------------------------------------------
// Use FOR para imprimir apenas números ímpares
// Dica: comece em 1 e incremente de 2 em 2

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 8 – Contar Letras de Palavra
// ------------------------------------------------------------
const palavra = "Programacao";
// Use FOR...OF para contar quantas letras tem
// Imprima cada letra e total no final

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 9 – Somar Elementos de Array
// ------------------------------------------------------------
const valores = [5, 10, 15, 20, 25];
// Use FOR para somar todos elementos
// Imprima total

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 10 – Contar Regressiva com While
// ------------------------------------------------------------
// Use WHILE para contar de 5 até 0
// Imprima "Contando: X" para cada número
// No final imprima "Fim!"

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 11 – Dobrar Valores de Array
// ------------------------------------------------------------
const original = [1, 2, 3, 4, 5];
const dobrado = [];
// Use FOR para criar novo array com valores dobrados
// Imprima array dobrado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 12 – Imprimir Quadrados de 1 a 10
// ------------------------------------------------------------
// Use FOR para imprimir:
// 1² = 1, 2² = 4, 3² = 9, ..., 10² = 100

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 13 – Percorrer Array de Nomes
// ------------------------------------------------------------
const nomes = ["Ana", "Bruno", "Carla", "Daniel", "Eduardo"];
// Use FOR...OF para imprimir cada nome

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 14 – Contar até Usuário Dizer Pare
// ------------------------------------------------------------
// Use DO...WHILE
// Peça ao usuário para digitar algo
// Continue pedindo até digitar "pare"

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 15 – Multiplicar Elementos de Array
// ------------------------------------------------------------
const numerosMult = [2, 3, 4];
// Use FOR para multiplicar todos elementos entre si
// Resultado: 2 * 3 * 4 = 24

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 16 – Imprimir Múltiplos de 3 (1 a 30)
// ------------------------------------------------------------
// Use FOR para imprimir apenas múltiplos de 3
// Dica: use if (i % 3 === 0)

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 17 – Contar Vogais de String
// ------------------------------------------------------------
const texto = "JavaScript é demais";
// Use FOR...OF para contar vogais (a, e, i, o, u)
// Imprima total de vogais

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 18 – Fatorial de 5
// ------------------------------------------------------------
// Use FOR para calcular 5! = 5×4×3×2×1 = 120

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 19 – Inverter Array
// ------------------------------------------------------------
const arrayOriginal = [1, 2, 3, 4, 5];
const arrayInvertido = [];
// Use FOR de trás pra frente para criar array invertido
// Imprima arrayInvertido

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 20 – Sequência Simples
// ------------------------------------------------------------
// Use FOR para imprimir: 1, 3, 5, 7, 9
// (começa em 1, incrementa de 2 em 2)

// → Seu código aqui:

console.log("_______________________________");

// ============================================================
// 📝 EXERCÍCIOS INTERMEDIÁRIOS (30)
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 21 – Tabuada Completa (1 a 10)
// ------------------------------------------------------------
// Use FOR aninhado para imprimir tabuada de 1 a 10
// Formato:
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 10 x 10 = 100

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 22 – Soma dos Pares (1 a 50)
// ------------------------------------------------------------
// Use FOR para somar apenas números pares de 1 a 50
// Imprima total

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 23 – Média de Array
// ------------------------------------------------------------
const notas = [7.5, 8.0, 6.5, 9.0, 7.0];
// Use FOR para calcular média
// Imprima média com 2 casas decimais

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 24 – Maior e Menor de Array
// ------------------------------------------------------------
const numerosArray = [45, 12, 89, 3, 67, 23, 91];
// Use FOR para encontrar maior e menor valor
// Não use Math.max() ou Math.min()
// Imprima ambos

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 25 – Contar Ocorrências
// ------------------------------------------------------------
const numerosOcorr = [1, 5, 3, 5, 7, 5, 9, 1, 5];
const valorProcurado = 5;
// Use FOR para contar quantas vezes 5 aparece
// Imprima contagem

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 26 – Pirâmide de Números
// ------------------------------------------------------------
// Use FOR aninhado para imprimir:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 27 – Fibonacci (10 primeiros)
// ------------------------------------------------------------
// Use WHILE para gerar sequência Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// Cada número é soma dos dois anteriores

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 28 – Números Primos (1 a 50)
// ------------------------------------------------------------
// Use FOR aninhado para encontrar primos de 1 a 50
// Primo: divisível apenas por 1 e ele mesmo
// Imprima lista de primos

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 29 – Matriz Identidade 3x3
// ------------------------------------------------------------
// Crie matriz 3x3 onde diagonal principal = 1, resto = 0
// Use FOR aninhado
// Imprima matriz

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 30 – Somar Diagonal de Matriz
// ------------------------------------------------------------
const matrizSoma = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Use FOR para somar diagonal principal (1+5+9 = 15)

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 31 – Buscar em Array
// ------------------------------------------------------------
const buscaArray = [12, 45, 78, 23, 89, 34, 56];
const valorBusca = 23;
// Use FOR para buscar valor
// Se encontrar, imprima índice e valor
// Se não, imprima "Não encontrado"

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 32 – Remover Duplicados
// ------------------------------------------------------------
const duplicados = [1, 2, 2, 3, 1, 4, 3, 5];
const semDuplicados = [];
// Use FOR para criar array sem repetidos
// Imprima resultado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 33 – Contar Consoantes
// ------------------------------------------------------------
const frase = "Hello World";
// Use FOR para contar consoantes
// Ignore espaços e caracteres especiais
// Imprima total

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 34 – Validar Parênteses Balanceados
// ------------------------------------------------------------
const expressao = "(2 + 3) * (4 - 1)";
// Use FOR para contar ( e )
// Se quantidade igual → balanceado
// Imprima "Balanceado" ou "Não balanceado"

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 35 – Inverter String
// ------------------------------------------------------------
const stringOriginal = "JavaScript";
let stringInvertida = "";
// Use FOR de trás pra frente para inverter
// Imprima resultado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 36 – Simular Dado (100 lançamentos)
// ------------------------------------------------------------
// Use FOR para simular 100 lançamentos de dado
// Conte quantas vezes saiu cada número (1-6)
// Imprima resultado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 37 – Juntar Dois Arrays
// ------------------------------------------------------------
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayJunto = [];
// Use FOR para copiar array1 e depois array2 para arrayJunto
// Não use concat() ou spread
// Imprima arrayJunto

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 38 – Contar Palavras
// ------------------------------------------------------------
const textoPalavras = "JavaScript é uma linguagem de programação";
// Use FOR para contar palavras (conte espaços + 1)
// Imprima total

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 39 – Ordenar Array (Bubble Sort)
// ------------------------------------------------------------
const arrayOrdenar = [64, 34, 25, 12, 22, 11, 90];
// Implemente Bubble Sort com FOR aninhado
// Ordene do menor para maior
// Não use .sort()
// Imprima array ordenado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 40 – Segundo Maior Valor
// ------------------------------------------------------------
const arraySegundo = [10, 5, 8, 12, 7, 11];
// Use FOR para encontrar segundo maior valor
// Não use .sort()
// Imprima resultado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 41 – Contar Números em Faixa
// ------------------------------------------------------------
const arrayFaixa = [5, 10, 15, 20, 25, 30, 35];
const minimo = 10;
const maximo = 25;
// Use FOR para contar quantos estão na faixa [min, max]
// Imprima contagem

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 42 – Converter Decimal para Binário
// ------------------------------------------------------------
const decimal = 42;
let binario = "";
// Use WHILE para converter para binário
// Divida por 2 repetidamente, guarde restos
// Imprima binário (de trás pra frente)

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 43 – Triângulo de Asteriscos
// ------------------------------------------------------------
// Use FOR aninhado para imprimir:
// *
// **
// ***
// ****
// *****

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 44 – Losango de Asteriscos
// ------------------------------------------------------------
// Use FOR para imprimir:
//   *
//  ***
// *****
//  ***
//   *

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 45 – Números Perfeitos (1 a 100)
// ------------------------------------------------------------
// Número perfeito = soma dos divisores = próprio número
// Ex: 6 = 1 + 2 + 3
// Use FOR aninhado para encontrar perfeitos de 1 a 100
// Imprima lista

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 46 – Contar Frequência de Caracteres
// ------------------------------------------------------------
const textoFreq = "banana";
// Use FOR para contar frequência de cada letra
// Imprima: a=3, b=1, n=2

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 47 – Máximo Divisor Comum (MDC)
// ------------------------------------------------------------
const numA = 48;
const numB = 18;
// Use WHILE (algoritmo de Euclides) para achar MDC
// Enquanto resto != 0: a = b, b = resto
// Imprima MDC

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 48 – Mínimo Múltiplo Comum (MMC)
// ------------------------------------------------------------
// Use FOR para achar MMC de 4 e 6
// MMC = (a * b) / MDC(a, b)
// Imprima MMC

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 49 – Conjectura de Collatz
// ------------------------------------------------------------
// Comece com número N
// Se par: divide por 2
// Se ímpar: multiplica por 3 e soma 1
// Repita até chegar em 1
// Use WHILE para N = 27
// Imprima sequência e quantos passos

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 50 – Validar CPF (Simplificado)
// ------------------------------------------------------------
const cpf = "12345678901";
// Use FOR para verificar:
// - Tem 11 dígitos
// - Todos são números
// Imprima "Válido" ou "Inválido"

// → Seu código aqui:

console.log("_______________________________");

// ============================================================
// 📝 EXERCÍCIOS DIFÍCEIS (15)
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 51 – Triângulo de Pascal
// ------------------------------------------------------------
// Gere triângulo de Pascal com 5 linhas
// Cada número é soma dos dois acima
// Use FOR aninhado
// Imprima:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 52 – Crivo de Eratóstenes (Primos até 100)
// ------------------------------------------------------------
// Encontre todos primos até 100 usando Crivo
// 1. Crie array de 2 a 100
// 2. Para cada número, marque múltiplos como não-primos
// 3. Imprima apenas não marcados

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 53 – Matriz Espiral
// ------------------------------------------------------------
// Crie matriz 5x5 preenchida em espiral:
//  1  2  3  4  5
// 16 17 18 19  6
// 15 24 25 20  7
// 14 23 22 21  8
// 13 12 11 10  9
// Use FOR com lógica de direção

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 54 – Jogo da Vida (1 Geração)
// ------------------------------------------------------------
// Matriz 5x5 com células vivas (1) e mortas (0)
// Regras:
// - Viva com < 2 vizinhos → morre
// - Viva com 2-3 vizinhos → vive
// - Viva com > 3 vizinhos → morre
// - Morta com 3 vizinhos → nasce
// Calcule próxima geração
// Use FOR aninhado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 55 – Expressão Pós-fixada
// ------------------------------------------------------------
// Avalie: "3 4 + 2 * 7 -" = 7
// Use FOR e pilha (array):
// - Número: empilha
// - Operador: desempilha 2, opera, empilha resultado
// Imprima resultado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 56 – Sudoku Validator
// ------------------------------------------------------------
// Valide se linha, coluna e grade 3x3 têm 1-9 sem repetir
// Matriz 9x9
// Use FOR aninhado
// Imprima "Válido" ou "Inválido"

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 57 – Conversor Romano para Decimal
// ------------------------------------------------------------
const romano = "MCMXCIV";
// I=1, V=5, X=10, L=50, C=100, D=500, M=1000
// Se menor antes de maior: subtrai (IV=4, IX=9)
// Use FOR para converter
// Imprima decimal (1994)

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 58 – Decimal para Romano
// ------------------------------------------------------------
const decimalRomano = 1994;
// Converta para romano: MCMXCIV
// Use FOR com valores ordenados
// Imprima romano

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 59 – Torre de Hanói (Simulação)
// ------------------------------------------------------------
// 3 discos, 3 torres
// Mova todos da torre A para C
// Regra: disco grande não pode ficar em cima de pequeno
// Use recursão ou pilhas com FOR
// Imprima movimentos

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 60 – Quebra-Cabeça 8-Puzzle
// ------------------------------------------------------------
// Matriz 3x3 com números 1-8 e espaço vazio (0)
// Verifique se configuração é solucionável
// Conte inversões (número maior antes de menor)
// Se inversões par → solucionável
// Use FOR aninhado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 61 – Caminho Mínimo (Labirinto Simples)
// ------------------------------------------------------------
const labirinto = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
];
// 0 = caminho, 1 = parede
// Encontre caminho de [0,0] até [3,3]
// Use FOR com busca em largura
// Imprima caminho ou "Sem saída"

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 62 – Criptografia César
// ------------------------------------------------------------
const textoCesar = "OLA MUNDO";
const deslocamento = 3;
// Desloque cada letra 3 posições no alfabeto
// A→D, B→E, ..., X→A, Y→B, Z→C
// Use FOR com char codes
// Imprima criptografado

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 63 – Descriptografar César
// ------------------------------------------------------------
const textoCriptografado = "ROD PXQGR";
// Reverta deslocamento de 3 posições
// Use FOR
// Imprima original

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 64 – Sequência de Granville
// ------------------------------------------------------------
// Cada termo = soma dos anteriores + posição
// 1, 2, 5, 11, 23, 47...
// Gere 15 termos com FOR
// Imprima sequência

// → Seu código aqui:

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 65 – Multiplicação Russa
// ------------------------------------------------------------
// Multiplique 23 × 17 sem usar *
// Dobre um, divida outro por 2
// Some quando divisor for ímpar
// Use WHILE
// Imprima resultado

// → Seu código aqui:

console.log("_______________________________");

// ============================================================
// 💡 DICAS FINAIS
// ============================================================

/*
1. FOR é rei quando sabe quantas vezes repetir
2. WHILE é melhor para condições dinâmicas
3. DO...WHILE garante execução mínima
4. FOR...OF é mais limpo para arrays
5. Break sai do loop, continue pula iteração
6. Cuidado com off-by-one (i < length, não i <= length)
7. Arrays começam em 0!
8. Loop aninhado = O(n²) - cuidado com performance

PRÓXIMOS TÓPICOS:
- Arrow Functions
- Métodos de Array (map, filter, reduce)
- Async/Await
- React! 🚀
*/
