# 🤖 QWEN CODE — Configuração do Projeto

Esta pasta contém arquivos de configuração e documentação para o assistente Qwen Code.

---

## 📁 Estrutura

```
.qwen/
├── README.md           # Este arquivo — visão geral da configuração
├── skills/             # Skills especializadas disponíveis
│   └── planejador.md   # Skill de orquestração de tarefas complexas
└── QWEN.md             # (Opcional) Configurações específicas do projeto
```

---

## 🛠️ Skills Disponíveis

### `planejador` — Orquestração de Tarefas Complexas

**Propósito:** Gerenciar tarefas multi-etapas através de um fluxo unificado de planejamento e execução.

**Fluxo:**
```
INTAKE → CLARIFY (se ambíguo) → PLAN → EXECUTE → VERIFY
```

**Quando é ativada:**
- Tarefas com 3+ arquivos
- Requisições ambíguas
- Mudanças estruturais no código
- Integrações com serviços externos

**Documentação completa:** [`skills/planejador.md`](./skills/planejador.md)

---

## 📋 Como Usar

### Para o Usuário

1. **Tarefas simples:** Apenas peça — execução direta
   ```
   "Cria uma função que valida email"
   ```

2. **Tarefas complexas:** O planejador será ativado automaticamente
   ```
   "Implementa autenticação OAuth2"
   → Você receberá perguntas de esclarecimento
   → Um plano será apresentado
   → Você aprova com "GO"
   → Execução começa
   ```

3. **A qualquer momento:** Peça para ver o plano
   ```
   "faça um plano primeiro"
   → Ativa modo planejamento
   ```

---

## 🔧 Configurações Opcionais

### Criar `QWEN.md` para configurações específicas

Se quiser personalizar o comportamento do Qwen Code para este projeto:

```markdown
## Configurações do Projeto

### Stack Principal
- Linguagem: JavaScript/TypeScript
- Framework: Node.js + Express
- Banco: PostgreSQL

### Convenções
- Nomenclatura: camelCase para variáveis, PascalCase para classes
- Idioma do código: PT-BR (comentários, variáveis, commits)

### Git
- Branch strategy: feature/* → develop → main
- Conventional Commits: PT-BR

### Testes
- Framework: Jest
- Coverage mínimo: 80%
```

---

## 📚 Protocolo de Engenharia

Este projeto segue o **Protocolo de Engenharia QWEN v2.0**.

Principais princípios:
- ✅ Clareza > Inteligência
- ✅ Consistência > Preferência
- ✅ Explícito > Implícito
- ✅ Fail Fast (em ambiguidade, perguntar)

---

## 🚀 Próximos Passos

1. ✅ Skill `planejador` implementada
2. ⏳ (Opcional) Criar `QWEN.md` com configurações específicas
3. ⏳ (Opcional) Adicionar mais skills em `skills/`

---

**Dúvidas?** Peça para o Qwen Code explicar qualquer parte da configuração!
