
import { test, expect } from '@playwright/test'
import { pedidoBase } from '../../fixtures/pedidos.js'

test.describe('API - POST /api/pedidos', () => {
  test('CT-API-001 - Deve aceitar pedido com 5 unidades do produto', async ({ request }) => {
    const resposta = await request.post('/api/pedidos', {
      data: pedidoBase,
      headers: { 'Content-Type': 'application/json' }
    });

    expect(
      resposta.status(),
      `Status HTTP: esperado 201 Created, recebido HTTP ${resposta.status()}.`
    ).toBe(201);

    const corpo = await resposta.json()

    expect(
      corpo.cliente.nome,
      `Nome do cliente: esperado "Maria Silva", recebido "${corpo.cliente.nome}".`
    ).toBe('Maria Silva')

    expect(
      corpo.itens,
      `Quantidade de itens: esperado 1, recebido ${corpo.itens.length}.`
    ).toHaveLength(1)

    expect(
      corpo.itens[0].produtoId,
      `ID do produto: esperado "P005", recebido "${corpo.itens[0].produtoId}".`
    ).toBe('P005')

    expect(
      corpo.itens[0].quantidade,
      `Quantidade do produto P005: esperado 5, recebido ${corpo.itens[0].quantidade}.`
    ).toBe(5)
  })

  test('CT-API-002 - Deve rejeitar pedido com 6 unidades do produto', async ({ request }) => {
    const pedidoInvalido = {
      ...pedidoBase,
      itens: [{ produtoId: 'P005', quantidade: 6 }]
    };

    const resposta = await request.post('/api/pedidos', {
      data: pedidoInvalido,
      headers: { 'Content-Type': 'application/json' }
    })

    expect(
      resposta.status(),
      `Status HTTP: esperado 422 Unprocessable Entity para quantidade acima do limite, recebido HTTP ${resposta.status()}.`
    ).toBe(422)

    const corpo = await resposta.json();

    expect(
      corpo.codigo,
      `Código de erro: esperado "QUANTIDADE_MAXIMA_EXCEDIDA", recebido "${corpo.codigo}".`
    ).toBe('QUANTIDADE_MAXIMA_EXCEDIDA')
  })
})