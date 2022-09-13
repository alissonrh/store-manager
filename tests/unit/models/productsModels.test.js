const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { productsModels } = require('../../../src/models');

const { products } = require('./mock/products.model.mock');


describe('Testes da unidade do model de products', function () {
  beforeEach(function () {
    sinon.stub(connection, 'execute').resolves([products]);
  });

afterEach(function () {
  connection.execute.restore();
});
  
  it('Lista todos os produtos', async function () {
    const response = await productsModels.getAll();

    expect(response).to.deep.equal(products);
  })
})

it('tipo array', async function () {
  const response = await productsModels.getAll();
  expect(response).to.be.a('array');
})