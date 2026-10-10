
import { test, expect } from '@playwright/test'
import { ProdutosPage } from '../../pages/produtosPage.js'
import { CarrinhoPage } from '../../pages/carrinhoPage.js'
import { produtos } from '../../fixtures/produtos.js'

test.describe('CT-008 - Validar frete grátis a partir de R$ 200,00', () => {
  test('deve oferecer frete grátis para subtotal de R$ 200,00', async ({ page }) => {
    const produtosPage = new ProdutosPage(page)
    const carrinhoPage = new CarrinhoPage(page)

    await page.goto('/')

    await test.step('Adicionar duas mochilas de R$ 100,00', async () => {
      await produtosPage.adicionarProduto(produtos.mochila.id)
      await produtosPage.adicionarProduto(produtos.mochila.id)
    })

    await test.step('Abrir o carrinho e validar o subtotal', async () => {
      await carrinhoPage.abrirCarrinho()

      await expect(carrinhoPage.subtotal()).toHaveText('R$ 200,00')
    })

    await test.step('Validar frete grátis para subtotal de R$ 200,00', async () => {
      const freteRecebido = await carrinhoPage.frete().innerText()

      expect(
        freteRecebido,
        `Esperado frete de R$ 0,00 para subtotal de R$ 200,00, recebido ${freteRecebido}.`
      ).toBe('R$ 0,00')
    })
  })

  test('deve oferecer frete grátis para subtotal acima de R$ 200,00', async ({ page }) => {
    const produtosPage = new ProdutosPage(page)
    const carrinhoPage = new CarrinhoPage(page)

    await page.goto('/')

    await test.step('Adicionar duas mochilas e uma camiseta', async () => {
      await produtosPage.adicionarProduto(produtos.mochila.id)
      await produtosPage.adicionarProduto(produtos.mochila.id)
      await produtosPage.adicionarProduto(produtos.camiseta.id)
    })

    await test.step('Abrir o carrinho e validar os valores', async () => {
      await carrinhoPage.abrirCarrinho()

      await expect(carrinhoPage.subtotal()).toHaveText('R$ 259,90')
      await expect(carrinhoPage.frete()).toHaveText('Grátis')
    })
  })
})