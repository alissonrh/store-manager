/* const chai = require('chai'); */
const sinon = require('sinon');
/* const sinonChai = require('sinon-chai') */

const { expect } = require('chai');
/* chai.use(sinonChai); */

const connection = require('../../../src/models/connection');
const { salesModels } = require('../../../src/models');
const salesMock = require('./mock/sales.model.mock');

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
  describe('Chamada de todas as vendas', () => {
    it('chama todas as vendas com sucesso', async () => {
      sinon.stub(connection, 'execute').resolves([salesMock.salesMock]);
      const response = await salesModels.getAll();
      expect(response).to.be.deep.equal(salesMock.salesMock)
    })

    after(async function () {
      sinon.restore();
    });
  })
  describe('Chamada de uma venda', () => {
    after(async function () {
      sinon.restore();
    });

    it('recupera uma venda pelo id', async () => {
      sinon.stub(connection, 'execute').resolves([[{ id: 1, date: '2022 - 09 - 17T17: 41: 10.000Z' }, { id: 2, date: '2021 - 09 - 17T17: 41: 10.000Z' }]]);
      const response = await salesModels.findById(1);
      expect(response).to.be.deep.equal({ id: 1, date: '2022 - 09 - 17T17: 41: 10.000Z' })

    })
   
  })
})
