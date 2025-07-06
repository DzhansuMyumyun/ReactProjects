import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:4000";

function App() {
  //CRUD + useEffect()

  //Create
  const createProduct = async(newProduct) =>{
    const response = await axios.post(`${BASE_URL}/users`,newProduct)
    console.log("response",response.data)
  }


  //Read
  const getAllProducts = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getProductById = async (productId) => {
    const response = await axios.get(`${BASE_URL}/users/${productId}`);
    console.log(response.data)
  }


  //Update

  const updateProductById = async (productId, updatedProduct) =>{
    const response = await axios.put(`${BASE_URL}/users/${productId}`, updatedProduct)
    console.log(response.data)
  }

  //Delete

  const deleteProductById = async (productId) =>{
    const response = await axios.delete(`${BASE_URL}/users/${productId}`)
    console.log(response.data)
  }


  useEffect (() =>{
    console.log("works always")
  })



  useEffect(() => {
    console.log("works only once")
    //Create
    // const newProduct = {
    //   "product": "PC",
    //   "description": "test"
    // }

    //createProduct(newProduct)

    //Read
    //getAllProducts();
    //getProductById();


    //Update
    // updateProductById("187c",{
    //   "product": "IPad1",
    //   "description":"new"
    // })

    //Delete
    //deleteProductById("187c")

  },[])


  useEffect(() =>{
    console.log("when it is first rendered and when the value of FirstName changes")

  },[firstName])


  useEffect(() =>{
    console.log("when it is first rendered and when the value of LastName changes")

  },[lastName])




  return (
    <>
      
    </>
  )
}

export default App
