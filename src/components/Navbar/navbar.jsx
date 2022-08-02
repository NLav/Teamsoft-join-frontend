import React from 'react';
import { AddressSelector } from '../AddressSelector/addressSelector';
import './navbar.css';

export function Navbar() {
  // Simulates an array of registered addresses
  const addresses = ['R. Antonio Braune, 222', 'Av. José Moreira, 109'];

  return (
    <div className='navbar'>
      <div className='navbar__back-button'>
        <img
          className='navbar__back-button-img'
          src='/teamsoftjoinfrontend/Images/ic_navbar-back.png'
          alt='go back button'
        />
      </div>
      <div className='navbar__logo'>
        <img className='navbar__logo-img' src='/teamsoftjoinfrontend/Images/logo.png' alt='deliverize logo' />
      </div>
      <div className='navbar__address'>
        {/* Sends addresses to AdressSelector via Props */}
        <AddressSelector addresses={addresses} />
      </div>
      <div className='navbar__search'>
        <input
          className='navbar__search-input'
          placeholder='Busque por estabelecimento ou produtos'
        />
      </div>
      <div className='navbar__item'>
        <button className='navbar__item-link'>
          <img className='navbar__item-link__img' src='/teamsoftjoinfrontend/Images/ic_login.png' alt='entrar icone' />
          Entrar
        </button>
        <button className='navbar__item-link'>
          <img className='navbar__item-link__img' src='/teamsoftjoinfrontend/Images/ic_cart.png' alt='carrinho icone' />
          Carrinho
        </button>
      </div>
    </div>
  );
}
