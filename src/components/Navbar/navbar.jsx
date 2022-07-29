import React from 'react';
import { AddressSelector } from '../AddressSelector/addressSelector';
import { Popover } from '../Popover/popover';
import './navbar.css';

export function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img className='navbar__logo-img' src='/Images/logo.png' alt='deliverize logo' />
      </div>
      <div className='navbar__address'>
        <AddressSelector />
      </div>
      <div className='navbar__search'>
        <input
          className='navbar__search-input'
          placeholder='Busque por estabelecimento ou produtos'
        />
      </div>
      <div className='navbar__item'>
        <button className='navbar__item-link'>
          <img className='navbar__item-link__img' src='/Images/ic_login.png' alt='entrar icone' />
          Entrar
        </button>
        <button className='navbar__item-link'>
          <img className='navbar__item-link__img' src='/Images/ic_cart.png' alt='carrinho icone' />
          Carrinho
        </button>
        <Popover />
      </div>
    </div>
  );
}
