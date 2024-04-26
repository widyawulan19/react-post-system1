import React, { useState } from 'react'
import MAKANAN from './data/Makanan'
import MINUMAN from './data/Minuman'
import SNACK from './data/snack'
import Makanan from './katalog/Makanan'
import Minuman from './katalog/Minuman'
import Snack from './katalog/Snack'
import Cart from './page/Cart'
import './App.css'

const Home=()=> {
    const [currentPage, setCurrentPage] = useState(null);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    let pageContent ;

    switch (currentPage){
        case 'Makanan':
            pageContent = <Makanan data={MAKANAN}/>;
            break;
        case 'Minuman':
            pageContent = <Minuman data={MINUMAN}/>;
            break;
        case 'Snack':
            pageContent = <Snack data={SNACK}/>;
            break;
        default:
            pageContent = <Makanan data={MAKANAN}/>;
            break;
    }
    
  return (
    <div className="home-container">
        <div className="home-button">
            <button onClick={() => handlePageChange('Makanan')}>Makanan</button>
            <button onClick={() => handlePageChange('Minuman')}>Minuman</button>
            <button onClick={() => handlePageChange('Snack')}>Snack</button>
            {pageContent}
        </div>
        <div className="home-cart">
            <Cart/>
        </div>
    </div>
    

  )
}

export default Home