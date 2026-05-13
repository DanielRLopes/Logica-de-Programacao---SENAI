// // ============================================================
// //   DESAFIOS 02 – If / Else com Objetos Aninhados e Operadores Lógicos
// // ============================================================
// // Instruções: resolva cada desafio no espaço indicado.
// // ============================================================

// // ------------------------------------------------------------
// // DESAFIO 1 – Validação de cadastro de usuário
// // ------------------------------------------------------------
// // a) Pergunte ao usuário:
// //    - DadosPessoais: Nome completo, CPF (apenas números, mas salvos como string), idade
// //    - Endereço: cidade e estado (sigla com 2 letras)
// //    - Acesso: nome de usuário, senha e confirmação de senha
// // b) Armazene os dados em um objeto "cadastro" com três
// //    objetos: "DadosPessoais", "endereco" e "acesso".
// //    Exemplo de estrutura:
// //    {
// //      DadosPessoais: { nomeCompleto, cpf, idade },
// //      endereco: { cidade, estado },
// //      acesso: { usuario, senha, confirmarSenha }
// //    }
// // c) Valide cada campo usando if/else if/else e operadores lógicos:
// //    1. nomeCompleto não pode estar vazio E deve ter ao menos 2 palavras e ao menos 2 caracteres por palavra
// //       (use && e verifique se inclui um espaço[utilize split() para isso])
// //    2. CPF deve ter exatamente 11 dígitos[utilize length]
// //    3. Idade deve ser >= 18
// //    4. Estado deve ter exatamente 2 letras
// //    5. Senha deve ter ao menos 8 caracteres
// //    6. Senha e confirmação devem ser iguais
// // d) Se alguma validação falhar, exiba qual campo é inválido e pare.
// //    Se tudo estiver correto → "Cadastro de <usuario> realizado com sucesso!"

// // → Seu código aqui:
const readlineSync = require("readline-sync");

// const cadastro = {
//   dadosPessoais: {
//     nomeCompleto: readlineSync.question(`Insira seu Nome:`),
//     cpf: readlineSync.question(`Insira seu CPF:`),
//     idade: readlineSync.questionInt(`Insira sua idade:`),
//   },

//   endereco: {
//     cidade: readlineSync.question(`Cidade:`),
//     estado: readlineSync.question(`Estado sigla 2 caracteres: `),
//   },

//   acesso: {
//     usuario: readlineSync.question(`Usuario:`),
//     senha: readlineSync.question(`Senha:`),
//     confirmarSenha: readlineSync.question(`Confirme a senha:`),
//   },
// };

// const nomeSeparado = cadastro.dadosPessoais.nomeCompleto.split(" ");

// const validacaoCampoNome =
//   cadastro.dadosPessoais.nomeCompleto.length === 0
//     ? "Nome vazio ou indefinido"
//     : nomeSeparado.length < 2
//       ? "Digite nome e sobrenome"
//       : nomeSeparado[0].length < 2 || nomeSeparado[1].length < 2
//         ? "Minimo 2 caracteres por palavra"
//         : "Nome válido";

// const validacaoCampos =
//   cadastro.dadosPessoais.cpf.length !== 11
//     ? "Cpf invalido"
//     : cadastro.dadosPessoais.idade < 18
//       ? "Menor de idade"
//       : cadastro.endereco.estado.length !== 2
//         ? "Somente 2 caracteres para Estado"
//         : cadastro.acesso.senha.length < 8
//           ? "Senha curta"
//           : cadastro.acesso.confirmarSenha !== cadastro.acesso.senha
//             ? "Senha de confirmacao invalida"
//             : `Cadastro de ${cadastro.acesso.usuario} realizado com sucesso!`;

// if (validacaoCampoNome && validacaoCampos) {
//   console.log(validacaoCampos);
// }
// console.log("_______________________________");

// // ------------------------------------------------------------
// // DESAFIO 2 – Sistema de reserva de hotel
// // ------------------------------------------------------------
// // a) Defina um objeto "reserva" com dois objetos aninhados:
// //    - "hospede": { nome, ehSocio: false, temPet: false }
// //    - "quarto": { numero: 101, tipo: "standard", petFriendly: false,
// //                  disponivel: true, precoPorNoite: 250 }
// // b) Pergunte ao usuário:
// //    - Seu nome
// //    - É sócio do clube de fidelidade? (sim/não)
// //    - Tem animal de estimação? (sim/não)
// //    - Quantas noites deseja ficar?
// // c) Atualize os campos do objeto com as respostas.
// // d) Usando if/else if/else e operadores lógicos, verifique:
// //    1. Se o quarto NÃO está disponível → "Quarto indisponível."
// //    2. Se o hóspede tem pet E o quarto NÃO é pet-friendly →
// //       "Quarto não aceita animais. Reserva cancelada."
// //    3. Se passou nas verificações, calcule o total:
// //       - Preço base: precoPorNoite * noites
// //       - Se for sócio E ficar 3 noites ou mais → 15% de desconto
// //       - Se for sócio mas ficar menos de 3 noites → 5% de desconto
// //       - Se NÃO for sócio → sem desconto
// // e) Exiba o objeto "reserva" com console.table().
// // f) Exiba: "Reserva confirmada para <nome>! Total: R$ <total>"

// // → Seu código aqui:

// const reserva = {
//   hospede: {
//     nome: readlineSync.question,
//     ehSocio: false,
//     temPet: false,
//   },
//   quarto: {
//     numero: 101,
//     tipo: "standard",
//     petFriendly: false,
//     disponivel: true,
//     precoPorNoite: 250,
//   },
// };
// let userName = readlineSync.question(`Nome:`);
// let ehSocio = readlineSync.keyInYN(`E socio do clube de fidelidade?
//   `);
// let temAnimalDeEstimacao = readlineSync.keyInYN(`Tem animal de estimacao?
//   `);
// let quantasNoite = readlineSync.questionInt(`Quantas noites deseja ficar: `);

// reserva.hospede.nome = userName;
// reserva.hospede.ehSocio = ehSocio;
// reserva.hospede.temPet = temAnimalDeEstimacao;

// const precoBase = reserva.quarto.precoPorNoite * quantasNoite;

// if (reserva.quarto.disponivel === false) {
//   console.info(`[INFO] Quarto indisponivel`);
// } else {
//   if (reserva.hospede.temPet === true && reserva.quarto.petFriendly === false) {
//     console.info(`[INFO] Quarto nao aceita animais. Reserva cancelada.`);
//   }
//   if (reserva.hospede.ehSocio === true && quantasNoite >= 3) {
//     console.info(`[INFO] 15% de desconto. `);
//   } else if (reserva.hospede.ehSocio === true && quantasNoite < 3) {
//     console.info(`[INFO] 5% de desconto. `);
//   } else {
//     console.info(`[Info] sem desconto. `);
//   }
// }

// console.table(reserva);
// console.log(
//   `Reserva confirmada ${reserva.hospede.nome}! Total: R$ ${precoBase}`,
// );
// console.log("_______________________________");

// // ------------------------------------------------------------
// // DESAFIO 3 – Aprovação escolar com frequência
// // ------------------------------------------------------------
// // a) Pergunte ao usuário:
// //    - Nome do aluno
// //    - Três notas (de 0 a 10)
// //    - Percentual de frequência (de 0 a 100)
// // b) Armazene em um objeto "aluno" com dois objetos aninhados:
// //    - "dados": { nome, frequencia }
// //    - "notas": { nota1, nota2, nota3, media }  ← calcule a média aqui
// // c) Regras de aprovação (use && e || nas condições):
// //    - Frequência mínima exigida: 75%
// //    - Média para aprovação direta: >= 7.0
// //    - Média para recuperação: >= 5.0 e < 7.0
// //    - Média para reprovação: < 5.0
// //
// //    Verificações com if/else if/else:
// //    1. Se frequência < 75 → reprovado por falta,
// //       independente da média. Exiba:
// //       "Reprovado por falta. Frequência: <freq>%"
// //    2. Se frequência >= 75 E média >= 7 → aprovado:
// //       "Aprovado! Média: <media> | Frequência: <freq>%"
// //    3. Se frequência >= 75 E média >= 5 E média < 7 → recuperação:
// //       "Recuperação. Média: <media> | Frequência: <freq>%"
// //    4. Se frequência >= 75 E média < 5 → reprovado por nota:
// //       "Reprovado por nota. Média: <media>"
// // d) Exiba o objeto "aluno" com console.table() ao final.

// // → Seu código aqui:

// userName = readlineSync.question(`Nome aluno: `);
// let n1 = readlineSync.questionFloat(`Nota numero 1: `);
// let n2 = readlineSync.questionFloat(`Nota numero 2: `);
// let n3 = readlineSync.questionFloat(`Nota numero 3: `);
// let percentualFrequencia = readlineSync.questionInt(
//   `Percentual de frequencia ( 0 a 100 ): `,
// );

// const aluno = {
//   dados: {
//     nome: userName,
//     frequencia: percentualFrequencia,
//   },
//   notas: {
//     nota1: n1,
//     nota2: n2,
//     nota3: n3,
//   },
// };
// // Adicionando propriedade a notas que calcula MÉDIA das notas
// aluno.notas.media =
//   (aluno.notas.nota1 + aluno.notas.nota2 + aluno.notas.nota3) / 2;
// if (aluno.dados.frequencia < 75) {
//   console.info(
//     `[Info] Reprovado por falta. Frequencia: ${aluno.dados.frequencia}% `,
//   );
// } else {
//   if (
//     aluno.dados.frequencia >= 75 &&
//     aluno.dados.frequencia < 100 &&
//     aluno.notas.media >= 7
//   ) {
//     console.info(
//       `[Info] Aprovado! Media: ${aluno.notas.media} | Frequencia: ${aluno.dados.frequencia}%`,
//     );
//   } else {
//     if (
//       aluno.dados.frequencia >= 75 &&
//       aluno.notas.media >= 5 &&
//       aluno.notas.media < 7
//     ) {
//       console.info(
//         `[Info] Recuperacao Media: ${aluno.notas.media} | Frequencia: ${aluno.dados.frequencia}%`,
//       );
//     } else {
//       console.info(`[Info] Reprovado por nota. Media: ${aluno.notas.media}`);
//     }
//   }
// }

// console.table(aluno);

// // d) Exiba o objeto "aluno" com console.table() ao final.
// console.log("_______________________________");

// // ------------------------------------------------------------
// // DESAFIO 4 – Simulador de análise de crédito
// // ------------------------------------------------------------
// // a) Pergunte ao usuário:
// //    - Nome, renda mensal (R$), score de crédito (0 a 1000)
// //    - Possui dívidas em aberto? (sim/não)
// //    - Valor do empréstimo desejado (R$)
// // b) Armazene em um objeto "solicitacao" com dois objetos aninhados:
// //    - "cliente":    { nome, renda, score, possuiDividas }
// //    - "emprestimo": { valorSolicitado, aprovado: false,
// //                      limite: 0, parcelas: 0, taxaJuros: 0 }
// // c) Regras de análise (use && e || nas condições):
// //
// //    REPROVADO se:
// //    - possuiDividas for true  OU  score < 300
// //    → "Crédito negado. Regularize suas pendências."
// //
// //    APROVADO PARCIAL se:
// //    - NÃO possui dívidas  E  score >= 300  E  score < 600
// //    → limite = renda * 2, parcelas = 12, taxaJuros = 5%
// //    → Se valorSolicitado > limite → aprova somente até o limite
// //
// //    APROVADO PLENO se:
// //    - NÃO possui dívidas  E  score >= 600  E  renda >= 2000
// //    → limite = renda * 5, parcelas = 36, taxaJuros = 1.5%
// //    → Se valorSolicitado > limite → aprova somente até o limite
// //
// //    APROVADO PREMIUM se:
// //    - NÃO possui dívidas  E  score >= 800  E  renda >= 5000
// //    → limite = renda * 10, parcelas = 60, taxaJuros = 0.8%
// //    → Se valorSolicitado > limite → aprova somente até o limite
// //
// // d) Atualize os campos de "emprestimo" com os resultados.
// // e) Exiba o objeto "solicitacao" com console.table().
// // f) Se aprovado, exiba:
// //    "Empréstimo de R$ <valor> aprovado para <nome>.
// //     <parcelas>x de R$ <parcelaMensal> com juros de <taxa>% ao mês."

// // → Seu código aqui:

// userName = readlineSync.question(`Nome: `);

// let rendaMensal = readlineSync.questionFloat(`Renda Mensal: `);

// let scoreCredito = readlineSync.questionFloat(`Score de credito (0 a 1000): `);

// let dividasEmAberto = readlineSync.keyInYN(`Dividas em aberto? `);

// let valorEmprestimo = readlineSync.questionFloat(
//   `Valor do emprestimo desejado: `,
// );

// const solicitacao = {
//   cliente: {
//     nome: userName,
//     renda: rendaMensal,
//     score: scoreCredito,
//     possuiDivida: dividasEmAberto,
//   },

//   emprestimo: {
//     valorEmprestimo: valorEmprestimo,
//     aprovado: false,
//     limite: 0,
//     parcelas: 0,
//     taxaJuros: 0,
//   },
// };

// // REPROVADO
// if (
//   solicitacao.cliente.possuiDivida === true ||
//   solicitacao.cliente.score < 300
// ) {
//   console.info(`[INFO] Crédito negado. Regularize suas pendências.`);
// }

// // APROVADO PREMIUM
// else if (
//   solicitacao.cliente.possuiDivida === false &&
//   solicitacao.cliente.score >= 800 &&
//   solicitacao.cliente.renda >= 5000
// ) {
//   solicitacao.emprestimo.aprovado = true;
//   solicitacao.emprestimo.limite = solicitacao.cliente.renda * 10;

//   solicitacao.emprestimo.parcelas = 60;

//   solicitacao.emprestimo.taxaJuros = 0.008;
// }

// // APROVADO PLENO
// else if (
//   solicitacao.cliente.possuiDivida === false &&
//   solicitacao.cliente.score >= 600 &&
//   solicitacao.cliente.renda >= 2000
// ) {
//   solicitacao.emprestimo.aprovado = true;

//   solicitacao.emprestimo.limite = solicitacao.cliente.renda * 5;

//   solicitacao.emprestimo.parcelas = 36;

//   solicitacao.emprestimo.taxaJuros = 0.015;
// }

// // APROVADO PARCIAL
// else if (
//   solicitacao.cliente.possuiDivida === false &&
//   solicitacao.cliente.score >= 300 &&
//   solicitacao.cliente.score < 600
// ) {
//   solicitacao.emprestimo.aprovado = true;

//   solicitacao.emprestimo.limite = solicitacao.cliente.renda * 2;

//   solicitacao.emprestimo.parcelas = 12;

//   solicitacao.emprestimo.taxaJuros = 0.05;
// }

// if (solicitacao.emprestimo.valorEmprestimo > solicitacao.emprestimo.limite) {
//   solicitacao.emprestimo.valorEmprestimo = solicitacao.emprestimo.limite;

//   console.info(`[INFO] Valor ajustado para o limite disponível.`);
// }

// // Exibir objeto
// console.table(solicitacao);

// if (solicitacao.emprestimo.aprovado) {
//   let valorFinal = solicitacao.emprestimo.valorEmprestimo;

//   let juros = valorFinal * solicitacao.emprestimo.taxaJuros;

//   let totalComJuros = valorFinal + juros;

//   let parcelaMensal = totalComJuros / solicitacao.emprestimo.parcelas;

//   console.log(`
// Empréstimo de R$ ${valorFinal.toFixed(2)} aprovado para ${solicitacao.cliente.nome}.

// ${solicitacao.emprestimo.parcelas}x de R$ ${parcelaMensal.toFixed(2)}
// com juros de ${(solicitacao.emprestimo.taxaJuros * 100).toFixed(1)}% ao mês.
// `);
// }

// console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 5 – Controle de embarque aéreo
// ------------------------------------------------------------
// a) Pergunte ao usuário os dados do passageiro:
//    - Nome, idade, número do documento (apenas números)
// b) Pergunte os dados da bagagem:
//    - Peso da bagagem de porão em kg (0 se não tiver)
//    - Possui bagagem de mão? (sim/não)
//    - Peso da bagagem de mão em kg (0 se não tiver)
// c) Pergunte os dados do voo:
//    - Classe: "economica", "executiva" ou "primeira"
//    - Fez check-in online? (sim/não)
// d) Armazene tudo em um objeto "embarque" com três objetos aninhados:
//    - "passageiro": { nome, idade, documento }
//    - "bagagem":    { pesoPoraoKg, temMao, pesoMaoKg }
//    - "voo":        { classe, checkInOnline }
// e) Limites de bagagem por classe (use && e || nas condições):
//    - "economica":  porão até 23 kg  |  mão até 10 kg
//    - "executiva":  porão até 32 kg  |  mão até 15 kg
//    - "primeira":   porão até 50 kg  |  mão até 18 kg
//
// f) Verifique as condições de embarque com if/else if/else:
//    1. Documento deve ter entre 7 e 11 dígitos numéricos
//       → se inválido: "Documento inválido. Embarque negado."
//    2. Se a bagagem de porão exceder o limite da classe
//       E não for primeira classe →
//       "Excesso de bagagem de porão. Pague a taxa de R$ 80,00."
//       (apenas exibe aviso, não impede embarque)
//    3. Se a bagagem de mão exceder o limite da classe →
//       "Bagagem de mão acima do permitido. Despache no balcão."
//    4. Se idade < 18 E NÃO fez check-in online →
//       "Menor de idade sem check-in online. Dirija-se ao balcão."
//    5. Se passou em todas as verificações críticas →
//       "Embarque liberado! Boa viagem, <nome>!"
// g) Exiba o objeto "embarque" com console.table() ao final.

// → Seu código aqui:

const embarque = {
  passageiro: {
    nome: readlineSync.question(`Nome: `),
    idade: readlineSync.questionInt(`Idade: `),
    documento: readlineSync.question(`Documento(apenas numeros): `),
  },

  bagagem: {
    pesoPoraoKg: readlineSync.questionFloat(
      `Peso bagagem de porao(0 se nao tiver): `,
    ),

    temMao: readlineSync.keyInYN(`Possui bagagem de mao? `),

    pesoMaoKg: 0,
  },

  voo: {
    classe: readlineSync.question(`Classe (economica/executiva/primeira): `),

    checkInOnline: readlineSync.keyInYN(`Fez check-in online? `),
  },
};

// Se tiver bagagem de mao pergunta o peso
if (embarque.bagagem.temMao === true) {
  embarque.bagagem.pesoMaoKg = readlineSync.questionFloat(
    `Peso bagagem de mao: `,
  );
}

// Validacao documento
if (
  embarque.passageiro.documento.length < 7 ||
  embarque.passageiro.documento.length > 11
) {
  console.info(`[INFO] Documento invalido. Embarque negado.`);
}

// Classe economica
else if (embarque.voo.classe === "economica") {
  // excesso bagagem porao
  if (embarque.bagagem.pesoPoraoKg > 23) {
    console.info(`[INFO] Excesso de bagagem de porao. Pague taxa de R$ 80,00.`);
  }

  // excesso bagagem mao
  if (embarque.bagagem.pesoMaoKg > 10) {
    console.info(
      `[INFO] Bagagem de mao acima do permitido. Despache no balcao.`,
    );
  }

  // menor sem checkin
  if (embarque.passageiro.idade < 18 && embarque.voo.checkInOnline === false) {
    console.info(
      `[INFO] Menor de idade sem check-in online. Dirija-se ao balcao.`,
    );
  } else {
    console.log(`Embarque liberado! Boa viagem, ${embarque.passageiro.nome}!`);
  }
}

// Classe executiva
else if (embarque.voo.classe === "executiva") {
  if (embarque.bagagem.pesoPoraoKg > 32) {
    console.info(`[INFO] Excesso de bagagem de porao. Pague taxa de R$ 80,00.`);
  }

  if (embarque.bagagem.pesoMaoKg > 15) {
    console.info(
      `[INFO] Bagagem de mao acima do permitido. Despache no balcao.`,
    );
  }

  if (embarque.passageiro.idade < 18 && embarque.voo.checkInOnline === false) {
    console.info(
      `[INFO] Menor de idade sem check-in online. Dirija-se ao balcao.`,
    );
  } else {
    console.log(`Embarque liberado! Boa viagem, ${embarque.passageiro.nome}!`);
  }
}

// Primeira classe
else if (embarque.voo.classe === "primeira") {
  if (embarque.bagagem.pesoPoraoKg > 50) {
    console.info(`[INFO] Limite de bagagem excedido.`);
  }

  if (embarque.bagagem.pesoMaoKg > 18) {
    console.info(
      `[INFO] Bagagem de mao acima do permitido. Despache no balcao.`,
    );
  }

  if (embarque.passageiro.idade < 18 && embarque.voo.checkInOnline === false) {
    console.info(
      `[INFO] Menor de idade sem check-in online. Dirija-se ao balcao.`,
    );
  } else {
    console.log(`Embarque liberado! Boa viagem, ${embarque.passageiro.nome}!`);
  }
}

console.table(embarque);

console.log("_______________________________");
