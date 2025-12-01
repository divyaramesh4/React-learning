import React from 'react'
const product = {
    name: 'Divya',
    price:1200,
    availability:"In Stock"
}
const ProductInfo = () => {

  return (
    <div>
       name : {product.name}
       <br/>
       Price : ${product.price}
       <br/>
       availability : {product.availability}
    </div>
  )
}

export default ProductInfo