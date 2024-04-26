import React, { createContext, useState } from 'react'
import { MAKANAN } from '../data/Makanan';
import { MINUMAN } from '../data/Minuman';
import { SNACK } from '../data/snack';


const HomeContext = createContext();


const HomeContextProvider=(props)=> {

    const [ cart, setCart ] = useState(null);

    if(cart === null){
        setCart([]);
    }

    const addToCart = (item) => {
        setCart([...cart, { ...item, qty: 1 }]);
      };
    
      const removeFromCart = (item) => {
        const updateCart = cart.filter(cartItem => cartItem !== item);
        setCart(updateCart);
      };
    
      const updateQty = (item, qty) => {
        const updatedCart = cart.map(cartItem => {
          if (cartItem === item) {
            return { ...cartItem, qty };
          }
          return cartItem;
        });
        setCart(updatedCart);
      };
    
      const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.qty), 0);
      };
    
      const clearCart = () => {
        setCart([]);
      }

      //handle inputan cart
      const [ number, setNumber ] = useState('');
      const handleNumber = (event) => {
        const inputNumber = event.target.value !== '' ? parseInt(event.target.value) : 0;
        setNumber(inputNumber)
      }

      /*
      //search function 
      const searchProduct = (keyword) => {
        const result = {
          makanan: MAKANAN.filter(makanan => makanan.nama.toLowerCase().includes(keyword.toLowerCase())),
          minuman: MINUMAN.filter(minuman => minuman.nama.toLowerCase().includes(keyword.toLowerCase())),
          snack: SNACK.filter(snack => snack.nama.toLowerCase().includes(keyword.toLowerCase()))
        };
        return result;
      }

      //handle search 
      const [ searchTerm, setSearchTerm ] = useState('')
      const [ searchResults, setSearchResults ] = useState(null)

      //handle pencarian
      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const results = searchProduct(event.target.value);
        setSearchResults(results);
      }
      */

  return (
    <HomeContext.Provider value={{cart, addToCart, removeFromCart, updateQty, calculateTotal, clearCart, number, handleNumber}}>
        {props.children}
    </HomeContext.Provider>
  )
}

export { HomeContext, HomeContextProvider };