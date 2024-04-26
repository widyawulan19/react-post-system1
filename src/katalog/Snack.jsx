import React, { useContext, useState } from 'react'
import '../style/Snack_style.css'
import { HomeContext } from '../context/HomeContext'

const Snack=({ data })=> {
  const { addToCart } = useContext(HomeContext);
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () =>{
    setImageLoaded(true);
  }

  return (
    <div className="snack-card">
      {data.map(item => (
        <div className="snack-detail" key={item.id}>
          <img src={item.img} alt="" />
          <h3>{item.nama}</h3>
          <p>${item.price}</p>
          <button className='snack-button' onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Snack