const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const { connection } = require('../../../src/models/connection');
const productMock = require('../../mocks/mock.products');

describe('Teste referente a Camada Model', function () {
  afterEach(function () {
    sinon.restore();
  })

  it('testa se a função "findAll" lista todos os produtos da Loja', async function () {
    sinon.stub(connection, "execute").resolves([productMock]);

    const response = await productsModel.findAll();

    expect(response).to.be.deep.equal(productMock);
  });


  it('testa a função "findById" retorna somente um produto', async function () {

    sinon.stub(connection, 'execute').resolves([[productMock]]);
  
    const result = await productsModel.findById(1);

    expect(result).to.be.deep.equal(productMock);
  })

  it('testa a função "insertProduct" cria um novo produto com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([{insertId: 1}]);
    // Act
    const name = 'Batarangue';
    const products = await productsModel.InsertProduct(name);
    // Assert


    expect(products.id).to.be.deep.equal(1);
  });
});


