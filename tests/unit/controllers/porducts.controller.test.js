const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;

const productsServices = require('../../../src/services/products.service');
const productController = require('../../../src/controllers/products.controller');
const productMock = require('../../mocks/mock.products');

chai.use(sinonChai);


describe('testa as funções da rota products na a camada Controller', function () {

  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('testa se a função "getAllProducts" retorna corretamente um produto', async function () {
    // Arrange
    sinon.stub(productsServices, 'getAllProducts').resolves(productMock);
    // Act
    await productController.getAllProducts(req, res);

    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithExactly(productMock);
  })


  it('testa se a função "getProductById" retorna corretamente um produto', async function () {
    // Arrange
    req.params = { id: 1 };
    sinon.stub(productsServices, 'productById').resolves({status:200, message: productMock[0]});
    // Act
    await productController.getProductById(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productMock[0]);
  })
});
