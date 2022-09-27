import React, { useContext } from 'react';
import '../styles/OrderItem.scss';

import close_icon from '@icons/icon_close.png';
import { AppContext } from '../context/AppContext';

export const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={close_icon} alt="close" onClick={() => removeFromCart(product)} />
    </div>
  );
};
