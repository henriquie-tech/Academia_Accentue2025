
# 📌 Academia Accenture 2025 – Testes Automatizados

## 🚀 Visão Geral

Este projeto foi desenvolvido como parte da minha jornada de estudos e prática em Qualidade de Software (QA), com foco em testes automatizados de interface.
**O objetivo é consolidar meus conhecimentos em ferramentas modernas de automação, aplicando boas práticas de QA para criar cenários de teste claros, organizados e reutilizáveis.**

## 🧪 Funcionalidades do Projeto

-  Automação de testes com **Cypress**.

- Escrita de cenários em **Gherkin (Cucumber)**, promovendo clareza e colaboração entre QA, Dev e negócio.

- Geração de dados dinâmicos com **Faker.js**, garantindo massa de teste realista.

- Estrutura **Page Objects** para melhor organização e manutenção do código.

- Separação de cenários **válidos** e **inválidos**, cobrindo tanto fluxos positivos quanto negativos.

- Separação também nas **step definitions** entre válidos e inválidos, garantindo maior legibilidade.
## 📂 Estrutura do Projeto

```javascript
Academia_Accenture2025/
├── cypress.config.js        # Configurações do Cypress
├── cypress.env.json         # Variáveis de ambiente (massa de dados válidos/ inválidos)
├── package.json             # Dependências do projeto
├── cypress/
│   ├── e2e/
│   │   ├── dadosTableValido.feature      # Cenários válidos (Gherkin)
│   │   ├── dadosTableInvalido.feature    # Cenários inválidos (Gherkin)
│   │
│   ├── step-definitions/
│   │   ├── tableValido.cy.js             # Steps de cenários válidos
│   │   ├── tableInvalido.cy.js           # Steps de cenários inválidos
│   │
│   ├── support/
│   │   ├── commands.js                   # Comandos customizados
│   │   ├── pages/
│   │   │   └── webTables.page.js         # Page Object da funcionalidade testada
│   │
│   └── fixtures/
│       └── example.json

```


## ⚙️ Tecnologias Utilizadas


-  **Cypress** – framework de testes E2E.

- **Cucumber (cypress-cucumber-preprocessor)** – escrita dos testes em Gherkin.

- **Faker.js** – geração de dados dinâmicos.

- **JavaScript** – linguagem base.


## ▶️ Como Executar o Projeto

### Clonar o repositório

```bash
git clone https://github.com/seu-usuario/Academia_Accenture2025.git
cd Academia_Accenture2025

```

### Instalar dependências

```bash
  npm install
```

### Executar os testes
 •  Via interface do Cypress:

```bash
  npx cypress open
```

### Ou direto no terminal:

```bash
  npx cypress run
```


## 🎯 Objetivo Pessoal

Este repositório reflete meu compromisso em me tornar um profissional de QA completo, com domínio em:

- Automação de testes.

- Boas práticas de organização de código (Page Objects, comandos customizados, cenários separados).

- Escrita de cenários claros com Gherkin para melhorar a comunicação dentro do time.
