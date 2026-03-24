let readlineSync = require("readline-sync");
/*
console.log(`
    - - - ATIVIDADE 01 - - -
`);

console.log(`
    LOG: Iniciando programa...
`);

console.info(`
    INFO: A atividade atual consiste em explorar os métodos do console...
`);

console.warn(`
    WARN: Sempre que quiser iniciar um programa use node + nome do arquivo
`);

console.error(`
    ERRO: Error object
`);

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - ATIVIDADE 02 SAUDAÇÃO PERSONALIZADA - - -
`);

const usuarioNome = readlineSync.question(`
    Digite seu nome:`);

const usuarioIdade = readlineSync.questionInt(`
    Digite sua idade:`);

console.log(`
    Olá, ${usuarioNome}! Você tem ${usuarioIdade} anos.
    `);

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - ATIVIDADE 03 FICHA PESSOAL - - -
`);

let usuarioNomeNovo = readlineSync.question(`Digite seu nome:`);
let usuarioIdadeNovo = readlineSync.questionInt(`Digite sua idade:`);
const usuarioCidade = readlineSync.question(`Digite a cidade em que vive: `);
const usuarioFicha = {
  nome: usuarioNomeNovo,
  idade: usuarioIdadeNovo,
  cidade: usuarioCidade
};

console.table(usuarioFicha);

console.log(`
    - - - FIM - --
`);

console.log(`
    - - - ATIVIDADE 04 PERGUNTAS DE SIM OU NAO - - -
`);

const perguntaPersonalizada01 = readlineSync.keyInYN(`
    Voce gosta de acai?`);
const perguntaPersonalizada02 = readlineSync.keyInYN(`
    Voce gosta de programar?`);

console.log(`
    Pergunta 1: ${perguntaPersonalizada01}
    Pergunta 2: ${perguntaPersonalizada02}
`);

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - ATIVIDADE 05 LISTA DE FAVORITOS - - -
`);

const usuarioComidaFavoritaPrimeira = readlineSync.question(`
    Qual sua primeira comida favorita?`);
const usuarioComidaFavoritaSegunda = readlineSync.question(`
    Qual sua segunda comida favorita?`);
const usuarioComidaFavoritaTerceira = readlineSync.question(`
    Qual sua terceira comida favorita?`);

const arrComidasFavoritas = [];
arrComidasFavoritas.push(
  usuarioComidaFavoritaPrimeira,
  usuarioComidaFavoritaSegunda,
  usuarioComidaFavoritaTerceira
);

console.table(arrComidasFavoritas);

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - ATIVIDADE 06 APRESENTAÇÃO COMPLETA - - -
`);

let nomeUsuario = readlineSync.question(`
    Seu nome:`);
let profissaoUsuario = readlineSync.question(`
    Sua profissao:`);
let cidadeUsuario = readlineSync.question(`
    Sua cidade:`);

const objetoCadastroPessoal = {
  nome: nomeUsuario,
  profissao: profissaoUsuario,
  cidade: cidadeUsuario
};

console.log(`
    Me chamo ${objetoCadastroPessoal.nome}. Profissao: ${objetoCadastroPessoal.profissao} e moro na cidade de ${objetoCadastroPessoal.cidade}
`);

console.table(objetoCadastroPessoal);

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - ATIVIDADE 07 LISTA DE OBJETOS - - -
`);

let ruaUsuario;
let ruaNumero;

nomeUsuario = readlineSync.question(`
    Digite seu nome:`);
usuarioIdadeNovo = readlineSync.questionInt(`
    Digite sua idade: `);
cidadeUsuario = readlineSync.question(`
    Qual sua cidade:`);
ruaUsuario = readlineSync.question(`
    Digite sua rua:`);
ruaNumero = readlineSync.questionInt(`
    Numero da sua rua:`);

const usuarioFicticios01 = {
  nome: nomeUsuario,
  idade: usuarioIdadeNovo,
  endereco: {
    cidade: cidadeUsuario,
    rua: ruaUsuario,
    numeroRua: ruaNumero
  }
};

nomeUsuario = readlineSync.question(`
    Digite seu nome:`);
usuarioIdadeNovo = readlineSync.questionInt(`
    Digite sua idade: `);
cidadeUsuario = readlineSync.question(`
    Qual sua cidade:`);
ruaUsuario = readlineSync.question(`
    Digite sua rua:`);
ruaNumero = readlineSync.questionInt(`
    Numero da sua rua:`);

const usuarioFicticios02 = {
  nome: nomeUsuario,
  idade: usuarioIdadeNovo,
  endereco: {
    cidade: cidadeUsuario,
    rua: ruaUsuario,
    numeroRua: ruaNumero
  }
};

nomeUsuario = readlineSync.question(`
    Digite seu nome:`);
usuarioIdadeNovo = readlineSync.questionInt(`
    Digite sua idade: `);
cidadeUsuario = readlineSync.question(`
    Qual sua cidade:`);
ruaUsuario = readlineSync.question(`
    Digite sua rua:`);
ruaNumero = readlineSync.questionInt(`
    Numero da sua rua:`);

const usuarioFicticios03 = {
  nome: nomeUsuario,
  idade: usuarioIdadeNovo,
  endereco: {
    cidade: cidadeUsuario,
    rua: ruaUsuario,
    numeroRua: ruaNumero
  }
};

const listaUsuarios = [];
listaUsuarios.push(usuarioFicticios01, usuarioFicticios02, usuarioFicticios03);
console.table(listaUsuarios);
console.table([
    { nome: listaUsuario[1].nomeUsuario, info: listaUsuario[1].UsuarioIdadeNovo },
    { nome: listaUsuario[2].nomeUsuario, info: listaUsuario[2].endereco.rua },
    { nome: listaUsuario[0].nomeUsuario, info: listaUsuario[0].endereco.rua }
]);

console.log(`
    - - - FIM - - 
`)

console.log(`
    - - - ATIVIDADE 08 RANKING DE NOTAS - - -
`);

let userName;
let nota1;
let nota2;
let nota3;

userName = readlineSync.question(`
    Digite o seu nome:`);
nota1 = readlineSync.questionFloat(`
    Digite sua primeira nota :`);

nota2 = readlineSync.questionFloat(`
    Digite sua segunda nota :`);

nota3 = readlineSync.questionFloat(`
    Digie sua terceira nota :`);

const turmaObjeto1 = {
  nome: userName,
  notas: [nota1, nota2, nota3],
  nota1: nota1,
  nota2: nota2,
  nota3: nota3
};

userName = readlineSync.question(`
    Digite o seu nome:`);
nota1 = readlineSync.questionFloat(`
    Digite sua primeira nota :`);

nota2 = readlineSync.questionFloat(`
    Digite sua segunda nota :`);

nota3 = readlineSync.questionFloat(`
    Digie sua terceira nota :`);

const turmaObjeto2 = {
  nome: userName,
  notas: [nota1, nota2, nota3],
  nota1: nota1,
  nota2: nota2,
  nota3: nota3
};

userName = readlineSync.question(`
    Digite o seu nome:`);
nota1 = readlineSync.questionFloat(`
    Digite sua primeira nota :`);

nota2 = readlineSync.questionFloat(`
    Digite sua segunda nota :`);

nota3 = readlineSync.questionFloat(`
    Digie sua terceira nota :`);

const turmaObjeto3 = {
  nome: userName,
  notas: [nota1, nota2, nota3],
  nota1: nota1,
  nota2: nota2,
  nota3: nota3
};

const arrTurma = [];
arrTurma.push(turmaObjeto1, turmaObjeto2, turmaObjeto3);
console.table(arrTurma);

console.table([
  { nome: arrTurma[1].nome, nota1: arrTurma[1].nota1 },
  { nome: arrTurma[2].nome, nota2: arrTurma[2].nota2 },
  { nome: arrTurma[0].nome, nota3: arrTurma[0].nota3 }
]);

console.log(`
    - - - FIM - - -
`);

console.log(`
    - - - ATIVIDADE 09 CADASTRO DE PRODUTOS - - -
`);

const nomeStringProduto = readlineSync.question(`
    Nome do produto : `);

const categoriaStringProduto = readlineSync.question(`
    Categoria :  `);

const precoFloatProduto = readlineSync.questionFloat(`
    Preco do produto : `);

const quantidadeIntEstoque = readlineSync.questionInt(`
    Quantide em estoque : `);

const disponivelYNParaVenda = readlineSync.keyInYN(`
    Esta disponivel para venda? `);

const objetoProduto = {
  nome: nomeStringProduto,
  categoria: categoriaStringProduto,
  preco: precoFloatProduto,
  quantidade: quantidadeIntEstoque,
  disponivel: disponivelYNParaVenda
};
console.table(objetoProduto);

console.log(`
    Produto: ${nomeStringProduto} | Categoria: ${categoriaStringProduto} | Estoque: ${quantidadeIntEstoque}
`);
console.log(`
    - - - FIM - - -
`)
*/

console.log(`
    - - - ATIVIDADE 10 FARMACIA - - -
`);

let nomeStringMedicamento = readlineSync.question(`
    Nome Medicamento : `);
let precoFloatMedicamento = readlineSync.questionFloat(`
    Preco Medicamento : `);
let emEstoqueYN = readlineSync.keyInYN(`
    Em estoque? `);

const objetoFarmacia1 = {
  nome: nomeStringMedicamento,
  preco: precoFloatMedicamento,
  estoque: emEstoqueYN
};

nomeStringMedicamento = readlineSync.question(`
    Nome Medicamento : `);
precoFloatMedicamento = readlineSync.questionFloat(`
    Preco Medicamento : `);
emEstoqueYN = readlineSync.keyInYN(`
    Em estoque? `);

const objetoFarmacia2 = {
  nome: nomeStringMedicamento,
  preco: precoFloatMedicamento,
  estoque: emEstoqueYN
};

const estoqueFarmacia = [];
estoqueFarmacia.push(objetoFarmacia1, objetoFarmacia2);
console.table(estoqueFarmacia);
console.table([
  { nome: estoqueFarmacia[1].nome, preco: estoqueFarmacia[1].preco }
]);

const disponivel = estoqueFarmacia[0].emEstoque ? "Sim" : "Não";
console.log(
  `1º Medicamento: ${estoqueFarmacia[0].nome}, Disponível: ${disponivel}`
);
