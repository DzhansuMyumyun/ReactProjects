import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({product}) {
    const {id, name, price}= product
    const navigate = useNavigate();


  return (
    <div>
       <h2>Product Descripiton</h2> 
       <p>Name: {name}</p>
       <p>Price: {price}</p>
       <button onClick={() => navigate("/product-details/"+id)}>Information</button>
    </div>
  )
}

export default Product