import React from 'react';
import './addressSelector.css';

export function AddressSelector() {
  return (
    <div className='address-selector'>
      <div className='address-selector__text'>
        <label className='address-selector__text-title'>Entrega:</label>
        <label className='address-selector__text-value'>R. Antonio Braune, 222</label>
      </div>
      <div className='address-selector__icon'>
        <img
          className='address-selector__icon-image'
          src='/Images/ic_dropdown.png'
          alt='dropdown icon'
        />
      </div>
    </div>
  );
}
