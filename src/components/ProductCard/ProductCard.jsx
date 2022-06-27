import React from 'react'

const ProductCard = ({id, title, price, description, category, image, rating}) => {
  return (
    <li className='flex flex-col'>
        <p>{id}</p>
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>{category}</p>
        <p>{image}</p>
    </li>
  )
}

export default ProductCard