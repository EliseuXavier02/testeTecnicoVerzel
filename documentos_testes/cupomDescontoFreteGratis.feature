# languague: pt
Funcionalidade: Cupom de desconto e frete grátis

  Como cliente da Versel Store
  Quero aplicar um cupom de desconto e ganhar frete grátis em compras maiores
  Para pagar menos nas minhas compras

  Regra: Aplicação do cupom de desconto

    Cenário: Aplicar de 10% desconto com o BEMVINDO10
      Dado que o cliente possui produtos no carrinho
      Quando o cliente acessar o seu carrinho 
      E preenche o campo Cupom de desconto com "BEMVINDO10"
      E clica em "Aplicar cupom"
      Então deve ser aplicado um desconto de 10% sobre o subtotal dos produtos
      
    Cenário: Aceitar o cupom independentemente de maiúsculas, minúsculas e espaços 
no início e no fim do código do cupom
      Dado que o cliente possui produtos no carrinho
      Quando o cliente aplica o cupom BEMVINDO10
      E o cupom digitado possuir letra minúsculas, maiúsculas e espaços no inicio e ou 
no fim do código do cupom
      Então deve ser aplicado um desconto de 10% sobre o subtotal dos produtos

    Cenário: Rejeitar cupom inexistente
      Dado que o cliente possui produtos no carrinho 
      Quando o cliente aplica um cupom inválido  
      Então deve ser exibida a mensagem "Cupom inválido." 
      E nenhum desconto deve ser aplicado

    Cenário: Rejeitar cupom fora da validade
      Dado que o cliente possui produtos no carrinho
      Quando o cliente aplica o cupom "VERAO2026"
      Então deve ser exibida a mensagem "Cupom expirado." 
      E nenhum desconto deve ser aplicado
    
    Cenário: Permitir apenas um cupom aplicado por vez
      Dado que o cliente possui produtos no carrinho 
      Qunado o cliente aplicar um cupom
      Então o sistema não dever permitir ser adcionado outro cupom
    
    Cenário: Permitir trocar o cupom após remover o cupom atual
      Dado que o cliente possui produtos no carrinho
      E o cliente aplicou um cupom
      Quando o cliente remove o cupom
      E aplica outro cupom válido
      Então somente o novo cupom deve permanecer aplicado

  Regra: Frete grátis

    Cenário: Conceder frete grátis a partir de R$ 200,00
      Dado que o cliente possui produtos no carrinho
      E o subtotal dos produtos for maior ou igual a R$200,00
      Quando o cliente acessa o carrinho
      Então o frete deve ser grátis

    Cenário: Cobrar frete para subtotal abaixo de R$ 200,00
      Dado que o cliente possui produtos no carrinho
      E o subtotal dos produtos for menor que R$200,00
      Quando o cliente acessa o carrinho
      Então o frete deve ser de R$ 19,90

    Cenário: Informar quanto falta para atingir o frete grátis
      Dado que o cliente possui produtos no carrinho
      E o subtotal dos produtos for menor que R$200,00
      Quando o cliente acessa o carrinho
      Então o frete deve ser de R$ 19,90 
      E o sistema deve informar quanto falta para o frete grátis
    
    Cenário: Conceder frete grátis considerando o subtotal antes do desconto
      Dado que o cliente possui produtos no carrinho
      E o subtotal dos produtos é de R$ 210,00
      Quando o cliente aplica o cupom "BEMVINDO10"
      Então deve ser aplicado um desconto de R$ 21,00
      E o frete deve ser grátis
    
  Regra: Desconto aplicado somente sobre o subtotal dos produtos
    
    Cenário: Não aplicar desconto sobre o valor do frete
      Dado que o cliente possui produtos no carrinho
      E o subtotal dos produtos menor que R$200,00
      E o frete é de R$ 19,90
      Quando o cliente aplica o cupom "BEMVINDO10"
      Então o desconto dever ser aplicado apenas no valor do subtotal dos produtos
      E o valor do frete deve permanecer em R$ 19,90
    
  Regra: Limite de quantidade de produtos

    Cenário: Permitir até 5 unidades do mesmo produto
      Dado que o cliente está adicionando o mesmo produto ao pedido
      Quando o cliente tentar adcionar mais de 5 unidade do mesmo produto
      Então o sistema não deve permitir ser adcionado
  
  Regra: Arredondamento dos valores

    Cenário: Arredondar os valores monetários para duas casas decimais
      Dado que o sistema realiza cálculos de valores monetários
      Quando um resultado possuir mais de duas casas decimais
      Então o sistema deve arredondar o resultado para duas casas decimais
      E deve utilizar o arredondamento matemático para determinar o valor final