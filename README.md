# Teste Técnico QA — Verzel

## Sobre o projeto

Este repositório reúne as entregas do teste técnico de QA, incluindo elaboração de cenários de teste com base na documentação, testes manuais e exploratórios, registro de defeitos e automação de testes com Playwright e JavaScript.

O objetivo é validar as regras de negócio relacionadas a cupons de desconto, frete grátis, cálculo dos valores do pedido e limite de quantidade de produtos, tanto na interface web quanto na API.

## Entregas

### 1. Cenários de teste

Cenários elaborados a partir da documentação e dos critérios de aceitação da aplicação.

* [`cupomDescontoFreteGratis.feature`](documentos_testes/cupomDescontoFreteGratis.feature) — cenários descritos em Gherkin para representar os comportamentos esperados das funcionalidades de cupom de desconto e frete grátis.

### 2. Execução dos testes manuais e exploratórios

Documentação das sessões de teste, dos resultados obtidos e das evidências coletadas durante a execução.

* [Execução dos cenários](documentos_testes/Execução%20dos%20cenários.pdf) — registro dos cenários executados, seus resultados e respectivas evidências.
* [Relatório de Sessão - API](documentos_testes/Relatório%20de%20Sessão%20-%20API.pdf) — registro dos testes exploratórios realizados na API.
* [Relatório de Sessão - Cupom de desconto e frete grátis](documentos_testes/Relatório%20de%20Sessão%20-%20Cupom%20de%20desconto%20e%20frete%20grátis.pdf) — registro dos testes exploratórios das funcionalidades de cupom e frete grátis.

### 3. Relatório de bugs

* [Bugs encontrados](documentos_testes/Bug%20encontrados.pdf) — documentação dos defeitos identificados durante os testes, incluindo as evidências coletadas.

### 4. Automação de testes com Playwright

Os testes automatizados foram implementados utilizando Playwright e JavaScript, contemplando testes de interface web (UI) e testes de API.

| Arquivo                     | Objetivo                                                                  |
| --------------------------- | ------------------------------------------------------------------------- |
| `tests/ui/cupom.spec.js`    | Validar a aplicação de cupons de desconto.                                |
| `tests/ui/frete.spec.js`    | Validar as regras de cálculo do frete.                                    |
| `tests/api/pedidos.spec.js` | Validar a criação de pedidos e o limite de quantidade por produto na API. |

A automação utiliza também:

* **`pages/`** — Page Objects para centralizar as interações com a interface.
* **`fixtures/`** — dados reutilizáveis para os testes.
* **`playwright.config.js`** — configuração do Playwright e endereço-base da aplicação.

## Resultados da automação

Durante a execução dos testes automatizados, foram identificados comportamentos da aplicação que divergem dos resultados esperados definidos nos critérios de aceitação e na documentação da API.

Por esse motivo, alguns testes podem apresentar o status **Failed** no relatório do Playwright.

Essas reprovações não significam, por si só, que a automação esteja incorreta. Quando o teste está corretamente implementado e a aplicação retorna um resultado diferente do esperado, a falha evidencia um possível defeito no sistema.

As falhas identificadas devem ser analisadas em conjunto com os resultados obtidos, as mensagens de validação e as evidências registradas. Os defeitos confirmados estão documentados no relatório de bugs.

Os testes que evidenciam defeitos conhecidos são mantidos como falhas reais, sem ocultar ou alterar o resultado esperado, preservando a rastreabilidade entre os cenários de teste e os problemas encontrados.

### Como interpretar os resultados

* **Passed:** o comportamento observado corresponde ao resultado esperado.
* **Failed:** uma ou mais validações não corresponderam ao resultado esperado; a causa deve ser analisada para identificar se está relacionada à aplicação ou à automação.
* **Defeito conhecido:** quando confirmado, o comportamento divergente está registrado na documentação de bugs.

O objetivo da automação é verificar os comportamentos da aplicação, identificar divergências e fornecer evidências que apoiem a análise dos defeitos.

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

### 3. Instalar os navegadores do Playwright

```bash
npx playwright install
```

### 4. Executar todos os testes

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

### 7. Executar um arquivo específico

Teste de cupons:

```bash
npx playwright test tests/ui/cupom.spec.js
```

Teste de frete:

```bash
npx playwright test tests/ui/frete.spec.js
```

Teste de pedidos pela API:

```bash
npx playwright test tests/api/pedidos.spec.js
```

### 8. Consultar o relatório HTML

```bash
npx playwright show-report
```

O relatório apresenta os resultados dos testes, as etapas executadas e as mensagens de falha, auxiliando na investigação dos comportamentos divergentes.

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

As pastas `node_modules/`, `playwright-report/` e `test-results/` são geradas localmente e não precisam ser versionadas no GitHub.

## Considerações finais

As entregas reúnem os cenários definidos, as execuções manuais e exploratórias, as evidências coletadas, os defeitos identificados e os testes automatizados.

A automação complementa os testes manuais ao permitir a execução repetível das validações e facilitar a identificação de divergências entre o comportamento observado e o esperado.
