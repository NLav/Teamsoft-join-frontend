import React, { useState } from 'react';
import './addressSelector.css';

export function AddressSelector(props) {
  // Current/Selected user address
  const [userAddress, setUserAddress] = useState(props.addresses[0]);
  // Show/Hide dropdown to select user address
  const [toggleAddressesDropdown, setToggleAddressesDropdown] = useState(false);

  return (
    <div
      className='address-selector'
      onClick={() => {
        toggleAddressesDropdown
          ? setToggleAddressesDropdown(false)
          : setToggleAddressesDropdown(true);
      }}
    >
      <div className='address-selector__text'>
        <label className='address-selector__text-title'>Entrega:</label>
        <label className='address-selector__text-value'>{userAddress}</label>
      </div>
      <div className='address-selector__icon'>
        <img
          className='address-selector__icon-image'
          src='/teamsoftjoinfrontend/Images/ic_dropdown.png'
          alt='dropdown icon'
        />
      </div>
      {/* Show dropdown if ToggleAddressesDropdown is true  */}
      {toggleAddressesDropdown ? (
        <div className='address-selector__dropdown'>
          {props.addresses.map((address) => {
            return (
              <label
                className='address-selector__dropdown-value'
                onClick={() => setUserAddress(address)}
              >
                {address}
              </label>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
