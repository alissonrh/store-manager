/* const chai = require('chai'); */
const sinon = require('sinon');
/* const sinonChai = require('sinon-chai') */

const { expect } = require('chai');
/* chai.use(sinonChai); */

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
})