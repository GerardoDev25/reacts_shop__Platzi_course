import React, { useState } from 'react';
import '../styles/ProductItem.scss';

import bt_add_to_cart_icon from '@icons/bt_add_to_cart.svg';

export const ProductItem = ({ title, price, description, category, images }) => {
  const [card, SetCard] = useState([]);

  const handleCard = () => {
    SetCard([]);
  };

  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={handleCard}>
          <img src={bt_add_to_cart_icon} alt={bt_add_to_cart_icon} />
        </figure>
      </div>
    </div>
  );
};
