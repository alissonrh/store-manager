const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const  salesControler  = require('../../../src/controllers/sales.controller');
const { salesService } = require('../../../src/services');

describe('Testa o controller de create sales', () => {
  it('Testa a criação de uma nova venda', async () => {
    const res = {}
    const req = {
      body: [
      {
        "productId": 1,
        "quantity": 1
      }
      ]
    }
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'createSale').resolves({
      type: null,
      message: {
        "id": 10,
        "itemsSold": [
          {
            "productId": 1,
            "quantity": 1
          }
        ]
      }
    })

    await salesControler.createSaleController(req, res)

    expect(res.status).to.have.been.calledWith(201);

    expect(res.json).to.have.been.calledWith({
      id: 10,
      "itemsSold": [
        {
          "productId": 1,
          "quantity": 1
        }
      ]
    });
  })
  it('Testa a criação de uma nova venda sem quantidade minima', async () => {
    const res = {}
    const req = {
      body: [
        {
          "productId": 1,
          "quantity": 0
        }
      ]
    }
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'createSale').resolves({
      type: 'INVALID_VALUE',
      message: '"quantity" must be greater than or equal to 1'
    })

    await salesControler.createSaleController(req, res)

    expect(res.status).to.have.been.calledWith(422);

    expect(res.json).to.have.been.calledWith();
  })
  afterEach(sinon.restore);
})

