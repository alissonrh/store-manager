const productsMock = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
]

const productError = [
  {
    type: 'PRODUCT_NOT_FOUND',
    message: 'Product not found'
  }
]

module.exports = {
  productsMock,
  productError,
}