import React, { useContext } from 'react';
import { OrderItem } from '../components/OrderItem';
import '../styles/MyOrder.scss';

import flechita_icon from '@icons/flechita.svg';
import { AppContext } from '../context/AppContext';

export const MyOrder = () => {
  const { state } = useContext(AppContext);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita_icon} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((item) => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};
