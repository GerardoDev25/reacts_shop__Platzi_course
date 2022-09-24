import React, { useState } from 'react';
import '../styles/ProductItem.scss';

import bt_add_to_cart_icon from '@icons/bt_add_to_cart.svg';

export const ProductItem = () => {
  const [card, SetCard] = useState('');

  const handleCard = () => {
    SetCard('hola mundo');
  };

  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleCard}>
          <img src={bt_add_to_cart_icon} alt="" />
        </figure>
				{card}
      </div>
    </div>
  );
};
