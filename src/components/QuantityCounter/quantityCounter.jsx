import React, { useState } from 'react';
import './quantityCounter.css';

export function QuantityCounter(props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className='quantity-counter'>
      <img
        className={
          quantity === 0
            ? 'quantity-counter__minus-icon quantity-counter__icon--disabled'
            : 'quantity-counter__minus-icon'
        }
        src='/teamsoftjoinfrontend/Images/ic_minus.png'
        alt='minus icon'
        onClick={
          quantity === 0
            ? null
            : () => {
                setQuantity(quantity - 1);
              }
        }
      />
      <label className='quantity-counter__value'>{quantity}</label>
      <img
        className='quantity-counter__plus-icon'
        src='/teamsoftjoinfrontend/Images/ic_plus.png'
        alt='plus icon'
        onClick={() => {
          setQuantity(quantity + 1);
        }}
      />
    </div>
  );
}
