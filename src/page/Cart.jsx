import React, { useContext, useState } from 'react'
import { HomeContext } from '../context/HomeContext'
import '../style/Cart_style.css'

const Cart=(props)=> {
    const {cart, updateQty, removeFromCart, calculateTotal, clearCart, number, handleNumber} = useContext(HomeContext);

  return (
    <div className="table-container">
        <h1>Payment</h1>
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>QTY</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item, index)=>(
                    <tr key={index}>
                        <td>{item.nama}</td>
                        <td> $ {item.price}</td>
                        <td>
                          <button onClick={() => updateQty(item, item.qty - 1)}>-</button>
                          <input type="text" value={item.qty} onChange={(e) => updateQty(item, parseInt(e.target.value) || 0)} />
                          <button onClick={() => updateQty(item, item.qty + 1)}>+</button>
                        </td>
                        <td>$ {item.price * item.qty}</td>
                        <td>
                          <button onClick={() => removeFromCart(item)} className='remove-btn'>Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="discount">
            <p>Discount (%)</p>
            <input 
                type="number"
                value={number}
                onChange={handleNumber}
            />
        </div>
        <div className="payment-detail">
            <div className="desc-total">
                    <p>Subtotal</p>
                    <p>Discount {number}%</p>
                    <hr />
                    <p style={{color:'black'}}>Total </p>
            </div>
            <div className="num-total">
                    <p>${calculateTotal()}</p>
                    <p>{number || 0}</p>
                    <hr />
                    <p style={{color:'black'}}>${calculateTotal() - (calculateTotal() * (number / 100))}</p>
            </div>
        </div>
        <div className="button">
            <button className='bils'>Print Bils</button>
            <button className='clear' onClick={() => clearCart()}>Clear</button>
        </div>
        
    </div>
  )
}

export default Cart