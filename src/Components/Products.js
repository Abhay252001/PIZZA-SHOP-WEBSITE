import React, { useState, useEffect, useContext } from 'react'
import Product from './Product';
import { CartContext } from '../CartContext';

const Products = () => {

  const { name } = useContext(CartContext)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(products => {
        setProducts(products);
      })
  }, []);

  const HomeStyle = {
    background: '#91464f',
  }

  return (
    <div style={HomeStyle}>
      <div className='container mx-auto pb-24'>
        <h1 className='text-lg font-bold '>Products</h1>
        <div className='grid grid-cols-5 my-8 gap-24'>
          {
            products.map(product => <Product key={product._id} product={product} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Products;