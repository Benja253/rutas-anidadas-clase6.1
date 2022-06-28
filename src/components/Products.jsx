import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <h1>Product</h1>
      <Outlet />
    </>
  )
}

export default Products