
import { test, expect } from '@playwright/test'
import { ProdutosPage } from '../../pages/produtosPage.js'
import { CarrinhoPage } from '../../pages/carrinhoPage.js'
import { produtos, cupons } from '../../fixtures/produtos.js'

test.describe('CT-001 - Aplicar desconto de 10%', () => {
  test('Deve aplicar 10% sobre o subtotal dos produtos', async ({ page }) => {
    const produtosPage = new ProdutosPage(page)
    const carrinhoPage = new CarrinhoPage(page)

    await test.step('Acessar a loja e adicionar produtos', async () => {
      await page.goto('/')

      await produtosPage.adicionarProduto(produtos.camiseta.id)
      await produtosPage.adicionarProduto(produtos.bone.id)
    })

    await test.step('Abrir o carrinho e aplicar o cupom', async () => {
      await carrinhoPage.abrirCarrinho()
      await carrinhoPage.aplicarCupom(cupons.valido)
    })

    await test.step('Validar o resumo do pedido', async () => {
      await expect(carrinhoPage.subtotal())
        .toHaveText('R$ 109,80')

      await expect(carrinhoPage.desconto())
        .toHaveText('- R$ 10,98')

      await expect(carrinhoPage.frete())
        .toHaveText('R$ 19,90')

      await expect(carrinhoPage.total())
        .toHaveText('R$ 118,72')
    });

    await test.step('Validar o aviso de frete grátis', async () => {
      await expect(carrinhoPage.avisoFrete())
        .toHaveText('Faltam R$ 90,20 para o frete grátis.')
    })
  })
})