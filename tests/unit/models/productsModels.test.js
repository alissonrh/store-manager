/* const chai = require('chai'); */
const sinon = require('sinon');
/* const sinonChai = require('sinon-chai') */

const { expect } = require('chai');
/* chai.use(sinonChai); */

const connection = require('../../../src/models/connection');
const { productsModels } = require('../../../src/models');

const productsMock = require('./mock/products.model.mock');

describe('Testes da unidade do model de products', function () {
  beforeEach(async function () {
    
    sinon.stub(connection, 'execute').resolves([productsMock]);
  });

afterEach(sinon.restore);
  
  it('Lista todos os produtos', async function () {
    const response = await productsModels.getAll();
    expect(response).to.deep.equal(productsMock);
  })
})

it('tipo array', async function () {
  const response = await productsModels.getAll();
  expect(response).to.be.a('array');
})

it('Recupera um produto a partir do seu id', async function () {
  const result = await productsModels.findById(1);
  expect(result).to.be.deep.equal(productsMock.productsMock[0]);
})