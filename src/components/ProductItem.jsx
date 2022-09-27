import React, { useContext } from 'react';
import '../styles/ProductItem.scss';

import bt_add_to_cart_icon from '@icons/bt_add_to_cart.svg';
import { AppContext } from '../context/AppContext';

export const ProductItem = ({ ...product }) => {
  const { state, addToCard } = useContext(AppContext);

  const { title, price, description, category, images } = product;
  const handleCard = (item) => {
    addToCard(item);
  };

  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleCard(product)}>
          <img src={bt_add_to_cart_icon} alt={bt_add_to_cart_icon} />
        </figure>
      </div>
    </div>
  );
};
