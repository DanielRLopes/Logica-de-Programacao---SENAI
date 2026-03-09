# 🎯 Desafios de Lógica: Eficiência e Qualidade

Estes exercícios foram desenhados para você aplicar o conhecimento que já tem (Arrays/Objetos/readline-sync), mas focando em **Clean Code** e **Evitar Repetição**.

---

### 🕹️ Desafio 1: O Organizador de Inventário (Concluido)
*Status: OK - Dominado*

---

### 📚 Desafio 2: O Scanner de Usuário (Concluido)
*Status: OK - Evoluindo*

---

### ⚖️ Desafio 3: Calculadora de IMC (Concluido)
*Status: OK - Operacional*

---

## 🚀 FASE 2: MANIPULAÇÃO DE DADOS E ESCALA (NÍVEL 2)

### 🧺 Desafio 4: O Carrinho de Compras Inteligente
**Objetivo:** Praticar Acumuladores e ID Incremental.

1. Crie um array vazio chamado `carrinho`.
2. Capture o nome e o preço de **3 produtos**.
3. Para cada produto, gere um `id` automático: `id: carrinho.length + 1`.
4. Guarde cada um no formato: `{ id, nome, preco }`.
5. **Diferencial de Qualidade:** Ao final, mostre o objeto inteiro via `console.table`.
6. **Extra:** Tente somar os 3 preços e mostrar o "Total da Compra".

### 🎓 Desafio 5: O Sistema de Notas com "Early Return"
**Objetivo:** Praticar Validação Antecipada e Fluxo Limpo.

1. Peça o **nome** do aluno e **duas notas**.
2. **REGRA FAIL FAST:** Se alguma nota for menor que 0 ou maior que 10, exiba o erro IMEDIATAMENTE e use `return` ou encerre o script. Não pergunte a segunda nota se a primeira estiver errada!
3. Se as notas forem válidas, calcule a média.
4. Classifique:
    - Média >= 7: "Aprovado"
    - Média < 7: "Recuperação"
5. **Higiene de Código:** Não use um `else` gigante. Faça a validação no topo e o código principal solto abaixo.

### 🛡️ Desafio 6: Validador de Acesso de Segurança
**Objetivo:** Praticar Operadores Lógicos complexos (`&&`, `||`, `!`).

1. Peça ao usuário: **Idade**, **Tem Autorização (s/n)** e **É VIP (s/n)**.
2. Regra de Entrada: O usuário só pode entrar se:
    - (For maior de 18 anos **OU** tiver autorização dos pais) **E** o local não estiver lotado (assuma que lotação é `false` fixo por enquanto).
3. **Desafio:** Se ele for **VIP**, ele entra independente da idade ou autorização.
4. Exiba: "Acesso Permitido" ou "Acesso Negado".
5. **Nomes Semânticos:** Use `podeEntrar`, `ehMaiorDeIdade`, `temAutorizacao`.

---

### 🚀 Como entregar (Fase 2):
Crie os arquivos na pasta `ATIVIDADES/04/` e siga as boas práticas do seu plano de voo.
Ao terminar, use o comando:
`git add . && git commit -m "feat(desafios): iniciando fase 2 de logica" && git push`
