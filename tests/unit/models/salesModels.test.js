/* const chai = require('chai'); */
const sinon = require('sinon');
/* const sinonChai = require('sinon-chai') */

const { expect } = require('chai');
/* chai.use(sinonChai); */

const connection = require('../../../src/models/connection');
const { salesModels } = require('../../../src/models');

describe('Testa SaleModel e salesProductsModels', function () {
  describe('cadastra uma nova venda', () => {

    after(async function () {
      sinon.restore();
    });

    it('com sucesso', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 45 }]);
      const response = await salesModels.insert();
      expect(response).to.equal(45)
    })
  })
})
