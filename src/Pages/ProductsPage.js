import React from 'react'
import Products from '../Components/Products'

const ProductsPage = () => {
  const HomeStyle = {
    background: '#91464f',
  }
  return (
    <div style={HomeStyle}>
      <Products />
    </div>
  )
}

export default ProductsPage