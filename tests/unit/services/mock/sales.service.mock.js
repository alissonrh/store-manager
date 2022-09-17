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



module.exports = {
  salesWithOutproductId,
  salesWithOutquantity,
  salesSuces,
  salesQuantityEmpety,
  salesProductsNotFound,
  salesResponseSucess,
}