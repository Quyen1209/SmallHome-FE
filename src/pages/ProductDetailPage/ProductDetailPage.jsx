import React from 'react';
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent';

const ProductDetailPage = () => {
    return (
        <div style={{padding:'0 120px', background:'#efefef', height:'1000px'}}>
            <h1>Trang chu</h1>
            <div>
            <ProductDetailComponent />
            </div>
        </div>
    );
};

export default ProductDetailPage;