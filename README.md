# Teste Técnico QA — Verzel

## Sobre o projeto

Este repositório reúne as entregas do teste técnico de QA, incluindo elaboração de cenários com base na documentação, testes manuais e exploratórios, registro de defeitos e automação de testes com Playwright e JavaScript.

O objetivo é validar as regras de negócio relacionadas a cupons de desconto, frete grátis, cálculo de valores e limite de quantidade de produtos por pedido, tanto na interface web quanto na API.

## Entregas

### 1. Cenários de teste

Os cenários foram elaborados com base na documentação e nos critérios de aceitação da aplicação.

* [Cenários em Gherkin — Cupom de desconto e frete grátis](documentos_testes/cupomDescontoFreteGratis.feature)

O uso de Gherkin permite descrever os comportamentos esperados de forma estruturada e facilita a comunicação entre as áreas envolvidas no desenvolvimento e nos testes.

### 2. Execução dos testes manuais e exploratórios

Os documentos abaixo apresentam as execuções realizadas, os resultados obtidos e as evidências coletadas durante os testes.

* [Execução dos cenários](documentos_testes/Execução%20dos%20cenários.pdf) — documentação da execução dos cenários, com seus respectivos resultados e evidências.
* [Relatório de Sessão - API](documentos_testes/Relatório%20de%20Sessão%20-%20API.pdf) — registro da sessão de testes exploratórios da API.
* [Relatório de Sessão - Cupom de desconto e frete grátis](documentos_testes/Relatório%20de%20Sessão%20-%20Cupom%20de%20desconto%20e%20frete%20grátis.pdf) — registro dos testes exploratórios das funcionalidades de cupom e frete grátis.

### 3. Relatório de bugs

* [Bugs encontrados](documentos_testes/Bug%20encontrados.pdf) — documentação dos defeitos identificados durante os testes, com as informações e evidências registradas.

### 4. Automação de testes com Playwright

A automação foi desenvolvida utilizando JavaScript e Playwright, com testes de interface web (UI) e de API.

Os cenários automatizados estão organizados da seguinte forma:

| Arquivo                     | Objetivo                                                         |
| --------------------------- | ---------------------------------------------------------------- |
| `tests/ui/cupom.spec.js`    | Validar o comportamento de cupons de desconto.                   |
| `tests/ui/frete.spec.js`    | Validar as regras de cálculo do frete.                           |
| `tests/api/pedidos.spec.js` | Validar a criação de pedidos e as regras de quantidade pela API. |

A estrutura também utiliza:

* **`pages/`** — Page Objects que centralizam interações com os elementos da interface.
* **`fixtures/`** — dados reutilizáveis para os testes, incluindo produtos e pedidos.
* **`playwright.config.js`** — configuração do Playwright e endereço-base da aplicação.

## Tecnologias utilizadas

* JavaScript
* Node.js
* npm
* Playwright
* Gherkin

## Como executar a automação

### Pré-requisitos

* Node.js instalado.
* npm disponível no terminal.
* Git instalado para clonar o repositório.

### 1. Clonar o repositório

```bash
git clone https://github.com/EliseuXavier02/testeTecnicoVerzel.git
cd testeTecnicoVerzel
```

### 2. Instalar as dependências

```bash
npm ci
```

O comando instala as dependências definidas no `package-lock.json`.

### 3. Instalar os navegadores do Playwright

```bash
npx playwright install
```

### 4. Executar todos os testes automatizados

```bash
npx playwright test
```

### 5. Executar somente os testes de interface (UI)

```bash
npx playwright test tests/ui
```

### 6. Executar somente os testes da API

```bash
npx playwright test tests/api
```

### 7. Executar um arquivo de teste específico

Exemplo para o teste de cupons:

```bash
npx playwright test tests/ui/cupom.spec.js
```

Exemplo para o teste de pedidos pela API:

```bash
npx playwright test tests/api/pedidos.spec.js
```

### 8. Consultar o relatório HTML

Após executar os testes, utilize:

```bash
npx playwright show-report
```

O relatório apresenta os resultados da execução, permitindo identificar testes aprovados, reprovados e informações úteis para investigar falhas.

## Estrutura do projeto

```text
testeTecnicoVerzel/
├── documentos_testes/
│   ├── Bug encontrados.pdf
│   ├── cupomDescontoFreteGratis.feature
│   ├── Execução dos cenários.pdf
│   ├── Relatório de Sessão - API.pdf
│   └── Relatório de Sessão - Cupom de desconto e frete grátis.pdf
├── fixtures/
│   ├── pedidos.js
│   └── produtos.js
├── pages/
│   ├── carrinhoPage.js
│   └── produtosPage.js
├── tests/
│   ├── api/
│   │   └── pedidos.spec.js
│   └── ui/
│       ├── cupom.spec.js
│       └── frete.spec.js
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.js
└── README.md
```

As pastas `node_modules/`, `playwright-report/` e `test-results/` são omitidas dessa representação por serem diretórios de dependências ou resultados gerados durante a execução.

## Observações

* Os testes automatizados utilizam o endereço-base configurado em `playwright.config.js`.
* Os documentos de execução manual e exploratória estão separados dos arquivos de automação.
* Os defeitos encontrados estão documentados no relatório de bugs.
* Os relatórios HTML e os resultados de execução são gerados pelo Playwright conforme a configuração do projeto.
