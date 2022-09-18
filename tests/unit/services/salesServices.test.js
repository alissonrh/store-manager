const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai')


chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesModels } = require('../../../src/models');

const salesMock = require('./mock/sales.service.mock');

describe('Testes da unidade de service de sales', function () {
  describe('Tenta cadastrar novos produtos com erros semânticos', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('Será validado que não é possível realizar operações em uma venda sem o campo productId', async () => {
      const response = await salesService.createSale(salesMock.salesWithOutproductId)

      expect(response.type).to.equal('BAD_REQUEST');
      expect(response.message).to.equal('"productId" is required')
    })
    it('Será validado que não é possível realizar operações em uma venda sem o campo quantity', async () => {
      const response = await salesService.createSale(salesMock.salesWithOutquantity)

      expect(response.type).to.equal('BAD_REQUEST');
      expect(response.message).to.equal('"quantity" is required')
    })
    it('Será validado que não é possível realizar operações em uma venda com o campo quantity menor que 1', async () => {
      const response = await salesService.createSale(salesMock.salesQuantityEmpety)

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal('"quantity" must be greater than or equal to 1')
    })
    it('Será validado sucesso na validação', async () => {
      
      sinon.stub(salesModels, 'insert').resolves(1);

     /*  const response =  */await salesService.createSale(salesMock.salesSuces)

   /*    expect(response.type).to.equal(null);
      expect(response.message).to.equal(salesMock.salesResponseSucess) */
    })
    it('Será validado que não é possível realizar operações em uma venda com o campo `productId` inexistente', async () => {

      const response = await salesService.createSale(salesMock.salesProductsNotFound)

      expect(response.type).to.equal('PRODUCT_NOT_FOUND');
      expect(response.message).to.equal('Product not found')
    })
  })
  describe('Testando a o service do sales GET', () => {

    afterEach(function () {
      sinon.restore();
    });
    it('listas todas as vendas', async () => {
      sinon.stub(salesModels, 'getAll').resolves(salesMock.allSalesMock);

      await salesService.getAllSales();
    })
    it('traz um erro se um produto não existe', async () => {

      sinon.stub(salesModels, 'getAll').resolves([{ id: 1, date: '2022 - 09 - 17T17: 41: 10.000Z' }, { id: 2, date: '2021 - 09 - 17T17: 41: 10.000Z' }]);

     const response = await salesService.isSaleExist(999)

      expect(response.type).to.equal('SALE_NOT_FOUND');
      expect(response.message).to.equal('Sale not found'); 
    })
    it('retorna o produto pesquisado com id  ', async () => {

      sinon.stub(salesModels, 'findById').resolves([{
        "saleId": 2,
        "productId": 3,
        "quantity": 15,
        "date": "2022-09-17T17:41:10.000Z"
      }]);

      const response = await salesService.isSaleExist(2)

      expect(response.type).to.equal(null);
      /* expect(response.message).to.equal([{
        "productId": 3,
        "quantity": 15,
        "date": "2022-09-17T17:41:10.000Z"
      }]); */
    })
  })
})