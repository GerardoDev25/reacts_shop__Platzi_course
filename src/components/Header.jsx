import React, { useState, useContext } from 'react';
import { Menu } from '../components/Menu';
import '@styles/Header.scss';

import menu_icon from '@icons/icon_menu.svg';
import shopping_icon from '@icons/icon_shopping_cart.svg';
import yard_sale_logo from '@logos/logo_yard_sale.svg';
import { AppContext } from '../context/AppContext';
import { MyOrder } from '../containers/MyOrder';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);

  const { state } = useContext(AppContext);

  const hanfletoggle = () => setToggle(!toggle);
  const handleToogleOrder = () => setToggleOrder(!toggleOrder);
  return (
    <nav>
      <img src={menu_icon} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={yard_sale_logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul onClick={hanfletoggle}>
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart" onClick={handleToogleOrder}>
            <img src={shopping_icon} alt="shopping cart" />
            {state.cart.length && <div>{state.cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrder && <MyOrder />}
    </nav>
  );
};
