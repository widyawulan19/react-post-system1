import React, { useContext } from 'react'
import '../style/Makanan_style.css'
import { HomeContext } from '../context/HomeContext'

const Makanan=({ data })=> {
  const { addToCart } = useContext(HomeContext);
  return (
    <div className="makanan-card">
      {data.map(item => (
        <div className="makanan-detail" key={item.id}>
          <img src={item.img} alt="" />
          <h3>{item.nama}</h3>
          <p>${item.price}</p>
          <button className='makanan-button' onClick={() => addToCart(item)}>add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Makanan