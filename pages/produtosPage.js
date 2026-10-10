export class ProdutosPage {
  constructor(page) {
    this.page = page
  }

async adicionarProduto(idProduto) {
  const produto = this.page
    .locator('.produto-corpo')
    .filter({
      has: this.page.locator(`#nome-${idProduto}`),
    });

  await produto
    .getByRole('button', {
      name: 'Adicionar ao carrinho',
    })
    .click()
  }

}