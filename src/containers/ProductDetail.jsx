import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

import close_iocn from '@icons/icon_close.png';

export const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={close_iocn} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
