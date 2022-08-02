import React from 'react';
import './productInformation.css';

export function ProductInformation(props) {
  return props.apiInformation ? (
    <div className='product'>
      <img className='product__picture' src='/Images/product.png' alt='product' />
      <label className='product__title'>{props.apiInformation.nm_product}</label>
      <label className='product__description'>{props.apiInformation.description}</label>
      <div className='product__prices'>
        <label className='product__prices-value'>R${props.apiInformation.vl_price}</label>
        {props.apiInformation.vl_discount === 0 ? null : (
          <label className='product__prices-value--old'>R${props.apiInformation.vl_discount}</label>
        )}
      </div>
    </div>
  ) : null;
}
