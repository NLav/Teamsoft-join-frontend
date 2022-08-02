import React from 'react';
import './popover.css';

export function Popover(props) {
  return (
    <>
      <div
        className={props.togglePopover ? 'popover__arrow popover__arrow--hidden' : 'popover__arrow'}
      ></div>
      <div className={props.togglePopover ? 'popover popover--hidden' : 'popover'}>
        <div className='popover__title'>
          <label>Adicionado com sucesso</label>
        </div>
        <div className='popover__content'>
          <div className='popover__content-title'>
            <label>Oferta Cheddar Bacon</label>
          </div>
          <div className='popover__content-description'>
            <label>Ingredientes:</label>
            <ul className='popover__content-description__list'>
              <li>1 Carne 250gr</li>
              <li>2 queijo Cheddar</li>
              <li>1 Bacon</li>
              <li>Molho especial</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
