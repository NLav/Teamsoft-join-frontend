import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { QuantityCounter } from '../QuantityCounter/quantityCounter';
import config from '../../config/api.json';
import './productExtras.css';
import { Popover } from '../Popover/popover';

export function ProductExtras(props) {
  const [togglePopover, setTogglePopover] = useState(false);
  const [maxItems, setMaxItems] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(config.api.url).then((res) => {
      setMaxItems(res.data[0].ingredients[0].max_itens);
      setItems(res.data[0].ingredients[0].itens);
    });
  }, []);

  return (
    <div className='card'>
      <div className='card__instruction'>
        <label className='card__instruction-title'>Adicionar Ingredientes</label>
        <label className='card__instruction-description'>Até {maxItems} ingredientes</label>
      </div>
      <div className='card__options'>
        {items.map((item) => {
          return (
            <div className='card__options-item'>
              <label className='card__options-item__title'>{item.nm_item}</label>
              <div className='card__options-item__counter'>
                <QuantityCounter />
              </div>
              <label className='card__options-item__price'>
                + R${item.vl_item.toFixed(2).toString().replace('.', ',')}
              </label>
            </div>
          );
        })}
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
            defaultChecked
          />
        </label>
      </div>
      <div className='card__add'>
        <div className='card__add__counter'>
          <QuantityCounter />
        </div>
        <button
          className='card__add__button'
          onClick={() => {
            setTogglePopover(true);
            setTimeout(() => setTogglePopover(false), 3000);
          }}
        >
          Adicionar
        </button>
      </div>
      <Popover togglePopover={togglePopover} />
    </div>
  );
}
