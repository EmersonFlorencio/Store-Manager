const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const productsServices = require('../../../src/services/products.service');
const productMock = require('../../mocks/mock.products');

describe('Teste referente a Camada Service', function () {
  afterEach(function () {
    sinon.restore();
  })

  it('testa se a função "getAllProducts" lista todos os produtos da Loja', async function () {
    sinon.stub(productsModel, "findAll").resolves(productMock);

    const response = await productsServices.getAllProducts();

    expect(response).to.be.deep.equal(productMock);
  });


  it('testa a função "productById" retorna somente um produto', async function () {

    sinon.stub(productsModel, 'findById').resolves(productMock);
  
    const result = await productsServices.productById(1);

    expect(result.message).to.be.deep.equal(productMock);
  })
})