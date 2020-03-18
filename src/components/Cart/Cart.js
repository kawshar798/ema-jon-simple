import React from 'react';

const Cart = ({cart}) => {
    const total = cart.reduce((total,product)=> total + product.price,0 );

    let shipping = 0;
    if(total >  35){
        shipping = 0;
    }else if( total > 15){
        shipping = 4.99;
    }else if( total > 0){
        shipping = 12.99;
    }

    let tax = total / 10;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h2>Oder Summary</h2>
    <p>Item order:{cart.length}</p>
    <p>Shipping cost:{shipping}</p>
    <p>Tax + vat  cost:{formatNumber(tax)}</p>
    <p>Total Price:{formatNumber(total + shipping + formatNumber(tax))}</p>
        </div>
    );
};

export default Cart;