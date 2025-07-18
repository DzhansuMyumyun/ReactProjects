import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../data/products'
import Product from '../components/Product';

function ProductDetails() {
  const {id} = useParams();


  return (
    <div>
      <h1>Product Description</h1>
      <hr />
      {
        products && products.map((product)=> {
          if(product.id == id){
            return <Product product={product}/>
          }
      })
      }
    </div>
  )
}

export default ProductDetails