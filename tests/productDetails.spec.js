const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails()).toBe('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(2).toBe(Object.keys(productDetails()).length);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof Object.values(productDetails())).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('parameter1', 'parameter2')).not.toEqual(productDetails[0], productDetails[1]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('parameter1', 'parameter2')[0].details.productId).toMatch('123');
    expect(productDetails('parameter1', 'parameter2')[1].details.productId).toMatch('123');
  });
});
