const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai')

const productsController = require('../../../src/controllers/product.controller')
const { productService } = require('../../../src/services');
const { productsMock, productError } = require('./mock/products.controllers.mock')

chai.use(sinonChai);

describe('Testa o controller de products', function () {
  it('buscando todos os produtcs', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getAllProducts')
      .resolves({ type: null, message: productsMock })

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock);
  })
  it('retorna status 200 e objeto com resultado', async function () {
    const res = {};
    const req = { params: { productId: 1 }, body: {} };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'isProductsExist')
      .resolves({ type: null, message: productsMock });

    await productsController.getProductId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock);
  });

  it('retorna status 404 e objeto com erro', async function () {
    const res = {};
    const req = { params: { productId: 999 }, body: {} };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'isProductsExist')
      .resolves({
        type: 'PRODUCT_NOT_FOUND', message: 'Product not found'
      });

    await productsController.getProductId(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith();
  });
  afterEach(sinon.restore);
});


