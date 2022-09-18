const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const { salesProductsModels } = require('../../../src/models');

describe('salesProductsModels', function () {
  describe('cadastra novos produtos e quantidades', () => {
    
    after(async function () {
      sinon.restore();
    });

    const payload = [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]

    it('com sucesso', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 45 }]);
      const response = await salesProductsModels.insert(payload);
      expect(response).to.equal(45)
    })
  })
  describe('chama as vendas por id', () => {

    after(async function () {
      sinon.restore();
    });

    it('encontra a sale por Id', async () => {
      sinon.stub(connection, 'execute').resolves([{ saleId: 1, productId: 1, quantity: 5 }]);
      const response = await salesProductsModels.findById(1);
      expect(response).to.deep.equal({ saleId: 1, productId: 1, quantity: 5 })
    })
  })
})