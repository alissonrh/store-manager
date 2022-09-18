const salesWithOutproductId = [
  {
    "quantity": 1
  }
]

const salesWithOutquantity = [
  {
    "productId": 1
  }
]

const salesSuces = [
  {
    "productId": 1,
    "quantity": 1
  }
]

const salesResponseSucess = {
  "id": 1,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 1
    }
  ]
}

const salesQuantityEmpety = [
  {
    "productId": 1,
    "quantity": 0
  }
]

const salesProductsNotFound = [
  {
    "productId": 999,
    "quantity": 2
  }
]

const allSalesMock = [
  {
    "saleId": 1,
    "productId": 1,
    "quantity": 5,
    "date": "2022-09-17T17:41:10.000Z"
  },
  {
    "saleId": 2,
    "productId": 3,
    "quantity": 15,
    "date": "2022-09-17T17:41:10.000Z"
  },
  {
    "saleId": 3,
    "productId": 1,
    "quantity": 1,
    "date": "2022-09-18T18:26:20.000Z"
  }
]



module.exports = {
  salesWithOutproductId,
  salesWithOutquantity,
  salesSuces,
  salesQuantityEmpety,
  salesProductsNotFound,
  salesResponseSucess,
  allSalesMock,
}