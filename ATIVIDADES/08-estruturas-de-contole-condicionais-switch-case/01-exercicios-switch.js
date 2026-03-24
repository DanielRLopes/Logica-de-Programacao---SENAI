// ============================================================
//   TÓPICO 08 – SWITCH / CASE / BREAK
// ============================================================
// Instruções: 
// - Leia a teoria com atenção
// - Estude os exemplos
// - Resolva os exercícios no espaço indicado
// - Use apenas switch/case/break (sem if/else nos exercícios)
// ============================================================


// ============================================================
// 📖 TEORIA – SWITCH CASE
// ============================================================

/*
O QUE É?
--------
Switch é uma estrutura de decisão MULTIPLE. 
Ao invés de vários "if/else if", você usa switch para comparar 
uma variável com vários valores possíveis.

QUANDO USAR?
------------
✅ Quando tem MÚLTIPLAS opções baseadas em UM ÚNICO valor
✅ Quando cada opção executa um bloco diferente
✅ Menus, dias da semana, status, categorias, códigos

SINTAXE BÁSICA:
---------------
switch (variavel) {
    case valor1:
        // código se variavel === valor1
        break
    case valor2:
        // código se variavel === valor2
        break
    default:
        // código se nenhum caso acima combinar
}

PALAVRAS-CHAVE:
---------------
- switch: inicia a estrutura
- case: define um valor para comparar
- break: PARA a execução (senão continua pro próximo case!)
- default: executa se NENHUM case combinar (opcional)

⚠️ CUIDADO COM O BREAK!
------------------------
Sem break, o código "cai" para o próximo case (fallthrough).
Isso às vezes é útil, mas geralmente é um BUG!

EXEMPLO 1 – Dia da Semana:
---------------------------
*/

const diaSemana = 3

switch (diaSemana) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Dia inválido!")
}

/*
EXEMPLO 2 – Mês por Número:
---------------------------
*/

const mes = 6
let nomeMes

switch (mes) {
    case 1:
        nomeMes = "Janeiro"
        break
    case 2:
        nomeMes = "Fevereiro"
        break
    case 3:
        nomeMes = "Março"
        break
    case 4:
        nomeMes = "Abril"
        break
    case 5:
        nomeMes = "Maio"
        break
    case 6:
        nomeMes = "Junho"
        break
    case 7:
        nomeMes = "Julho"
        break
    case 8:
        nomeMes = "Agosto"
        break
    case 9:
        nomeMes = "Setembro"
        break
    case 10:
        nomeMes = "Outubro"
        break
    case 11:
        nomeMes = "Novembro"
        break
    case 12:
        nomeMes = "Dezembro"
        break
    default:
        nomeMes = "Mês inválido!"
}

console.log(`Mês ${mes}: ${nomeMes}`)

/*
EXEMPLO 3 – Fallthrough Intencional (agrupando casos):
------------------------------------------------------
Às vezes você quer que vários casos executem o MESMO código.
Nesse caso, NÃO coloque break entre eles!
*/

const nota = 7
let conceito

switch (true) {
    case (nota >= 9):
        conceito = "A - Excelente"
        break
    case (nota >= 7):
        conceito = "B - Bom"
        break
    case (nota >= 5):
        conceito = "C - Regular"
        break
    default:
        conceito = "D - Ruim"
}

console.log(`Nota ${nota}: ${conceito}`)

/*
EXEMPLO 4 – Menu de Opções:
---------------------------
*/

const opcao = 2
let acao

switch (opcao) {
    case 1:
        acao = "Novo arquivo criado"
        break
    case 2:
        acao = "Arquivo aberto"
        break
    case 3:
        acao = "Arquivo salvo"
        break
    case 4:
        acao = "Configurações"
        break
    case 0:
        acao = "Saindo do sistema"
        break
    default:
        acao = "Opção inválida!"
}

console.log(acao)

/*
💡 DICAS IMPORTANTES:
---------------------
1. SEMPRE use break (a menos que queira fallthrough)
2. default é opcional mas RECOMENDADO (previne erros)
3. Switch compara com === (estritamente igual)
4. Funciona com: números, strings, booleanos
5. Para faixas de valores, use switch(true) com condições

🚫 QUANDO NÃO USAR:
-------------------
- Se tiver apenas 2 opções → use if/else
- Se as condições forem complexas (múltiplas variáveis)
- Se precisar de comparações com >, <, >=, <= (use switch(true))

⚡ VS IF/ELSE:
--------------
Switch: Mais limpo para MÚLTIPLAS opções de UM valor
If/else: Mais flexível para condições complexas

*/


// ============================================================
// 📝 EXERCÍCIOS BÁSICOS (20)
// ============================================================

const readlineSync = require("readline-sync")

// ------------------------------------------------------------
// EXERCÍCIO 1 – Nome do Dia
// ------------------------------------------------------------
// Peça ao usuário um número de 1 a 7
// Use switch para exibir o nome do dia correspondente
// Se fora de 1-7, exiba "Dia inválido"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 2 – Estação do Ano
// ------------------------------------------------------------
// Peça ao usuário um número de 1 a 4
// 1 = Verão, 2 = Outono, 3 = Inverno, 4 = Primavera
// Exiba o nome da estação

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipo de Triângulo
// ------------------------------------------------------------
// Peça ao usuário 3 lados de um triângulo
// Verifique e exiba:
// - 3 lados iguais → "Equilátero"
// - 2 lados iguais → "Isósceles"  
// - 3 lados diferentes → "Escaleno"
// Dica: Use comparações no switch(true)

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 4 – Categoria de Produto
// ------------------------------------------------------------
// Peça ao usuário uma letra:
// A = Alimentação, B = Bebidas, C = Limpeza, L = Lazer
// Exiba o nome da categoria

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 5 – Resultado do Dado
// ------------------------------------------------------------
// Simule um dado (gere número aleatório de 1 a 6)
// Use switch para exibir:
// 1 = "Um", 2 = "Dois", 3 = "Três", 4 = "Quatro", 5 = "Cinco", 6 = "Seis"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 6 – Mês por Extenso
// ------------------------------------------------------------
// Peça ao usuário um número de 1 a 12
// Exiba o nome do mês por extenso

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 7 – Código de Estado (DDD)
// ------------------------------------------------------------
// Peça ao usuário um DDD (11, 21, 31, 41, 51, 61, 71, 81)
// Exiba o estado correspondente:
// 11 = SP, 21 = RJ, 31 = MG, 41 = PR, 51 = RS, 61 = DF, 71 = BA, 81 = PE

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 8 – Tipo de Sangue
// ------------------------------------------------------------
// Peça ao usuário o tipo sanguíneo (A, B, AB, O)
// Exiba informações:
// A = "Doador: A e AB | Receptor: A e O"
// B = "Doador: B e AB | Receptor: B e O"
// AB = "Doador: AB | Receptor: Todos"
// O = "Doador: Todos | Receptor: O"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 9 – Plano de Saúde
// ------------------------------------------------------------
// Peça ao usuário um plano (A, B, C, D)
// Exiba a cobertura:
// A = "Básico - Consultas e Exames Simples"
// B = "Intermediário - Consultas, Exames e UTI"
// C = "Completo - Internação e Cirurgias"
// D = "Premium - Tudo + Odontológico"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 10 – Classificação de Hotel
// ------------------------------------------------------------
// Peça ao usuário número de estrelas (1 a 5)
// Exiba a classificação:
// 1 = "Econômico", 2 = "Simples", 3 = "Conforto"
// 4 = "Luxo", 5 = "Super Luxo"

// → Seu código aqui:




console.log("_______________________________")


// ============================================================
// 📝 EXERCÍCIOS INTERMEDIÁRIOS (30)
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 11 – Operação Matemática
// ------------------------------------------------------------
// Peça ao usuário dois números e uma operação (+, -, *, /)
// Use switch para realizar a operação correta
// Exiba o resultado no formato: "X op Y = resultado"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 12 – Turno de Trabalho
// ------------------------------------------------------------
// Peça ao usuário um turno (M = Matutino, T = Tarde, N = Noite)
// Exiba o horário correspondente:
// M = "06:00 às 14:00"
// T = "14:00 às 22:00"
// N = "22:00 às 06:00"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 13 – Nível de Jogo
// ------------------------------------------------------------
// Peça ao usuário um nível (1 a 5)
// Exiba a dificuldade:
// 1 = "Iniciante - Inimigos fracos, muita vida"
// 2 = "Fácil - Inimigos normais"
// 3 = "Médio - Equilibrado"
// 4 = "Difícil - Inimigos fortes"
// 5 = "Expert - Máxima dificuldade"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 14 – Código de Cargo
// ------------------------------------------------------------
// Peça ao usuário um código de cargo (1 a 5)
// Exiba o cargo e salário base:
// 1 = "Estagiário - R$ 1.200"
// 2 = "Júnior - R$ 3.000"
// 3 = "Pleno - R$ 5.000"
// 4 = "Sênior - R$ 8.000"
// 5 = "Gerente - R$ 12.000"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 15 – Status do Pedido
// ------------------------------------------------------------
// Peça ao usuário um código de status:
// 1 = Pendente, 2 = Pago, 3 = Enviado, 4 = Entregue, 5 = Cancelado
// Exiba a descrição completa de cada status

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 16 – Faixa Etária
// ------------------------------------------------------------
// Peça ao usuário a idade
// Use switch(true) para classificar:
// 0-12 = "Criança"
// 13-17 = "Adolescente"
// 18-59 = "Adulto"
// 60+ = "Idoso"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 17 – Tamanho de Camiseta
// ------------------------------------------------------------
// Peça ao usuário um tamanho (PP, P, M, G, GG, XG)
// Exiba a descrição:
// PP = "Extra Pequeno - 34-36"
// P = "Pequeno - 38-40"
// M = "Médio - 42-44"
// G = "Grande - 46-48"
// GG = "Extra Grande - 50-52"
// XG = "Gigante - 54+"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 18 – Classificação de IMC
// ------------------------------------------------------------
// Peça ao usuário peso e altura, calcule IMC
// Use switch(true) para classificar:
// < 18.5 = "Abaixo do peso"
// 18.5-24.9 = "Peso normal"
// 25-29.9 = "Sobrepeso"
// 30-34.9 = "Obesidade I"
// 35-39.9 = "Obesidade II"
// 40+ = "Obesidade III"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 19 – Tipo de Assinatura
// ------------------------------------------------------------
// Peça ao usuário o tipo de assinatura:
// FREE = "Grátis - Com anúncios, qualidade básica"
// BASIC = "R$ 19,90 - Sem anúncios, HD"
// STANDARD = "R$ 39,90 - 2 telas, Full HD"
// PREMIUM = "R$ 59,90 - 4 telas, 4K"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 20 – Resultado de Partida
// ------------------------------------------------------------
// Peça ao usuário o resultado (V = Vitória, E = Empate, D = Derrota)
// Exiba:
// V = "Parabéns! +3 pontos"
// E = "Jogo equilibrado. +1 ponto"
// D = "Que pena! 0 pontos"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 21 – Método de Pagamento
// ------------------------------------------------------------
// Peça ao usuário o método de pagamento:
// 1 = Dinheiro (10% desconto)
// 2 = PIX (10% desconto)
// 3 = Débito (5% desconto)
// 4 = Crédito 1x (sem desconto)
// 5 = Crédito 3x (5% juros)
// 6 = Crédito 6x (10% juros)
// Peça o valor da compra e calcule o valor final

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 22 – Classificação de Terremoto (Escala Richter)
// ------------------------------------------------------------
// Peça ao usuário a magnitude de um terremoto
// Use switch(true):
// < 2.0 = "Micro - Não é sentido"
// 2.0-3.9 = "Pequeno - Sentido por poucos"
// 4.0-4.9 = "Leve - Danos menores"
// 5.0-5.9 = "Moderado - Danos em edifícios"
// 6.0-6.9 = "Forte - Destrutivo"
// 7.0-7.9 = "Grande - Destruição severa"
// 8.0+ = "Muito Grande - Devastação total"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 23 – Tipo de Nuvem
// ------------------------------------------------------------
// Peça ao usuário um código de nuvem:
// CI = "Cirrus - Altas, finas, de bom tempo"
// CU = "Cumulus - Algodão, tempo estável"
// ST = "Stratus - Camadas, garoa"
// CB = "Cumulonimbus - Tempestade"
// AC = "Altocumulus - Médias, possível chuva"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 24 – Nível de Alerta Meteorológico
// ------------------------------------------------------------
// Peça ao usuário o nível de alerta:
// 1 = Verde = "Sem perigo"
// 2 = Amarelo = "Perigo potencial"
// 3 = Laranja = "Perigo significativo"
// 4 = Vermelho = "Perigo extremo"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 25 – Código de Moeda
// ------------------------------------------------------------
// Peça ao usuário um código de moeda:
// BRL = "Real Brasileiro"
// USD = "Dólar Americano"
// EUR = "Euro"
// GBP = "Libra Esterlina"
// JPY = "Iene Japonês"
// BTC = "Bitcoin"
// Exiba o nome completo

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 26 – Tipo de Combustível
// ------------------------------------------------------------
// Peça ao usuário o tipo de combustível:
// G = Gasolina (R$ 5,89/L)
// E = Etanol (R$ 3,49/L)
// D = Diesel (R$ 4,29/L)
// Peça a quantidade em litros e calcule o total

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 27 – Classificação de Furacão
// ------------------------------------------------------------
// Peça ao usuário a velocidade do vento (km/h)
// Use switch(true):
// < 63 = "Depressão tropical"
// 63-118 = "Tempestade tropical"
// 119-153 = "Furacão Categoria 1"
// 154-177 = "Furacão Categoria 2"
// 178-208 = "Furacão Categoria 3"
// 209-251 = "Furacão Categoria 4"
// 252+ = "Furacão Categoria 5"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 28 – Tipo de Visto
// ------------------------------------------------------------
// Peça ao usuário o tipo de visto:
// A = "Turismo - 90 dias"
// B = "Negócios - 180 dias"
// C = "Estudo - 1 ano"
// D = "Trabalho - 2 anos"
// E = "Residência - 5 anos"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 29 – Nível de Radiação
// ------------------------------------------------------------
// Peça ao usuário o nível de radiação (μSv/h)
// Use switch(true):
// < 0.5 = "Seguro - Normal"
// 0.5-1.0 = "Atenção - Monitorar"
// 1.0-10 = "Perigo - Evitar exposição"
// 10-100 = "Perigo Extremo - Evacuar"
// 100+ = "Fatal - Área proibida"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 30 – Código de Aeroporto
// ------------------------------------------------------------
// Peça ao usuário um código de aeroporto (3 letras):
// GRU = "Guarulhos - São Paulo"
// GIG = "Galeão - Rio de Janeiro"
// BSF = "Confins - Belo Horizonte"
// SSA = "Salvador"
// FOR = "Fortaleza"
// REC = "Recife"
// CWB = "Curitiba"
// POA = "Porto Alegre"

// → Seu código aqui:




console.log("_______________________________")


// ============================================================
// 📝 EXERCÍCIOS DIFÍCEIS (15)
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 31 – Calculadora de Imposto de Renda
// ------------------------------------------------------------
// Peça ao usuário o salário bruto
// Use switch(true) para determinar a alíquota:
// < 1903.98 = Isento
// 1903.99-2826.65 = 7.5%
// 2826.66-3751.05 = 15%
// 3751.06-4664.68 = 22.5%
// 4664.69+ = 27.5%
// Calcule e exiba: salário bruto, desconto, salário líquido

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 32 – Sistema de Pontos de Carteira (CNH)
// ------------------------------------------------------------
// Peça ao usuário quantos pontos tem na CNH
// Use switch(true):
// 0-10 = "Carteira limpa"
// 11-19 = "Atenção - Quase atingiu limite"
// 20-39 = "CRÍTICO - Risco de suspensão"
// 40+ = "SUSPENSO - CNH cassada"
// Exiba também quantos pontos faltam para o próximo nível

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 33 – Conversor de Fusos Horários
// ------------------------------------------------------------
// Peça ao usuário:
// - Hora atual (0-23)
// - Fuso de origem (BRT = -3, UTC = 0, EST = -5, JST = +9)
// - Fuso de destino
// Calcule e exiba a hora no fuso de destino
// Cuidado com virada de dia (23+2 = 01:00 do dia seguinte)

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 34 – Classificador de Estrelas (Astronomia)
// ------------------------------------------------------------
// Peça ao usuário o tipo espectral da estrela:
// O = "Azul - 30.000K+, 16+ massas solares"
// B = "Azul-branco - 10.000-30.000K, 2-16 massas"
// A = "Branco - 7.500-10.000K, 1.4-2 massas"
// F = "Amarelo-branco - 6.000-7.500K, 1-1.4 massas"
// G = "Amarelo - 5.200-6.000K, 0.8-1 massa (nosso Sol)"
// K = "Laranja - 3.700-5.200K, 0.5-0.8 massas"
// M = "Vermelho - <3.700K, <0.5 massas"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 35 – Sistema de Ranking de Jogo
// ------------------------------------------------------------
// Peça ao usuário o MMR (pontos de ranking)
// Use switch(true) para determinar o elo:
// 0-999 = "Ferro"
// 1000-1399 = "Bronze"
// 1400-1799 = "Prata"
// 1800-2199 = "Ouro"
// 2200-2599 = "Platina"
// 2600-2999 = "Diamante"
// 3000+ = "Mestre"
// Exiba também o próximo elo e quantos pontos faltam

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 36 – Calculadora de Frete por Região
// ------------------------------------------------------------
// Peça ao usuário:
// - Região (N, NE, CO, SE, S)
// - Peso do pacote (kg)
// - Valor declarado (R$)
// Calcule o frete:
// N = R$ 25 + R$ 3/kg
// NE = R$ 20 + R$ 2.5/kg
// CO = R$ 18 + R$ 2/kg
// SE = R$ 15 + R$ 1.5/kg
// S = R$ 17 + R$ 1.8/kg
// Adicione seguro: 2% do valor declarado se > R$ 500

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 37 – Classificador de Terrenos (Zonas)
// ------------------------------------------------------------
// Peça ao usuário o código da zona:
// R1 = "Residencial Unifamiliar - Máx 2 pavimentos"
// R2 = "Residencial Multifamiliar - Máx 5 pavimentos"
// C1 = "Comercial Varejo - Máx 3 pavimentos"
// C2 = "Comercial Atacado - Máx 10 pavimentos"
// I1 = "Industrial Leve - Máx 15 pavimentos"
// I2 = "Industrial Pesado - Área restrita"
// Exiba também o valor do IPTU por m² de cada zona

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 38 – Sistema de Multas de Trânsito
// ------------------------------------------------------------
// Peça ao usuário:
// - Tipo de infração (L, M, G, GG)
// - Velocidade acima do limite (km/h)
// L = Leve (até 10% acima) - R$ 88,38
// M = Média (11-20% acima) - R$ 130,16
// G = Grave (21-50% acima) - R$ 195,23
// GG = Gravíssima (51%+ acima) - R$ 880,41 + suspensão
// Calcule também pontos na CNH: L=3, M=4, G=5, GG=7

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 39 – Classificador de Vulcões
// ------------------------------------------------------------
// Peça ao usuário:
// - Tipo de vulcão (E, S, C, D)
// - Altura (m)
// - Última erupção (anos atrás)
// E = Estratovulcão - Alta explosividade
// S = Escudo - Baixa explosividade, lava fluida
// C = Cone de Cinzas - Pequeno, erupções curtas
// D = Domo de Lava - Crescimento lento
// Classifique o perigo baseado na última erupção:
// < 100 anos = "Ativo"
// 100-10.000 = "Potencialmente ativo"
// 10.000+ = "Extinto"

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 40 – Sistema de Recompensas de Jogo
// ------------------------------------------------------------
// Peça ao usuário:
// - Nível do jogador (1-100)
// - Missões completadas hoje (0-10)
// - Login consecutivo (dias)
// Calcule a recompensa diária:
// Nível 1-20: 10 moedas + 1 missão bônus
// Nível 21-50: 20 moedas + 2 missões bônus
// Nível 51-80: 30 moedas + 3 missões bônus
// Nível 81-100: 50 moedas + 5 missões bônus
// Bônus login: +5 moedas por dia consecutivo (máx 7 dias)
// Exiba recompensa total

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 41 – Classificador de Diamantes (Quilates)
// ------------------------------------------------------------
// Peça ao usuário:
// - Peso em quilates
// - Cor (D, E, F, G, H, I, J)
// - Pureza (FL, IF, VVS1, VVS2, VS1, VS2, SI1, SI2)
// Calcule o valor base por quilate:
// D = R$ 50.000, E = R$ 45.000, F = R$ 40.000
// G = R$ 35.000, H = R$ 30.000, I = R$ 25.000, J = R$ 20.000
// Multiplique pelo peso
// Aplique multiplicador de pureza:
// FL = 2.0, IF = 1.8, VVS1 = 1.6, VVS2 = 1.4
// VS1 = 1.2, VS2 = 1.0, SI1 = 0.8, SI2 = 0.6
// Exiba valor final

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 42 – Sistema de Empréstimo Bancário
// ------------------------------------------------------------
// Peça ao usuário:
// - Salário mensal
// - Score de crédito (0-1000)
// - Valor desejado
// - Prazo (meses)
// Determine a taxa de juros baseada no score:
// 800-1000 = 1.5% ao mês
// 600-799 = 2.5% ao mês
// 400-599 = 4% ao mês
// 200-399 = 6% ao mês
// 0-199 = Empréstimo negado
// Calcule: valor das parcelas = (valor * (1 + taxa)^prazo) / prazo
// Verifique se parcela <= 30% do salário

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 43 – Classificador de Vinhos
// ------------------------------------------------------------
// Peça ao usuário:
// - Tipo de uva (Cabernet, Merlot, Pinot, Chardonnay, Sauvignon)
// - Ano da safra
// - Região (Vale dos Vinhedos, Serra Gaúcha, Campanha)
// Classifique o vinho:
// Safra < 5 anos = "Jovem"
// Safra 5-10 anos = "Maturado"
// Safra 10+ anos = "Envelhecido"
// Exiba também:
// - Harmonizações sugeridas por tipo de uva
// - Temperatura ideal de serviço
// - Preço estimado por região

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 44 – Sistema de Leilão
// ------------------------------------------------------------
// Peça ao usuário:
// - Valor inicial do produto
// - Número de licitantes
// - Para cada licitante: nome e valor do lance
// Use switch para determinar o status do lance:
// Lance < 10% acima = "Abaixo do esperado"
// Lance 10-25% acima = "Competitivo"
// Lance 25%+ acima = "Alto lance"
// Exiba: maior lance, segundo lugar, diferença entre eles

// → Seu código aqui:




console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 45 – Simulador de Bolsa de Valores
// ------------------------------------------------------------
// Peça ao usuário:
// - Código da ação (PETR4, VALE3, ITUB4, BBDC4, ABEV3)
// - Preço de compra
// - Preço atual
// - Quantidade de ações
// Calcule:
// - Valor investido
// - Valor atual
// - Lucro/Prejuízo
// - Porcentagem de variação
// Classifique:
// > 20% = "Excelente"
// 10-20% = "Bom"
// 0-10% = "Neutro"
// -10-0% = "Atenção"
// < -10% = "Prejuízo"
// Exiba relatório completo

// → Seu código aqui:




console.log("_______________________________")


// ============================================================
// 💡 DICAS FINAIS
// ============================================================

/*
1. SEMPRE use break para não "cair" no próximo case
2. default é sua rede de segurança - use sempre que possível
3. Para faixas de valores, use switch(true) com condições
4. Switch é mais limpo que muitos if/else encadeados
5. Funciona bem com menus, códigos, categorias, status

PRÓXIMO TÓPICO: Loops (for, while, do...while)
*/
