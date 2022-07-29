import React from 'react';
import { QuantityCounter } from '../QuantityCounter/quantityCounter';
import './productExtras.css';

export function ProductExtras() {
  return (
    <div className='card'>
      <div className='card__instruction'>
        <label className='card__instruction-title'>Adicionar Ingredientes</label>
        <label className='card__instruction-description'>Até 8 ingredientes</label>
      </div>
      <div className='card__options'>
        <div className='card__options-item'>
          <label className='card__options-item__title'>Queijo cheddar</label>
          <div className='card__options-item__counter'>
            <QuantityCounter />
          </div>
          <label className='card__options-item__price'>+ R$4,99</label>
        </div>
        <div className='card__options-item'>
          <label className='card__options-item__title'>Cebola crispy</label>
          <div className='card__options-item__counter'>
            <QuantityCounter />
          </div>
          <label className='card__options-item__price'>+ R$ 1,50</label>
        </div>
        <div className='card__options-item'>
          <label className='card__options-item__title'>Cebola crispy</label>
          <div className='card__options-item__counter'>
            <QuantityCounter />
          </div>
          <label className='card__options-item__price'>+ R$ 1,50</label>
        </div>
        <div className='card__options-item'>
          <label className='card__options-item__title'>Cebola crispy</label>
          <div className='card__options-item__counter'>
            <QuantityCounter />
          </div>
          <label className='card__options-item__price'>+ R$ 1,50</label>
        </div>
      </div>
      <div className='card__note'>
        <label className='card__note-title'>Precisa de Talher?</label>
      </div>
      <div className='card__add'>
        <div className='card__add__counter'>
          <QuantityCounter />
        </div>
        <button className='card__add__button'>Adicionar</button>
      </div>
    </div>
  );
}
