export class CarrinhoPage {
  constructor(page) {
    this.page = page;
  }

  async abrirCarrinho() {
    await this.page.getByRole('link', {
      name: /carrinho/i,
    }).click();
  }

  async aplicarCupom(codigoCupom) {
    await this.page.locator('#campo-cupom').fill(codigoCupom);

    await this.page.getByRole('button', {
      name: 'Aplicar cupom',
      exact: true,
    }).click();
  }

  subtotal() {
    return this.page.locator('[data-valor="subtotal"]');
  }

  desconto() {
    return this.page.locator('[data-valor="desconto"]');
  }

  frete() {
    return this.page.locator('[data-valor="frete"]');
  }

  total() {
    return this.page.locator('[data-valor="total"]');
  }

  avisoFrete() {
    return this.page.locator('.aviso-frete');
  }

}