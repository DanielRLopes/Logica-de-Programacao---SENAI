# SKILL: PLANEJADOR (UNIFICADO)

**Versão:** 1.0  
**Tipo:** Orquestração de Tarefas Complexas  
**Status:** Ativo  

---

## 📋 PROPÓSITO

Orquestrar tarefas complexas através de um fluxo unificado de:
1. **Coleta de contexto** (intake)
2. **Esclarecimento de ambiguidades** (clarify)
3. **Apresentação de plano** (plan)
4. **Execução estruturada** (execute)
5. **Validação pós-execução** (verify)

Esta skill **unifica** as responsabilidades de `planejador` e `exit_plan_mode` em um único fluxo coeso.

---

## 🎯 QUANDO ATIVAR

| Gatilho | Exemplo | Ação |
|---------|---------|------|
| Tarefa com 3+ arquivos | "Crie uma API completa" | → Ativar fluxo completo |
| Requisição ambígua | "Melhora a performance" | → CLARIFY primeiro |
| Mudança estrutural | "Refatora o sistema de auth" | → Plano formal necessário |
| Integração externa | "Adiciona pagamento com Stripe" | → Plano + riscos |
| Tarefa simples (1-2 arquivos) | "Cria um utilitário de data" | → Executar direto (sem plano formal) |

---

## 🔄 FLUXO OPERACIONAL

```
┌─────────────────────────────────────────────────────────────────┐
│                    CICLO DE VIDA COMPLETO                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐                                               │
│  │ 1. INTAKE    │ ← Analisar requisição                        │
│  │              │   • Classificar complexidade                  │
│  │              │   • Detectar ambiguidades                     │
│  └──────┬───────┘   • Identificar tipo (código/infra/pesquisa) │
│         │                                                       │
│         ▼                                                       │
│  ┌──────────────┐                                               │
│  │ 2. CLARIFY   │ ← ask_user_question (SE ambíguo)             │
│  │              │   • Perguntar stack preferida                 │
│  │              │   • Perguntar convenções do projeto           │
│  │              │   • Validar pré-requisitos                    │
│  └──────┬───────┘                                               │
│         │                                                       │
│         ▼                                                       │
│  ┌──────────────┐                                               │
│  │ 3. PLAN      │ ← exit_plan_mode                             │
│  │              │   • Apresentar estrutura proposta             │
│  │              │   • Listar comandos necessários               │
│  │              │   • Alertar riscos                            │
│  │              │   • Definir critérios de sucesso              │
│  └──────┬───────┘                                               │
│         │                                                       │
│         ▼                                                       │
│  ┌──────────────┐                                               │
│  │ 4. EXECUTE   │ ← todo_write + ferramentas                   │
│  │              │   • Criar/modificar arquivos                  │
│  │              │   • Executar comandos shell                   │
│  │              │   • Reportar progresso                        │
│  └──────┬───────┘                                               │
│         │                                                       │
│         ▼                                                       │
│  ┌──────────────┐                                               │
│  │ 5. VERIFY    │ ← Validação pós-execução                     │
│  │              │   • Verificar arquivos criados                │
│  │              │   • Rodar testes se aplicável                 │
│  │              │   • git status                                │
│  │              │   • Sugerir commit                            │
│  └──────────────┘                                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📊 MATRIZ DE COMPLEXIDADE

### Baixa Complexidade
**Critérios:**
- 1-2 arquivos
- Requisitos claros
- Sem dependências externas

**Fluxo:** `INTAKE → EXECUTE`

**Exemplo:**
```
Usuário: "Cria um arquivo utils.js com funções de data"

Eu:
  → Analiso: simples, claro
  → Executo direto com write_file
  → Confirmo conclusão
```

---

### Média Complexidade
**Critérios:**
- 3-5 arquivos
- Múltiplas camadas (controller, service, model)
- Dependências a instalar

**Fluxo:** `INTAKE → PLAN → EXECUTE`

**Exemplo:**
```
Usuário: "Adiciona endpoint de usuários na API"

Eu:
  → Analiso: múltiplos arquivos
  → Apresento plano (exit_plan_mode)
  → Aguardo "GO"
  → Executo com todo_write
```

---

### Alta Complexidade
**Critérios:**
- 6+ arquivos
- Ambiguidades detectadas
- Integrações externas
- Riscos significativos

**Fluxo:** `INTAKE → CLARIFY → PLAN → EXECUTE → VERIFY`

**Exemplo:**
```
Usuário: "Implementa sistema de autenticação JWT"

Eu:
  → Analiso: complexo, ambíguo
  → CLARIFY: "Qual stack? Qual banco? Refresh token?"
  → PLAN: Apresento estrutura completa + riscos
  → EXECUTE: todo_write + execução faseada
  → VERIFY: testes, git status, sugiro commit
```

---

## 🛠️ FERRAMENTAS POR FASE

| Fase | Ferramentas Primárias | Ferramentas Secundárias |
|------|----------------------|------------------------|
| **INTAKE** | (análise interna) | `read_file`, `list_directory` |
| **CLARIFY** | `ask_user_question` | — |
| **PLAN** | `exit_plan_mode` | — |
| **EXECUTE** | `todo_write`, `write_file`, `edit` | `run_shell_command`, `create_directory` |
| **VERIFY** | `run_shell_command`, `list_directory` | `read_file`, `glob` |

---

## 📝 TEMPLATES

### Template de CLARIFY (ask_user_question)

```javascript
ask_user_question({
  questions: [{
    question: "<Pergunta clara e específica?>",
    header: "<Título curto, max 12 chars>",
    options: [
      {
        label: "<Opção 1>",
        description: "<O que esta opção significa/implica>"
      },
      {
        label: "<Opção 2>",
        description: "<O que esta opção significa/implica>"
      },
      {
        label: "<Opção 3>",
        description: "<O que esta opção significa/implica>"
      }
    ],
    multiSelect: false
  }]
})
```

---

### Template de PLAN (exit_plan_mode)

```markdown
## 🎯 Objetivo
<1-2 frases descrevendo o que será feito>

## 📁 Estrutura Proposta

### Criar
- `caminho/arquivo1.js` — descrição do propósito
- `caminho/arquivo2.js` — descrição do propósito

### Modificar
- `caminho/arquivo3.js` — o que será alterado

## ⚙️ Comandos Necessários
```bash
npm install <pacotes>
# ou
pip install <pacotes>
```

## ⚠️ Riscos e Considerações
- ⚠️ <Risco 1: o que pode quebrar>
- ⚠️ <Risco 2: dependências externas>
- ⚠️ <Risco 3: mudanças irreversíveis>

## ✅ Critérios de Sucesso
- [ ] <Critério verificável 1>
- [ ] <Critério verificável 2>
- [ ] <Critério verificável 3>

---
**Responda "GO" para executar ou peça ajustes no plano.**
```

---

### Template de EXECUTE (todo_write)

```javascript
todo_write({
  todos: [
    { id: "1", content: "<Tarefa 1 descritiva>", status: "in_progress" },
    { id: "2", content: "<Tarefa 2 descritiva>", status: "pending" },
    { id: "3", content: "<Tarefa 3 descritiva>", status: "pending" },
    { id: "4", content: "<Tarefa 4 descritiva>", status: "pending" }
  ]
})

// Após cada tarefa:
todo_write({
  todos: [
    { id: "1", content: "<Tarefa 1>", status: "completed" },
    { id: "2", content: "<Tarefa 2>", status: "in_progress" },
    ...
  ]
})
```

---

### Template de VERIFY

```markdown
## ✅ Execução Completa

**Arquivos criados:**
- `caminho/arquivo1.js`
- `caminho/arquivo2.js`

**Arquivos modificados:**
- `caminho/arquivo3.js`

**Comandos executados:**
- `npm install ...`

**Validações:**
- ✅ Arquivos existem
- ✅ Testes passando (se aplicável)
- ✅ Sem erros de lint/typecheck

**Commit sugerido:**
```bash
git add -A && git commit -m "<tipo>(<escopo>): <descrição>"
```

Executar commit?
```

---

## 🚨 HANDLERS DE ERRO

### Erro de Sintaxe em Código
```
1. Re-read file para entender contexto completo
2. Identificar erro exato (mensagem do compiler/linter)
3. Re-edit com correção + contexto adicional
4. Validar com typecheck/lint
5. Reportar: "Erro corrigido: <descrição>"
```

### Erro de Comando Shell
```
1. Capturar mensagem de erro completa
2. Explicar causa raiz para usuário
3. Sugerir alternativa ou correção
4. Aguardar nova instrução
```

### Erro de Permissão
```
1. Notificar usuário imediatamente
2. Explicar permissão necessária
3. Sugerir solução (sudo, chmod, etc)
4. Aguardar confirmação para retry
```

### Ambiguidade Durante Execução
```
1. PARAR execução imediatamente
2. ask_user_question para esclarecer
3. Nunca adivinhar comportamento
4. Atualizar plano se necessário
```

---

## ❌ ANTI-PADRÕES (NUNCA FAZER)

| Anti-padrão | Por que é ruim | Alternativa |
|-------------|----------------|-------------|
| Pular fase CLARIFY em tarefa ambígua | Gera retrabalho | Sempre perguntar se incerto |
| Executar sem plano em tarefa complexa | Usuário não sabe o que vem | exit_plan_mode sempre |
| Commitar sem revisão | Pode incluir erros | git diff antes de commit |
| Esconder riscos do usuário | Quebra confiança | Listar todos os ⚠️ no plano |
| Usar `any` ou tipos genéricos | Perde type safety | Tipos específicos sempre |
| Console.log residual | Poluição de código | Remover antes de commit |
| Mutar estado diretamente | Bugs sutis | Usar imutabilidade |

---

## 📋 CHECKLIST DE CONTEXTO MÍNIMO

Antes de iniciar QUALQUER tarefa, validar:

```
[ ] Stack/tecnologia definida?
[ ] Estrutura do projeto conhecida (ou explorada)?
[ ] Convenções de nomenclatura claras?
[ ] Testes necessários?
[ ] Git workflow definido?
[ ] Variáveis de ambiente necessárias documentadas?
```

Se algum item estiver marcado como ❌ → **CLARIFY primeiro**

---

## 🎯 EXEMPLOS DE USO

### Exemplo 1: Tarefa Simples
```
Usuário: "Cria uma função que soma dois números"

Fluxo: INTAKE → EXECUTE

Eu:
  → write_file ou edit direto
  → Confirmo: "Função criada em utils/math.js"
```

---

### Exemplo 2: Tarefa Média
```
Usuário: "Adiciona rota de DELETE /usuarios/:id"

Fluxo: INTAKE → PLAN → EXECUTE

Eu:
  → exit_plan_mode:
    - Modificar: routes/usuarios.js, controllers/usuario.controller.js
    - Criar: (nenhum)
  → Aguardo "GO"
  → todo_write + edit
  → Confirmo conclusão
```

---

### Exemplo 3: Tarefa Complexa
```
Usuário: "Implementa upload de arquivos com S3"

Fluxo: INTAKE → CLARIFY → PLAN → EXECUTE → VERIFY

Eu:
  → CLARIFY: "S3 da AWS ou compatível? Qual região? Bucket existente?"
  → exit_plan_mode:
    - Criar: services/upload.service.js, middlewares/upload.middleware.js
    - Instalar: aws-sdk, multer
    - Riscos: Credenciais AWS, custos de transferência
  → Aguardo "GO"
  → todo_write + write_file + run_shell_command
  → VERIFY: testar upload, git status, sugerir commit
```

---

## 🔗 INTEGRAÇÃO COM GIT

Sempre que modificar código:

```bash
# Antes de começar
git status

# Após execução
git diff --stat

# Sugerir commit message
git add -A && git commit -m "<tipo>(<escopo>): <descrição>"

# Push se aprovado
git push
```

**Tipos de commit (Conventional Commits PT-BR):**
- `feat` — Nova funcionalidade
- `fix` — Correção de bug
- `refactor` — Refatoração sem mudança de comportamento
- `docs` — Documentação
- `chore` — Configurações, dependências
- `perf` — Melhorias de performance
- `test` — Testes

---

## 📈 MÉTRICAS DE SUCESSO

| Métrica | Alvo |
|---------|------|
| Retrabalho por ambiguidade | < 5% das tarefas |
| Tarefas com plano aprovado | 100% das complexas |
| Erros de commit (segredos, etc) | 0% |
| Satisfação do usuário | Feedback positivo |

---

## 🧪 TESTES DA SKILL

### Cenário de Teste 1: Ambiguidade Detectada
```
Input: "Melhora a performance do site"
Expected: CLARIFY com perguntas sobre:
  - Qual métrica? (LCP, FCP, TTI?)
  - Qual página? (home, todas?)
  - Orçamento para ferramentas?
```

### Cenário de Teste 2: Plano Completo
```
Input: "Cria sistema de comentários"
Expected: exit_plan_mode com:
  - Estrutura de arquivos
  - Comandos npm/pip
  - Riscos (spam, moderação)
  - Critérios de sucesso verificáveis
```

### Cenário de Teste 3: Execução com Validação
```
Input: "GO" (após plano)
Expected:
  - todo_write visível
  - Progresso reportado
  - VERIFY com git status
  - Sugestão de commit
```

---

## 📚 REFERÊNCIAS

- [Conventional Commits](https://www.conventionalcommits.org/)
- [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)
- Protocolo de Engenharia QWEN v2.0 (§12 - Governança da IA)

---

**Última atualização:** 2026-03-19  
**Autor:** Qwen Code  
**Status:** ✅ Implementada e Ativa
