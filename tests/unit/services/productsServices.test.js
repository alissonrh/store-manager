const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai')


chai.use(sinonChai);

const { productService } = require('../../../src/services');
const { productsModels } = require('../../../src/models');

const productsMock = require('./mock/products.service.mock');

describe('Testes da unidade de service de products', function () {
  it('Esta falhando se chamar um id inexistente', async function () {
    sinon.stub(productsModels, 'findById').resolves(undefined);

    const body = { productId: 9999 }
    const error = await productService.isProductsExist(body)

    expect(error.type).to.equal('PRODUCT_NOT_FOUND');
    expect(error.message).to.equal('Product not found');
  })

  it('Esta dando certo se chamar um id existente', async function () {
    sinon.stub(productsModels, 'findById').resolves(productsMock.productsMock[0]);

    const body = { productId: 1 }
    const error = await productService.isProductsExist(body)

    expect(error.type).to.equal(null);
    expect(error.message).to.equal(productsMock.productsMock[0]);
  })

  it('Esta dando certo se chamar todos os produtos', async function () {
    sinon.stub(productsModels, 'getAll').resolves(productsMock.productsMock);


    const error = await productService.getAllProducts()

    expect(error.type).to.equal(null);
    expect(error.message).to.equal(productsMock.productsMock);
  })

  afterEach(function () {
    sinon.restore();
  });

  describe('Testa o create New product', () => {
    before(async () => {
      sinon.stub(productsModels, 'insert').resolves(productsMock.newProduc);
      sinon.stub(productsModels, 'findById').resolves(productsMock.newProduc)
    });
    
    afterEach(function () {
      sinon.restore();
    });
    
    it('create pooduct', async () => {
      const result = await productService.createNewProduct('Alisson')
      
      expect(result.message).to.equal(productsMock.newProduc);
    })
  })
}) 
