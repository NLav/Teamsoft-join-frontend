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
      <div className='card__cutlery'>
        <label className='card__cutlery-title'>Precisa de Talher?</label>
        <label className='card__cutlery-radio-label'>
          Sim
          <input
            className='card__cutlery-radio-button'
            type='radio'
            id='sim'
            name='cutlery'
            value='Sim'
          />
        </label>
        <label className='card__cutlery-radio-label'>
          Não
          <input
            className='card__cutlery-radio-button'
            type='radio'
            id='nao'
            name='cutlery'
            value='Não'
            checked
          />
        </label>
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
