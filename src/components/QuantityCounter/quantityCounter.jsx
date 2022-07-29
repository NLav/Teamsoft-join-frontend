import React from 'react';
import './quantityCounter.css';

export function QuantityCounter() {
  return (
    <div className='quantity-counter'>
      <img className='quantity-counter__minus-icon' src='/Images/ic_minus.png' alt='minus icon'></img>
      <label className='quantity-counter__value'>0</label>
      <img className='quantity-counter__plus-icon' src='/Images/ic_plus.png' alt='plus icon'></img>
    </div>
  );
}
