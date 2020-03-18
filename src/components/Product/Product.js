import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props.handleAddproduct);
    const { img,name,seller,price,stock,key} = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
            
            <h2><Link to={"/product/"+key}>{name}</Link></h2>
    <p><small>By:{seller}</small></p>
    <p><small>Price:${price}</small></p>
    <p><small>Only {stock } left in stock -Order soon</small></p>
    <button className="mainBtn" onClick={()=>props.handleAddproduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
           
        </div>
    );
};

export default Product;