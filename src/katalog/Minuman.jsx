import React, { useContext } from 'react'
import '../style/Minuman_style.css'
import { HomeContext } from '../context/HomeContext'

const Minuman=({ data })=> {
  const { addToCart } = useContext(HomeContext);
  return (
    <div className="minuman-card">
      {data.map(item => (
        <div className="minuman-detail" key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.nama}</h3>
            <p>${item.price}</p>
            <button className='minuman-button' onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Minuman