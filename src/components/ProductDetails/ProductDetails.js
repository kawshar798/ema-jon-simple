import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productkey} = useParams();
    return (
        <div>
            <h2>{productkey} page coming soon.......................</h2>
        </div>
    );
};

export default ProductDetails;