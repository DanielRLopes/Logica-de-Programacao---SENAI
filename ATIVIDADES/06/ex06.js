const readlineSync = require("readline-sync")

// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:


console.log("_______________________________");
let oValor0 = true && true
let oValor1 = true && false
let oValor2 = false && true
let oValor3 = false && false
console.log(`
    true && true = ${oValor0}
    true && false = ${oValor1}
    false && true = ${oValor2}
    false && false = ${oValor3}
`)

// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:

console.log("_______________________________");
oValor0 = true || true
oValor1 = true || false
oValor2 = false || true
oValor3 = false || false
console.log(`
    true || true = ${oValor0}
    true || false = ${oValor1}
    false || true = ${oValor2}
    false || false = ${oValor3}
`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:

const sistemasAtivo = true
const modoManutencao = !sistemasAtivo
const lugarVago = false
const lugarOcupado = !lugarVago

console.log(`
    sistemaAtivo = ${sistemasAtivo}
    modoManutencao = ${modoManutencao}
    lugarVago = ${lugarVago}
    lugarOcupado = ${lugarOcupado}
`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:

const usuario = {
    peso: readlineSync.questionFloat("Qual é o seu peso? (kg) "),
    altura: readlineSync.questionFloat("Qual é a sua altura? (m) ")
}

usuario.imc = usuario.peso / (usuario.altura ** 2)
usuario.imcAbaixoDoPeso = usuario.imc < 18.5
usuario.imcNormal = usuario.imc >= 18.5 && usuario.imc <= 24.9
usuario.imcAcimaDoPeso = usuario.imc >= 25 && usuario.imc <= 29.9

console.log(`
    Seu IMC é: ${usuario.imc.toFixed(2)}
`)
console.log(`
    IMC abaixo do peso: ${usuario.imcAbaixoDoPeso}
`)
console.log(`
    IMC normal: ${usuario.imcNormal}
`)
console.log(`
    IMC acima do peso: ${usuario.imcAcimaDoPeso}
`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:

const notaFinal = 4.8
const precisaRecuperacao = notaFinal >= 4 && notaFinal < 6
const reprovado = notaFinal < 4
const precisaDeAjuda = precisaRecuperacao || reprovado

console.log(`
    Nota final: ${notaFinal}
    Precisa de recuperação: ${precisaRecuperacao}
    Reprovado: ${reprovado}
    Precisa de ajuda: ${precisaDeAjuda}
`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:

const temperatura = 38.2
const diagnostico = temperatura >= 37.6 ? "febre detectada" : "temperatura normal"
console.log(`
    Temperatura: ${temperatura} | Diagnostico: ${diagnostico}
`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:

const velocidade = 110
const limiteVelocidade = 100
const statusMulta = velocidade > limiteVelocidade ? "multa aplicada" : "velocidade regular"

console.log(`
    Velocidade: ${velocidade} | Status Multa: ${statusMulta}    
`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:

let usuarioEmprego = readlineSync.keyInYN(`
    Voce e bolsita:`)
const ehEstudante = usuarioEmprego
const usuarioPaga = readlineSync.keyInYN(`
    Voce paga mais de R$ 1000.00 mensais em curso?
    `)
const mensagem = ehEstudante && usuarioPaga ? "Desconto Aplicado" : "Desconto nao aplicado"
console.log(`
    ${mensagem}
`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:

let userAge = readlineSync.questionInt(`
    Insira sua idade:`)
let userTemIngresso = readlineSync.keyInYN(`
    Possui ingresso?
    `)
let userTemClube = readlineSync.keyInYN(`
    Associado do clube?
    `)

const user = {
    idade: userAge,
    temIngresso: userTemIngresso,
    temClube: userTemClube
}

const verificao = {
    podeEntrarNormal: (user.age >= 18 && user.temIngresso) || user.temClube,
    podeEntrarSocio: user.temIngresso && user.temClube,
    precisaAcompanhante: userAge < 18,
    naoPodeEntrar: !user.temIngresso && !user.temClube
}

console.log(`
    ${verificao.podeEntrarNormal || user.podeEntrarSocio ? "Entrada Liberada" : "Entrada Negada"}    
`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:

let userName = readlineSync.question(`
    Insira o Nome do Produto:`)
let quantidadeEstoque = readlineSync.questionInt(`
    Insira Quantidade em Estoque`)
let produtoAtivo = readlineSync.keyInYN(`
    Produto esta ativo no sistema?
    `)

const produto = {
    nome: userName,
    estoque: quantidadeEstoque,
    produtoAtivo: produtoAtivo
}

const verificacao = {
    temEstoque: produto.estoque > 0,
    produtoDisponivel: produto.estoque > 0 && produto.produtoAtivo,
    produtoIndisponivel: produto.estoque <= 0 || !produto.produtoAtivo
}

console.log(`
    Nome do produto: ${produto.nome}
    Quantidade em estoque: ${produto.estoque}
    Produto ativo: ${produto.produtoAtivo}
    Tem estoque: ${verificacao.temEstoque}
    Produto disponível: ${verificacao.produtoDisponivel}
    Produto indisponível: ${verificacao.produtoIndisponivel}
`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:

const userAdm = readlineSync.keyInYN(`
    E administrador? `)
const userLogado = readlineSync.keyInYN(`
    Esta Logado? `)
const userContaAtiva = readlineSync.keyInYN(`
    Conta Ativa? `)

const usuarios = {
    ehAdministrador: userAdm,
    taLogado: userLogado,
    contaTaAtiva: userContaAtiva
}

let verificacoes = {
    acessoSistema: userLogado && userContaAtiva,
    acessoAdmin: userLogado && userContaAtiva && userAdm,
    acessoNegado: !userLogado || !userContaAtiva
}

console.log(`
    Verificacoes, acesso sistema: ${verificacoes.acessoSistema} | acesso administrador: ${verificacoes.acessoAdmin} | acesso negado: ${verificacoes.acessoNegado}    
`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:

const credenciaisSistema = {
    usuario: "admin",
    senha: "1234"
}

const usuarioDigitado = readlineSync.question(`
    Digite seu usuario:`)
const senhaDigitada = readlineSync.question(`
    Insira sua senha:`)

verificacoes = {
    usuarioIncorreto: usuarioDigitado === credenciaisSistema.usuario,
    senhaCorreta: senhaDigitada === credenciaisSistema.senha,
    loginValido: verificacoes.usuarioCorreto && usuarioIncorreto
}

console.log(`
    ${verificacoes.loginValido ? "Login realizado com sucesso" : "Usuario ou Senha incorretos"}
    `)

console.log("_______________________________");