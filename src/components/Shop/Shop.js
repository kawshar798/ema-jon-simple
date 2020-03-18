import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import users from '../../fakeData/fakedata';
import Product from '../Product/Product';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    console.log(users);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);

    const handleAddproduct = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container"><h1>{products.length}</h1>
                <ul>
                    {
                        products.map(product => <Product product={product}  handleAddproduct={handleAddproduct}></Product>)
                    }
                </ul></div>

            <div className="cart-container">
                <Cart cart={cart}/>
               
            </div>
        </div>
    );
};

export default Shop;