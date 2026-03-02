console.log(`
- - - APRESENTAÇÃO CRIATIVA - - -
`);

const meuNome = "Daniel";
let minhaIdade = 18;
let hobbyFavorito = "Ler, estudar e ciclismo";

console.log(`
Olá meu nome é ${meuNome} tenho atualmente ${minhaIdade} anos! meus hobbys incluem:
${hobbyFavorito} atualmente...
`);

console.log(`
- - - FRASE SOBRE O CLIMA - - -
`);

const minhaCidade = "Jaraguá do Sul";
let temperaturaAtual = 29;

console.log(`
Hoje em ${minhaCidade} está fazendo atualmente ${temperaturaAtual}°C, perfeito para passear.
`);

console.log(`
- - - TIPOS PRIMITIVOS EM FRASES - - -
`);

// Queria usar objeto seria mais organizado :(
const penalItem = "Lápis";
let numbersX = 7;
let saoMeus = false;
let vouDevolver;
let estaoInteiros = null;

console.log(`
No meu penal atualmente tenho muitos ${penalItem}: ${typeof penalItem}
Atualmente o número de lápis que possuo são de ${numbersX}: ${typeof numbersX}
Mas eles não são meus... ${saoMeus}: ${typeof saoMeus}
Mas será que eu irei devolver? ${vouDevolver} , ${typeof vouDevolver}
Mas acho que estão inteiros... ${estaoInteiros} , ${typeof estaoInteiros}
`);

console.log(`
- - - MINI HISTÓRIA - - -
`);

// O professor apenas disse para criar as variáveis não deixou explcito como então deixei como gostaria >3
const personagem = {
  // Atribuindo o tipo de variável 'VAR - LET - CONST'  e o nome dela, abrindo as chaves abrindo objeto.
  meuPersonagem: "Kael", // Propriedade 1 - String Nome do personagem
  idadePersonagem: 21, // Propriedade 2 - Idade do personagem tipo Number
  cidadeNatal: "Tenebris", // Propriedade 3 - Cidade natal tipo String
  missaoHistoriaPersonagem: "Recuperar a história perdida da sua cidade Natal" // missão de vida, tipo String
};

console.log(`
A vida de ${personagem.meuPersonagem} tem sido levemente incoveniente aos demais por ser um sobrevivente da tragédia de ${personagem.cidadeNatal}!
Aos seu 13 anos presenciou a tragédia do fogo ardente assim vivendo seus próximos anos seguintes assim tentando entender o que ocorreu.
Assim passando 8 anos anos agora tendo: ${personagem.idadePersonagem} anos!
Sua missão de vida é clara e objetiva sem mudanças... ${personagem.missaoHistoriaPersonagem}!
`);

console.log(`
- - - DESAFIO: MENSAGEM MOTIVACIONAL - - -
`);

const nomeUnico = "Daniel";
const objetivoDoAno =
  "Ganhar uma oportunidade na área de Arquiterura - Desenvolvendor BACK, FRONT, Afins... alguma oportunidade dentro da área de TI";

console.log(`
Olá meu nome é ${nomeUnico}, meu objetivo atual é ${objetivoDoAno} .
Já tive uma experiência dentro da Malwee porém busco me formar sem uso de IA para codar!
E me especializar tanto em Front minimanente e BACK!
`);
