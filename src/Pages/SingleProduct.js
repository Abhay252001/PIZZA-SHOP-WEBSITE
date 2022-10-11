import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const SingleProduct = () => {

  const [product, setProduct] = useState({})
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/api/products/${params._id}`)
      .then(res => res.json())
      .then(product => {
        setProduct(product)
      })
  }, [params._id])

  const HomeStyle = {
    background: '#91464f',
  }

  return (
    <div style={HomeStyle}>
      <div className='container mx-auto'>
        <button className='mb-12 font-bold' onClick={() => { navigate('/') }}>Back</button>
        <div className='flex '>
          <img src={product.image} alt="pizza image" />
          <div className='ml-20'>
            <h1 className='text-xl font-bold'>{product.name}</h1>
            <div className='text-md'>{product.size}</div>
            <div className='font-bold mt-2'>₹ {product.price}</div>
            <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>Add to cart</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleProduct