import React from 'react';
import './productInformation.css';

export function ProductInformation(props) {
  return props.apiInformation ? (
    <div className='product'>
      <img className='product__picture' src='/teamsoftjoinfrontend/Images/product.png' alt='product' />
      <label className='product__title'>{props.apiInformation.nm_product}</label>
      <label className='product__description'>{props.apiInformation.description}</label>
      <div className='product__prices'>
        {props.apiInformation.vl_discount ? (
          <>
            <label className='product__prices-value'>R${props.apiInformation.vl_discount?.toFixed(2).replace('.', ',')}</label>
            <label className='product__prices-value--old'>R${props.apiInformation.vl_price?.toFixed(2).replace('.', ',')}</label>
          </>
        ) : (
          <>
            <label className='product__prices-value'>R${props.apiInformation.vl_price?.toFixed(2).replace('.', ',')}</label>
          </>
        )}
      </div>
    </div>
  ) : null;
}
