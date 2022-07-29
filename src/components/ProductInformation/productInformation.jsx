import React from 'react';
import './productInformation.css';

export function ProductInformation() {
  return (
    <div className='product'>
      <img className='product__picture' src='/Images/product.png' alt='product' />
      <label className='product__title'>Oferta Picanha Cheddar Bacon</label>
      <label className='product__description'>
        Habúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar
        e pão mix de gergelim
      </label>
      <div className='product__prices'>
        <label className='product__prices-value'>R$31,99</label>
        <label className='product__prices-value--old'>R$34,95</label>
      </div>
    </div>
  );
}
